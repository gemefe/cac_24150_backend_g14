function getParameterByName(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
    results = regex.exec(location.search)
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

let prodId = getParameterByName('id')

const URL_API_BASE = `http://127.0.0.1:8000/producto/${prodId}/`

class Producto {
  constructor({ id, name, price, description, image }) {
    this.id = id
    this.name = name
    this.price = price
    this.description = description
    this.image = image
  }

  createDiv() {
    return `
         <h2>Editar Producto</h2>
        <form id="editar-producto-form">
            <label for="nombre">Name</label>
            <input type="text" name="name" id="name" value="${this.name}">
            <br>
            <label for="nombre">Image</label>
            <input type="text" name="image" id="image" value="${this.image}" >
            <br>
            <label for="precio">Price</label>
            <input type="number" name="price" id="price" value="${this.price}">
            <br>
            <label for="descripcion">Description</label>
            <input type="text" name="description" id="description" value="${this.description}">
            <br>
            <button id="btn-put" type="button" onclick="update()">Actualizar producto</button>
        </form>
        `
  }
}

//b.addEventListener(
  //  "click", ()=> {
fetch(URL_API_BASE)
  .then((res) => res.json())
  .then((p) => new Producto(p))
  .then(
    (p) => document.getElementById('editar-producto').innerHTML = p.createDiv()
  )
  .catch((error) => console.log(error))
    //})

const btn = document.getElementById('btn-put')

function update(){
  fetch(URL_API_BASE, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'put',
    body: JSON.stringify({
      name: document.getElementById('name').value,
      image: document.getElementById("image").value,
      price: document.getElementById('price').value,
      description: document.getElementById("description").value,
    }),
  })
    .then((e) => window.location = '/')
    .catch((error) => console.log({ error }))

}
//btn.addEventListener('click', (e) => {
 // e.preventDefault()
//})
