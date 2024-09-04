// Recupera el dato guardado en localStorage con la clave 'datoUsuario'
const dato = localStorage.getItem('datoUsuario');

// Selecciona el elemento <span> con el ID 'data'
const mostrarDato = document.getElementById('data');

// Muestra el dato recuperado o un mensaje si no hay dato guardado
if (dato) {
    mostrarDato.textContent = dato;
} else {
    mostrarDato.textContent = 'No hay datos guardados.';
}
