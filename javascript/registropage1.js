document.getElementById("register--alert").hidden = true;

const seletElement = document.getElementById('whatsPromoted');
const linkElement = document.getElementById('pages');
const continueButton = document.getElementById('form--continue');

continueButton.addEventListener('click', (event) => {
    // Prevenir el envío del formulario para manejar la lógica primero
    event.preventDefault();
    
    // Obtener el valor seleccionado del <select>
    const selectedValue = seletElement.value;

    // Si el valor seleccionado es "Categorias", mostrar el alert
    if (selectedValue != "Categorias") {
         // Ocultar el alert y cambiar el href del linkElement
         document.getElementById("register--alert").hidden = true;
         //NOT
         linkElement.href=selectedValue;
         // Aqui deberias redigirir manualmente si quieres cambiar de pagina
         window.location.href = selectedValue;
        
    } else {
        document.getElementById("register--alert").hidden = false;
        // Opcionalmente, podrías enviar el formulario aquí si es necesario
        // document.querySelector('form').submit();
    }
});
