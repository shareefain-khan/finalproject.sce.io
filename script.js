var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

document.getElementById("menu-icon").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent any default action, just in case
    if (MenuItems.style.maxHeight === "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
});


// new javascript product gallery

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("SmallImg");

SmallImg[0].onclick = function() {
    ProductImg.src = SmallImg[0].src;
}

SmallImg[1].onclick = function() {
    ProductImg.src = SmallImg[1].src;
}

SmallImg[2].onclick = function() {
    ProductImg.src = SmallImg[2].src;
}

SmallImg[3].onclick = function() {
    ProductImg.src = SmallImg[3].src;
}


// product details

let cart = [];

const products = [
    {
        id: 0,
        name: "Red Printed T-Shirt by HRK",
        price: 50.00,
        img: "images/gallery-1.jpg"
    },
    {
        id: 1,
        name: "Red Printed T-Shirt",
        price: 75.00,
        img: "images/product-1.jpg"
    },
    {
        id: 2,
        name: "Shoes by HRK",
        price: 70.00,
        img: "images/product-2.jpg"
    },
    {
        id: 3,
        name: "Trousert",
        price: 25.00,
        img: "images/product-3.jpg"
    },
    {
        id: 4,
        name: "Blue Printed T-Shirt",
        price: 75.00,
        img: "images/product-4.jpg"
    }
];

// Load cart from localStorage
window.onload = function() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
};

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItem = cart.find(item => item.id === product.id);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart();
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = item.quantity;
        quantityInput.min = 1;
        quantityInput.style.marginLeft = '10px';
        quantityInput.onchange = () => updateQuantity(item.id, quantityInput.value);
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.style.marginLeft = '10px';
        removeButton.onclick = () => removeFromCart(item.id);
        
        li.appendChild(nameSpan);
        li.appendChild(quantityInput);
        li.appendChild(removeButton);
        
        cartItems.appendChild(li);
    });

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    const totalElement = document.createElement('li');
    totalElement.textContent = `Total: $${totalPrice}`;
    totalElement.style.fontWeight = 'bold';  // Make the total price stand out
    cartItems.appendChild(totalElement);

    toggleCart(true);  // Ensure cart is visible after adding items
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

function updateQuantity(productId, quantity) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = parseInt(quantity, 10);
        saveCart();
        updateCart();
    }
}

function toggleCart(forceShow = false) {
    const cartElement = document.getElementById('cart');
    if (forceShow || cartElement.style.display === 'none' || cartElement.style.display === '') {
        cartElement.style.display = 'block';
    } else {
        cartElement.style.display = 'none';
    }
}

function checkout() {
    if (cart.length > 0) {
        alert('Proceeding to checkout with ' + cart.length + ' items.');
        // Implement checkout logic here
    } else {
        alert('Your cart is empty.');
    }
}














