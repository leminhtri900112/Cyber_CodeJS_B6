function id(id) {
  return document.getElementById(id);
}

var inputN = id("inputNumber");
var divResult = id("divResultBai5");
var form = id("formbai5");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  handle();
});

function handle() {
  var valueN = inputN.value * 1;
  var numberString = "";
  for (var index = 2; index <= valueN; index++) {
    if (checkNumber(index)) {
      numberString += index + " ";
    }
  }
  divResult.innerHTML = numberString;
  divResult.style.backgroundColor = "green";
  divResult.style.color = "white";
}

function checkNumber(n) {
  for (var i = 2; i < n - 1; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
