// Function to display products on the page
async function getCart() {
    let cards = document.querySelectorAll(".product");
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();

    cards.forEach((element, i) => {
        // Set product details on the cards
        element.getElementsByTagName("img")[0].src = data.products[i].images[0];
        element.getElementsByTagName("h5")[0].innerHTML = data.products[i].title;
        element.getElementsByTagName("strong")[0].innerHTML = `Price: $${data.products[i].price}`;
        element.getElementsByTagName("b")[0].innerHTML = `| Rating: ${data.products[i].rating}`;
        element.getElementsByTagName("mark")[0].innerHTML = `| Stock: ${data.products[i].stock}`;
        element.getElementsByTagName("p")[0].innerHTML = data.products[i].description;

        // Add a button to add product to cart
        let addToCartButton = document.createElement("button");
        addToCartButton.innerHTML = "Add to Cart";

        addToCartButton.className = "addBtn"; // You can change "addBtn" to your desired class name


        addToCartButton.addEventListener("click", () => {
            addToCart(data.products[i]);
            alert("Item Added successfully!"); // Add an alert
        });

        element.appendChild(addToCartButton);
    });
}



// Function to add a product to the cart
function addToCart(product) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Add the product to the cart items
    cartItems.push(product);
    
    // Store the updated cart items in local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Call the function to load products
getCart();
















