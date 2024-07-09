// Función para obtener parámetros de la URL
function getParameterByName(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Obtener el ID del producto de la URL
const prodId = getParameterByName('id');
const URL_API_BASE = `http://127.0.0.1:8000/producto/${prodId}/`;

// Clase Producto para manejar el formulario de edición
class Producto {
    constructor({ id, name, price, description, image }) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
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
                    <input type="text" class="form-control" name="image" id="image" value="${this.image}">
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
        `;
    }
}

// Obtener los datos del producto y llenar el formulario
fetch(URL_API_BASE)
    .then((res) => res.json())
    .then((p) => new Producto(p))
    .then((p) => {
        document.getElementById('editar-producto').innerHTML = p.createDiv();
    })
    .catch((error) => {
        console.error('Error al obtener el producto:', error);
        alert('Error al obtener los detalles del producto.');
    });

// Función para actualizar el producto
function update() {
    fetch(URL_API_BASE, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'PUT',
        body: JSON.stringify({
            name: document.getElementById('name').value,
            image: document.getElementById('image').value,
            price: document.getElementById('price').value,
            description: document.getElementById('description').value,
        }),
    })
    .then((response) => {
        if (response.ok) {
            // Redirigir al usuario a la página principal después de actualizar el producto
            window.location.href = '/';
        } else {
            // Manejar errores de respuesta
            response.json().then(data => {
                console.error('Error en la respuesta:', data);
                alert('Error al actualizar el producto. Verifica los datos e inténtalo nuevamente.');
            });
        }
    })
    .catch((error) => {
        console.error('Error en la solicitud:', error);
        alert('Error al actualizar el producto. Verifica tu conexión y vuelve a intentarlo.');
    });
}

// Función para redirigir a la página principal
function index() {
    const url = `/`;
    window.location.href = url;
}
