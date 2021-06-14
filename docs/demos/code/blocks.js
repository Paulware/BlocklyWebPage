/*
   Overwrite block definitions
   Note: See docs/blocks_compressed.js for changed Blockly.Blocks.procedures_defnoreturn
*/
Blockly.Blocks.procedures_defreturn={
 init:function(){
  var a=Blockly.Procedures.findLegalName("",this);
  a=new Blockly.FieldTextInput(a,Blockly.Procedures.rename);
  a.setSpellcheck(!1);
  this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE).appendField(a,"NAME").appendField("","PARAMS");
  this.appendValueInput("RETURN").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
  this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
  (this.workspace.options.comments||this.workspace.options.parentWorkspace&&this.workspace.options.parentWorkspace.options.comments)&&Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT&&this.setCommentText(Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT);
  this.setStyle("procedure_blocks");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);  
  this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
  this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
  this.arguments_=[];
  this.argumentVarModels_=[];
  this.setStatements_(!0);
  this.statementConnection_=null},setStatements_:Blockly.Blocks.procedures_defnoreturn.setStatements_,
   updateParams_:Blockly.Blocks.procedures_defnoreturn.updateParams_,mutationToDom:Blockly.Blocks.procedures_defnoreturn.mutationToDom,domToMutation:Blockly.Blocks.procedures_defnoreturn.domToMutation,decompose:Blockly.Blocks.procedures_defnoreturn.decompose,compose:Blockly.Blocks.procedures_defnoreturn.compose,getProcedureDef:function(){return[this.getFieldValue("NAME"),this.arguments_,!0]},getVars:Blockly.Blocks.procedures_defnoreturn.getVars,getVarModels:Blockly.Blocks.procedures_defnoreturn.getVarModels,
   renameVarById:Blockly.Blocks.procedures_defnoreturn.renameVarById,updateVarName:Blockly.Blocks.procedures_defnoreturn.updateVarName,displayRenamedVar_:Blockly.Blocks.procedures_defnoreturn.displayRenamedVar_,customContextMenu:Blockly.Blocks.procedures_defnoreturn.customContextMenu,callType_:"procedures_callreturn"
 };


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
                
    this.appendDummyInput()
        .appendField("on load:")
        .appendField (new Blockly.FieldTextInput ("funX()"), "CALL");         
        
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
        .appendField (new Blockly.FieldTextInput ("funX()"), "CALL");         

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['slider'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Slider id:")
        .appendField (new Blockly.FieldTextInput ("id"), "ID"); 
        
    this.appendDummyInput()
        .appendField("Minimum")
        .appendField (new Blockly.FieldNumber (1.0), "MINIMUM"); 
        
    this.appendDummyInput()
        .appendField("Maximum")
        .appendField (new Blockly.FieldNumber (100.0), "MAXIMUM");         
        
    this.appendDummyInput()
        .appendField("Width")
        .appendField (new Blockly.FieldNumber (600.0), "WIDTH")  
        .appendField ( "px" );        
        
    this.appendDummyInput()
        .appendField("Initial Value")
        .appendField (new Blockly.FieldNumber (1.0), "VALUE");
        
    this.appendDummyInput()
        .appendField("on input change:")
        .appendField (new Blockly.FieldTextInput ("funX()"), "CALL");         

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);        
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['getelement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("document.getElementById ")
        .appendField (new Blockly.FieldTextInput ("id"), "ID"); 
        
    this.setOutput(true, null);    
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['getattribute'] = {
  init: function() {

    this.appendValueInput("OBJ");
    
         
    this.appendDummyInput()
        .appendField(".")
        .appendField (new Blockly.FieldTextInput ("value"), "ATTRIBUTE"); 
                
    this.setInputsInline(true); 
    this.setOutput(true, null);    
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['floatint'] = {
  init: function() {
    this.appendValueInput("OBJ")
        .appendField("Convert ");   
    this.appendDummyInput()
        .appendField("to ")
        .appendField(new Blockly.FieldDropdown([
                                                ["float", "parseFloat"],
                                                ["integer", "parseInt"],
                                                ["string", "toString"]
                                               ]), "FLOATINT");      

    this.setInputsInline(true); 
    this.setOutput(true, null);    
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['htmltext'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add text")
        .appendField (new Blockly.FieldTextInput ("hello"), "TEXT"); 
    
    this.appendDummyInput ( "Type of text" )    
        .appendField(new Blockly.FieldDropdown([     
                                                ["normal", "normal"],
                                                ["heading", "heading"]
                                               ]), "TEXTTYPE");      
        
    this.appendDummyInput()
        .appendField("Size ")
        .appendField (new Blockly.FieldNumber (1), "SIZE"); 
                
    this.setInputsInline(true); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['linebreak'] = {
  init: function() {  
    this.appendDummyInput()
        .appendField("Add")
        .appendField(new Blockly.FieldDropdown([
                                                ["line break", "<br>"],
                                                ["paragraph break", "<p>"],
                                                ["horizontal row", "<hr>"]
                                               ]), "LINEBREAK");      

    this.setInputsInline(true); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);   
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['textinput'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text input, id:")
        .appendField (new Blockly.FieldTextInput ("id"), "ID"); 
                
    this.appendDummyInput()
        .appendField("Initial Value")
        .appendField (new Blockly.FieldNumber (1.0), "VALUE");
        
    this.appendDummyInput()
        .appendField("on change:")
        .appendField (new Blockly.FieldTextInput ("funX()"), "CALL");         
        
    this.appendDummyInput()
        .appendField("Width")
        .appendField (new Blockly.FieldNumber (600.0), "WIDTH")  
        .appendField ( "px" );                

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);        
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['div'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DIV");

    this.appendDummyInput()
        .appendField('with border')
        .appendField(new Blockly.FieldCheckbox(true), 'BORDER');

    this.appendStatementInput("COMPONENTS")
        .setCheck(null);
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['button'] = {
  init: function() {       
    this.appendDummyInput()
        .appendField("Button Text")
        .appendField (new Blockly.FieldTextInput  ("OK"), "VALUE");
        
    this.appendDummyInput()
        .appendField("on click call function:")
        .appendField (new Blockly.FieldTextInput ("funX()"), "CALL");         

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);        
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['select'] = {
  init: function() {
        
    this.appendDummyInput()
        .appendField("Select (combobox)  id:")
        .appendField (new Blockly.FieldTextInput ("id"), "ID"); 
        
    this.appendDummyInput()
        .appendField("on change:")
        .appendField (new Blockly.FieldTextInput ("funX()"), "CALL");         
        
    this.appendStatementInput("OPTIONS")
        .appendField('options:')
        .setCheck(null);        
                                
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['option'] = {
  init: function() {
        
    this.appendDummyInput()
        .appendField("Select option:")
        .appendField (new Blockly.FieldTextInput ("option1"), "TEXT"); 
        
    this.appendDummyInput()
        .appendField("value:")
        .appendField (new Blockly.FieldTextInput ("1"), "VALUE");         
        
    this.appendDummyInput()
        .appendField('selected')
        .appendField(new Blockly.FieldCheckbox(false), 'SELECTED');                                
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);    
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['functionreturn'] = {
  init: function() {  
    this.appendDummyInput()
        .appendField("Return variable")
        .appendField (new Blockly.FieldTextInput ("x"), "VAR");

    this.setInputsInline(true); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);   
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['scriptinclude'] = {
  init: function() {  
    this.appendDummyInput()
        .appendField("include file")
        .appendField (new Blockly.FieldTextInput ("utilities"), "INCLUDE");
        
    this.appendDummyInput()
        .appendField ( ".js")

    this.setInputsInline(true); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);   
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['raw'] = {
  init: function() {  
    this.appendDummyInput()
        .appendField("Raw text block")
        .appendField(new Blockly.FieldMultilineInput('raw text'),'RAW');

    // this.setInputsInline(true); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);   
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['expression'] = {
  init: function() {  
    this.appendDummyInput()
        .appendField("Expression")
        .appendField(new Blockly.FieldTextInput('x'),'EXPRESSION');

    this.setOutput(true, null);  
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setattribute'] = {
  init: function() {  
    this.appendValueInput("OBJ")
        .appendField("Set ");
        
    this.appendDummyInput ()
        .appendField ( "." )    
        .appendField(new Blockly.FieldTextInput('attribute'),'ATTRIBUTE');
        
    this.appendDummyInput ()
        .appendField ( "=" )    
        .appendField(new Blockly.FieldTextInput('value'),'VALUE');
        

    this.setInputsInline(true); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);   
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['callfunction'] = {
  init: function() {  
    this.appendDummyInput()
        .appendField("Call ")
        .appendField(new Blockly.FieldTextInput('fun1'),'NAME');
        
    this.appendDummyInput ()
        .appendField ( "(" )    
        .appendField(new Blockly.FieldTextInput('x,y'),'PARAMETERS');

    this.appendDummyInput () 
        .appendField ( ")");

    this.setInputsInline(true); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);   
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['callfunctionreturn'] = {
  init: function() {  
    this.appendDummyInput()
        .appendField("Call ")
        .appendField(new Blockly.FieldTextInput('fun1'),'NAME');
        
    this.appendDummyInput ()
        .appendField ( "(" )    
        .appendField(new Blockly.FieldTextInput('x,y'),'PARAMETERS');
        
    this.appendDummyInput () 
        .appendField ( ")");

    this.setInputsInline(true); 
    this.setOutput(true, null);  
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


