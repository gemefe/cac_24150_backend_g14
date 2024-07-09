const HOST = "127.0.0.1";
const PORT = 8000;
const URL_API_BASE = `http://${HOST}:${PORT}/producto/`;

// Selección de elementos del DOM
const form = document.getElementById("crear-producto-form");
const btn = document.getElementById("btn-post");

// Evento de clic para enviar el formulario
btn.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(URL_API_BASE, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        if (response.ok) {
            // Redirigir al usuario a la página principal después de crear el producto
            window.location.href = '/';
        } else {
            // Manejar errores de respuesta
            response.json().then(data => {
                console.error('Error en la respuesta:', data);
                alert('Error al crear el producto. Verifica los datos e inténtalo nuevamente.');
            });
        }
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
        alert('Error al crear el producto. Verifica tu conexión y vuelve a intentarlo.');
    });
});

// Función para redirigir a la página principal
function index() {
    const url = `/`;
    window.location.href = url;
}
