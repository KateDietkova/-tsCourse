// @ts-ignore
const button = document.querySelector("button");
// @ts-ignore
const input1 = document.getElementById("num1")! as HTMLInputElement;
// @ts-ignore
const input2 = document.getElementById("num2")! as HTMLInputElement;

// @ts-ignore
function add(num1: number, num2: number) {
  return num1 + num2;
}

// @ts-ignore
button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
