
const buttons = document.querySelectorAll('[data-number]');
const sings = document.querySelectorAll('[data-sing]');
const currentOutput = document.querySelector('.currentInput');

let a = '';
let b = '';
let operator = '';

// setting values for A and B
buttons.forEach(button =>
    button.addEventListener('click', function (){
        const number = button.dataset.number;
        if (operator === ''){
            a += `${number}`;
        } else {
            b +=  `${number}`;
        }
        updateCurrentOutput();
    })
);


// setting value for sing
sings.forEach(sing =>
    sing.addEventListener('click', function(){
        const singNow = sing.dataset.sing;
        if(a !== ''){
            operator = `${singNow}`;
        }
        updateCurrentOutput();
    })
);

// function to update display
function updateCurrentOutput (){
    currentOutput.textContent = `${a}  ${operator}  ${b}`;
};

//function for deletting everything
    const clearAll = document.getElementById('delete');
clearAll.addEventListener('click', function(){
    a = '';
    b = '';
    operator= '';
    currentOutput.textContent = '';
    prevOutput.textContent = '';
});
 
//function for deletting one symbol
    const clearOne = document.getElementById('deleteOne');
clearOne.addEventListener('click', function(){
    if(operator === ''){
        a = a.slice(0, -1);
    }else if(a!=='' && b === ''){
        operator = operator.slice(0, -1)
    }else if(a!== '' && operator !== ''){
        b = b.slice(0, -1);
    }
    updateCurrentOutput();
});

//function that will count
   const equal = document.getElementById('equal');
   const prevOutput = document.querySelector('.previousInput');
   equal.addEventListener('click', function(){
    let newA = Number(a);
    let newB = Number(b);
    switch(operator) {
        case '+':
            result = add(newA, newB);
            break;
        case '-':
            result = subtract(newA, newB);
            break;
        case 'x':
            result = multiply(newA, newB);
            break;
        case '/':
            result = divide(newA, newB);
            break;
        case '%':
           if(a !== '' && b === ''){
                let newB = 1;
              result =  ((newA/100)*newB);
            //    result = onePercent
            } 
            // else if(a!=='' && operator!=='' && b!==''){
            //     let b = `b + %`;
            //     result = `${newA} ${operator}` ((b/a)*100) 
            // }
           
    }
    a = String(result);
    operator = '';
    b = '';
    prevOutput.textContent = currentOutput.textContent;
    currentOutput.textContent = result;
});
    