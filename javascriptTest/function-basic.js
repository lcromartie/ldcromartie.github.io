window.onload = () => {
    const simpleFunction = document.getElementById('simple-function')
    const functionCalls = document.getElementById('function-calls');

    function simpleFunction() {
        console.log('simple-function');
        simpleFunction.textContent = "functions should consist of statements designed to perform a single task";

    function functionParameters() {
        console.log('function-parameters');
        functionParameters.textContent = "Many functions take parameters"
    }
    
    function functionReturn() {
        console.log('function-returns');
        functionReturns.textContent = "Many functions return values";
    }

        
        functionCalls.onclick = simpleFunction;
            
            }
}

