// Obtener el elemento alert y ocultarlo inicialmente
const alertElement = document.getElementById("register--alert");
alertElement.hidden = true;

const seletElement = document.getElementById('whatsPromoted');
const linkElement = document.getElementById('pages');
const continueButton = document.getElementById('form--continue');

continueButton.addEventListener('click', (event) => {
    // Prevenir el envío del formulario para manejar la lógica primero
    event.preventDefault();
    
    // Obtener el valor seleccionado del <select>
    const selectedValue = seletElement.value;

    // Si el valor seleccionado es diferente de "Categorias", ocultar el alert y redirigir
    if (selectedValue != "Categorias") {
        // Ocultar el alert y cambiar el href del linkElement
        alertElement.hidden = true;
        // Cambiar el href del linkElement (esto no será necesario si haces redirección manualmente)
        linkElement.href = selectedValue;
        // Redirigir manualmente a la nueva página
        window.location.href = selectedValue;
    } else {
        // Mostrar el alert si la opción es "Categorias"
        alertElement.hidden = false;
        // Opcionalmente, podrías enviar el formulario aquí si es necesario
        // document.querySelector('form').submit();
    }
});

