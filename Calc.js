var a;
var b;
var operation;

function init () {
    var result = document.getElementById("result");
    var clear = document.getElementById("clear");
    var add = document.getElementById("add");
    var substract = document.getElementById("substract");
    var multiply = document.getElementById("multiply");
    var equal = document.getElementById("equal");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var zero = document.getElementById("zero");
    var back = document.getElementById("back");
    var dot = document.getElementById("dot");


    dot.onclick = function(e) {
    result.textContent = result.textContent + "."
    }

    back.onclick = function(e) {
        deletion();
    }
    one.onclick = function(e) {
        result.textContent = result.textContent + "1"
    }
    two.onclick = function(e) {
        result.textContent = result.textContent + "2"
    }
    three.onclick = function(e) {
        result.textContent = result.textContent + "3"
    }
    four.onclick = function(e) {
        result.textContent = result.textContent + "4"
    }
    five.onclick = function(e) {
        result.textContent = result.textContent + "5"
    }
    six.onclick = function(e) {
        result.textContent = result.textContent + "6"
    }
    seven.onclick = function(e) {
        result.textContent = result.textContent + "7"
    }
    eight.onclick = function(e) {
        result.textContent = result.textContent + "8"
    }
    nine.onclick = function(e) {
        result.textContent = result.textContent + "9"
    }
    zero.onclick = function(e) {
        result.textContent = result.textContent + "0"
    }
    clear.onclick = function(e) {
        clearr();
    }
    add.onclick = function(e) {
        a = result.textContent;
        operation = "+";
        clearr();
    }
    substract.onclick = function(e) {
        a = result.textContent;
        operation = "-";
        clearr();
    }
    multiply.onclick = function(e) {
        a = result.textContent;
        operation = "*";
        clearr();
    }
    divide.onclick = function(e) {
        a = result.textContent;
        operation = "/";
        clearr();
    }
    equal.onclick = function(e) {
        b = result.textContent;
        solve();
    }
}


function deletion() {
    a = result.textContent;
    result.textContent = a.substring(0,a.length-1)
}

function clearr() {
    result.textContent = "";
}

function reset() {
    result.textContent = "";
    a = 0;
    b = 0;
    operation = "";
}


function solve() {
    var sol = 0;
    switch(operation) {
        case "+":
            sol = parseFloat(a) + parseFloat(b);
            break;
        case "-":
            sol = parseFloat(a) - parseFloat(b);
            break;
        case "*":
            sol = parseFloat(a) * parseFloat(b);
            break;
        case "/":
            sol = parseFloat(a) / parseFloat(b);
            break;
    }
        reset();
        result.textContent = sol; 
}

    