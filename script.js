const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculoNum1");
const input2 = document.querySelector("#calculoNum2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

btn.addEventListener('click', btnOnClick)

function btnOnClick() {
  const sumaInputs = parseFloat(input1.value) + parseFloat(input2.value);
  pResult.innerText = "Resultado: " + sumaInputs;
}
