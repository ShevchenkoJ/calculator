const operationsArray = Array.from(document.getElementsByClassName("operation-button"));

const calculateButton = document.getElementById("calculate");

const valuesInput = document.getElementById("result");

let result = 0;

let operationType; 

operationsArray.forEach(function(item, i) {
    operationsArray[i].addEventListener("click", operationButtonClick);
    operationsArray[i].addEventListener("click", cleanValue);
});

calculateButton.addEventListener("click", calculateButtonClick);

function operationButtonClick(event) {
    operationType = event.target.id;
    console.log(operationType);
    result = valuesInput.value;
    console.log(result, "result");
}


function calculateButtonClick(event) {
    console.log(operationCheck(operationType, result, valuesInput.value));
}

function operationCheck(operation, argument1, argument2) {
    let result = 0;
    switch (operation) {
        case "plus":
            result = parseFloat(argument1) + parseFloat(argument2);
            break;
    
        case "minus":
            result = parseFloat(argument1) - parseFloat(argument2);
            break;

        case "multiple":
            result = parseFloat(argument1) * parseFloat(argument2);
            break;
        
        case "divide":
            result = parseFloat(argument1) / parseFloat(argument2);
            break;

        default:
            alert("press +, -, *, / or =");
            break;
    }

    console.log(operationType, result, valuesInput.value, "result in operationCheck");

    valuesInput.value = result;

    return result;
    
}

function cleanValue() {
    valuesInput.value = "";
}

    