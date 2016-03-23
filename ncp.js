/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var ncp = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,5],$V2=[1,6],$V3=[1,7],$V4=[1,12],$V5=[1,13],$V6=[1,14],$V7=[1,15],$V8=[5,7,11,13,14,19,29,33,62],$V9=[1,21],$Va=[1,35],$Vb=[1,36],$Vc=[1,37],$Vd=[1,40],$Ve=[1,43],$Vf=[1,44],$Vg=[1,45],$Vh=[1,46],$Vi=[1,47],$Vj=[1,48],$Vk=[1,49],$Vl=[1,50],$Vm=[1,51],$Vn=[1,52],$Vo=[1,53],$Vp=[1,54],$Vq=[1,55],$Vr=[1,56],$Vs=[1,57],$Vt=[1,58],$Vu=[1,59],$Vv=[1,60],$Vw=[1,61],$Vx=[1,62],$Vy=[1,63],$Vz=[1,64],$VA=[1,65],$VB=[1,68],$VC=[1,71],$VD=[1,73],$VE=[22,24,26,27],$VF=[1,78],$VG=[1,79],$VH=[22,32],$VI=[22,36,37,38,39,40,41,42,44,45,46,48,49,50,51,52,53,54,55,56,57,58,59,60,62,70],$VJ=[1,94],$VK=[1,98],$VL=[22,65,67],$VM=[1,150],$VN=[8,22];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"ngx":3,"ngxRootDirectiveList":4,"EOF":5,"ngxRootDirective":6,"user":7,"root":8,"LITERAL":9,";":10,"worker_processes":11,"ngxNumber":12,"error_log":13,"pid":14,"ngxEventsBlock":15,"ngxDsoBlock":16,"ngxHttpBlock":17,"ngxServerBlock":18,"events":19,"{":20,"ngxEventsDirectiveList":21,"}":22,"ngxEventsDirective":23,"accept_mutex":24,"ngxOnOFF":25,"worker_connections":26,"use":27,"iomethod":28,"dso":29,"ngxDsoDirectiveList":30,"ngxDsoDirective":31,"load":32,"http":33,"ngxHttpDirectiveList":34,"ngxHttpDirective":35,"sendfile":36,"tcp_nopush":37,"tcp_nodelay":38,"server_tokens":39,"server_info":40,"server_tag":41,"keepalive_timeout":42,"ngxTime":43,"client_header_timeout":44,"send_timeout":45,"client_max_body_size":46,"ngxSize":47,"client_body_buffer_size":48,"client_body_postpone_sending":49,"proxy_request_buffering":50,"fastcgi_request_buffering":51,"proxy_buffering":52,"proxy_buffer_size":53,"underscores_in_headers":54,"ignore_invalid_headers":55,"server_names_hash_max_size":56,"server_names_hash_bucket_size":57,"large_client_header_buffers":58,"proxy_connect_timeout":59,"proxy_read_timeout":60,"ngxInclude":61,"server":62,"ngxServerDirectiveList":63,"ngxServerDirective":64,"server_name":65,"ngxLocationBlock":66,"location":67,"ngxLocationDirectiveList":68,"ngxLocationDirective":69,"include":70,"NUMBER":71,"ON":72,"OFF":73,"TIME":74,"SIZE":75,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"user",8:"root",9:"LITERAL",10:";",11:"worker_processes",13:"error_log",14:"pid",19:"events",20:"{",22:"}",24:"accept_mutex",26:"worker_connections",27:"use",28:"iomethod",29:"dso",32:"load",33:"http",36:"sendfile",37:"tcp_nopush",38:"tcp_nodelay",39:"server_tokens",40:"server_info",41:"server_tag",42:"keepalive_timeout",44:"client_header_timeout",45:"send_timeout",46:"client_max_body_size",48:"client_body_buffer_size",49:"client_body_postpone_sending",50:"proxy_request_buffering",51:"fastcgi_request_buffering",52:"proxy_buffering",53:"proxy_buffer_size",54:"underscores_in_headers",55:"ignore_invalid_headers",56:"server_names_hash_max_size",57:"server_names_hash_bucket_size",58:"large_client_header_buffers",59:"proxy_connect_timeout",60:"proxy_read_timeout",62:"server",65:"server_name",67:"location",70:"include",71:"NUMBER",72:"ON",73:"OFF",74:"TIME",75:"SIZE"},
productions_: [0,[3,2],[4,1],[4,2],[6,4],[6,3],[6,3],[6,3],[6,3],[6,1],[6,1],[6,1],[6,1],[15,4],[21,1],[21,2],[23,3],[23,3],[23,3],[16,4],[30,1],[30,2],[31,3],[17,4],[34,1],[34,2],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,4],[35,3],[35,3],[35,1],[35,1],[18,4],[63,1],[63,2],[64,3],[64,1],[66,5],[68,1],[68,2],[69,3],[61,3],[12,1],[25,1],[25,1],[43,1],[47,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        return this.$;
    
break;
case 2: case 14: case 20: case 24: case 50: case 57:

      this.$ = [$$[$0]];
    
break;
case 3: case 15: case 21: case 25: case 58:

      this.$ = $$[$0-1].concat([$$[$0]]);
    
break;
case 4:

        this.$ = [$$[$0-3], `${$$[$0-2]} ${$$[$0-1]}`];
    
break;
case 5: case 6: case 7: case 8:

         this.$ = [$$[$0-2], $$[$0-1]];
    
break;
case 13:

      this.$ = ['events', $$[$0-1]];
    
break;
case 16: case 17: case 18: case 22: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44: case 45: case 47: case 48: case 59:

      this.$ = [$$[$0-2], $$[$0-1]];
    
break;
case 19:

      this.$ = ['dso', $$[$0-1]];
    
break;
case 23:

      this.$ = ['http', $$[$0-1]];
    
break;
case 46:

      this.$ = [$$[$0-3], `${$$[$0-2]} ${$$[$0-1]}`];
    
break;
case 49:

      this.$ = $$[$0];
    
break;
case 51:

      this.$ = [$$[$0-3], $$[$0-1]];
    
break;
case 52: case 55:

        this.$ = [$$[$0]];
      
break;
case 53:

        this.$ = $$[$0-1].concat($$[$0]);
      
break;
case 54:

        this.$ = [$$[$0-2], $$[$0-1]];
      
break;
case 56:

      this.$  = [$$[$0-4], $$[$0-1]];
    
break;
case 60:

      var files = glob.sync($$[$0-1], {silent: true, nonull: false});
      var nodes = [];
      for (var i in files) {
        var buffer = fs.readFileSync(files[i]);
        var data = yy.parser.parse(buffer.toString())[0];
        nodes.push(data);
      }
      this.$ = nodes;
    
break;
case 61:
this.$ = Number(yytext);
break;
case 62:

        this.$ = 'on';
    
break;
case 63:

        this.$ = 'off';
    
break;
case 64: case 65:

        this.$ = $$[$0];
    
break;
}
},
table: [{3:1,4:2,6:3,7:$V0,11:$V1,13:$V2,14:$V3,15:8,16:9,17:10,18:11,19:$V4,29:$V5,33:$V6,62:$V7},{1:[3]},{5:[1,16],6:17,7:$V0,11:$V1,13:$V2,14:$V3,15:8,16:9,17:10,18:11,19:$V4,29:$V5,33:$V6,62:$V7},o($V8,[2,2]),{8:[1,18],9:[1,19]},{12:20,71:$V9},{9:[1,22]},{9:[1,23]},o($V8,[2,9]),o($V8,[2,10]),o($V8,[2,11]),o($V8,[2,12]),{20:[1,24]},{20:[1,25]},{20:[1,26]},{20:[1,27]},{1:[2,1]},o($V8,[2,3]),{9:[1,28]},{10:[1,29]},{10:[1,30]},o([10,75],[2,61]),{10:[1,31]},{10:[1,32]},{21:33,23:34,24:$Va,26:$Vb,27:$Vc},{30:38,31:39,32:$Vd},{18:67,34:41,35:42,36:$Ve,37:$Vf,38:$Vg,39:$Vh,40:$Vi,41:$Vj,42:$Vk,44:$Vl,45:$Vm,46:$Vn,48:$Vo,49:$Vp,50:$Vq,51:$Vr,52:$Vs,53:$Vt,54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz,60:$VA,61:66,62:$V7,70:$VB},{63:69,64:70,65:$VC,66:72,67:$VD},{10:[1,74]},o($V8,[2,5]),o($V8,[2,6]),o($V8,[2,7]),o($V8,[2,8]),{22:[1,75],23:76,24:$Va,26:$Vb,27:$Vc},o($VE,[2,14]),{25:77,72:$VF,73:$VG},{12:80,71:$V9},{28:[1,81]},{22:[1,82],31:83,32:$Vd},o($VH,[2,20]),{9:[1,84]},{18:67,22:[1,85],35:86,36:$Ve,37:$Vf,38:$Vg,39:$Vh,40:$Vi,41:$Vj,42:$Vk,44:$Vl,45:$Vm,46:$Vn,48:$Vo,49:$Vp,50:$Vq,51:$Vr,52:$Vs,53:$Vt,54:$Vu,55:$Vv,56:$Vw,57:$Vx,58:$Vy,59:$Vz,60:$VA,61:66,62:$V7,70:$VB},o($VI,[2,24]),{25:87,72:$VF,73:$VG},{25:88,72:$VF,73:$VG},{25:89,72:$VF,73:$VG},{25:90,72:$VF,73:$VG},{25:91,72:$VF,73:$VG},{25:92,72:$VF,73:$VG},{43:93,74:$VJ},{43:95,74:$VJ},{43:96,74:$VJ},{47:97,75:$VK},{47:99,75:$VK},{47:100,75:$VK},{25:101,72:$VF,73:$VG},{25:102,72:$VF,73:$VG},{25:103,72:$VF,73:$VG},{47:104,75:$VK},{25:105,72:$VF,73:$VG},{25:106,72:$VF,73:$VG},{12:107,71:$V9},{12:108,71:$V9},{12:109,71:$V9},{43:110,74:$VJ},{43:111,74:$VJ},o($VI,[2,49]),o($VI,[2,50]),{9:[1,112]},{22:[1,113],64:114,65:$VC,66:72,67:$VD},o($VL,[2,52]),{9:[1,115]},o($VL,[2,55]),{9:[1,116]},o($V8,[2,4]),o($V8,[2,13]),o($VE,[2,15]),{10:[1,117]},{10:[2,62]},{10:[2,63]},{10:[1,118]},{10:[1,119]},o($V8,[2,19]),o($VH,[2,21]),{10:[1,120]},o($V8,[2,23]),o($VI,[2,25]),{10:[1,121]},{10:[1,122]},{10:[1,123]},{10:[1,124]},{10:[1,125]},{10:[1,126]},{10:[1,127]},{10:[2,64]},{10:[1,128]},{10:[1,129]},{10:[1,130]},{10:[2,65]},{10:[1,131]},{10:[1,132]},{10:[1,133]},{10:[1,134]},{10:[1,135]},{10:[1,136]},{10:[1,137]},{10:[1,138]},{10:[1,139]},{10:[1,140]},{47:141,75:$VK},{10:[1,142]},{10:[1,143]},{10:[1,144]},o([5,7,11,13,14,19,22,29,33,36,37,38,39,40,41,42,44,45,46,48,49,50,51,52,53,54,55,56,57,58,59,60,62,70],[2,51]),o($VL,[2,53]),{10:[1,145]},{20:[1,146]},o($VE,[2,16]),o($VE,[2,17]),o($VE,[2,18]),o($VH,[2,22]),o($VI,[2,26]),o($VI,[2,27]),o($VI,[2,28]),o($VI,[2,29]),o($VI,[2,30]),o($VI,[2,31]),o($VI,[2,32]),o($VI,[2,33]),o($VI,[2,34]),o($VI,[2,35]),o($VI,[2,36]),o($VI,[2,37]),o($VI,[2,38]),o($VI,[2,39]),o($VI,[2,40]),o($VI,[2,41]),o($VI,[2,42]),o($VI,[2,43]),o($VI,[2,44]),o($VI,[2,45]),{10:[1,147]},o($VI,[2,47]),o($VI,[2,48]),o($VI,[2,60]),o($VL,[2,54]),{8:$VM,68:148,69:149},o($VI,[2,46]),{8:$VM,22:[1,151],69:152},o($VN,[2,57]),{9:[1,153]},o($VL,[2,56]),o($VN,[2,58]),{10:[1,154]},o($VN,[2,59])],
defaultActions: {16:[2,1],78:[2,62],79:[2,63],94:[2,64],98:[2,65]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    var fs = require('fs');
    var glob = require('glob');
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:/* skip comment */
break;
case 2:return 20;
break;
case 3:return 22;
break;
case 4:return 10;
break;
case 5:return 62;
break;
case 6:return 8;
break;
case 7:return 65;
break;
case 8:return 7;
break;
case 9:return 11;
break;
case 10:return 'worker_cpu_affinity';
break;
case 11:return 13;
break;
case 12:return 14;
break;
case 13:return 19;
break;
case 14:return 24;
break;
case 15:return 26;
break;
case 16:return 27;
break;
case 17:return 28;
break;
case 18:return 29;
break;
case 19:return 32;
break;
case 20:return 67;
break;
case 21:return 33;
break;
case 22:return 36;
break;
case 23:return 37;
break;
case 24:return 38;
break;
case 25:return 39;
break;
case 26:return 40;
break;
case 27:return 41;
break;
case 28:return 42;
break;
case 29:return 44;
break;
case 30:return 45;
break;
case 31:return 46;
break;
case 32:return 48;
break;
case 33:return 49;
break;
case 34:return 50;
break;
case 35:return 51;
break;
case 36:return 52;
break;
case 37:return 53;
break;
case 38:return 54;
break;
case 39:return 55;
break;
case 40:return 56;
break;
case 41:return 57;
break;
case 42:return 58;
break;
case 43:return 59;
break;
case 44:return 60;
break;
case 45:return 70;
break;
case 46:return 'NULL';
break;
case 47:return 'ANY';
break;
case 48:return 'ALL';
break;
case 49:return 72;
break;
case 50:return 73;
break;
case 51:return 'TRUE';
break;
case 52:return 'FALSE';
break;
case 53:return 71;
break;
case 54:return 'STRING';
break;
case 55:return 74;
break;
case 56:return 75;
break;
case 57:return 9;
break;
case 58:return 5;
break;
}
},
rules: [/^(?:\s+)/,/^(?:#[^\n]*)/,/^(?:\{)/,/^(?:\})/,/^(?:;)/,/^(?:server\b)/,/^(?:root\b)/,/^(?:server_name\b)/,/^(?:user\b)/,/^(?:worker_processes\b)/,/^(?:worker_cpu_affinity\b)/,/^(?:error_log\b)/,/^(?:pid\b)/,/^(?:events\b)/,/^(?:accept_mutex\b)/,/^(?:worker_connections\b)/,/^(?:use\b)/,/^(?:epoll|poll|select\b)/,/^(?:dso\b)/,/^(?:load\b)/,/^(?:location\b)/,/^(?:http\b)/,/^(?:sendfile\b)/,/^(?:tcp_nopush\b)/,/^(?:tcp_nodelay\b)/,/^(?:server_tokens\b)/,/^(?:server_info\b)/,/^(?:server_tag\b)/,/^(?:keepalive_timeout\b)/,/^(?:client_header_timeout\b)/,/^(?:send_timeout\b)/,/^(?:client_max_body_size\b)/,/^(?:client_body_buffer_size\b)/,/^(?:client_body_postpone_sending\b)/,/^(?:proxy_request_buffering\b)/,/^(?:fastcgi_request_buffering\b)/,/^(?:proxy_buffering\b)/,/^(?:proxy_buffer_size\b)/,/^(?:underscores_in_headers\b)/,/^(?:ignore_invalid_headers\b)/,/^(?:server_names_hash_max_size\b)/,/^(?:server_names_hash_bucket_size\b)/,/^(?:large_client_header_buffers\b)/,/^(?:proxy_connect_timeout\b)/,/^(?:proxy_read_timeout\b)/,/^(?:include\b)/,/^(?:null\b)/,/^(?:any\b)/,/^(?:all\b)/,/^(?:on\b)/,/^(?:off\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:[0-9]+(?=\b))/,/^(?:"(?:[^\"]|\\")*")/,/^(?:(\d+[smdy]))/,/^(?:(\d+[kmg]))/,/^(?:([\/A-Za-z_\-0-9\.\*]+))/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = ncp;
exports.Parser = ncp.Parser;
exports.parse = function () { return ncp.parse.apply(ncp, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}