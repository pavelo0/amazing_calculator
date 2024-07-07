const BUTTON_TYPES = {
    OPERATOR: 'operator',
    OPERAND: 'operand',
    EQUAL: 'equal',
}
const calculatorState = {
    displayValue: '0', 
    firstOperand: null,
    operatorType: null,
    result: null,
};
function setOperand() {

}
function setOperator() {

}
function calcResult() {

}
function showDisplayValue(value, display) {
    display.value = value;
}


function main() {
    const display = document.querySelector('.input');
    const buttons = document.querySelector('.buttons');
    buttons.addEventListener('click', function(event) {
        const buttonType = event.target.dataset.buttonType;
        if(buttonType === BUTTON_TYPES.OPERAND) {
            if(calculatorState.displayValue === '0') {
                calculatorState.displayValue = event.target.value;
            } else {
                calculatorState.displayValue += event.target.value;
            }
            showDisplayValue(calculatorState.displayValue, display);
        }
    })
    window.onload = function() {
        showDisplayValue(calculatorState.displayValue, display);
    }

}
main();
