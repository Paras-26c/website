// js/main.js
const products = [
  // ── Kapur Soap ─────────────────────────────────────────────
  {
    id: "kapur120",
    name: "Kapur Soap (120 g)",
    price: 50,
    description:
      "Hand-crafted cold-process Kapur Soap (120 g). Leaves your skin soft and aromatic.",
    img: "images/pic2.jpg"
  },
  {
    id: "kapur50",
    name: "Kapur Soap (50 g)",
    price: 30,
    description:
      "Hand-crafted cold-process Kapur Soap (50 g). Leaves your skin soft and aromatic.",
    img: "images/pic2.jpg"
  },

  // ── Green Valo Limdo Soap ──────────────────────────────────
  {
    id: "limdo120",
    name: "Green Valo Limdo Soap (120 g)",
    price: 50,
    description:
      "Refreshing Limdo soap (120 g) with a crisp lime aroma that awakens your senses.",
    img: "images/pic3.jpg"         // add pic4.jpg to your images folder
  },
  {
    id: "limdo50",
    name: "Green Valo Limdo Soap (50 g)",
    price: 30,
    description:
      "Refreshing Limdo soap (50 g) with a crisp lime aroma that awakens your senses.",
    img: "images/pic3.jpg"
  }
];

// Render product grid on products.html
function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <a class="btn" href="product.html?id=${p.id}">View Details</a>
    `;
    grid.appendChild(card);
  });
}

// Render product detail on product.html
function renderProductDetail() {
  const detailContainer = document.getElementById("productDetail");
  if (!detailContainer) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = products.find(p => p.id === id);
  if (!product) {
    detailContainer.innerHTML = "<p>Product not found.</p>";
    return;
  }
  detailContainer.innerHTML = `
      <img src="${product.img}" alt="${product.name}" style="max-width:400px;border-radius:8px;">
      <h2>${product.name}</h2>
      <h3>Price: ₹${product.price}</h3>
      <p style="margin:20px 0;">${product.description}</p>
      <a class="btn" href="products.html">Back to Products</a>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderProductDetail();
});
