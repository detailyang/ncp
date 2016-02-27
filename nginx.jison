/* description: Parses and executes mathematical expressions. */
{{
    var ast = {};
}}
/* lexical grammar */
%lex
dig                         [0-9]
anum                        [a-zA-Z0-9]+
esc                         "\\"
int                         "-"?(?:[0-9]|[1-9][0-9]+)
netmask                     ([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+\/{int})
domain                      ("localhost"|[\.a-zA-Z0-9][\-a-zA-Z0-9]*\.[\.\-a-zA-Z0-9]*[a-zA-Z0-9]?|[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)(?:\:{int})?
path                        [\/A-Za-z_\-0-9\.\*]+
%%

\s+                         /* skip whitespace */
\#[^\n]*                    /* skip comment */
"{"                         return '{';
"}"                         return '}';
";"                         return ';';

// keyword
"user"  return 'user';
"worker_processes" return 'worker_porcess';
"worker_cpu_affinity" return 'worker_cpu_affinity';
"error_log" return 'error_log';
"pid" return 'pid';
"events" return 'events';
"accept_mutex" return 'accept_mutex';
'worker_connections' return 'worker_connections';
'use' return 'use';
epoll|poll|select return 'iomethod';

// logical literals
"null"                      return 'NULL';
"any"                       return 'ANY';
"all"                       return 'ALL';
"on"                        return 'ON';
"off"                       return 'OFF';
"true"                      return 'TRUE';
"false"                     return 'FALSE';

//type
[0-9]+(?=\b)                return 'NUMBER';
\"(?:[^\"]|\\\")*\"         return 'STRING';
[a-zA-Z0-9]+                return 'LITERAL';
{path}                      return 'PATH';
<<EOF>>                     return 'EOF';

/lex

%start ngx

%% /* language grammar */
ngx
    : ngxRootDirectiveList EOF {
        return ast;
    }
    ;

ngxRootDirectiveList
    : ngxRootDirective
    | ngxRootDirectiveList ngxRootDirective
    ;

ngxRootDirective
    : user ngxValue ngxValue ';' {
        ast['user'] = $2;
        ast['group'] = $3;
    }
    | user ngxValue ';' {
        ast['user'] = $2;
        ast['group'] = 'nobody';
    }
    | worker_porcess ngxNumber ';' {
        ast['worker_porcess'] = $2;
    }
    | error_log PATH ';' {
        ast['error_log'] = $2;
    }
    | pid PATH ';' {
        ast['error_log'] = $2;
    }
    | ngxEventsBlock
    ;

ngxEventsBlock
    : events '{' ngxEventsDirectiveList '}' {
        $$ = $3;
    }
    ;

ngxEventsDirectiveList
    : ngxEventsDirective
    | ngxEventsDirectiveList ngxEventsDirective
    ;

ngxEventsDirective
    : accept_mutex ngxOnOFF ';' {
        if (!ast['events']) {
            ast['events'] = {};
        }
        ast['events']['accept_mutex'] = $2;
    }
    | worker_connections ngxNumber ';' {
        if (!ast['events']) {
            ast['events'] = {};
        }
        ast['events']['worker_connections'] = $2;
    }
    | use iomethod ';' {
        if (!ast['events']) {
            ast['events'] = {};
        }
        ast['events']['use'] = $2;
    }
    ;

ngxValue
    : STRING
    | ngxNumber
    | LITERAL
    | PATH
    ;

ngxNumber
    : NUMBER     -> Number(yytext)
    ;

ngxOnOFF
    : ON {
        $$ = 'ON';
    }
    | OFF {
        $$ = 'OFF';
    }
    ;