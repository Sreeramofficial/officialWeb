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

  var name = document.getElementById("inputEmail4").value;
  var email = document.getElementById("inputPassword4").value;
  var subscribeCheckbox = document.getElementById("gridCheck");
  var isarraychecked = document.getElementById("arrayCheck");
  checkIsEmpty(name, email, isarraychecked);
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
