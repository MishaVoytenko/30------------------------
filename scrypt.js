let a = 0.1;
let b = 0.2;
// let sum = a + b;
// console.log(sum);

let x = "1";
let y = 2;
let sum = +x + 2;
console.log(sum);

let size = prompt("вкажіть об'єм флешки у Гб");
let files = (size * 1024) / 820;
alert(files);

let cash = prompt("введіть суму грошей");
let chocolets = prompt("введіть ціну однієї шоколадки");
let amount = Math.floor(cash / chocolets);
alert(amount);
let surrender = cash - chocolets * amount;
alert(surrender);

let number = prompt("уведіть тризначне число");
let firstResult = number % 10;
console.log(firstResult);
let secondNumber = Math.floor(number / 10);
console.log(secondNumber);
let secondResult = secondNumber % 10;
console.log(secondResult);
let thirdNumber = Math.floor(number / 100);
console.log(thirdNumber);
let thirdResult = thirdNumber % 10;
console.log(thirdResult);
let result = " " + firstResult + secondResult + thirdResult;
alert(result);

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
