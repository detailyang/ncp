/* description: Parses and executes mathematical expressions. */
{{
    var fs = require('fs');
    var glob = require('glob');
}}
/* lexical grammar */
%lex
dig                         [0-9]
anum                        [a-zA-Z0-9]+
esc                         "\\"
int                         "-"?(?:[0-9]|[1-9][0-9]+)
netmask                     ([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+\/{int})
domain                      ("localhost"|[\.a-zA-Z0-9][\-a-zA-Z0-9]*\.[\.\-a-zA-Z0-9]*[a-zA-Z0-9]?|[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)(?:\:{int})?
literal                     [\/A-Za-z_\-0-9\.\*]+
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
"server" return 'server';
"server_name" return 'server_name';
"user"  return 'user';
"worker_processes" return 'worker_processes';
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
"include" return 'include';

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
{literal}                   return 'LITERAL';

<<EOF>>                     return 'EOF';

/lex

%start ngx

%% /* language grammar */
ngx
    : ngxRootDirectiveList EOF {
        return $$;
    }
    ;

ngxRootDirectiveList
    : ngxRootDirective {
      $$ = [$1];
    }
    | ngxRootDirectiveList ngxRootDirective {
      $$ = $1.concat([$2]);
    }
    ;

ngxRootDirective
    : user LITERAL LITERAL ';' {
        $$ = [$1, `${$2} ${$3}`];
    }
    | user LITERAL ';' {
         $$ = [$1, $2];
    }
    | worker_processes ngxNumber ';' {
         $$ = [$1, $2];
    }
    | error_log LITERAL ';' {
         $$ = [$1, $2];
    }
    | pid LITERAL ';' {
         $$ = [$1, $2];
    }
    | ngxEventsBlock
    | ngxDsoBlock
    | ngxHttpBlock
    | ngxServerBlock
    ;

ngxEventsBlock
    : events '{' ngxEventsDirectiveList '}' {
      $$ = ['events', $3];
    }
    ;

ngxEventsDirectiveList
    : ngxEventsDirective {
      $$ = [$1];
    }
    | ngxEventsDirectiveList ngxEventsDirective {
      $$ = $1.concat([$2]);
    }
    ;

ngxEventsDirective
    : accept_mutex ngxOnOFF ';' {
      $$ = [$1, $2];
    }
    | worker_connections ngxNumber ';' {
      $$ = [$1, $2];
    }
    | use iomethod ';' {
      $$ = [$1, $2];
    }
    ;

ngxDsoBlock
    : dso '{' ngxDsoDirectiveList '}' {
      $$ = ['dso', $3];
    }
    ;

ngxDsoDirectiveList
    : ngxDsoDirective {
      $$ = [$1];
    }
    | ngxDsoDirectiveList ngxDsoDirective {
      $$ = $1.concat([$2]);
    }
    ;

ngxDsoDirective
    : load LITERAL ';' {
      $$ = [$1, $2];
    }
    ;

ngxHttpBlock
    : http '{' ngxHttpDirectiveList '}' {
      $$ = ['http', $3];
    }
    ;

ngxHttpDirectiveList
    : ngxHttpDirective {
      $$ = [$1];
    }
    | ngxHttpDirectiveList ngxHttpDirective {
      $$ = $1.concat([$2]);
    }
    ;

ngxHttpDirective
    : sendfile ngxOnOFF ';' {
      $$ = [$1, $2];
    }
    | tcp_nopush ngxOnOFF ';' {
      $$ = [$1, $2];
    }
    | tcp_nodelay ngxOnOFF ';' {
      $$ = [$1, $2];
    }
    | server_tokens ngxOnOFF ';' {
      $$ = [$1, $2];
    }
    | server_info ngxOnOFF ';' {
      $$ = [$1, $2];
    }
    | server_tag ngxOnOFF ';' {
      $$ = [$1, $2];
    }
    | keepalive_timeout ngxTime ';' {
      $$ = [$1, $2];
    }
    | client_header_timeout ngxTime ';' {
      $$ = [$1, $2];
    }
    | send_timeout ngxTime ';' {
      $$ = [$1, $2];
    }
    | client_max_body_size ngxSize ';' {
      $$ = [$1, $2];
    }
    | client_body_buffer_size ngxSize ';' {
      $$ = [$1, $2];
    }
    | client_body_postpone_sending ngxSize ';' {
      $$ = [$1, $2];
    }
    | proxy_request_buffering ngxOnOFF ';' {
      $$ = [$1, $2];
    }
    | fastcgi_request_buffering ngxOnOFF ';' {
      $$ = [$1, $2];
    }
    | proxy_buffering ngxOnOFF ';' {
      $$ = [$1, $2];
    }
    | proxy_buffer_size ngxSize ';' {
      $$ = [$1, $2];
    }
    | underscores_in_headers ngxOnOFF ';' {
      $$ = [$1, $2];
    }
    | ignore_invalid_headers ngxOnOFF ';' {
      $$ = [$1, $2];
    }
    | server_names_hash_max_size ngxNumber ';' {
      $$ = [$1, $2];
    }
    | server_names_hash_bucket_size ngxNumber ';' {
      $$ = [$1, $2];
    }
    | large_client_header_buffers ngxNumber ngxSize ';' {
      $$ = [$1, `${$2} ${$3}`];
    }
    | proxy_connect_timeout ngxTime ';' {
      $$ = [$1, $2];
    }
    | proxy_read_timeout ngxTime ';' {
      $$ = [$1, $2];
    }
    | ngxInclude {
      $$ = $1;
    }
    | ngxServerBlock {
      $$ = [$1];
    }
    ;

ngxServerBlock
    : server '{' ngxServerDirectiveList '}' {
      $$ = [$1, $3];
    }
    ;

ngxServerDirectiveList
    : ngxServerDirective
    | ngxServerDirectiveList ngxServerDirective
    ;

ngxServerDirective
    : server_name LITERAL ';' {
      $$ = [$1, $2];
    }
    ;

ngxInclude
    : include  LITERAL ';' {
      var files = glob.sync($2, {silent: true, nonull: false});
      var nodes = [];
      for (var i in files) {
        var buffer = fs.readFileSync(files[i]);
        var data = yy.parser.parse(buffer.toString())[0];
        nodes.push(data);
      }
      $$ = nodes;
    }
    ;

ngxNumber
    : NUMBER     -> Number(yytext)
    ;

ngxOnOFF
    : ON {
        $$ = 'on';
    }
    | OFF {
        $$ = 'off';
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
