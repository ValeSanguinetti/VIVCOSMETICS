async function checkAuth(){

const { data } = await window.supabaseClient.auth.getSession()

if(!data.session){

window.location.href = "/pages/login.html"

}

}

checkAuth()

let editingId = null
let currentImage = null
async function createProduct(){

let imageUrl = currentImage

const file = document.getElementById("image").files[0]

// subir imagen solo si el usuario selecciona una
if(file){

const fileName = Date.now() + "-" + file.name

const { data, error } = await window.supabaseClient
.storage
.from("products")
.upload(fileName, file,{
contentType:file.type
})

if(error){
console.log(error)
alert("Error subiendo imagen")
return
}

const { data:publicUrl } = window.supabaseClient
.storage
.from("products")
.getPublicUrl(fileName)

imageUrl = publicUrl.publicUrl

}

// producto
const product = {

name: document.getElementById("name").value,
price: Number(document.getElementById("price").value),
category: document.getElementById("category").value,
stock: Number(document.getElementById("stock").value),
image_url: imageUrl,
gradient: "linear-gradient(135deg,#ff9ff3,#f368e0)"

}

// decidir si crear o editar
let url = `${API_URL}/products`
let method = "POST"

if(editingId){

url = `${API_URL}/products/${editingId}`
method = "PUT"

}

await fetch(url,{
method,
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(product)
})

alert(editingId ? "Producto actualizado" : "Producto creado")

// limpiar formulario
document.getElementById("name").value = ""
document.getElementById("price").value = ""
document.getElementById("category").value = ""
document.getElementById("stock").value = ""
document.getElementById("image").value = ""

preview.src = ""
preview.classList.add("hidden")

editingId = null
currentImage = null

}
function mostrarSeccion(seccion){

document.getElementById("seccion-agregar").classList.add("hidden")
document.getElementById("seccion-lista").classList.add("hidden")

if(seccion === "agregar"){
document.getElementById("seccion-agregar").classList.remove("hidden")
}

if(seccion === "lista"){
document.getElementById("seccion-lista").classList.remove("hidden")
cargarProductos()
}

}

async function cargarProductos(){

const res = await fetch(`${API_URL}/products`)
const products = await res.json()

const container = document.getElementById("products-list")

container.innerHTML = products.map(p => `

<div class="bg-white shadow rounded-xl p-4">

<img
src="${p.image_url}"
class="w-full h-40 object-cover rounded-lg mb-3"
/>

<h3 class="font-semibold">${p.name}</h3>

<p class="text-pink-500 font-bold mb-2">$${p.price}</p>
<p class="text-gray-500 text-sm">
Stock: ${p.stock}
</p>

<button
onclick="editarProducto(${p.id})"
class="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-500">

Editar

</button>

</div>

`).join("")

}

async function editarProducto(id){

const res = await fetch(`${API_URL}/products/${id}`)
const product = await res.json()

mostrarSeccion("agregar")

editingId = product.id
currentImage = product.image_url

document.getElementById("name").value = product.name
document.getElementById("price").value = product.price
document.getElementById("category").value = product.category
document.getElementById("stock").value = product.stock

preview.src = product.image_url
preview.classList.remove("hidden")

}

async function logout(){

await window.supabaseClient.auth.signOut()

window.location.href = "login.html"

}