function handleFormSubmission(event) {
  event.preventDefault();

  var key = document.getElementById("key").value;
  var value = document.getElementById("value").value;
  var isArrayStart = document.getElementById("startArray");
  var subscribeCheckbox = document.getElementById("gridCheck");
  var isArrayEnd = document.getElementById("isarraychecked");
  var isRandomText = document.getElementById("inputforcheck1");
  var isRandomNumbers = document.getElementById("inputforcheck2");
  var precision;
  if (isRandomText.checked || isRandomNumbers.checked) {
   
    precision = document.getElementById("valueForInput").value;
    console.log(precision);
     value = handleCheckBox(isRandomText, isRandomNumbers,precision);
  }

  checkIsEmpty(key, value);
}
window.onload = function () {
  document
    .getElementById("myForm")
    .addEventListener("submit", handleFormSubmission);
};
function checkIsEmpty(name, email) {
  if (document.getElementById("output").textContent == "PLEASE ADD NEW JSON") {
    document.getElementById("outputTitle").innerHTML = "Your JSON Is";

    document.getElementById("output").innerHTML =
      "{<br> " + '"' + name + '"' + ":" + '"' + email + '"' + "<br>}";
  } else {
    handleJson(name, email);
  }
}
function handleJson(name, email) {
  var text = document.getElementById("output").innerHTML.replace("}", "");
  document;

  document.getElementById("output").innerHTML =
    text + ",<br>" + '"' + name + '"' + " : " + '"' + email + '"' + "<br> } ";
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
function handleCheckBox(isRandomText, isRandomNumbers,precision) {
  console.log("pre "+precision)
  precision=precision==null?2:precision;
  if (isRandomText.checked || isRandomNumbers.checked) {
    if (isRandomText.checked) {
      return generateRandomString(precision);
      document.getElementById("randomText").value = false;
    } else {
      return generateRandomNumbers(precision);
      document.getElementById("randomNumbers").value = false;
    }
  }
  return value;
}
function clearJson(event) {
  event.preventDefault();
  document.getElementById("outputTitle").innerHTML = null;
  document.getElementById("output").innerHTML = "PLEASE ADD NEW JSON";
}
function displayPrecisionBox() {
  console.log("methods call")


  var styles= document.getElementById("valueForInput");

  if (
    document.getElementById("inputforcheck1").checked == true ||
    document.getElementById("inputforcheck2").checked == true
  ) {
    styles.style.display = "block";
  } else {
    styles.style.display = "none";
  }
}
