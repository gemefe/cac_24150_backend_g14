const URL_API_BASE = "http://127.0.0.1:8000/producto/";

// Clase Producto para manejar la creación de elementos del DOM
class Producto {
    constructor({ id, name, price, description, image }) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.image_url = image.match(/^\w+\.\w+$/) ? `/static/img/${image}` : image;
    }

    createDiv() {
        return `
            <div id="${this.id}" class="section m-3 p-5 pt-3 border border-secondary border-1 border-gray rounded-3">
                <div class="row">
                    <h4 class="col-6">${this.name}</h4>
                    <button class="col btn btn-outline-danger m-1" onclick="deleteData(${this.id})">
                        Eliminar
                    </button>
                    <button class="col btn btn-outline-secondary m-1" onclick="updateData(${this.id})">
                        Editar
                    </button>
                </div>
                <hr />
                <div class="row">
                    <img class="col-auto img-thumbnail" src="${this.image_url}" style="max-height: 200px;" />
                    <ul class="col">
                        <li><strong>Precio: </strong>$${this.price}</li>
                        <li><strong>Descripción: </strong>${this.description}</li>
                    </ul>
                </div>
            </div>
        `;
    }
}

// Función para eliminar un producto
function deleteData(id) {
    return fetch(`${URL_API_BASE}${id}/`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            window.location = '/';
        } else {
            console.error('Error en la respuesta:', response);
            alert('Error al eliminar el producto.');
        }
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
        alert('Error al eliminar el producto. Verifica tu conexión y vuelve a intentarlo.');
    });
}

// Función para obtener y mostrar los productos
function getProductos() {
    fetch(URL_API_BASE)
    .then(res => res.json())
    .then(data => {
        const ing_data = data
            .map(p => new Producto(p))
            .reduce((acc, prod) => acc + prod.createDiv(), '');
        document.getElementById("productos").innerHTML = ing_data;
    })
    .catch(error => {
        console.error('Error al obtener los productos:', error);
        alert('Error al obtener los productos. Verifica tu conexión y vuelve a intentarlo.');
    });
}

// Función para redirigir a la página de edición de producto
function updateData(id) {
    const url = `/editar-producto.html?id=${id}`;
    window.location.href = url;
}

// Función para redirigir a la página de creación de producto
function createProducto() {
    const url = `/crear-producto.html`;
    window.location.href = url;
}

// Asignar eventos a los botones
document.getElementById("btn-get").addEventListener("click", getProductos);
document.getElementById("btn-create").addEventListener("click", createProducto);
