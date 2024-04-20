function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    myFunctionforButton()

    

  } 

  function myFunctionforButton() {
    var x = document.getElementById("hideButton1");
console.log("dosabled")
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function scrollToTop() {
    $(window).scrollTop(0);
}





function showUpdationStatus() {
  var x = document.getElementById("showUpdation");
  var y = document.getElementById("updateButton");
 
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.backgroundColor="red";
    y.textContent="CLOSE UPDATION STATUS";


    
  } else {
    x.style.display = "none";
    y.textContent="SHOW UPDATION STATUS";
    y.style.backgroundColor="#17a2b8"

   
  }
  

  

  
}





