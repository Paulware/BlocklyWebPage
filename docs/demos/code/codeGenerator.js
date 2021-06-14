/*
   Overwrites
*/
Blockly.JavaScript['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  return varName + ' = ' + argument0 + ';\n';
};

Blockly.JavaScript.init=function(a){
  var temp =[];
  Blockly.JavaScript.definitions_=Object.create(null);
  Blockly.JavaScript.functionNames_=Object.create(null);
  Blockly.JavaScript.variableDB_?Blockly.JavaScript.variableDB_.reset():Blockly.JavaScript.variableDB_=new Blockly.Names(Blockly.JavaScript.RESERVED_WORDS_);
  Blockly.JavaScript.variableDB_.setVariableMap(a.getVariableMap());
  for(var b=[],c=Blockly.Variables.allDeveloperVariables(a),d=0;d<c.length;d++)b.push(Blockly.JavaScript.variableDB_.getName(c[d],Blockly.Names.DEVELOPER_VARIABLE_TYPE));
  a=Blockly.Variables.allUsedVarModels(a);
  for(d=0;d<a.length;d++)
    temp.push(Blockly.JavaScript.variableDB_.getName(a[d].getId(),Blockly.VARIABLE_CATEGORY_NAME));
  temp.length&&(Blockly.JavaScript.variables="    // Define global variables \n    var "+temp.join(", ")+";");
  
  this.isInitialized=!0
};

Blockly.JavaScript.finish=function(a){
 var b=[],c;
 //for(c in Blockly.JavaScript.definitions_)b.push(Blockly.JavaScript.definitions_[c]);
 //delete Blockly.JavaScript.definitions_;
 delete Blockly.JavaScript.functionNames_;
 Blockly.JavaScript.variableDB_.reset();
 return b.join("\n\n")+"\n\n\n"+a
};

/*
   Utility functions 
*/
function removeLast (line){ 
  line = line.substring (0,line.length-1);
  return line;
}
function removeFirstLast (line){ 
  line = line.substring (1,line.length-1);
  return line;
}


Blockly.JavaScript ['html'] = function (block) {
  var htmlComponents = Blockly.JavaScript.statementToCode (block, 'HTML' );  
  
  var code = 
         '<html>\n' + 
         htmlComponents + '\n' +  
         '</html>\n'
         
  return code;
};

Blockly.JavaScript ['body'] = function (block) {
  var bodyComponents = Blockly.JavaScript.statementToCode (block, 'BODY' );  
  var call = block.getFieldValue ("CALL");
  var onloadCall = '';
  if (call != '') {
     onloadCall = 'onload=\"' + call + ';\"'; 
  } 
  var code = 
         '<body ' + onloadCall + '>\n' + 
         bodyComponents + '\n' +  
         '</body>\n'
         
  return code;
};

function getFunctionDefinitions() { 
 var b=[],c;
 for(c in Blockly.JavaScript.definitions_)b.push(Blockly.JavaScript.definitions_[c]);
 delete Blockly.JavaScript.definitions_;
 return '  // Global Function Definitions\n' + '  ' + b.join("\n\n")+"\n\n\n"; 
} 

Blockly.JavaScript ['head'] = function (block) {
  

  var headComponents = Blockly.JavaScript.statementToCode (block, 'HEAD' );  
  
  var code = 
         '<head>\n' + 
         '  <script>\n' + 
         Blockly.JavaScript.variables + '\n' + 
         '  ' + getFunctionDefinitions() + 
         '  </script>\n' + 
         headComponents + '\n' +  
         '</head>\n'
         
  return code;
};

Blockly.JavaScript ['script'] = function (block) {
  var scriptComponents = Blockly.JavaScript.statementToCode (block, 'SCRIPT' );  
  
  var code = 
         '<script>\n' + 
         scriptComponents + '\n' +  
         '</script>\n'
         
  return code;
};

Blockly.JavaScript ['function'] = function (block) {
  var scriptComponents = Blockly.JavaScript.statementToCode (block, 'CODE' );  
  var name = block.getFieldValue ("NAME");   
  var params = Blockly.JavaScript.statementToCode (block,'PARAMETERS');
  params = removeLast (params);  
  var code = 'function ' + name + '(' + params + ') {\n' + 
               scriptComponents + '\n' +  
             '}\n'         
  return code;
};

Blockly.JavaScript ['functionparameter'] = function (block) {
  var parameter = block.getFieldValue ("PARAMETER"); 
  var code = parameter + ',';         
  return code;
};

Blockly.JavaScript ['checkbox'] = function (block) {
  var id = block.getFieldValue ("ID"); 
  var call = block.getFieldValue ( "CALL");
  var code = '<input type=\"checkbox\" id=\"' + id + '\" onclick=\"' + call + ';\">';         
  return code;
};

Blockly.JavaScript ['slider'] = function (block) {
  var id = block.getFieldValue      ("ID"); 
  var minimum = block.getFieldValue ("MINIMUM"); 
  var maximum = block.getFieldValue ("MAXIMUM"); 
  var width = block.getFieldValue   ("WIDTH"); 
  var call = block.getFieldValue    ("CALL");
  var value = block.getFieldValue   ("VALUE");
  
  var code = '<input style=\"width:' + width + 'px\" type=\"range\" min=\"' + minimum + '\" ' + 
             'max=\"' + maximum + '\" value=\"' + value + '\" class=\"slider\" id=\"' + id + 
             '\" oninput=\"' + call + ';\">\n'          
  return code;
};

