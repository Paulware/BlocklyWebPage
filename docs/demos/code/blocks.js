Blockly.Blocks['html'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HTML Components");

    this.appendStatementInput("HTML")
        .setCheck(null);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['body'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Body Components");

    this.appendStatementInput("BODY")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['head'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Head Components");

    this.appendStatementInput("HEAD")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['script'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Script Components");

    this.appendStatementInput("SCRIPT")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("function")
        .appendField (new Blockly.FieldTextInput ("name"), "NAME");        
        
    this.appendDummyInput()
        .appendField("parameters");

    this.appendStatementInput("PARAMETERS")
        .setCheck(null);
        
    this.appendDummyInput()
        .appendField("code");
        
    this.appendStatementInput("CODE")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['functionparameter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Parameter")
        .appendField (new Blockly.FieldTextInput ("name"), "PARAMETER"); 

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['checkbox'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CheckBox id:")
        .appendField (new Blockly.FieldTextInput ("id"), "ID"); 
        
    this.appendDummyInput()
        .appendField("on click call:")
        .appendField (new Blockly.FieldTextInput ("fun1(this.value)"), "CALL");         

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
