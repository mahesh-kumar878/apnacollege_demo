let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCount();

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCount();

    alert(name + " added to cart");
}

function updateCount() {
    let count = document.getElementById("count");

    if (count) {
        count.innerText = cart.length;
    }
}

function displayCart() {

    let cartItems = document.getElementById("cartItems");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<h3>Your cart is empty.</h3>";
        document.getElementById("total").innerText = "Total: ₹0";
        return;
    }

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `
        <div class="item">
            <p>${item.name} - ₹${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        </div>
        <hr>
        `;

    });

    document.getElementById("total").innerText =
    "Total: ₹" + total;

}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCount();

    displayCart();

}

function clearCart() {

    cart = [];

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCount();

    displayCart();

}

displayCart();