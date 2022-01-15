function id(id) {
  return document.getElementById(id);
}

var inputN = id("input_N");
var divResult = id("divResultBai3");
var form = id("formbai3");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  calculate();
});

function calculate() {
  var valueN = inputN.value * 1;
  var totalS = 1;
  for (var index = 1; index <= valueN; index++) {
    totalS *= index;
  }
  render("Số nguyên dương nhỏ nhất tìm được là: ", totalS);
}

function render(message, result) {
  divResult.innerHTML = message + result;
  divResult.style.backgroundColor = "green";
  divResult.style.color = "white";
}
