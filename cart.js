 // Initialize an empty cart array
let cart = [];

// Function to add a product to the cart
function addToCart(productId) {
    // Find the product details based on productId
    const productDetails = {
        id: productId,
        name: "Catoon Astronaut T-Shirts",
        price: 399, // You can retrieve the actual price from your data
    };

    // Add the product to the cart
    cart.push(productDetails);

    // Optionally, you can update the cart UI here
    // For example, you can display the cart icon with a count
    const cartIcon = document.getElementById("cartIcon");
    if (cartIcon) {
        cartIcon.innerText = cart.length;
    }

    // You can also update the cart total, etc.
    // This depends on your specific requirements

    // Optionally, you can navigate to the cart page
    // window.location.href = "cart.html";
}