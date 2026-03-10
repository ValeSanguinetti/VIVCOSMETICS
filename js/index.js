async function getProducts(){

const res = await fetch(`${API_URL}/products`)

const products = await res.json()

return products

}
let currentCategory = "all";

const buttons = document.querySelectorAll(".category-btn");

buttons.forEach(btn => {

btn.addEventListener("click", () => {

currentCategory = btn.dataset.category;

renderProducts(currentCategory);

// quitar activo a todos
buttons.forEach(b => {
b.classList.remove("bg-pink-400","text-white","border-pink-500");
});

// activar el botón clickeado
btn.classList.add("bg-pink-400","text-white","border-pink-500");

});

});
async function renderProducts(category="all"){

const products = await getProducts()

const grid = document.getElementById("products-grid");

const filtered = category === "all"
? products
: products.filter(p => p.category === category);

grid.innerHTML = filtered.map(product => `
<div class="product-card bg-white rounded-2xl shadow p-5 relative overflow-hidden">


${product.stock === 0 
? `<div class="ribbon">AGOTADO</div>`
: ""}

<div class="h-40 rounded-xl flex items-center justify-center mb-4 overflow-hidden"
style="background:${product.gradient}">

<img 
src="${product.image_url}" 
alt="${product.name}"
class="h-full w-full object-contain">

</div>

<h3 class="font-semibold text-gray-700 mb-2">
${product.name}
</h3>

<p class="text-2xl font-bold gradient-text mb-3">
$${product.price}
</p>
</div>

`).join("");

}

renderProducts();