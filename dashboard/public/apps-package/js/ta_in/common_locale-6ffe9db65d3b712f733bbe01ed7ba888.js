var common_locale = {lc:{"ar":function(n){
  if (n === 0) {
    return 'zero';
  }
  if (n == 1) {
    return 'one';
  }
  if (n == 2) {
    return 'two';
  }
  if ((n % 100) >= 3 && (n % 100) <= 10 && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 99 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"en":function(n){return n===1?"one":"other"},"bg":function(n){return n===1?"one":"other"},"bn":function(n){return n===1?"one":"other"},"ca":function(n){return n===1?"one":"other"},"cs":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"da":function(n){return n===1?"one":"other"},"de":function(n){return n===1?"one":"other"},"el":function(n){return n===1?"one":"other"},"es":function(n){return n===1?"one":"other"},"et":function(n){return n===1?"one":"other"},"eu":function(n){return n===1?"one":"other"},"fa":function(n){return "other"},"fi":function(n){return n===1?"one":"other"},"fil":function(n){return n===0||n==1?"one":"other"},"fr":function(n){return Math.floor(n)===0||Math.floor(n)==1?"one":"other"},"ga":function(n){return n==1?"one":(n==2?"two":"other")},"gl":function(n){return n===1?"one":"other"},"he":function(n){return n===1?"one":"other"},"hi":function(n){return n===0||n==1?"one":"other"},"hr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"hu":function(n){return "other"},"id":function(n){return "other"},"is":function(n){
    return ((n%10) === 1 && (n%100) !== 11) ? 'one' : 'other';
  },"it":function(n){return n===1?"one":"other"},"ja":function(n){return "other"},"ko":function(n){return "other"},"lt":function(n){
  if ((n % 10) == 1 && ((n % 100) < 11 || (n % 100) > 19)) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 9 &&
      ((n % 100) < 11 || (n % 100) > 19) && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"lv":function(n){
  if (n === 0) {
    return 'zero';
  }
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  return 'other';
},"mk":function(n){return (n%10)==1&&n!=11?"one":"other"},"mr":function(n){return n===1?"one":"other"},"ms":function(n){return "other"},"mt":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || ((n % 100) >= 2 && (n % 100) <= 4 && n == Math.floor(n))) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 19 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"nl":function(n){return n===1?"one":"other"},"no":function(n){return n===1?"one":"other"},"pl":function(n){
  if (n == 1) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || n != 1 && (n % 10) == 1 ||
      ((n % 10) >= 5 && (n % 10) <= 9 || (n % 100) >= 12 && (n % 100) <= 14) &&
      n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"pt":function(n){return n===1?"one":"other"},"ro":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || n != 1 && (n % 100) >= 1 &&
      (n % 100) <= 19 && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"ru":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sk":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"sl":function(n){
  if ((n % 100) == 1) {
    return 'one';
  }
  if ((n % 100) == 2) {
    return 'two';
  }
  if ((n % 100) == 3 || (n % 100) == 4) {
    return 'few';
  }
  return 'other';
},"sq":function(n){return n===1?"one":"other"},"sr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sv":function(n){return n===1?"one":"other"},"ta":function(n){return n===1?"one":"other"},"th":function(n){return "other"},"tr":function(n){return n===1?"one":"other"},"uk":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"ur":function(n){return n===1?"one":"other"},"vi":function(n){return "other"},"zh":function(n){return "other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){common_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){common_locale.c(d,k);return d[k] in p?p[d[k]]:(k=common_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){common_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).common_locale = {
"and":function(d){return "மற்றும்"},
"backToPreviousLevel":function(d){return "முந்தைய நிலைக்கு திரும்பவும்"},
"blocklyMessage":function(d){return "Blockly"},
"blocks":function(d){return "blocks"},
"booleanFalse":function(d){return "தவறு"},
"booleanTrue":function(d){return "மெய்"},
"catActions":function(d){return "செயல்கள்"},
"catColour":function(d){return "நிறம்"},
"catLists":function(d){return "பட்டியல்கள்"},
"catLogic":function(d){return "தர்க்கம்"},
"catLoops":function(d){return "சுழற்சிகள்"},
"catMath":function(d){return "கணிதம்"},
"catProcedures":function(d){return "செயல்பாடுகள்"},
"catText":function(d){return "உரை"},
"catVariables":function(d){return "மாறிலிகள்"},
"clearPuzzle":function(d){return "Clear Puzzle"},
"clearPuzzleConfirm":function(d){return "This will delete all blocks and reset the puzzle to its start state."},
"clearPuzzleConfirmHeader":function(d){return "Are you sure you want to clear the puzzle?"},
"codeMode":function(d){return "Code"},
"codeTooltip":function(d){return "உருவாக்கப்பட்ட ஜாவாஉரைக் குறியீடுகளை பார்க்க."},
"continue":function(d){return "தொடர்க"},
"defaultTwitterText":function(d){return "Check out what I made"},
"designMode":function(d){return "Design"},
"dialogCancel":function(d){return "ரத்து செய்"},
"dialogOK":function(d){return "சரி"},
"directionEastLetter":function(d){return "கிழக்கு"},
"directionNorthLetter":function(d){return "வடக்கு"},
"directionSouthLetter":function(d){return "தெற்கு"},
"directionWestLetter":function(d){return "மேற்கு"},
"dropletBlock_addOperator_description":function(d){return "Add two numbers"},
"dropletBlock_addOperator_signatureOverride":function(d){return "Add operator"},
"dropletBlock_andOperator_description":function(d){return "Logical AND of two booleans"},
"dropletBlock_andOperator_signatureOverride":function(d){return "AND boolean operator"},
"dropletBlock_assign_x_description":function(d){return "Reassign a variable"},
"dropletBlock_assign_x_param0":function(d){return "x"},
"dropletBlock_assign_x_param0_description":function(d){return "The variable name being assigned to"},
"dropletBlock_assign_x_param1":function(d){return "value"},
"dropletBlock_assign_x_param1_description":function(d){return "The value the variable is being assigned to."},
"dropletBlock_assign_x_signatureOverride":function(d){return "Assign a variable"},
"dropletBlock_callMyFunction_description":function(d){return "Use a function without an argument"},
"dropletBlock_callMyFunction_n_description":function(d){return "Use a function with argument"},
"dropletBlock_callMyFunction_n_signatureOverride":function(d){return "Call a function with parameters"},
"dropletBlock_callMyFunction_signatureOverride":function(d){return "Call a function"},
"dropletBlock_declareAssign_x_array_1_4_description":function(d){return "Create a variable and initialize it as an array"},
"dropletBlock_declareAssign_x_array_1_4_param0":function(d){return "x"},
"dropletBlock_declareAssign_x_array_1_4_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_array_1_4_param1":function(d){return "1,2,3,4"},
"dropletBlock_declareAssign_x_array_1_4_param1_description":function(d){return "The initial values to the array"},
"dropletBlock_declareAssign_x_array_1_4_signatureOverride":function(d){return "Declare a variable assigned to an array"},
"dropletBlock_declareAssign_x_description":function(d){return "Create a variable for the first time"},
"dropletBlock_declareAssign_x_param0":function(d){return "x"},
"dropletBlock_declareAssign_x_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_param1":function(d){return "0"},
"dropletBlock_declareAssign_x_param1_description":function(d){return "The initial value of the variable"},
"dropletBlock_declareAssign_x_prompt_description":function(d){return "Create a variable and assign it a value by displaying a prompt"},
"dropletBlock_declareAssign_x_prompt_param0":function(d){return "x"},
"dropletBlock_declareAssign_x_prompt_param0_description":function(d){return "The name you will use in the program to reference the variable"},
"dropletBlock_declareAssign_x_prompt_param1":function(d){return "\"Enter value\""},
"dropletBlock_declareAssign_x_prompt_param1_description":function(d){return "The string the user will see in the pop up when asked to enter a value"},
"dropletBlock_declareAssign_x_prompt_signatureOverride":function(d){return "Prompt the user for a value and store it"},
"dropletBlock_declareAssign_x_signatureOverride":function(d){return "Declare a variable"},
"dropletBlock_divideOperator_description":function(d){return "Divide two numbers"},
"dropletBlock_divideOperator_signatureOverride":function(d){return "Divide operator"},
"dropletBlock_equalityOperator_description":function(d){return "Test for equality"},
"dropletBlock_equalityOperator_param0":function(d){return "x"},
"dropletBlock_equalityOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_equalityOperator_param1":function(d){return "y"},
"dropletBlock_equalityOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_equalityOperator_signatureOverride":function(d){return "Equality operator"},
"dropletBlock_forLoop_i_0_4_description":function(d){return "Do something multiple times"},
"dropletBlock_forLoop_i_0_4_signatureOverride":function(d){return "for loop"},
"dropletBlock_functionParams_n_description":function(d){return "Create a function with an argument"},
"dropletBlock_functionParams_n_signatureOverride":function(d){return "Function with a Parameter"},
"dropletBlock_functionParams_none_description":function(d){return "Create a function without an argument"},
"dropletBlock_functionParams_none_signatureOverride":function(d){return "Function Definition"},
"dropletBlock_getTime_description":function(d){return "Get the current time in milliseconds"},
"dropletBlock_greaterThanOperator_description":function(d){return "Compare two numbers"},
"dropletBlock_greaterThanOperator_param0":function(d){return "x"},
"dropletBlock_greaterThanOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_greaterThanOperator_param1":function(d){return "y"},
"dropletBlock_greaterThanOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_greaterThanOperator_signatureOverride":function(d){return "Greater than operator"},
"dropletBlock_ifBlock_description":function(d){return "Do something only if a condition is true"},
"dropletBlock_ifBlock_signatureOverride":function(d){return "if statement"},
"dropletBlock_ifElseBlock_description":function(d){return "Do something if a condition is true, otherwise do something else"},
"dropletBlock_ifElseBlock_signatureOverride":function(d){return "if/else statement"},
"dropletBlock_inequalityOperator_description":function(d){return "Test for inequality"},
"dropletBlock_inequalityOperator_param0":function(d){return "x"},
"dropletBlock_inequalityOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_inequalityOperator_param1":function(d){return "y"},
"dropletBlock_inequalityOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_inequalityOperator_signatureOverride":function(d){return "Inequality operator"},
"dropletBlock_lessThanOperator_description":function(d){return "Compare two numbers"},
"dropletBlock_lessThanOperator_param0":function(d){return "x"},
"dropletBlock_lessThanOperator_param0_description":function(d){return "The first value to use for comparison."},
"dropletBlock_lessThanOperator_param1":function(d){return "y"},
"dropletBlock_lessThanOperator_param1_description":function(d){return "The second value to use for comparison."},
"dropletBlock_lessThanOperator_signatureOverride":function(d){return "Less than operator"},
"dropletBlock_mathAbs_description":function(d){return "Absolute value"},
"dropletBlock_mathAbs_param0":function(d){return "x"},
"dropletBlock_mathAbs_param0_description":function(d){return "An arbitrary number."},
"dropletBlock_mathAbs_signatureOverride":function(d){return "Math.abs(x)"},
"dropletBlock_mathMax_description":function(d){return "Maximum value"},
"dropletBlock_mathMax_param0":function(d){return "n1, n2,..., nX"},
"dropletBlock_mathMax_param0_description":function(d){return "One or more numbers to compare."},
"dropletBlock_mathMax_signatureOverride":function(d){return "Math.max(n1, n2, ..., nX)"},
"dropletBlock_mathMin_description":function(d){return "Minimum value"},
"dropletBlock_mathMin_param0":function(d){return "n1, n2,..., nX"},
"dropletBlock_mathMin_param0_description":function(d){return "One or more numbers to compare."},
"dropletBlock_mathMin_signatureOverride":function(d){return "Math.min(n1, n2, ..., nX)"},
"dropletBlock_mathRound_description":function(d){return "Round to the nearest integer"},
"dropletBlock_mathRound_param0":function(d){return "x"},
"dropletBlock_mathRound_param0_description":function(d){return "An arbitrary number."},
"dropletBlock_mathRound_signatureOverride":function(d){return "Math.round(x)"},
"dropletBlock_multiplyOperator_description":function(d){return "Multiply two numbers"},
"dropletBlock_multiplyOperator_signatureOverride":function(d){return "Multiply operator"},
"dropletBlock_notOperator_description":function(d){return "Logical NOT of a boolean"},
"dropletBlock_notOperator_signatureOverride":function(d){return "AND boolean operator"},
"dropletBlock_orOperator_description":function(d){return "Logical OR of two booleans"},
"dropletBlock_orOperator_signatureOverride":function(d){return "OR boolean operator"},
"dropletBlock_randomNumber_max_description":function(d){return "Get a random number between 0 and the specified maximum value"},
"dropletBlock_randomNumber_max_param0":function(d){return "max"},
"dropletBlock_randomNumber_max_param0_description":function(d){return "The maximum number returned"},
"dropletBlock_randomNumber_max_signatureOverride":function(d){return "randomNumber(max)"},
"dropletBlock_randomNumber_min_max_description":function(d){return "Get a random number between the specified minimum and maximum values"},
"dropletBlock_randomNumber_min_max_param0":function(d){return "min"},
"dropletBlock_randomNumber_min_max_param0_description":function(d){return "The minimum number returned"},
"dropletBlock_randomNumber_min_max_param1":function(d){return "max"},
"dropletBlock_randomNumber_min_max_param1_description":function(d){return "The maximum number returned"},
"dropletBlock_randomNumber_min_max_signatureOverride":function(d){return "randomNumber(min, max)"},
"dropletBlock_return_description":function(d){return "Return a value from a function"},
"dropletBlock_return_signatureOverride":function(d){return "திருப்பு"},
"dropletBlock_setAttribute_description":function(d){return "Sets the given value"},
"dropletBlock_subtractOperator_description":function(d){return "Subtract two numbers"},
"dropletBlock_subtractOperator_signatureOverride":function(d){return "Subtract operator"},
"dropletBlock_whileBlock_description":function(d){return "Repeat something while a condition is true"},
"dropletBlock_whileBlock_signatureOverride":function(d){return "while loop"},
"emptyBlocksErrorMsg":function(d){return "The \"Repeat\" or \"If\" block needs to have other blocks inside it to work. Make sure the inner block fits properly inside the containing block."},
"emptyBlockInFunction":function(d){return "The function "+common_locale.v(d,"name")+" has an unfilled input."},
"emptyBlockInVariable":function(d){return "The variable "+common_locale.v(d,"name")+" has an unfilled input."},
"emptyFunctionBlocksErrorMsg":function(d){return "The function block needs to have other blocks inside it to work."},
"emptyFunctionalBlock":function(d){return "You have a block with an unfilled input."},
"emptyTopLevelBlock":function(d){return "There are no blocks to run. You must attach a block to the "+common_locale.v(d,"topLevelBlockName")+" block."},
"end":function(d){return "end"},
"errorEmptyFunctionBlockModal":function(d){return "There need to be blocks inside your function definition. Click \"edit\" and drag blocks inside the green block."},
"errorIncompleteBlockInFunction":function(d){return "Click \"edit\" to make sure you don't have any blocks missing inside your function definition."},
"errorParamInputUnattached":function(d){return "Remember to attach a block to each parameter input on the function block in your workspace."},
"errorQuestionMarksInNumberField":function(d){return "Try replacing \"???\" with a value."},
"errorRequiredParamsMissing":function(d){return "Create a parameter for your function by clicking \"edit\" and adding the necessary parameters. Drag the new parameter blocks into your function definition."},
"errorUnusedFunction":function(d){return "You created a function, but never used it on your workspace! Click on \"Functions\" in the toolbox and make sure you use it in your program."},
"errorUnusedParam":function(d){return "You added a parameter block, but didn't use it in the definition. Make sure to use your parameter by clicking \"edit\" and placing the parameter block inside the green block."},
"extraTopBlocks":function(d){return "You have unattached blocks. Did you mean to attach these to the \"when run\" block?"},
"extraTopBlocksWhenRun":function(d){return "You have unattached blocks. Did you mean to attach these to the \"when run\" block?"},
"finalStage":function(d){return "வாழ்த்துக்கள்! நீங்கள் இறுதிக் கட்டத்தை நிறைவு செய்துள்ளீர்கள்."},
"finalStageTrophies":function(d){return "Congratulations! You have completed the final stage and won "+common_locale.p(d,"numTrophies",0,"ta",{"one":"a trophy","other":common_locale.n(d,"numTrophies")+" trophies"})+"."},
"finish":function(d){return "Finish"},
"generatedCodeInfo":function(d){return "Even top universities teach block-based coding (e.g., "+common_locale.v(d,"berkeleyLink")+", "+common_locale.v(d,"harvardLink")+"). But under the hood, the blocks you have assembled can also be shown in JavaScript, the world's most widely used coding language:"},
"genericFeedback":function(d){return "See how you ended up, and try to fix your program."},
"hashError":function(d){return "மன்னிக்கவும், '%1' எந்த சேமிக்கப்பட்ட நிரலுடனும் பொருந்தவில்லை."},
"help":function(d){return "உதவி"},
"hideToolbox":function(d){return "(Hide)"},
"hintHeader":function(d){return "Here's a tip:"},
"hintRequest":function(d){return "See hint"},
"hintTitle":function(d){return "குறிப்பு:"},
"infinity":function(d){return "முடிவிலி"},
"jump":function(d){return "jump"},
"keepPlaying":function(d){return "Keep Playing"},
"levelIncompleteError":function(d){return "You are using all of the necessary types of blocks but not in the right way."},
"listVariable":function(d){return "பட்டியல்"},
"makeYourOwnFlappy":function(d){return "Make Your Own Flappy Game"},
"missingBlocksErrorMsg":function(d){return "Try one or more of the blocks below to solve this puzzle."},
"nextLevel":function(d){return "வாழ்த்துக்கள்! நீங்கள் "+common_locale.v(d,"puzzleNumber")+" ஆவது புதிரை நிறைவு செய்துள்ளீர்கள்."},
"nextLevelTrophies":function(d){return "Congratulations! You completed Puzzle "+common_locale.v(d,"puzzleNumber")+" and won "+common_locale.p(d,"numTrophies",0,"ta",{"one":"a trophy","other":common_locale.n(d,"numTrophies")+" trophies"})+"."},
"nextPuzzle":function(d){return "Next Puzzle"},
"nextStage":function(d){return "Congratulations! You completed "+common_locale.v(d,"stageName")+"."},
"nextStageTrophies":function(d){return "Congratulations! You completed "+common_locale.v(d,"stageName")+" and won "+common_locale.p(d,"numTrophies",0,"ta",{"one":"a trophy","other":common_locale.n(d,"numTrophies")+" trophies"})+"."},
"numBlocksNeeded":function(d){return "Congratulations! You completed Puzzle "+common_locale.v(d,"puzzleNumber")+". (However, you could have used only "+common_locale.p(d,"numBlocks",0,"ta",{"one":"1 block","other":common_locale.n(d,"numBlocks")+" blocks"})+".)"},
"numLinesOfCodeWritten":function(d){return "You just wrote "+common_locale.p(d,"numLines",0,"ta",{"one":"1 line","other":common_locale.n(d,"numLines")+" lines"})+" of code!"},
"openWorkspace":function(d){return "இது எப்படி செயல்படுகிறது"},
"orientationLock":function(d){return "Turn off orientation lock in device settings."},
"play":function(d){return "play"},
"print":function(d){return "Print"},
"puzzleTitle":function(d){return common_locale.v(d,"stage_total")+" ஆம் நிலையில் புதிர் "+common_locale.v(d,"puzzle_number")},
"readonlyWorkspaceHeader":function(d){return "View only: "},
"repeat":function(d){return "மறுபடி"},
"resetProgram":function(d){return "மீட்டமை"},
"rotateText":function(d){return "உங்கள் சாதனத்தை சுழற்றவும்."},
"runProgram":function(d){return "Run"},
"runTooltip":function(d){return "Run the program defined by the blocks in the workspace."},
"saveToGallery":function(d){return "Save to gallery"},
"savedToGallery":function(d){return "Saved in gallery!"},
"score":function(d){return "score"},
"shareFailure":function(d){return "Sorry, we can't share this program."},
"showBlocksHeader":function(d){return "Show Blocks"},
"showCodeHeader":function(d){return "குறியீட்டை காண்பி"},
"showGeneratedCode":function(d){return "குறியீட்டை காண்பி"},
"showTextHeader":function(d){return "Show Text"},
"showToolbox":function(d){return "Show Toolbox"},
"signup":function(d){return "ஆரம்ப பாடத்திற்கு பதிவுபெறவும்"},
"stringEquals":function(d){return "string=?"},
"subtitle":function(d){return "a visual programming environment"},
"textVariable":function(d){return "உரை"},
"toggleBlocksErrorMsg":function(d){return "You need to correct an error in your program before it can be shown as blocks."},
"tooFewBlocksMsg":function(d){return "You are using all of the necessary types of blocks, but try using more  of these types of blocks to complete this puzzle."},
"tooManyBlocksMsg":function(d){return "This puzzle can be solved with <x id='START_SPAN'/><x id='END_SPAN'/> blocks."},
"tooMuchWork":function(d){return "You made me do a lot of work!  Could you try repeating fewer times?"},
"toolboxHeader":function(d){return "தொகுதிகள்"},
"toolboxHeaderDroplet":function(d){return "Toolbox"},
"totalNumLinesOfCodeWritten":function(d){return "All-time total: "+common_locale.p(d,"numLines",0,"ta",{"one":"1 line","other":common_locale.n(d,"numLines")+" lines"})+" of code."},
"tryAgain":function(d){return "மீண்டும் முயற்சி செய்"},
"tryHOC":function(d){return "Try the Hour of Code"},
"wantToLearn":function(d){return "குறியீடுகள் கற்க வேண்டுமா?"},
"watchVideo":function(d){return "காணொளியை பார்க்கவும்"},
"when":function(d){return "when"},
"whenRun":function(d){return "when run"},
"workspaceHeaderShort":function(d){return "Workspace: "}};