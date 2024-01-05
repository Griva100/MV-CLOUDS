function validateLogin() { 
    var pass=document.getElementById("password")
   if(pass.value.length<8){
    alert("Please enter password 8 or more chracters")
   }
   else{
    
  alert("Login validation passed!");
  
  window.location.href = "2welcome.html";
   } 
}

function validateRegister() {   
    var user = document.getElementById("username");
    var pass = document.getElementById("password");
    if (pass.value.length < 8) {
    alert("Please enter password 8 or more chracters");
    } else {
    alert("Register validation passed!");
    window.location.href = "2registraionconfirm.html";
    }   
}