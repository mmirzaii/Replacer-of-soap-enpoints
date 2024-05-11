let input = document.querySelector("#input");
let output = document.querySelector("#output");
let btn = document.querySelector("#btn");
let inputText = "";

function generateRegexAndReplace(inputText) {
  let regex = /<tem:(.*?)>(.*?)<\/tem:(.*?)>/g;
  let result = inputText.replace(regex, function (match, p1) {
    return "<tem:" + p1 + ">{#request.params['" + p1 + "']}</tem:" + p1 + ">";
  });
  result = result.replace(/\s/g, "");
  return result;
}
// Put the input values ​​into the variable
input.addEventListener("input", (e) => {
  inputText = e.target.value;
});
// with click replace
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputText.length == 0) {
    alert("The field must not be empty");
  }
  output.innerHTML = generateRegexAndReplace(inputText);
});
// with press enter replace
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    output.innerHTML = generateRegexAndReplace(inputText);
  }
});
// change title
window.onblur = function () {
  document.title = "Dont you have soap anymore?";
};
window.onfocus = function () {
  document.title = "So you still have a job";
};
