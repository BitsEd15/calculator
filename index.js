let concatNumber = '0'
let number = null
let operator = null
let display = document.querySelector('.calculator__display-content')

const numberButtons = document.querySelectorAll('.g-button--number')
function numberClick(click) {
    let digit = click.target.textContent
    if (concatNumber === "0") {
        concatNumber = digit
    }
    else {
        concatNumber += digit
    }
    display.textContent = concatNumber;
}
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', numberClick)
}

const operatorButtons = document.querySelectorAll('.calculator__buttons-operators')
function operatorClick(oper) {
    let symbol = oper.target.textContent;
    number = concatNumber;
    operator = symbol;
    concatNumber = '0'
    display.textContent = number
}
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', operatorClick)
}

function equalsClick() {
    if (operator === null) {
        return;
    }
    let num1 = +number;
    let num2 = Number(concatNumber);
    let result = null
    if (operator === "+") {
        result = num1 + num2
    }
    else if (operator === "-") {
        result = num1 - num2
    }
    else if (operator === "*") {
        result = num1 * num2
    }
    else if (operator === "/") {
        result = num1 / num2
    }
    concatNumber = String(result);
    display.textContent = concatNumber;
    number = null;
    operator = null;
}
const equalsButton = document.querySelector('.calculator__buttons-equal')
equalsButton.addEventListener('click', equalsClick)

function clear() {
    concatNumber = '0';
    number = null;
    operator = null;
    display.textContent = '0';
}
const clearButton = document.querySelector('.calculator__buttons-clear')
clearButton.addEventListener('click', clear)

function negative() {
    if (concatNumber !== '0') {
        concatNumber = +concatNumber * -1
        concatNumber = String(concatNumber)
        display.textContent = concatNumber;
    }
}
const negativeButton = document.querySelector('.calculator__buttons-negative')
negativeButton.addEventListener('click', negative)

const commaButton = document.querySelector('.calculator__buttons-comma')
function comma() {
    if (concatNumber.includes('.')) {
        return;
    }
    else if (concatNumber === '0') {
        concatNumber = '0.'
    }
    else {
        concatNumber += '.'
    }
    display.textContent = concatNumber;
}
commaButton.addEventListener('click', comma)

const percentButton = document.querySelector('.calculator__buttons-percent')
function percentbut() {
    if (operator === null) {
        let newValue = +concatNumber / 100;
        concatNumber = String(newValue);
        display.textContent = concatNumber;
        return;
    }

}
percentButton.addEventListener('click', percentbut)

const svgButton = document.querySelector('.calculator__buttons-image')
function svgClick() {
    display.textContent = "Я сам не знаю что это"
}
svgButton.addEventListener('click', svgClick)