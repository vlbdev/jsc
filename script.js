let firstNumber = "0";

const screen = document.querySelector(".screen");
screen.textContent = firstNumber;

const reset = document.querySelector(".ac");
reset.addEventListener("click", () => {
  firstNumber = "0";
  screen.textContent = "0";
});

const back = document.querySelector(".back");
back.addEventListener("click", () => {
  screen.textContent = "";
});

const percent = document.querySelector(".percent");
percent.addEventListener("click", () => {
  screen.textContent = "%";
});

const divide = document.querySelector(".divide");
divide.addEventListener("click", () => {});

const multiply = document.querySelector(".multiply");
multiply.addEventListener("click", () => {});

const subtract = document.querySelector(".subtract");
subtract.addEventListener("click", () => {});

const add = document.querySelector(".add");
add.addEventListener("click", () => {});

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
plusMinus.addEventListener("click", () => {});

const dot = document.querySelector(".dot");
dot.addEventListener("click", () => {});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {});

function createNumber(num) {
  if (firstNumber == 0) {
    firstNumber = num;
  } else {
    firstNumber += num;
  }
  screen.textContent = firstNumber;
}
