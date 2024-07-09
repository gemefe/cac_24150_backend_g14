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
            <div class="mb-3">
              <label for="name" class="form-label">Nombre del producto</label>
              <input type="text" class="form-control" id="name" aria-describedby="nombre" value="${this.name}">
              <div id="name_help" class="form-text text-light">Ingrese el nombre completo del producto.</div>
            </div>      
            <div class="mb-3">  
              <label for="image" class="form-label">URL de la imagen</label>
              <input type="text" class="form-control" name="image" id="image" value="${this.image}" >
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">Precio</label>
              <input type="number" class="form-control" name="price" id="price" value="${this.price}">
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Descripción</label>
              <textarea type="text" class="form-control" name="description" id="description" cols="30" rows="4">${this.description}</textarea>
            </div>
            <div class="mb-3">
              <button id="btn-put" type="button" class="btn btn-success m-1" onclick="update()">Actualizar producto</button>
              <button id="btn-back" type="button" class="btn btn-outline-primary m-1" onclick="index()"><i class="fa fa-arrow-left me-2" aria-hidden="true"></i>Volver</button>
            </div>
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

function index() {
  const url = `/`;
  window.location.href = url;
}