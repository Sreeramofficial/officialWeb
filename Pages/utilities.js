// Function to handle form submission and update the <p> tag
function handleFormSubmission(event) {
    // event.preventDefault(); // Prevents the form from being submitted in the traditional way
    addbreak();
  
    var name = document.getElementById("inputEmail4").value;
    var email = document.getElementById("inputPassword4").value;
    var subscribeCheckbox = document.getElementById("gridCheck");
    var isarraychecked = document.getElementById("arrayCheck");

    if(subscribeCheckbox.checked){
        email='"'+email+'"';
        isSubscribed=false;
    }
    if(isarraychecked){
        handleArray();
    }

    handlejson(name,email);

  

     addFinalString();

}

// Attach the function to the form's submit event when the DOM is fully loaded
window.onload = function() {
    document.getElementById("myForm").addEventListener("submit", handleFormSubmission);
};


function handlejson(name,email){


  
    if(document.getElementById("output").textContent=="please validate json"){
        addInitialStringString();
    
        

    }
    else{
        var val=document.getElementById("output").textContent;
        var updatedString = val.slice(0, -1);
        updatedString=updatedString+ ",";

        document.getElementById("output").textContent=updatedString;


    }


    document.getElementById("output").textContent =
    document.getElementById("output").textContent+
   '" '+name + ":" + '"'+email+'"' ;
   







}
function handleclear(){
    document.getElementById("output").textContent="please validate json";

}

function addInitialStringString(){
    document.getElementById("output").textContent ="{ ";
 


}

    function addFinalString(){
    
        

        document.getElementById("output").textContent =
        document.getElementById("output").textContent + " }";

    }

    function handleArray(){

    }


    

function addbreak(){
    var paragraph = document.getElementById("output");
    paragraph.innerHTML += "<br>";

}