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
"and":function(d){return "dhe"},
"backToPreviousLevel":function(d){return "Kthehu në nivelin e mëparshëm"},
"blocklyMessage":function(d){return "Blockly"},
"blocks":function(d){return "bllok"},
"booleanFalse":function(d){return "e gabuar"},
"booleanTrue":function(d){return "e saktë"},
"catActions":function(d){return "Veprimet"},
"catColour":function(d){return "Ngjyra"},
"catLists":function(d){return "Listat"},
"catLogic":function(d){return "Logjika"},
"catLoops":function(d){return "perseritje"},
"catMath":function(d){return "Matematikë"},
"catProcedures":function(d){return "funksionet"},
"catText":function(d){return "Tekst"},
"catVariables":function(d){return "variabla"},
"clearPuzzle":function(d){return "Fillo nga fillimi"},
"clearPuzzleConfirm":function(d){return "Kjo do ta rikthejë pazëllin ne gjëndjen fillestare dhe do te fshijë gjithë blloqet qe ti ke shtuar ose ke ndryshuar."},
"clearPuzzleConfirmHeader":function(d){return "A jeni i sigurt qe doni te filloni nga fillimi?"},
"codeMode":function(d){return "Kodi\n"},
"codeTooltip":function(d){return "Shikoni kodin e gjeneruar në JavaScript."},
"continue":function(d){return "Vazhdo"},
"defaultTwitterText":function(d){return "Shiko se çfarë bëra"},
"designMode":function(d){return "Dizajni"},
"dialogCancel":function(d){return "Anulo"},
"dialogOK":function(d){return "Ne rregull"},
"directionEastLetter":function(d){return "E"},
"directionNorthLetter":function(d){return "N"},
"directionSouthLetter":function(d){return "S"},
"directionWestLetter":function(d){return "W"},
"dropletBlock_addOperator_description":function(d){return "Shto dy numra"},
"dropletBlock_addOperator_signatureOverride":function(d){return "Add operator"},
"dropletBlock_andOperator_description":function(d){return "Logical AND of two booleans"},
"dropletBlock_andOperator_signatureOverride":function(d){return "AND boolean operator"},
"dropletBlock_assign_x_description":function(d){return "Caktoni një ndryshore"},
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
"dropletBlock_return_signatureOverride":function(d){return "rikthe"},
"dropletBlock_setAttribute_description":function(d){return "Sets the given value"},
"dropletBlock_subtractOperator_description":function(d){return "Subtract two numbers"},
"dropletBlock_subtractOperator_signatureOverride":function(d){return "Subtract operator"},
"dropletBlock_whileBlock_description":function(d){return "Repeat something while a condition is true"},
"dropletBlock_whileBlock_signatureOverride":function(d){return "while loop"},
"emptyBlocksErrorMsg":function(d){return "Blloku \"Përsërit\" ose \"Nëse\"  ka nevojë të ketë blloqe të tjera brënda në mënyrë që të funksionojë. Sigurohu që blloku i brendshëm të përshtatet në mënyrë sa më të mirë brenda bllokut që e përmban."},
"emptyBlockInFunction":function(d){return "The function "+common_locale.v(d,"name")+" has an unfilled input."},
"emptyBlockInVariable":function(d){return "The variable "+common_locale.v(d,"name")+" has an unfilled input."},
"emptyFunctionBlocksErrorMsg":function(d){return "Blloku i funksionit ka nevojë për blloqe të tjera brënda, në mënyrë që të funksionojë."},
"emptyFunctionalBlock":function(d){return "Ti ke një bllok me një input të pambushur."},
"emptyTopLevelBlock":function(d){return "There are no blocks to run. You must attach a block to the "+common_locale.v(d,"topLevelBlockName")+" block."},
"end":function(d){return "fundi"},
"errorEmptyFunctionBlockModal":function(d){return "Duhet që të ketë blloqe brenda përcaktimit të funksionit tënd. Kliko \"redakto\" dhe zhvendos blloqet brenda bllokut të gjelbër."},
"errorIncompleteBlockInFunction":function(d){return "Kliko \"redakto\" për tu siguruar që nuk mungon ndonjë bllok brenda përcaktimit të funksionit tënd."},
"errorParamInputUnattached":function(d){return "Kujtohu që të bashkangjitësh një bllok në çdo parametër që futet në bllokun e funksionit tek zona juaj e punimit."},
"errorQuestionMarksInNumberField":function(d){return "Përpiqu të zëvendësosh \"???\" me një vlerë."},
"errorRequiredParamsMissing":function(d){return "Krijo një parametër për funksionin tënd duke klikuar \"redakto\" dhe duke shtuar parametrat e nevojshëm. Zhvendos blloqet e reja me parametra brenda në përcaktimin e funksionit tënd."},
"errorUnusedFunction":function(d){return "Ti krijove një funksion, por nuk e përdore asnjëherë në hapësirën tënde të punës! Kliko tek \"Funksionet\" në grupin e komandave dhe sigurohu që ta përdorësh atë në programin tënd."},
"errorUnusedParam":function(d){return "Ti shtove një bllok parametër, por nuk e përdore atë në përcaktim. Sigurohu që të përdorësh parametrin tënd duke klikuar \"redakto\" dhe duke vendosur këtë parametër bllok brenda bllokut të gjelbër."},
"extraTopBlocks":function(d){return "Ti ke blloqe që nuk janë të bashkuar. Mendove të bashkosh ato me bllokun \"kur vrapon\"?"},
"extraTopBlocksWhenRun":function(d){return "You have unattached blocks. Did you mean to attach these to the \"when run\" block?"},
"finalStage":function(d){return "Urime! Ju sapo perfunduat fazen finale "},
"finalStageTrophies":function(d){return "Urime! Ti ke përfunduar fazën finale dhe ke fituar "+common_locale.p(d,"numTrophies",0,"sq",{"one":"a trophy","other":common_locale.n(d,"numTrophies")+" trophies"})+"."},
"finish":function(d){return "Përfundo"},
"generatedCodeInfo":function(d){return "Edhe universitetet më të mira të mësojnë kodimin e bazuar në blloqe (psh "+common_locale.v(d,"berkeleyLink")+", "+common_locale.v(d,"harvardLink")+"). Por mbrapa asaj çfarë shohim, blloqet të cilat ke mbledhur, mund të shfaqen në JavaScript, në gjuhën më të përdorur të kodimit:"},
"genericFeedback":function(d){return "Shiko se si përfundove dhe përpiqu të rregullosh programin tënd."},
"hashError":function(d){return "Më vjen keq, '%1' nuk përputhet me asnjë program të ruajtur."},
"help":function(d){return "Ndihmë"},
"hideToolbox":function(d){return "(Hide)"},
"hintHeader":function(d){return "Ja ku është një këshillë:"},
"hintRequest":function(d){return "Shih ndihmën"},
"hintTitle":function(d){return "Ndihmes:"},
"infinity":function(d){return "Pafundësi"},
"jump":function(d){return "hidhu"},
"keepPlaying":function(d){return "Vazhdoni luani"},
"levelIncompleteError":function(d){return "Ti je duke përdorur të gjithë tipet e nevojshëm të blloqeve, por jo në mënyrën e duhur."},
"listVariable":function(d){return "listë"},
"makeYourOwnFlappy":function(d){return "Bëj lojën tënde Flappy"},
"missingBlocksErrorMsg":function(d){return "Përdor një ose më shumë nga blloqet e mëposhtme për të zgjidhur këtë puzzle."},
"nextLevel":function(d){return "Urime ju e perfunduat Puzzle-n "+common_locale.v(d,"puzzleNumber")+"."},
"nextLevelTrophies":function(d){return "Urime! Ti përfundove Puzzle "+common_locale.v(d,"puzzleNumber")+" dhe fitove "+common_locale.p(d,"numTrophies",0,"sq",{"one":"a trophy","other":common_locale.n(d,"numTrophies")+" trophies"})+"."},
"nextPuzzle":function(d){return "Next Puzzle"},
"nextStage":function(d){return "Urime! Ti përfundove "+common_locale.v(d,"stageName")+"."},
"nextStageTrophies":function(d){return "Urime! Ti përfundove "+common_locale.v(d,"stageName")+" dhe fitove "+common_locale.p(d,"numTrophies",0,"sq",{"one":"a trophy","other":common_locale.n(d,"numTrophies")+" trophies"})+"."},
"numBlocksNeeded":function(d){return "Urime! Ti përfundove Puzzle "+common_locale.v(d,"puzzleNumber")+". (Megjithatë, ti mund të kishe përdorur vetëm "+common_locale.p(d,"numBlocks",0,"sq",{"one":"1 block","other":common_locale.n(d,"numBlocks")+" blocks"})+".)"},
"numLinesOfCodeWritten":function(d){return "Ti sapo shkruajte "+common_locale.p(d,"numLines",0,"sq",{"one":"1 line","other":common_locale.n(d,"numLines")+" lines"})+" të kodit!"},
"openWorkspace":function(d){return "Si Funksionon"},
"orientationLock":function(d){return "Fik orientimet në konfigurimet e pajisjes."},
"play":function(d){return "luaj"},
"print":function(d){return "Shtyp"},
"puzzleTitle":function(d){return "Puzzle "+common_locale.v(d,"puzzle_number")+" i "+common_locale.v(d,"stage_total")},
"readonlyWorkspaceHeader":function(d){return "View only: "},
"repeat":function(d){return "përsërit"},
"resetProgram":function(d){return "Rivendosni"},
"rotateText":function(d){return "Rrotullo pajisjen tënde."},
"runProgram":function(d){return "Ekzekuto"},
"runTooltip":function(d){return "Ekzekuto programin e përcaktuar nga blloqet, në hapësirën tënde të punës."},
"saveToGallery":function(d){return "Ruaj tek galeria"},
"savedToGallery":function(d){return "U ruajt në galeri!"},
"score":function(d){return "rezultati"},
"shareFailure":function(d){return "Më vjen keq, ne nuk mund ta ndajmë këtë program."},
"showBlocksHeader":function(d){return "Shfaq Blloqet"},
"showCodeHeader":function(d){return "Shfaq kodin"},
"showGeneratedCode":function(d){return "Shfaq kodin"},
"showTextHeader":function(d){return "Show Text"},
"showToolbox":function(d){return "Show Toolbox"},
"signup":function(d){return "Rregjistrohu për kursin hyrës"},
"stringEquals":function(d){return "vargu=?"},
"subtitle":function(d){return "një mjedis i dukshëm programimi"},
"textVariable":function(d){return "teksti"},
"toggleBlocksErrorMsg":function(d){return "Ti duhet të rregullosh një gabim në programin tënd përpara se të shfaqet si blloqet."},
"tooFewBlocksMsg":function(d){return "Ti je duke i përdorur të gjithë tipet e nevojshëm të blloqeve, por përpiqu të përdorësh më shumë nga këto tipe blloqesh për të përfunduar këtë puzzle."},
"tooManyBlocksMsg":function(d){return "Ky puzzle mund të zgjidhet me blloqet <x id='START_SPAN'/><x id='END_SPAN'/>."},
"tooMuchWork":function(d){return "Ti më detyrove të bëj shumë veprime! Mund të përpiqesh ta përsërisësh me më pak hapa?"},
"toolboxHeader":function(d){return "Blloqet"},
"toolboxHeaderDroplet":function(d){return "Toolbox"},
"totalNumLinesOfCodeWritten":function(d){return "Totali i gjithë kohës: "+common_locale.p(d,"numLines",0,"sq",{"one":"1 line","other":common_locale.n(d,"numLines")+" lines"})+" i kodit."},
"tryAgain":function(d){return "Provo perseri"},
"tryHOC":function(d){return "Provo Orën e Kodimit"},
"wantToLearn":function(d){return "Dëshiron të mësosh se si të kodosh?"},
"watchVideo":function(d){return "Shiko Videon"},
"when":function(d){return "kur"},
"whenRun":function(d){return "kur vrapon"},
"workspaceHeaderShort":function(d){return "Vendi i punës: "}};