function id(id) {
  return document.getElementById(id);
}

var divResult = id("divResultBai1");
var form = id("formbai1");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  calculate(1000);
});

function calculate(number) {
  var total = 0;
  var index = 0;
  while (total <= number) {
    index++;
    total = total + index;
  }
  //   console.log(index);
  render("Số nguyên dương nhỏ nhất tìm được là: ", index);
}

function render(message, result) {
  divResult.innerHTML = message + result;
  divResult.style.backgroundColor = "green";
  divResult.style.color = "white";
}
