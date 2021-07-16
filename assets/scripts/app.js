// alert('this works')
const defaultResult = 0;
let currentResult = defaultResult;

//...empty array for internal log function below
let logEntries = [];

//......get input from input field, parse into a number from string

let getUserNumberInput = () => {
  return parseInt(userInput.value);
};


//.....create description for calculation being loggged 

let createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
  const calcDescription = ` ${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);// from vendor file
};

//......creates internal log, capture all the data from calculator function
//......and return object

function writeLog(opIdentifier, preResult, opNumber, newresult) {
  const logEntry = {
    operation: opIdentifier,
    preResult: preResult,
    number: opNumber,
    result: newresult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntry);
}

//.....calculator function for user input and results

function calculateResult(calculationType) {

    if(//...check calculation type is support, if not exit code..
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' 
    ){
        return;
    }


  const enterNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enterNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enterNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULITPLY') {
    currentResult *= enterNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enterNumber;
    mathOperator = '/';

  }



  createAndWriteOutput(mathOperator, initialResult, enterNumber);
  writeLog(calculationType, initialResult, enterNumber, currentResult);
}



//.....call calculationType withn the calculationResult function and execute calculation

function add() {
 calculateResult('ADD')
}

function subtract() {
 calculateResult('SUBTRACT')
}

function multiply() {
 calculateResult('MULTIPLY')
}

function divide() {
    calculateResult('DIVIDE')
}




addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// console.log('the result is ' + currentResult);
