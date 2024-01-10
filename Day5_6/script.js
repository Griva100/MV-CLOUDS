// import {initializeApp} from 'firebase/app';
// import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// import { getDatabase, ref, set, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// const firebase = require('firebase');
// const firebaseConfig = {
//     apiKey: "AIzaSyDfy8Pqr6xBpDXMlNp5LPiJs1lsLQHn0mY",
//     authDomain: "e-commerce-website-a69f2.firebaseapp.com",
//     databaseURL: "https://e-commerce-website-a69f2-default-rtdb.firebaseio.com",
//     projectId: "e-commerce-website-a69f2",
//     storageBucket: "e-commerce-website-a69f2.appspot.com",
//     messagingSenderId: "852324715405",
//     appId: "1:852324715405:web:d5d3a931c6db6b622a8bc4",
//     measurementId: "G-8TR0304LJV"
//   };
// firebase.initializeApp(firebaseConfig)

// let DB = firebase.database().ref("Data")
// addItemForm.addEventListener('submit', insert())
// function insert(e){
//     try{
//         e.preventDefault();
//     const image = document.getElementById("link").value
//     const productname = document.getElementById("name").value
//     const price =document.getElementById("price").value
    
//     let newProduct = DB.push()
//     newProduct.set({
//         image : image,
//         productname : productname,
//         price : price
//     })
//     alert("Product Uploaded Sucessfully!")
//     // location.reload()
//     }
//     catch(err){
//         console.log(err)
//         }
// }

// DB.on("value", function(snapshot) {
  
//     let Data = snapshot.val()
//     for (let key in Data) {
//       let product = Data[key]
//          let image = document.getElementById("link")
//          let price = document.getElementById("price")
//          let name = document.getElementById("name")
//          image.src = product["image"].toString()
//          price.innerText = "₹" + product["price"]
//          name.innerText = product["productname"]
//     }
//  }, function (error) {
//     console.log("Error: " + error.code);
//  });


// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();
// const itemsRef = database.ref('items');

// const addItemForm = document.getElementById('productForm');
// const itemsList = document.getElementById('itemsList');

// addItemForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     // Get values from the form
//     const itemName = document.getElementById('name').value;
//     const itemPrice = document.getElementById('price').value;
//     const itemImage = document.getElementById('link').value;

//     // Add item to Firebase
//     const newItemRef = itemsRef.push();
//     newItemRef.set({
//         name: itemName,
//         price: itemPrice,
//         image: itemImage
//     });

//     // Clear form fields
//     addItemForm.reset();
// });

// // Retrieve and display items from Firebase
// itemsRef.on('value', (snapshot) => {
//     const items = snapshot.val();
//     itemsList.innerHTML = ''; // Clear previous items

//     for (const itemId in items) {
//         const item = items[itemId];
//         const itemElement = document.createElement('div');
//         itemElement.innerHTML = `<strong>${item.name}</strong> - ${item.price} <br><img src="${item.image}" alt="${item.name}" width="100"><hr>`;
//         itemsList.appendChild(itemElement);
//     }
// });

// var ref = firebase.database().ref('Collected Data');
// console.log(ref);

// document.getElementById('submit').addEventListener('click', function(e){
//     try{
//     e.preventDefault();
//     let product_name = getInputVal('name');
//       let price = getInputVal('price');
//       let link = getInputVal('link');
//       saveMessage(product_name, price,link);
//       document.getElementById('submit').reset();
//     }
//     catch(err){
//         console.log(err);
//     }
//   })

//   function saveMessage(product_name, price,link) {
//     addDoc(messagesRef,{
//         name: product_name,
//         price: price,
//         link: link 
//     });
// }

// function getInputVal(id) {
//     return document.getElementById(id).value;
// }
//     set(ref(db, 'ProductName/' + document.getElementById('name').value),
//     {
//         product_name:document.getElementById('name').value,
//         price:document.getElementById('price').value,
//         link:document.getElementById('link').value
//     })
//     alert("Product Added Sucessfully!");
// });

// ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });
// const db = getFirestore(app);
// const analytics = getAnalytics(app);
// const db = getDatabase(app);
// let messagesRef = collection(db,'Collected Data');
   
// document.getElementById('submit').addEventListener('click', function(e){
//     e.preventDefault();
//     set(ref(db, 'ProductName/' + document.getElementById('name').value),
//     {
//         product_name:document.getElementById('name').value,
//         price:document.getElementById('price').value,
//         link:document.getElementById('link').value
//     })
//     alert("Product Added Sucessfully!");
// });

//   function submit(e) {
//     try{
//       e.preventDefault();
//       let product_name = getInputVal('name');
//       let price = getInputVal('price');
//       let link = getInputVal('link');
//       saveMessage(product_name, price,link);
//       document.getElementById('submit').reset();
//     }
//     catch(err){
//         console.log(err);
//     }
//   }

//   function saveMessage(product_name, price,link) {
//     addDoc(messagesRef,{
//         name: product_name,
//         price: price,
//         link: link 
//     });
// }

// function getInputVal(id) {
//     return document.getElementById(id).value;
// }

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

// function validateproduct() { 
//     var product_name = document.getElementById("name");
//     var price=document.getElementById("price");
//     var link=document.getElementById("link");
//     if(product_name.value== " " || price== " " || link== " ") {
//         alert("Please enter a detail");
//         return false;
//     } else {
//         alert("Add product succesfully!");
//         window.location.href = "product.html";
//         return true;
//     }
// }


let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let cartCountElement = document.querySelector('.cart-count');
let cartIcon = document.querySelector(".cart-icon");
let closeCart = document.querySelector(".close");
let body = document.querySelector('body');
let listproducts = [];
let cart = [];

cartIcon.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

const addDataToHTML = () => {
    
    try{
        listProductHTML.innerHTML = " ";
    if(listproducts.length > 0)
    {
        listproducts.forEach(product => {
            let newProduct = document.createElement('div');
            // newProduct.dataset.id = product.id;
            newProduct.classList.add('item');
            newProduct.dataset.id= product.id;
            newProduct.innerHTML = 
            `<img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button class="addCart">Add To Cart</button>`;
            listProductHTML.appendChild(newProduct);
        });
    }}
    catch(err){
        console.log("error");
    }
}

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.dataset.id;
        addToCart(product_id);
    }
})

const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">${info.price * item.quantity}₹</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
            listCartHTML.appendChild(newItem);
            // newItem.dataset.id = item.product_id;
        })
    }
    cartCountElement.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        // let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

const initApp = () => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        console.log(products)
        
        addDataToHTML();

        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}
initApp();