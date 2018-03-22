/*

 Visual Blocks Language

 Copyright 2014 Google Inc.
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
Blockly.Dart=new Blockly.Generator("Dart");Blockly.Dart.addReservedWords("assert,break,case,catch,class,const,continue,default,do,else,enum,extends,false,final,finally,for,if,in,is,new,null,rethrow,return,super,switch,this,throw,true,try,var,void,while,with,print,identityHashCode,identical,BidirectionalIterator,Comparable,double,Function,int,Invocation,Iterable,Iterator,List,Map,Match,num,Pattern,RegExp,Set,StackTrace,String,StringSink,Type,bool,DateTime,Deprecated,Duration,Expando,Null,Object,RuneIterator,Runes,Stopwatch,StringBuffer,Symbol,Uri,Comparator,AbstractClassInstantiationError,ArgumentError,AssertionError,CastError,ConcurrentModificationError,CyclicInitializationError,Error,Exception,FallThroughError,FormatException,IntegerDivisionByZeroException,NoSuchMethodError,NullThrownError,OutOfMemoryError,RangeError,StackOverflowError,StateError,TypeError,UnimplementedError,UnsupportedError");
Blockly.Dart.ORDER_ATOMIC=0;Blockly.Dart.ORDER_UNARY_POSTFIX=1;Blockly.Dart.ORDER_UNARY_PREFIX=2;Blockly.Dart.ORDER_MULTIPLICATIVE=3;Blockly.Dart.ORDER_ADDITIVE=4;Blockly.Dart.ORDER_SHIFT=5;Blockly.Dart.ORDER_BITWISE_AND=6;Blockly.Dart.ORDER_BITWISE_XOR=7;Blockly.Dart.ORDER_BITWISE_OR=8;Blockly.Dart.ORDER_RELATIONAL=9;Blockly.Dart.ORDER_EQUALITY=10;Blockly.Dart.ORDER_LOGICAL_AND=11;Blockly.Dart.ORDER_LOGICAL_OR=12;Blockly.Dart.ORDER_IF_NULL=13;Blockly.Dart.ORDER_CONDITIONAL=14;
Blockly.Dart.ORDER_CASCADE=15;Blockly.Dart.ORDER_ASSIGNMENT=16;Blockly.Dart.ORDER_NONE=99;
Blockly.Dart.init=function(a){Blockly.Dart.definitions_=Object.create(null);Blockly.Dart.functionNames_=Object.create(null);Blockly.Dart.variableDB_?Blockly.Dart.variableDB_.reset():Blockly.Dart.variableDB_=new Blockly.Names(Blockly.Dart.RESERVED_WORDS_);Blockly.Dart.variableDB_.setVariableMap(a.getVariableMap());for(var e=[],c=a.getAllVariables(),b=0;b<c.length;b++)e[b]=Blockly.Dart.variableDB_.getName(c[b].getId(),Blockly.Variables.NAME_TYPE);a=Blockly.Variables.allDeveloperVariables(a);for(b=0;b<
a.length;b++)e.push(Blockly.Dart.variableDB_.getName(a[b],Blockly.Names.DEVELOPER_VARIABLE_TYPE));e.length&&(Blockly.Dart.definitions_.variables="var "+e.join(", ")+";")};
Blockly.Dart.finish=function(a){a&&(a=Blockly.Dart.prefixLines(a,Blockly.Dart.INDENT));a="main() {\n"+a+"}";var e=[],c=[],b;for(b in Blockly.Dart.definitions_){var d=Blockly.Dart.definitions_[b];d.match(/^import\s/)?e.push(d):c.push(d)}delete Blockly.Dart.definitions_;delete Blockly.Dart.functionNames_;Blockly.Dart.variableDB_.reset();return(e.join("\n")+"\n\n"+c.join("\n\n")).replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a};Blockly.Dart.scrubNakedValue=function(a){return a+";\n"};
Blockly.Dart.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.Dart.scrub_=function(a,e){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var b=a.getCommentText();(b=Blockly.utils.wrap(b,Blockly.Dart.COMMENT_WRAP-3))&&(c=a.getProcedureDef?c+Blockly.Dart.prefixLines(b+"\n","/// "):c+Blockly.Dart.prefixLines(b+"\n","// "));for(var d=0;d<a.inputList.length;d++)a.inputList[d].type==Blockly.INPUT_VALUE&&(b=a.inputList[d].connection.targetBlock())&&(b=Blockly.Dart.allNestedComments(b))&&(c+=Blockly.Dart.prefixLines(b,"// "))}a=a.nextConnection&&
a.nextConnection.targetBlock();a=Blockly.Dart.blockToCode(a);return c+e+a};
Blockly.Dart.getAdjusted=function(a,e,c,b,d){c=c||0;d=d||Blockly.Dart.ORDER_NONE;a.workspace.options.oneBasedIndex&&c--;var g=a.workspace.options.oneBasedIndex?"1":"0";a=c?Blockly.Dart.valueToCode(a,e,Blockly.Dart.ORDER_ADDITIVE)||g:b?Blockly.Dart.valueToCode(a,e,Blockly.Dart.ORDER_UNARY_PREFIX)||g:Blockly.Dart.valueToCode(a,e,d)||g;if(Blockly.isNumber(a))a=parseInt(a,10)+c,b&&(a=-a);else{if(0<c){a=a+" + "+c;var f=Blockly.Dart.ORDER_ADDITIVE}else 0>c&&(a=a+" - "+-c,f=Blockly.Dart.ORDER_ADDITIVE);
b&&(a=c?"-("+a+")":"-"+a,f=Blockly.Dart.ORDER_UNARY_PREFIX);f=Math.floor(f);d=Math.floor(d);f&&d>=f&&(a="("+a+")")}return a};
