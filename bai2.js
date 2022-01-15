function id(id) {
  return document.getElementById(id);
}

var inputX = id("inputX");
var inputN = id("inputN");
var divResult = id("divResultBai2");
var form = id("formbai2");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  calculate();
});

function calculate() {
  var valueX = inputX.value * 1;
  var valueN = inputN.value * 1;
  var totalS = 0;

  for (var index = 1; index <= valueN; index++) {
    totalS += Math.pow(valueX, index);
  }
  render("Số nguyên dương nhỏ nhất tìm được là: ", totalS);
}

function render(message, result) {
  divResult.innerHTML = message + result;
  divResult.style.backgroundColor = "green";
  divResult.style.color = "white";
}