Blockly.JavaScript['getelement'] = function(block) {  
  var id = block.getFieldValue ("ID"); 
  var code = 'document.getElementById (' + id + ')';
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.JavaScript['getattribute'] = function(block) {  
  var attribute = block.getFieldValue ("ATTRIBUTE"); 
  var obj = Blockly.JavaScript.valueToCode(block, "OBJ", Blockly.Python.ORDER_ATOMIC)
  var code = obj + '.' + attribute;
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.JavaScript ['textinput'] = function (block) {
  var id = block.getFieldValue      ("ID"); 
  var call = block.getFieldValue    ("CALL");
  var value = block.getFieldValue   ("VALUE");
  var width = block.getFieldValue   ("WIDTH");
  
  var code = '<input style=\"width:' + width + 'px\" value=\"' + value + '\" id=\"' + id + 
             '\" onchange=\"' + call + ';\">\n'          
  return code;
};

Blockly.JavaScript ['div'] = function (block) {
  var components = Blockly.JavaScript.statementToCode (block, 'COMPONENTS' );  
  var border = block.getFieldValue ("BORDER");
  var definition = "<div>";
  
  if (border == "TRUE") {
      definition = "<div style='border:thick solid #0000FF'>";
  } 
    
  var code = 
         definition + '\n' + 
         components + '\n' +  
         '</div>\n'
         
  return code;
};

Blockly.JavaScript ['htmltext'] = function (block) {
  var txt = block.getFieldValue ("TEXT");
  var texttype = block.getFieldValue ("TEXTTYPE");
  var size = block.getFieldValue ("SIZE");
  var code;
  
  if (texttype == 'normal' ) {    
     code = txt;
  } else {
     code = '<h' + size + '>' + txt + '</h' + size + '>\n';
  }
         
  return code;
};

Blockly.JavaScript ['linebreak'] = function (block) {
  var linebreak = block.getFieldValue ("LINEBREAK");
  var code = linebreak;         
  return code;
};

Blockly.JavaScript ['button'] = function (block) { 
  var call = block.getFieldValue    ("CALL");
  var value = block.getFieldValue   ("VALUE");
  
  var code = '<input type=\"button\"  value=\"' + value +  
             '\" onclick=\"' + call + ';\">\n'          
  return code;
};

Blockly.JavaScript ['option'] = function (block) { 
  var txt      = block.getFieldValue ("TEXT");
  var value    = block.getFieldValue ("VALUE");
  var selected = block.getFieldValue ("SELECTED");
  var sel = ''; 
  if (selected == "TRUE") {
     sel = 'selected';
  }     
  var code = '<option value=\"' + value + '\" ' + sel + '>' + txt + '</option>\n'          
  return code;
};

Blockly.JavaScript ['select'] = function (block) {
  var options = Blockly.JavaScript.statementToCode (block, 'OPTIONS' );  
  var call = block.getFieldValue ("CALL");
  var id   = block.getFieldValue ("ID");  
  var onchange = '';
  if (call != '') {
      onchange = 'onchange=\"' + call + ';\"';
  }
  
  var code = '<select id=\"' + id + '\" ' + onchange + '>\n' + 
             options + '\n' +
             '</select>\n'
         
  return code;
};


Blockly.JavaScript ['functionreturn'] = function (block) {
  var variable = block.getFieldValue ("VAR");   
  var code = 'return ' + variable + ';\n'         
  return code;
};

Blockly.JavaScript ['scriptinclude'] = function (block) {
  var include = block.getFieldValue ("INCLUDE");  
  var code = '<script src=\"' + include + '.js\"></script>\n'        
  return code;
};

Blockly.JavaScript ['raw'] = function (block) {
  var raw = block.getFieldValue ("RAW");  
  var code = raw + '\n'        
  return code;
};

Blockly.JavaScript ['expression'] = function (block) {
  var expression = block.getFieldValue ("EXPRESSION");  
  var code = expression;        
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.JavaScript ['setattribute'] = function (block) {
  var obj       = block.getFieldValue ("OBJECT");  
  var attribute = block.getFieldValue ("ATTRIBUTE");  
  var value     = block.getFieldValue ("VALUE");  
  var code = obj + '.' + attribute + '=' + value + ';\n'        
  return code;
};

Blockly.JavaScript ['floatint'] = function (block) {
  var obj = Blockly.JavaScript.valueToCode(block, "OBJ", Blockly.Python.ORDER_ATOMIC)
  var floatint  = block.getFieldValue ("FLOATINT");  
  var fl = '';
  if (floatint == 'parseFloat') {
      fl = 'parseFloat (' + obj + ')';
  } else if (floatint == 'parseInt' ) {
      fl = 'parseInt (' + obj + ')';
  } else if (floatint == 'toString') {
      fl = obj + '.toString();' 
  } 
  var code = fl;       
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.JavaScript ['callfunction'] = function (block) {
  var name       = block.getFieldValue ("NAME");  
  var parameters = block.getFieldValue ("PARAMETERS");  
  var code = name + '(' + parameters + ');\n'        
  return code;
};

Blockly.JavaScript ['callfunctionreturn'] = function (block) {
  var name       = block.getFieldValue ("NAME");  
  var parameters = block.getFieldValue ("PARAMETERS");  
  var code = name + '(' + parameters + ')'        
  return [code, Blockly.Python.ORDER_NONE]; 
};

