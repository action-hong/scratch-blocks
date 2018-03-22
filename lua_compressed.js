/*

 Visual Blocks Language

 Copyright 2016 Google Inc.
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
Blockly.Lua=new Blockly.Generator("Lua");Blockly.Lua.addReservedWords("_,__inext,assert,bit,colors,colours,coroutine,disk,dofile,error,fs,fetfenv,getmetatable,gps,help,io,ipairs,keys,loadfile,loadstring,math,native,next,os,paintutils,pairs,parallel,pcall,peripheral,print,printError,rawequal,rawget,rawset,read,rednet,redstone,rs,select,setfenv,setmetatable,sleep,string,table,term,textutils,tonumber,tostring,turtle,type,unpack,vector,write,xpcall,_VERSION,__indext,HTTP,and,break,do,else,elseif,end,false,for,function,if,in,local,nil,not,or,repeat,return,then,true,until,while,add,sub,mul,div,mod,pow,unm,concat,len,eq,lt,le,index,newindex,call,assert,collectgarbage,dofile,error,_G,getmetatable,inpairs,load,loadfile,next,pairs,pcall,print,rawequal,rawget,rawlen,rawset,select,setmetatable,tonumber,tostring,type,_VERSION,xpcall,require,package,string,table,math,bit32,io,file,os,debug");
Blockly.Lua.ORDER_ATOMIC=0;Blockly.Lua.ORDER_HIGH=1;Blockly.Lua.ORDER_EXPONENTIATION=2;Blockly.Lua.ORDER_UNARY=3;Blockly.Lua.ORDER_MULTIPLICATIVE=4;Blockly.Lua.ORDER_ADDITIVE=5;Blockly.Lua.ORDER_CONCATENATION=6;Blockly.Lua.ORDER_RELATIONAL=7;Blockly.Lua.ORDER_AND=8;Blockly.Lua.ORDER_OR=9;Blockly.Lua.ORDER_NONE=99;
Blockly.Lua.init=function(a){Blockly.Lua.definitions_=Object.create(null);Blockly.Lua.functionNames_=Object.create(null);Blockly.Lua.variableDB_?Blockly.Lua.variableDB_.reset():Blockly.Lua.variableDB_=new Blockly.Names(Blockly.Lua.RESERVED_WORDS_);Blockly.Lua.variableDB_.setVariableMap(a.getVariableMap())};
Blockly.Lua.finish=function(a){var d=[],c;for(c in Blockly.Lua.definitions_)d.push(Blockly.Lua.definitions_[c]);delete Blockly.Lua.definitions_;delete Blockly.Lua.functionNames_;Blockly.Lua.variableDB_.reset();return d.join("\n\n")+"\n\n\n"+a};Blockly.Lua.scrubNakedValue=function(a){return"local _ = "+a+"\n"};Blockly.Lua.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.Lua.scrub_=function(a,d){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var b=a.getCommentText();(b=Blockly.utils.wrap(b,Blockly.Lua.COMMENT_WRAP-3))&&(c+=Blockly.Lua.prefixLines(b,"-- ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(b=a.inputList[e].connection.targetBlock())&&(b=Blockly.Lua.allNestedComments(b))&&(c+=Blockly.Lua.prefixLines(b,"-- "))}a=a.nextConnection&&a.nextConnection.targetBlock();a=Blockly.Lua.blockToCode(a);
return c+d+a};
