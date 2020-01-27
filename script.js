
// 25/01/2020

// let result = 0;
// console.log("result", result);

// function updateResult(argument1, argument2, operation) {
   
//     let originalResult = document.getElementById("result").value;
//     console.log(originalResult, "get original input value");

//     document.onclick = function(e) {
//         let currentOperation = e.target.id;

//         switch (currentOperation) {

//             case "plus":
//                 console.log("+");
//                 document.getElementById("result").value = "";

//                 document.getElementById("result").addEventListener('input', updateValueOnPlus);

//                 function updateValueOnPlus(e) {
                    
//                     let updatedResult = document.getElementById("result").value;
//                     console.log(updatedResult, "get updated input value");
//                     let result = parseFloat(originalResult) + parseFloat(updatedResult);
//                     console.log(result, "result to show");

//                     let calculateButton = document.getElementById("calculate");
                
//                     calculateButton.addEventListener("click", showResult);

//                     function showResult() {
//                         document.getElementById("result").value = result;
//                         console.log(result, "final result");
//                     }
//                 }

//               break;
//             case "minus":
//                 console.log("-");

//                 document.getElementById("result").value = "";

//                 document.getElementById("result").addEventListener('input', updateValueOnMinus);

//                 function updateValueOnMinus(e) {
                    
//                     let updatedResult = document.getElementById("result").value;
//                     console.log(updatedResult, "get updated input value");
//                     let result = parseFloat(originalResult) - parseFloat(updatedResult);
//                     console.log(result, "result to show");

//                     let calculateButton = document.getElementById("calculate");
                
//                     calculateButton.addEventListener("click", showResult);

//                     function showResult() {
//                         document.getElementById("result").value = result;
//                         console.log(result, "final result");
//                     }
//                 }

//                 break;
//             case "multiple":
//               console.log("*");

//               document.getElementById("result").value = "";

//                 document.getElementById("result").addEventListener('input', updateValueOnMultiplication);

//                 function updateValueOnMultiplication(e) {
                
//                     let updatedResult = document.getElementById("result").value;
//                     console.log(updatedResult, "get updated input value");
//                     let result = parseFloat(originalResult) * parseFloat(updatedResult);
//                     console.log(result, "result to show");

//                     let calculateButton = document.getElementById("calculate");
                
//                     calculateButton.addEventListener("click", showResult);

//                     function showResult() {
//                         document.getElementById("result").value = result;
//                         console.log(result, "final result");
//                     }
//                 }

//               break;
//             case "divide":
//               console.log("/");

//               document.getElementById("result").value = "";

//                 document.getElementById("result").addEventListener('input', updateValueOnDivision);

//                 function updateValueOnDivision(e) {
                    
//                     let updatedResult = document.getElementById("result").value;
//                     console.log(updatedResult, "get updated input value");
//                     let result = parseFloat(originalResult) / parseFloat(updatedResult);
//                     console.log(result, "result to show");

//                     let calculateButton = document.getElementById("calculate");
                
//                     calculateButton.addEventListener("click", showResult);

//                     function showResult() {
//                         document.getElementById("result").value = result;
//                         console.log(result, "final result");
//                     }
//                 }

//               break;
          
//         }

//     }
        
// }

const operationsArray = Array.from(document.getElementsByClassName("operation-button"));

const calculateButton = document.getElementById("calculate");

const valuesInput = document.getElementById("result");

let result = 0;

let operationType; 

operationsArray.forEach(function(item, i) {
    operationsArray[i].addEventListener("click", operationButtonClick);
});

calculateButton.addEventListener("click", calculateButtonClick);

function operationButtonClick(event) {
    operationType = event.target.id;
    result = valuesInput.value;
}


function calculateButtonClick(event) {
    console.log(operationCheck(operationType, result, valuesInput.value));
 }

function operationCheck(operation, argument1, argument2) {
    let result = 0;
    switch (operation) {
        case "plus":
            result = argument1 + argument2;
            break;
    
        case "minus":
            result = argument1 - argument2;
            break;

        case "multiple":
            result = argument1 * argument2;
            break;
        
        case "divide":
            result = argument1 / argument2;
            break;

        default:
            alert("press +, -, *, / or =");
            break;
    }
    return result;
}

function cleanValue() {
    valuesInput.value = "";
}