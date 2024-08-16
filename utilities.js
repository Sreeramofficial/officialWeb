// Function to handle form submission and update the <p> tag
// function handleFormSubmission(event) {
//     // event.preventDefault(); // Prevents the form from being submitted in the traditional way

//     var name = document.getElementById("inputEmail4").value;
//     var email = document.getElementById("inputPassword4").value;
//     var subscribeCheckbox = document.getElementById("gridCheck");
var isarraychecked = document.getElementById("arrayCheck");

//     if(subscribeCheckbox.checked){
//         email='"'+email+'"';
//         isSubscribed=false;
//     }
//     if(isarraychecked){
//         handleArray();
//     }

//     handlejson(name,email);

//      addFinalString();

// }

// // Attach the function to the form's submit event when the DOM is fully loaded
// window.onload = function() {
//     document.getElementById("myForm").addEventListener("submit", handleFormSubmission);
// };

// function handlejson(name,email){

//     }
//     else{
//         var val=document.getElementById("output").textContent;
//         var updatedString = val.slice(0, -1);
//         updatedString=updatedString+ ",";

//         document.getElementById("output").textContent=updatedString;

//     }

//     document.getElementById("output").textContent =
//     document.getElementById("output").textContent+
//    '" '+name + ":" + '"'+email+'"' ;

// }
// function handleclear(){
//     document.getElementById("output").textContent="please validate json";

// }

// function addInitialStringString(){
//     document.getElementById("output").textContent ="{ ";

// }

//     function addFinalString(){

//         document.getElementById("output").textContent =
//         document.getElementById("output").textContent + " }";

//     }

function handleFormSubmission(event) {
  event.preventDefault();

  var key = document.getElementById("inputEmail4").value;
  var value = document.getElementById("inputPassword4").value;
  var isArrayStart = document.getElementById("startArray");
  var subscribeCheckbox = document.getElementById("gridCheck");
  var isArrayEnd = document.getElementById("endArray");
  var isRandomText = document.getElementById("randomText");
  var isRandomNumbers = document.getElementById("randomNumbers");
  if (isRandomText.checked || isRandomNumbers.checked) {
    if (isRandomText.checked) {
      value = generateRandomString(10);
      document.getElementById("randomText").value = false;
    } else {
      value = generateRandomNumbers(10);
      document.getElementById("randomNumbers").value = false;
    }
  }
  console.log(document.getElementById("randomText").value);

  checkIsEmpty(key, value, isarraychecked);
}
window.onload = function () {
  document
    .getElementById("myForm")
    .addEventListener("submit", handleFormSubmission);
};
function checkIsEmpty(name, email, isarraychecked) {
  if (document.getElementById("output").textContent == "please validate json") {
    document.getElementById("output").innerHTML =
      "{<br> " + '"' + name + '"' + ":" + '"' + email + '"' + "<br>}";
  } else {
    handleJson(name, email, isarraychecked);
  }
}
function handleJson(name, email, isarraychecked) {
  console.log(document.getElementById("output").textContent.replace("}", ""));
  var text = document.getElementById("output").innerHTML.replace("}", "");
  document;
  console.log(name);
  console.log(email);
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
