/*

 Visual Blocks Language

 Copyright 2015 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Blockly.PHP=new Blockly.Generator("PHP");Blockly.PHP.addReservedWords("__halt_compiler,abstract,and,array,as,break,callable,case,catch,class,clone,const,continue,declare,default,die,do,echo,else,elseif,empty,enddeclare,endfor,endforeach,endif,endswitch,endwhile,eval,exit,extends,final,for,foreach,function,global,goto,if,implements,include,include_once,instanceof,insteadof,interface,isset,list,namespace,new,or,print,private,protected,public,require,require_once,return,static,switch,throw,trait,try,unset,use,var,while,xor,PHP_VERSION,PHP_MAJOR_VERSION,PHP_MINOR_VERSION,PHP_RELEASE_VERSION,PHP_VERSION_ID,PHP_EXTRA_VERSION,PHP_ZTS,PHP_DEBUG,PHP_MAXPATHLEN,PHP_OS,PHP_SAPI,PHP_EOL,PHP_INT_MAX,PHP_INT_SIZE,DEFAULT_INCLUDE_PATH,PEAR_INSTALL_DIR,PEAR_EXTENSION_DIR,PHP_EXTENSION_DIR,PHP_PREFIX,PHP_BINDIR,PHP_BINARY,PHP_MANDIR,PHP_LIBDIR,PHP_DATADIR,PHP_SYSCONFDIR,PHP_LOCALSTATEDIR,PHP_CONFIG_FILE_PATH,PHP_CONFIG_FILE_SCAN_DIR,PHP_SHLIB_SUFFIX,E_ERROR,E_WARNING,E_PARSE,E_NOTICE,E_CORE_ERROR,E_CORE_WARNING,E_COMPILE_ERROR,E_COMPILE_WARNING,E_USER_ERROR,E_USER_WARNING,E_USER_NOTICE,E_DEPRECATED,E_USER_DEPRECATED,E_ALL,E_STRICT,__COMPILER_HALT_OFFSET__,TRUE,FALSE,NULL,__CLASS__,__DIR__,__FILE__,__FUNCTION__,__LINE__,__METHOD__,__NAMESPACE__,__TRAIT__");
Blockly.PHP.ORDER_ATOMIC=0;Blockly.PHP.ORDER_CLONE=1;Blockly.PHP.ORDER_NEW=1;Blockly.PHP.ORDER_MEMBER=2.1;Blockly.PHP.ORDER_FUNCTION_CALL=2.2;Blockly.PHP.ORDER_POWER=3;Blockly.PHP.ORDER_INCREMENT=4;Blockly.PHP.ORDER_DECREMENT=4;Blockly.PHP.ORDER_BITWISE_NOT=4;Blockly.PHP.ORDER_CAST=4;Blockly.PHP.ORDER_SUPPRESS_ERROR=4;Blockly.PHP.ORDER_INSTANCEOF=5;Blockly.PHP.ORDER_LOGICAL_NOT=6;Blockly.PHP.ORDER_UNARY_PLUS=7.1;Blockly.PHP.ORDER_UNARY_NEGATION=7.2;Blockly.PHP.ORDER_MULTIPLICATION=8.1;
Blockly.PHP.ORDER_DIVISION=8.2;Blockly.PHP.ORDER_MODULUS=8.3;Blockly.PHP.ORDER_ADDITION=9.1;Blockly.PHP.ORDER_SUBTRACTION=9.2;Blockly.PHP.ORDER_STRING_CONCAT=9.3;Blockly.PHP.ORDER_BITWISE_SHIFT=10;Blockly.PHP.ORDER_RELATIONAL=11;Blockly.PHP.ORDER_EQUALITY=12;Blockly.PHP.ORDER_REFERENCE=13;Blockly.PHP.ORDER_BITWISE_AND=13;Blockly.PHP.ORDER_BITWISE_XOR=14;Blockly.PHP.ORDER_BITWISE_OR=15;Blockly.PHP.ORDER_LOGICAL_AND=16;Blockly.PHP.ORDER_LOGICAL_OR=17;Blockly.PHP.ORDER_IF_NULL=18;
Blockly.PHP.ORDER_CONDITIONAL=19;Blockly.PHP.ORDER_ASSIGNMENT=20;Blockly.PHP.ORDER_LOGICAL_AND_WEAK=21;Blockly.PHP.ORDER_LOGICAL_XOR=22;Blockly.PHP.ORDER_LOGICAL_OR_WEAK=23;Blockly.PHP.ORDER_COMMA=24;Blockly.PHP.ORDER_NONE=99;
Blockly.PHP.ORDER_OVERRIDES=[[Blockly.PHP.ORDER_MEMBER,Blockly.PHP.ORDER_FUNCTION_CALL],[Blockly.PHP.ORDER_MEMBER,Blockly.PHP.ORDER_MEMBER],[Blockly.PHP.ORDER_LOGICAL_NOT,Blockly.PHP.ORDER_LOGICAL_NOT],[Blockly.PHP.ORDER_MULTIPLICATION,Blockly.PHP.ORDER_MULTIPLICATION],[Blockly.PHP.ORDER_ADDITION,Blockly.PHP.ORDER_ADDITION],[Blockly.PHP.ORDER_LOGICAL_AND,Blockly.PHP.ORDER_LOGICAL_AND],[Blockly.PHP.ORDER_LOGICAL_OR,Blockly.PHP.ORDER_LOGICAL_OR]];
Blockly.PHP.init=function(a){Blockly.PHP.definitions_=Object.create(null);Blockly.PHP.functionNames_=Object.create(null);Blockly.PHP.variableDB_?Blockly.PHP.variableDB_.reset():Blockly.PHP.variableDB_=new Blockly.Names(Blockly.PHP.RESERVED_WORDS_,"$");Blockly.PHP.variableDB_.setVariableMap(a.getVariableMap());for(var e=[],b=a.getAllVariables(),c=0,d;d=b[c];c++)e[c]=Blockly.PHP.variableDB_.getName(d.getId(),Blockly.Variables.NAME_TYPE)+";";a=Blockly.Variables.allDeveloperVariables(a);for(c=0;c<a.length;c++)e.push(Blockly.PHP.variableDB_.getName(a[c],
Blockly.Names.DEVELOPER_VARIABLE_TYPE)+";");Blockly.PHP.definitions_.variables=e.join("\n")};Blockly.PHP.finish=function(a){var e=[],b;for(b in Blockly.PHP.definitions_)e.push(Blockly.PHP.definitions_[b]);delete Blockly.PHP.definitions_;delete Blockly.PHP.functionNames_;Blockly.PHP.variableDB_.reset();return e.join("\n\n")+"\n\n\n"+a};Blockly.PHP.scrubNakedValue=function(a){return a+";\n"};
Blockly.PHP.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.PHP.scrub_=function(a,e){var b="";if(!a.outputConnection||!a.outputConnection.targetConnection){var c=a.getCommentText();(c=Blockly.utils.wrap(c,Blockly.PHP.COMMENT_WRAP-3))&&(b+=Blockly.PHP.prefixLines(c,"// ")+"\n");for(var d=0;d<a.inputList.length;d++)a.inputList[d].type==Blockly.INPUT_VALUE&&(c=a.inputList[d].connection.targetBlock())&&(c=Blockly.PHP.allNestedComments(c))&&(b+=Blockly.PHP.prefixLines(c,"// "))}a=a.nextConnection&&a.nextConnection.targetBlock();a=Blockly.PHP.blockToCode(a);
return b+e+a};
Blockly.PHP.getAdjusted=function(a,e,b,c,d){b=b||0;d=d||Blockly.PHP.ORDER_NONE;a.workspace.options.oneBasedIndex&&b--;var g=a.workspace.options.oneBasedIndex?"1":"0";a=0<b?Blockly.PHP.valueToCode(a,e,Blockly.PHP.ORDER_ADDITION)||g:0>b?Blockly.PHP.valueToCode(a,e,Blockly.PHP.ORDER_SUBTRACTION)||g:c?Blockly.PHP.valueToCode(a,e,Blockly.PHP.ORDER_UNARY_NEGATION)||g:Blockly.PHP.valueToCode(a,e,d)||g;if(Blockly.isNumber(a))a=parseFloat(a)+b,c&&(a=-a);else{if(0<b){a=a+" + "+b;var f=Blockly.PHP.ORDER_ADDITION}else 0>b&&
(a=a+" - "+-b,f=Blockly.PHP.ORDER_SUBTRACTION);c&&(a=b?"-("+a+")":"-"+a,f=Blockly.PHP.ORDER_UNARY_NEGATION);f=Math.floor(f);d=Math.floor(d);f&&d>=f&&(a="("+a+")")}return a};
