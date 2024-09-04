// Selecciona el botón y el campo de entrada
const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

// Añade un evento de clic al botón
buttonText.addEventListener('click', () => {
   
    const dato = inputText.value;
    
 
    localStorage.setItem('datoUsuario', dato);
    
});
