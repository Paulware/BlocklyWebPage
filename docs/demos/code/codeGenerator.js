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
  
  var code = 
         '<body>\n' + 
         bodyComponents + '\n' +  
         '</body>\n'
         
  return code;
};

Blockly.JavaScript ['head'] = function (block) {
  var headComponents = Blockly.JavaScript.statementToCode (block, 'HEAD' );  
  
  var code = 
         '<head>\n' + 
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
  var code = removeFirstLast(parameter) + ',';         
  return code;
};

Blockly.JavaScript ['checkbox'] = function (block) {
  var id = block.getFieldValue ("ID"); 
  var call = block.getFieldValue ( "CALL");
  var code = '<input type=\"checkbox\" id=\"' + id + '\" onclick=\"' + call + ';\">';         
  return code;
};


