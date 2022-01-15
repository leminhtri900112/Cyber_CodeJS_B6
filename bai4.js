function id(id) {
  return document.getElementById(id);
}
var divResult = id("divResultBai4");
var form = id("formbai4");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  calculate(10);
});

function calculate(number) {
  var innerDiv = "";
  for (var index = 1; index <= number; index++) {
    if (index % 2 == 0) {
      innerDiv +=
        "<div style='background-color: red;color:white'>" + index + "</div>";
    } else {
      innerDiv +=
        "<div style='background-color: green;color:white'>" + index + "</div>";
    }
  }
  divResult.innerHTML = innerDiv;
}
