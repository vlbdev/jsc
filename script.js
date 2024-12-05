let firstNumber = 0;

const screen = document.querySelector(".screen");
screen.textContent = firstNumber;

const reset = document.querySelector(".ac");
reset.addEventListener("click", () => {
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
zero.addEventListener("click", () => {});

const one = document.querySelector(".one");
one.addEventListener("click", () => {});

const two = document.querySelector(".two");
two.addEventListener("click", () => {});

const three = document.querySelector(".three");
three.addEventListener("click", () => {});

const four = document.querySelector(".four");
four.addEventListener("click", () => {});

const five = document.querySelector(".five");
five.addEventListener("click", () => {});

const six = document.querySelector(".six");
six.addEventListener("click", () => {});

const seven = document.querySelector(".seven");
seven.addEventListener("click", () => {});

const eight = document.querySelector(".eight");
eight.addEventListener("click", () => {});

const nine = document.querySelector(".nine");
nine.addEventListener("click", () => {});

const plusMinus = document.querySelector(".plusMinus");
plusMinus.addEventListener("click", () => {});

const dot = document.querySelector(".dot");
dot.addEventListener("click", () => {});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {});
