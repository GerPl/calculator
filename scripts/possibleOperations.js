function add (a, b){
    return (a + b)
};

function subtract (a, b){
    return (a - b)
};

function multiply (a, b){
    return (a * b)
};

function divide (a, b){
    if(b === 0){
        return "ERROR"
    }
    return (a / b)
};

function percentage (a, b){
   if(a!=='' && operator === '' && b === ''){
    let b = 1;
    return (a / 100)*b;
   }
};