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
"and":function(d){return "ja"},
"backToPreviousLevel":function(d){return "Tagasi eelmisele tasemele"},
"blocklyMessage":function(d){return "Blockly"},
"blocks":function(d){return "plokid"},
"booleanFalse":function(d){return "väär"},
"booleanTrue":function(d){return "tõene"},
"catActions":function(d){return "Tegevused"},
"catColour":function(d){return "Värv"},
"catLists":function(d){return "Loendid"},
"catLogic":function(d){return "Loogika"},
"catLoops":function(d){return "Tsüklid"},
"catMath":function(d){return "Matemaatika"},
"catProcedures":function(d){return "Funktsioonid"},
"catText":function(d){return "Tekst"},
"catVariables":function(d){return "Muutujad"},
"clearPuzzle":function(d){return "Alusta uuesti"},
"clearPuzzleConfirm":function(d){return "See lähtestab puzzle algolekusse ja kustutab kõik sinu poolt lisatud või muudetud blokid."},
"clearPuzzleConfirmHeader":function(d){return "Oled sa kindel et tahad uuesti alustada?"},
"codeMode":function(d){return "Kood"},
"codeTooltip":function(d){return "Vaata loodud JavaScripti koodi."},
"continue":function(d){return "Jätka"},
"defaultTwitterText":function(d){return "Vaadake mida ma tegin"},
"designMode":function(d){return "Disain"},
"dialogCancel":function(d){return "Tühista"},
"dialogOK":function(d){return "Olgu"},
"directionEastLetter":function(d){return "I"},
"directionNorthLetter":function(d){return "P"},
"directionSouthLetter":function(d){return "L"},
"directionWestLetter":function(d){return "L"},
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
"dropletBlock_return_signatureOverride":function(d){return "tagasta"},
"dropletBlock_setAttribute_description":function(d){return "Sets the given value"},
"dropletBlock_subtractOperator_description":function(d){return "Subtract two numbers"},
"dropletBlock_subtractOperator_signatureOverride":function(d){return "Subtract operator"},
"dropletBlock_whileBlock_description":function(d){return "Repeat something while a condition is true"},
"dropletBlock_whileBlock_signatureOverride":function(d){return "while loop"},
"emptyBlocksErrorMsg":function(d){return "\"Korda\" või \"Kui\" ploki sees peavad olema teised plokid et see töötaks. Veendu et sisemine plokk sobib plokiga mille sees ta on."},
"emptyBlockInFunction":function(d){return "The function "+common_locale.v(d,"name")+" has an unfilled input."},
"emptyBlockInVariable":function(d){return "The variable "+common_locale.v(d,"name")+" has an unfilled input."},
"emptyFunctionBlocksErrorMsg":function(d){return "Funktsiooni plokk peab sisaldama teisi plokke et ta töötaks."},
"emptyFunctionalBlock":function(d){return "Teil on täitmata sisendiga plokk."},
"emptyTopLevelBlock":function(d){return "There are no blocks to run. You must attach a block to the "+common_locale.v(d,"topLevelBlockName")+" block."},
"end":function(d){return "lõpeta"},
"errorEmptyFunctionBlockModal":function(d){return "Sinu funktsiooni definitsioonis peavad olema plokid. Vajuta \"muuda\" ja lohista plokid rohelise ploki sisse."},
"errorIncompleteBlockInFunction":function(d){return "Kliki nupul \"edit\" ja veendu et sul ei ole funktsiooni definitsioonist mõnda plokki puudu."},
"errorParamInputUnattached":function(d){return "Pea meeles lisada klots iga parameetri sisendfunktsiooni oma töölaual."},
"errorQuestionMarksInNumberField":function(d){return "Proovi asendada \"???\" väärtusega."},
"errorRequiredParamsMissing":function(d){return "Loo oma funktsioonile parameeter vajutades \"muuda\" ning lisades vajalikud parameetrid. Lohista uued parameetriplokid oma funktsiooni definitsiooni."},
"errorUnusedFunction":function(d){return "Sa lõid funktsiooni aga ei kasutanud seda oma tööruumis! Kliki \"Funktsioon\" nupule tööriistakastis ja veendu et sa seda oma programmis kasutad."},
"errorUnusedParam":function(d){return "Sa lisasid parameetriploki aga ei kasutanud seda oma definitsioonis. Ära unusta oma parameetrit kasutada, vajuta \"muuda\" ja pane parameetri plokk rohelise ploki sisse."},
"extraTopBlocks":function(d){return "Sul on kinnitamata klotse."},
"extraTopBlocksWhenRun":function(d){return "Sul on kinnitamata blokid. Kas sa mõtlesid need lisada \"kui käivitada\" blokile?"},
"finalStage":function(d){return "Tubli! Sa läbisid viimase taseme."},
"finalStageTrophies":function(d){return "Palju õnne! Oled lõpetanud lõppfaasi ja võitsid"+common_locale.p(d,"numTrophies",0,"et",{"one":"a trofee","other":common_locale.n(d,"numTrophies")+"trofeed"})+"."},
"finish":function(d){return "Lõpeta"},
"generatedCodeInfo":function(d){return "Isegi tipptasemel ülikoolid õpetavad koodimist blokkide baasil (nt. "+common_locale.v(d,"berkeleyLink")+", "+common_locale.v(d,"harvardLink")+"). Kuid \"kapoti\" all saab kuvada sinu kokku pandud blokke JavaScriptis, maailma kõige levinumas programeerimiskeeles:"},
"genericFeedback":function(d){return "Vaata, mis kokkuvõttes välja tuli, ja proovi oma programm korda teha."},
"hashError":function(d){return "Vabandust, '%1' ei vasta ühelegi salvestatud programmile."},
"help":function(d){return "Abi"},
"hideToolbox":function(d){return "(Peida)"},
"hintHeader":function(d){return "Vihje:"},
"hintRequest":function(d){return "Anna vihje"},
"hintTitle":function(d){return "Vihje:"},
"infinity":function(d){return "Lõpmatus"},
"jump":function(d){return "hüppa"},
"keepPlaying":function(d){return "Jätka Mängimist"},
"levelIncompleteError":function(d){return "Sa kasutad kõiki vajalikke plokke, aga mitte õiges järjekorras."},
"listVariable":function(d){return "loend"},
"makeYourOwnFlappy":function(d){return "Tee oma Flappy mäng"},
"missingBlocksErrorMsg":function(d){return "Selle mõistatuse lahendamiseks kasuta ühte või mitut allpool olevat plokki."},
"nextLevel":function(d){return "Tubli! Sa lahendasid mõistatuse nr."+common_locale.v(d,"puzzleNumber")+"."},
"nextLevelTrophies":function(d){return "Õnnitlused! Lõpetasid pusle "+common_locale.v(d,"puzzleNumber")+" ja võitsid "+common_locale.p(d,"numTrophies",0,"et",{"one":"trofee","other":common_locale.n(d,"numTrophies")+" trofeed"})+"."},
"nextPuzzle":function(d){return "Next Puzzle"},
"nextStage":function(d){return "Õnnitlused! Lõpetasid "+common_locale.v(d,"stageName")+" taseme."},
"nextStageTrophies":function(d){return "Õnnitlused! Lõpetasid "+common_locale.v(d,"stageName")+" ja võistid "+common_locale.p(d,"numTrophies",0,"et",{"one":"trofee","other":common_locale.n(d,"numTrophies")+" trofeed"})},
"numBlocksNeeded":function(d){return "Õnnitlused! Lõpetasid pusle "+common_locale.v(d,"puzzleNumber")+". (Siiski, sa oleks võinud kasutada ainult "+common_locale.p(d,"numBlocks",0,"et",{"one":"1 plokki","other":common_locale.n(d,"numBlocks")+" plokki"})+".)"},
"numLinesOfCodeWritten":function(d){return "Kirjutasin just "+common_locale.p(d,"numLines",0,"et",{"one":"1 rea","other":common_locale.n(d,"numLines")+" rida"})+" koodi!"},
"openWorkspace":function(d){return "Kuidas see töötab"},
"orientationLock":function(d){return "Lülita  automaatne pööramine oma seadme seadetes välja."},
"play":function(d){return "mängi"},
"print":function(d){return "Trüki välja"},
"puzzleTitle":function(d){return "Mõistatus "+common_locale.v(d,"puzzle_number")+"/"+common_locale.v(d,"stage_total")},
"readonlyWorkspaceHeader":function(d){return "View only: "},
"repeat":function(d){return "korda"},
"resetProgram":function(d){return "Kustuta"},
"rotateText":function(d){return "Pööra oma seadet."},
"runProgram":function(d){return "Käivita"},
"runTooltip":function(d){return "Käivita programm mis on defineeritud plokkidena tööruumis."},
"saveToGallery":function(d){return "Salvesta galeriisse"},
"savedToGallery":function(d){return "Galeriisse salvestatud!"},
"score":function(d){return "tulemus"},
"shareFailure":function(d){return "Vabandust, me ei saa seda programmi jagada."},
"showBlocksHeader":function(d){return "Näita plokke"},
"showCodeHeader":function(d){return "Näita koodi"},
"showGeneratedCode":function(d){return "Näita koodi"},
"showTextHeader":function(d){return "Kuva tekst"},
"showToolbox":function(d){return "Kuva Tööriistakast"},
"signup":function(d){return "Pane ennast kirja sissejuhatavale kursusele"},
"stringEquals":function(d){return "string=?"},
"subtitle":function(d){return "visuaalne programmeerimiskeskkond"},
"textVariable":function(d){return "tekst"},
"toggleBlocksErrorMsg":function(d){return "Sa pead parandama vea oma programmis enne kui seda saab plokkidena kuvada."},
"tooFewBlocksMsg":function(d){return "Sa kasutad kõiki vajalikke plokke, aga proovi selle mõistatuse lahendamiseks ka neid plokke."},
"tooManyBlocksMsg":function(d){return "Selle mõistatuse saab lahendada <x id='START_SPAN'/><x id='END_SPAN'/> ploki abil."},
"tooMuchWork":function(d){return "Ma tegin jube palju tööd! Kas sa saaksid hakkama vähemate kordustega?"},
"toolboxHeader":function(d){return "Plokid"},
"toolboxHeaderDroplet":function(d){return "Tööriistakast"},
"totalNumLinesOfCodeWritten":function(d){return "Kokku: "+common_locale.p(d,"numLines",0,"et",{"one":"1 rida","other":common_locale.n(d,"numLines")+" rida"})+" rida koodi."},
"tryAgain":function(d){return "Proovi uuesti"},
"tryHOC":function(d){return "Proovi Koodi Tundi"},
"wantToLearn":function(d){return "Tahad programmeerimist õppida?"},
"watchVideo":function(d){return "Vaata videot"},
"when":function(d){return "kui"},
"whenRun":function(d){return "kui käib"},
"workspaceHeaderShort":function(d){return "Tööruum: "}};