// Function to display cart items on the cart page
const checkoutEl = document.getElementById('checkout');
function displayCartItems() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let cartTable = document.querySelector(".cart-table");

    cartItems.forEach((product, index) => {
        let cartRow = document.createElement("tr");
        cartRow.innerHTML = `
            <td><img src="${product.images[0]}" alt="${product.title}" width="50"></td>
            <td>${product.title}</td>
            <td>$${product.price}</td>
            <td>${product.discountPercentage}</td>
            <td><button class="deleteBtn" data-index="${index}">Delete</button></td>
        `;
        cartTable.appendChild(cartRow);
    });

    // Attach event listeners for delete buttons
    let deleteButtons = document.querySelectorAll(".deleteBtn");
    deleteButtons.forEach(button => {
        button.addEventListener("click", handleDelete);
    });
}

// Handle delete button click
function handleDelete(event) {
    let index = parseInt(event.target.getAttribute("data-index"));
    if (!isNaN(index)) {
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        // Refresh the cart display
        let cartTable = document.querySelector(".cart-table");
        cartTable.innerHTML = "";
        displayCartItems();
    }
}

// // checkout function
function checkout(){
    window.location.href = "./checkout.html";
}

checkoutEl.addEventListener('click', checkout);


// Call the function to display cart items on the cart page
displayCartItems();