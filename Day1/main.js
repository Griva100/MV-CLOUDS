// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBr8zp7e2lrXAoCysKk_auVwlvE5WPWe48",
    authDomain: "form-833ec.firebaseapp.com",
    databaseURL: "https://form-833ec-default-rtdb.firebaseio.com",
    projectId: "form-833ec",
    storageBucket: "form-833ec.appspot.com",
    messagingSenderId: "953248817736",
    appId: "1:953248817736:web:5aa6b43fc448e001eb6e7d",
    measurementId: "G-8NRCN0M1N6"
  };

  const app=initializeApp(firebaseConfig);
  
  // Reference messages collection
  const db=getDatabase(app);
//   var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('submit').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var firstname = getInputVal('firstname');
    var lastname = getInputVal('lastname');
    var email = getInputVal('email');
    var password = getInputVal('password');
    var confirmpassword = getInputVal('confirm-password');
    var gender = getInputVal('gender');
    var hobbies = getInputVal('hobbies');
    var source = getInputVal('source');
    var income = getInputVal('income');
    var picture = getInputVal('picture');
    var age = getInputVal('age');
    var bio = getInputVal('bio');
  
    // Save message
    saveMessage(firstname, lastname, email,password,confirmpassword,gender,hobbies,source,income,picture,age,bio);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('signupform').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(firstname, lastname, email, password, confirmpassword,gender,hobbies,source,income,picture,age,bio){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password,
        confirmpassword:confirmpassword,
        gender:gender,
        hobbies:hobbies,
        source:source,
        income:income,
        picture:picture,
        age:age,
        bio:bio
    });
  }