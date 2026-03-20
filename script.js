const products = [
  {
    id: 1,
    name: "Shoes",
    price: 50,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 20,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    name: "Watch",
    price: 100,
    image: "https://via.placeholder.com/200"
  }
];

let cartCount = 0;

const productList = document.getElementById("product-list");
const cartCountDisplay = document.getElementById("cart-count");

function displayProducts() {
  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;

    productList.appendChild(div);
  });
}

function addToCart() {
  cartCount++;
  cartCountDisplay.textContent = cartCount;
}

displayProducts();
