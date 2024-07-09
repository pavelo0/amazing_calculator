const BUTTON_TYPES = {
    OPERATOR: 'operator',
    OPERAND: 'operand',
    EQUAL: 'equal',
    CLEAR_ALL: 'clear_all',
    DECIMAL_SEPARATOR: 'decimal_separator',
};
const OPERATION_TYPES = {
    SUM: 'sum',
    DIF: 'dif',
    MUL: 'mul',
    DIV: 'div',
};
const calculatorState = {
    displayValue: '0', 
    firstOperand: null,
    operatorType: null,
    diciminal_separator: null,
    result: 0,
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
function makeOperation(operatorType, firstOperand, secondOperand) {
    switch(operatorType) {
        case OPERATION_TYPES.SUM:
            return firstOperand + secondOperand;
        case OPERATION_TYPES.DIF:
            return firstOperand - secondOperand;
        case OPERATION_TYPES.MUL:
            return firstOperand * secondOperand;
        case OPERATION_TYPES.DIV:
            return firstOperand / secondOperand;
    }
}

function main() {
    const display = document.querySelector('.input');
    const ACButton = document.querySelector('.decorations')
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
        } else if(buttonType === BUTTON_TYPES.OPERATOR) {
            calculatorState.diciminal_separator = null;
            if(calculatorState.operatorType !== null) {
                calculatorState.result = makeOperation(calculatorState.operatorType, calculatorState.firstOperand, Number(calculatorState.displayValue));
                calculatorState.firstOperand = calculatorState.result;
            } else {
                calculatorState.firstOperand = Number(calculatorState.displayValue);
            }
            calculatorState.operatorType = event.target.value;
            calculatorState.displayValue = '0';
            showDisplayValue(calculatorState.result, display);
            console.log(calculatorState);
        } else if(buttonType === BUTTON_TYPES.EQUAL) {
            calculatorState.result = makeOperation(calculatorState.operatorType, calculatorState.firstOperand, Number(calculatorState.displayValue));
            showDisplayValue(calculatorState.result, display);
            console.log(calculatorState);
        } else if(buttonType === BUTTON_TYPES.DECIMAL_SEPARATOR) {
            if(calculatorState.diciminal_separator === null) {
                calculatorState.diciminal_separator = '.';
                console.log(calculatorState);
                calculatorState.displayValue += '.';
                showDisplayValue(calculatorState.displayValue, display);
            }
        }
    });
    ACButton.addEventListener('click', function(event) {
        const ACbuttonType = event.target.dataset.buttonType;
        if(ACbuttonType === BUTTON_TYPES.CLEAR_ALL) {
            calculatorState.displayValue = '0';
            calculatorState.firstOperand = null;
            calculatorState.operatorType = null;
            calculatorState.diciminal_separator = null;
            calculatorState.result = 0;
            showDisplayValue(calculatorState.displayValue, display);
        }
    }) 
//You can't divide by zero
    window.onload = function() {
        showDisplayValue(calculatorState.displayValue, display);
    }

}
main();
