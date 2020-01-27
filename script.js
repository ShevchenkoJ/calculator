
// 25/01/2020

// let result = 0;
// console.log("result", result);

function updateResult(argument1, argument2, operation) {

    // console.log("event listener added");

    // console.log(operationsArray, "let global");
   
    let originalResult = document.getElementById("result").value;
    console.log(originalResult, "get original input value");

    document.onclick = function(e){
        let currentOperation = e.target.id;
        //console.log(currentOperation, "was clicked");

        switch (currentOperation) {

            case "plus":
                console.log("+");
                document.getElementById("result").value = "";

                document.getElementById("result").addEventListener('input', updateValueOnPlus);

                function updateValueOnPlus(e) {
                    //log.textContent = e.target.value;
                    let updatedResult = document.getElementById("result").value;
                    console.log(updatedResult, "get updated input value");
                    let result = parseFloat(originalResult) + parseFloat(updatedResult);
                    console.log(result, "result to show");

                    let calculateButton = document.getElementById("calculate");
                
                    calculateButton.addEventListener("click", showResult);

                    function showResult() {
                        document.getElementById("result").value = result;
                        console.log(result, "final result");
                    }
                }

                // let calculateButton = document.getElementById("calculate");
                
                // calculateButton.addEventListener("click", showResult);
            
                // function showResult() {
                //     document.getElementById("result").value = result;
                //     console.log(result, "final result");
                // }

                // let result = originalResult + updatedResult;
                // console.log(result, "result to show");
          
            //   let updatedResult = document.getElementById("result").value;
            //   console.log(updatedResult, "get updated input value");

              //result = originalResult + updatedResult;
              //console.log(result, "new result");
              break;
            case "minus":
                console.log("-");

                document.getElementById("result").value = "";

                document.getElementById("result").addEventListener('input', updateValueOnMinus);

                function updateValueOnMinus(e) {
                    //log.textContent = e.target.value;
                    let updatedResult = document.getElementById("result").value;
                    console.log(updatedResult, "get updated input value");
                    let result = parseFloat(originalResult) - parseFloat(updatedResult);
                    console.log(result, "result to show");

                    let calculateButton = document.getElementById("calculate");
                
                    calculateButton.addEventListener("click", showResult);

                    function showResult() {
                        document.getElementById("result").value = result;
                        console.log(result, "final result");
                    }
                }

                break;
            case "multiple":
              console.log("*");

              document.getElementById("result").value = "";

                document.getElementById("result").addEventListener('input', updateValueOnMultiplication);

                function updateValueOnMultiplication(e) {
                    //log.textContent = e.target.value;
                    let updatedResult = document.getElementById("result").value;
                    console.log(updatedResult, "get updated input value");
                    let result = parseFloat(originalResult) * parseFloat(updatedResult);
                    console.log(result, "result to show");

                    let calculateButton = document.getElementById("calculate");
                
                    calculateButton.addEventListener("click", showResult);

                    function showResult() {
                        document.getElementById("result").value = result;
                        console.log(result, "final result");
                    }
                }

              break;
            case "divide":
              console.log("/");

              document.getElementById("result").value = "";

                document.getElementById("result").addEventListener('input', updateValueOnDivision);

                function updateValueOnDivision(e) {
                    //log.textContent = e.target.value;
                    let updatedResult = document.getElementById("result").value;
                    console.log(updatedResult, "get updated input value");
                    let result = parseFloat(originalResult) / parseFloat(updatedResult);
                    console.log(result, "result to show");

                    let calculateButton = document.getElementById("calculate");
                
                    calculateButton.addEventListener("click", showResult);

                    function showResult() {
                        document.getElementById("result").value = result;
                        console.log(result, "final result");
                    }
                }

              break;
            // case "calculate":
            //     console.log("=");

            //     // console.log(result, "result to show");
            //     document.getElementById("result").value = parseFloat(result);
            //     console.log(result, "result shown");

            //     // function clickCalculateButton() {
            //     //     let calculateButton = document.getElementById("calculate");
            //     //     calculateButton.addEventListener("click", showResult);
            //     // }
                
            //     // function showResult() {
            //     //     document.getElementById("result").textContent = result;
            //     //     console.log(result, "final result");
            //     // }
                
            //     break; 
        }

    }
        
}

let operationsArray = Array.from(document.getElementsByClassName("operation-button"));
//console.log(operationsArray);
let calculateButton = document.getElementById("calculate");
//console.log(calculateButton, "calc button");

// for (let i = 0; i < operationsArray.length; i++) { 
//     //console.log(operationsArray[i].id);
//     console.log(i);
//     operationsArray[i].addEventListener("click", myFunc);
// }

operationsArray.forEach(function(item, i) {
    //console.log(operationsArray[i]);
    operationsArray[i].addEventListener("click", updateResult);
});

function clickCalculateButton() {
    calculateButton.addEventListener("click", showResult);
}

function showResult() {
    document.getElementById("result").value = result;
    console.log(result, "final result");
}


//myId.addEventListener("click", myFunc);

// function myFunc() {
//     console.log("event listener added");
//     //rewrite result
//     //clean input up
// }

