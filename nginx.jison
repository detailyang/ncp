/* description: Parses and executes mathematical expressions. */
{{
    var ast = {
        'events': {},
        'dso': {},
        'http': {}
    };
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
dso                         [.*]\.so$
time                        \d+[smdy]
size                        \d+[kmg]
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
"worker_connections" return 'worker_connections';
"use" return 'use';
epoll|poll|select return 'iomethod';
"dso" return 'dso';
"load" return 'load';
"http" return 'http';
"sendfile" return 'sendfile';
"tcp_nopush" return 'tcp_nopush';
"tcp_nodelay" return 'tcp_nodelay';
"server_tokens" return 'server_tokens';
"server_info" return 'server_info';
"server_tag" return 'server_tag';
"keepalive_timeout" return 'keepalive_timeout';
"client_header_timeout" return 'client_header_timeout';
"send_timeout" return 'send_timeout';
"client_max_body_size" return 'client_max_body_size';
"client_body_buffer_size" return 'client_body_buffer_size';
"client_body_postpone_sending" return 'client_body_postpone_sending';
"proxy_request_buffering" return 'proxy_request_buffering';
"fastcgi_request_buffering" return 'fastcgi_request_buffering';
"proxy_buffering" return 'proxy_buffering';
"proxy_buffer_size" return 'proxy_buffer_size';
"underscores_in_headers" return 'underscores_in_headers';
"ignore_invalid_headers" return 'ignore_invalid_headers';
"server_names_hash_max_size" return 'server_names_hash_max_size';
"server_names_hash_bucket_size" return 'server_names_hash_bucket_size';
"large_client_header_buffers" return 'large_client_header_buffers';
"proxy_connect_timeout" return 'proxy_connect_timeout';
"proxy_read_timeout" return 'proxy_read_timeout';

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
{time}                      return 'TIME';
{size}                      return 'SIZE';
[a-zA-Z0-9_\.]+             return 'LITERAL';
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
    : user LITERAL LITERAL ';' {
        ast['user'] = $2;
        ast['group'] = $3;
    }
    | user LITERAL ';' {
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
    | ngxDsoBlock
    | ngxHttpBlock
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
        ast['events']['accept_mutex'] = $2;
    }
    | worker_connections ngxNumber ';' {
        ast['events']['worker_connections'] = $2;
    }
    | use iomethod ';' {
        ast['events']['use'] = $2;
    }
    ;

ngxDsoBlock
    : dso '{' ngxDsoDirectiveList '}'
    ;

ngxDsoDirectiveList
    : ngxDsoDirective
    | ngxDsoDirectiveList ngxDsoDirective
    ;

ngxDsoDirective
    : load LITERAL ';' {
        ast['dso'][$2] = true;
    }
    ;

ngxHttpBlock
    : http '{' ngxHttpDirectiveList '}'
    ;

ngxHttpDirectiveList
    : ngxHttpDirective
    | ngxHttpDirectiveList ngxHttpDirective
    ;

ngxHttpDirective
    : sendfile ngxOnOFF ';' {
        ast['http'][$1] = $2;
    }
    | tcp_nopush ngxOnOFF ';' {
        ast['http'][$1] = $2;
    }
    | tcp_nodelay ngxOnOFF ';' {
        ast['http'][$1] = $2;
    }
    | server_tokens ngxOnOFF ';' {
        ast['http'][$1] = $2;
    }
    | server_info ngxOnOFF ';' {
        ast['http'][$1] = $2;
    }
    | server_tag ngxOnOFF ';' {
        ast['http'][$1] = $2;
    }
    | keepalive_timeout ngxTime ';' {
        ast['http'][$1] = $2;
    }
    | client_header_timeout ngxTime ';' {
        ast['http'][$1] = $2;
    }
    | send_timeout ngxTime ';' {
        ast['http'][$1] = $2;
    }
    | client_max_body_size ngxSize ';' {
        ast['http'][$1] = $2;
    }
    | client_body_buffer_size ngxSize ';' {
        ast['http'][$1] = $2;
    }
    | client_body_postpone_sending ngxSize ';' {
        ast['http'][$1] = $2;
    }
    | proxy_request_buffering ngxOnOFF ';' {
        ast['http'][$1] = $2;
    }
    | fastcgi_request_buffering ngxOnOFF ';' {
        ast['http'][$1] = $2;
    }
    | proxy_buffering ngxOnOFF ';' {
        ast['http'][$1] = $2;
    }
    | proxy_buffer_size ngxSize ';' {
        ast['http'][$1] = $2;
    }
    | underscores_in_headers ngxOnOFF ';' {
        ast['http'][$1] = $2;
    }
    | ignore_invalid_headers ngxOnOFF ';' {
        ast['http'][$1] = $2;
    }
    | server_names_hash_max_size ngxNumber ';' {
        ast['http'][$1] = $2;
    }
    | server_names_hash_bucket_size ngxNumber ';' {
        ast['http'][$1] = $2;
    }
    | large_client_header_buffers ngxNumber ngxSize ';' {
        ast['http'][$1] = $2 + ' ' + $3;
    }
    | proxy_connect_timeout ngxTime ';' {
         ast['http'][$1] = $2;
    }
    | proxy_read_timeout ngxTime ';' {
        ast['http'][$1] = $2;
    }
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

ngxTime
    : TIME {
        $$ = $1;
    }
    ;

ngxSize
    : SIZE {
        $$ = $1;
    }
    ;