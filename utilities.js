function handleFormSubmission(event) {
  event.preventDefault();

  var key = document.getElementById("key").value;
  var value = document.getElementById("value").value;
  var isArrayStart = document.getElementById("startArray");
  var subscribeCheckbox = document.getElementById("gridCheck");
  var isArrayEnd = document.getElementById("isarraychecked");
  var isRandomText = document.getElementById("randomText");
  var isRandomNumbers = document.getElementById("randomNumbers");
  if (isRandomText.checked || isRandomNumbers.checked) {
    value = handleCheckBox(isRandomText, isRandomNumbers);
  }

  checkIsEmpty(key, value);
}
window.onload = function () {
  document
    .getElementById("myForm")
    .addEventListener("submit", handleFormSubmission);
};
function checkIsEmpty(name, email) {
  if (document.getElementById("output").textContent == "please validate json") {
    document.getElementById("output").innerHTML =
      "{<br> " + '"' + name + '"' + ":" + '"' + email + '"' + "<br>}";
  } else {
    handleJson(name, email);
  }
}
function handleJson(name, email) {
  var text = document.getElementById("output").innerHTML.replace("}", "");

  document.getElementById("output").innerHTML =
    "<br>" +
    text +
    ",<br>" +
    '"' +
    name +
    '"' +
    " : " +
    '"' +
    email +
    '"' +
    "<br> } ";
}
function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
function generateRandomNumbers(length) {
  const characters = "123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
function handleCheckBox(isRandomText, isRandomNumbers) {
  if (isRandomText.checked || isRandomNumbers.checked) {
    if (isRandomText.checked) {
      return generateRandomString(10);
      document.getElementById("randomText").value = false;
    } else {
      return generateRandomNumbers(10);
      document.getElementById("randomNumbers").value = false;
    }
  }
  return value;
}
