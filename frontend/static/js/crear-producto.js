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