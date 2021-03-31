//parent :
let calculator = document.querySelector(".calculator");

// result field :
const result_field = document.querySelector(".input .result");
const sub_operation = document.querySelector(".sub_operation");

// controllers :
const buttons = document.querySelectorAll(".btn");
const return__ = document.querySelector(".return");
const equal = document.querySelector(".equal");
const AC = document.querySelector(".AC");
let text = "";

// history :
let history_target = document.querySelector(".history");
let history = [];

// turn the buttons number :
buttons.forEach((ELM) => {
  ELM.addEventListener("click", function () {
    text += this.innerText;
    sub_operation.textContent = text;
  });
});

// get result :
equal.addEventListener("click", function () {
  try {
    history.push(text);
    with (Math) {
      text = eval(text);
    }
    result_field.innerHTML = eval(text);
    console.log(history);
  } catch (SyntaxError) {
    alert("Your Enter Operator error !");
    result_field.innerHTML = "";
    sub_operation.textContent = "";
    text = "";
  }
});

// reset calc :
AC.addEventListener("click", function () {
  result_field.innerHTML = "";
  sub_operation.textContent = "";
  text = "";
});

// delete last item in calc :
return__.addEventListener("click", function () {
  text = text.slice(0, -1);
  sub_operation.textContent = text;
});

// render the history container :

let _interface = document.querySelector("body > main > div.interface");
let history_container = document.querySelector(".history_container");
let history_content = document.querySelector(".history_container .content");

// functionality for the history button :
history_target.addEventListener("click", () => {
  let old_height = calculator.offsetHeight + "px";
  let old_width = calculator.offsetWidth + "px";
  calculator.style.height = old_height;
  calculator.style.width = old_width;
  let counter = 1;
  history_content.innerHTML = "";
  history_container.classList.toggle("hidden");
  _interface.classList.toggle("hidden");
  history.forEach((element) => {
    history_content.innerHTML += `<h3>${counter}) ${element} = ${eval(
      element
    )}</h3>`;
    counter += 1;
  });
});
document.querySelector(".to_calc").addEventListener("click", function () {
  _interface.classList.toggle("hidden");
  history_container.classList.toggle("hidden");
});

// clear memory and calc function :
let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  history = [];
  result_field.innerHTML = "";
  sub_operation.textContent = "";
  text = "";
});

// trigonometry functions:
let tri = document.querySelector(".tri");
tri.addEventListener("click", () => {
  calculator.style.height = "unset";
  calculator.style.width = "unset";
  document.querySelectorAll(".numbers .advanced").forEach((element) => {
    element.classList.toggle("hidden");
  });
});
