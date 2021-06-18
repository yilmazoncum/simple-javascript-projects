const screen = document.querySelector('.calculator-input');
const keys = document.querySelector('.keys');

let displayValue = '0';
let temp1 = '0';
let operator;



updateScreen();

keys.addEventListener('click',function (e) {
    console.log(e.target);

    if (!e.target.matches('button')) return;

        
    if(e.target.classList.contains('operator')){
        temp1 = parseFloat(displayValue);
        console.log(`temp1 = ${temp1}`);
        displayValue = ' '; 
        operator = e.target.value;
    return;
    }

    if(e.target.classList.contains('decimal')){
        if (!displayValue.includes('.')) {
            displayValue += '.';
        }
        updateScreen();
    return;
    }

    if(e.target.classList.contains('clear')){
        displayValue = '0';
        displayValue = ' '; 

        updateScreen();
    return;  
    }
    if(e.target.classList.contains('equal-sign')){
        calculate(parseFloat(displayValue));
        updateScreen(); 
    return;   
    }

    //geri kalan number
    displayValue = displayValue === '0'? e.target.value:displayValue +e.target.value ;
    updateScreen();
});

function updateScreen() {
    screen.value = displayValue;
}

function calculate(temp2) {
if(operator === '+'){
    displayValue = temp1 + temp2 ;
}
if(operator === '-'){
    displayValue = temp1 - temp2 ;
}
if(operator === '*'){
    displayValue = temp1 * temp2 ;
}
if(operator === '/'){
    displayValue = temp1 / temp2 ;
}
   
}
