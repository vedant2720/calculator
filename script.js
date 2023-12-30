var display = document.getElementById('display-text');
var AC_butt=document.getElementById('AC');
var buttons = document.getElementsByTagName('button');
var op1 = null;
var op2 = null;
var operator = null;

function eval(a, op, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    if (isNaN(a) || isNaN(b)) {
        display.innerText = "Error: Invalid input";
        return;
    }

    switch (op) {
        case "+":
            display.innerText = a + b;
            break;
        case "-":
            display.innerText = a - b;
            break;
        case "*":
            display.innerText = a * b;
            break;
        case "/":
            if (b === 0) {
                display.innerText = "Error: Can't Divide by zero";
            } else {
                display.innerText = a / b;
            }
            break;
        default:
            display.innerText = "Error: Unknown operator";
    }
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
    var buttonValue = event.target.getAttribute('value');
    AC_butt.innerText="C";

    if (buttonValue === "=") {
        op2 = display.innerText;
        eval(op1, operator, op2);
        op1 = null;
        op2 = null;
        operator = null;
    } else if (buttonValue === "*" || buttonValue === "-" || buttonValue === "+" || buttonValue === "/") {
        op1 = display.innerText;
        operator = buttonValue;
        display.innerText = "";
    } else if (buttonValue >= '0' && buttonValue <= '9' || buttonValue===".") {
        display.innerText += buttonValue;
    } else if (buttonValue === "AC") {
        AC_butt.innerText="AC";
        display.innerText = "";
        op1 = null;
        op2 = null;
        operator = null;
    } else if (buttonValue === "+/-") {
        display.innerText = (-1 * parseFloat(display.innerText));
    } else if (buttonValue === "%") {
        display.innerText = (parseFloat(display.innerText) / 100);
    }
    });
}







