const form = document.getElementById("crear-producto-form") 
const btn = document.getElementById("btn-post")

const URL_API_BASE = "http://127.0.0.1:8000/producto/"

btn.addEventListener("click", (e)=> {
    e.preventDefault()
    fetch(URL_API_BASE,{
        method: 'POST',
        body: new FormData(form)
    })
    .catch(error => console.log({error}))
    })


class Producto{
    constructor({name, price, description, image}){
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
                    <li>Price : ${this.price}</li>
                    <li>Description : ${this.description}</li>
                </ul>
            </div>   
        `
    }        
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