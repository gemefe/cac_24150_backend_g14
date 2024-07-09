const URL_API_BASE = "http://127.0.0.1:8000/producto/"

class Producto{
    constructor({id, name, price, description, image}){
        this.id = id
        this.name = name
        this.price = price
        this.description = description
        this.image = image
    }

    createDiv(){
        return `
            <div id="${this.id}">
                <h4>${this.name}</h4>
                <hr />
                <ul>
                    <img src="/static/img/${this.image}" style="width: 50px; height: 50px;" />
                    <li>Price : ${this.price}</li>
                    <li>Description : ${this.description}</li>
                </ul>
            </div> 
            <button onclick=deleteData(${this.id})>Eliminar Producto</button>  
            <button>
            <a href="/editar-producto.html?id=${this.id}" style="text-decoration: none;">Editar Producto</a>
            </button>  
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
