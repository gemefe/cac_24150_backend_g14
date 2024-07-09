const HOST = "127.0.0.1"
const PORT = 8000

const form = document.getElementById("crear-producto-form") 
const btn = document.getElementById("btn-post")

const URL_API_BASE = `http://${HOST}:${PORT}/producto/`

btn.addEventListener("click", (e)=> {
    e.preventDefault()
    fetch(URL_API_BASE,{
        method: 'POST',
        body: new FormData(form)
    })
    .then(e => window.location.href = '/')
    .catch(error => console.log({error}))
    })

    
function index() {
    const url = `/`;
    window.location.href = url;
    }