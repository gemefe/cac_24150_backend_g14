const URL_API_BASE = "http://127.0.0.1:8000/producto/"

class Producto{
    constructor({id, name, price, description, image}) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        if (image.match(/^\w+\.\w+$/)) {  // Verifica si image tiene el formato "abc.extension"
            this.image_url = `/static/img/${image}`;
        } else {
            this.image_url = `${image}`;
        }
    }

    createDiv(){
        return `
            <div id="${this.id}" class="section m-3 p-5 pt-3 border border-secondary border-1 border-gray rounded-3">
                <div class="row">
                    <h4 class="col-6" >${this.name}</h4>
                    <button class="col btn btn-outline-danger m-1" onclick=deleteData(${this.id})>
                        Eliminar
                    </button>
                    <button class="col btn btn-outline-secondary m-1" onclick=updateData(${this.id})>
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
        `
    }        
}


function deleteData(id) {
  return fetch(URL_API_BASE + id + '/', {
    method: 'DELETE'
  })
  .then(response => response.text())
  .then(e => window.location = '/')
  .catch(error => console.log(error));
}

const btnGet = document.getElementById("btn-get")
btnGet.addEventListener(
    "click", ()=> {
    fetch(URL_API_BASE)
    .then(res => res.json())
    .then(data => {
        let ing_data = data
        .map(p => new Producto(p))
        .reduce((acc, prod)=> acc + prod.createDiv(),
        ''
    )
    document.getElementById("productos").innerHTML = ing_data
})
    .catch(error => console.log(error))
}
)

function updateData(id) {
    const url = `/editar-producto.html?id=${id}`;
    window.location.href = url;
}

const btnCreate = document.getElementById("btn-create")
btnCreate.addEventListener("click", 
    ()=> {
    const url = `/crear-producto.html`;
    window.location.href = url;
    }
)