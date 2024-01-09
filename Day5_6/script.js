const firebaseConfig = {
    apiKey: "AIzaSyDfy8Pqr6xBpDXMlNp5LPiJs1lsLQHn0mY",
    authDomain: "e-commerce-website-a69f2.firebaseapp.com",
    databaseURL: "https://e-commerce-website-a69f2-default-rtdb.firebaseio.com",
    projectId: "e-commerce-website-a69f2",
    storageBucket: "e-commerce-website-a69f2.appspot.com",
    messagingSenderId: "852324715405",
    appId: "1:852324715405:web:d5d3a931c6db6b622a8bc4",
    measurementId: "G-8TR0304LJV"
  };
  
firebase.initializeApp(firebaseConfig);
 
let messagesRef = firebase.database().ref('Collected Data');
   
document.getElementById('productForm').addEventListener('submit', submit);

  function submit(e) {
      e.preventDefault();
      let product_name = getInputVal('name');
      let price = getInputVal('price');
      let link = getInputVal('link');
      saveMessage(product_name, price,link);
      document.getElementById('productForm').reset();
  }

  function saveMessage(product_name, price,link) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        product_name: product_name,
        price: price,
        link: link,
    });
}

let cartCount =0;
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let cartCountElement = document.querySelector('cart-count');
let cartIcon = document.querySelector(".cart-icon");
let closeCart = document.querySelector(".close");
let body = document.querySelector('.body');
let products = [];

function validateLogin() { 
    var email = document.getElementById("email");
    var pass=document.getElementById("password");
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(!regex.test(email.value)) {
        alert("Please enter a valid Email Id");
        return false;
    } else if (pass.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    } else {
        alert("Login validation passed!");
        window.location.href = "E-commerce.html";
        return true;
    }
}

function validateproduct() { 
    var product_name = document.getElementById("name");
    var price=document.getElementById("price");
    var link=document.getElementById("link");
    if(product_name.value== " " || price== " " || link== " ") {
        alert("Please enter a detail");
        return false;
    } else {
        alert("Add product succesfully!");
        window.location.href = "product.html";
        return true;
    }
}

cartIcon.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

const addDataToHTML = () => {
    if(products.length > 0)
    {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.dataset.id = product.id;
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button class="addCart">Add To Cart</button>`;
            listProductHTML.appendChild(newProduct);
        });
    }
}


// function updateCartCount() {
//     cartCountElement.textContent = cartCount;
// }
