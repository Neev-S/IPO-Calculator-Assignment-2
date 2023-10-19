//IPO Calculator

//button event listener
document.getElementById("btn").addEventListener("click", btnClicked);
//Function
function btnClicked() {
  //Input
  let num1 = +document.getElementById("num1-in").value;
  let num2 = +document.getElementById("num2-in").value;

  //Process
  let total = Math.sqrt(num1 ** 2 + num2 ** 2);

  //Output
  document.getElementById("span").innerHTML = Math.round(total);
}
//Sorry for taking easy one for now. I don't have much self confidence left.
