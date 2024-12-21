let firstNumber = undefined;
let secondNumber = undefined;
let operator = () => "none";
//let isFirst = true;
//let isSecond = false;

const screen = document.querySelector(".screen");
screen.textContent = 0;

const reset = document.querySelector(".ac");
reset.addEventListener("click", () => {
  screen.textContent = "0";
  firstNumber = undefined;
  secondNumber = undefined;
  operator = () => "none";
});

const back = document.querySelector(".back");
back.addEventListener("click", () => {
  if (screen.textContent.length == 2 && screen.textContent[0] == "-") {
    screen.textContent = "0";
  } else if (screen.textContent.length >= 2) {
    screen.textContent = screen.textContent.slice(0, -1);
  } else {
    if (screen.textContent != "0") {
      screen.textContent = "0";
      secondNumber = undefined;
    }
  }
});

const percent = document.querySelector(".percent");
percent.addEventListener("click", () => {
  screen.textContent = Number(screen.textContent) / 100;
});

const zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
  createNumber("0");
});

const one = document.querySelector(".one");
one.addEventListener("click", () => {
  createNumber("1");
});

const two = document.querySelector(".two");
two.addEventListener("click", () => {
  createNumber("2");
});

const three = document.querySelector(".three");
three.addEventListener("click", () => {
  createNumber("3");
});

const four = document.querySelector(".four");
four.addEventListener("click", () => {
  createNumber("4");
});

const five = document.querySelector(".five");
five.addEventListener("click", () => {
  createNumber("5");
});

const six = document.querySelector(".six");
six.addEventListener("click", () => {
  createNumber("6");
});

const seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
  createNumber("7");
});

const eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
  createNumber("8");
});

const nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
  createNumber("9");
});

const plusMinus = document.querySelector(".plusMinus");
plusMinus.addEventListener("click", () => {
  let str = screen.textContent;

  if (str == "0") return;
  if (str[0] == "-") {
    screen.textContent = str.slice(1);
  } else {
    screen.textContent = "-" + str;
  }
});

const dot = document.querySelector(".dot");
dot.addEventListener("click", () => {
  if (!screen.textContent.includes(".")) screen.textContent += ".";
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  countResult();
});

const divide = document.querySelector(".divide");
divide.addEventListener("click", () => {
  operator = divideFn;
  firstNumber = Number(screen.textContent);
  secondNumber = undefined;
});

const multiply = document.querySelector(".multiply");
multiply.addEventListener("click", () => {
  operator = multiplyFn;
  firstNumber = Number(screen.textContent);
  secondNumber = undefined;
});

const subtract = document.querySelector(".subtract");
subtract.addEventListener("click", () => {
  operator = subtractFn;
  firstNumber = Number(screen.textContent);
  secondNumber = undefined;
});

const add = document.querySelector(".add");
add.addEventListener("click", () => {
  operator = addFn;
  firstNumber = Number(screen.textContent);
  secondNumber = undefined;
});

function createNumber(num) {
  if (operator() == "none") {
    //if (firstNumber == undefined) {
    if (screen.textContent == "0") {
      screen.textContent = num;
    } else {
      screen.textContent += num;
    }
  } else {
    if (secondNumber == undefined) {
      screen.textContent = num;
      secondNumber = Number(screen.textContent);
    } else {
      screen.textContent += num;
    }
  }
}

function countResult() {
  if (operator() != "none") {
    secondNumber = Number(screen.textContent);
    screen.textContent = Number(
      operator(firstNumber, secondNumber).toFixed(16)
    );
    operator = () => "none";
  }
}

const addFn = (a, b) => a + b;
const subtractFn = (a, b) => a - b;
const multiplyFn = (a, b) => a * b;
const divideFn = (a, b) => a / b;
