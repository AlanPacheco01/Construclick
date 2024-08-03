//Activación de la check box
//obteniendo información de la checkbox
const checkBox = document.getElementById('from--chechOk');
//obteniendo informaciónd del boton
const button = document.getElementById('send--form');
//desactivando el botón para evitar envíos inesperados
button.disabled = true;
//detonación del evento
checkBox.addEventListener('change', ()=>{
    if(checkBox.checked===true){
button.disabled =false;
    }
})

//Recepción de los datos del usuario en el formulario
const form = document.getElementById('contact');
//detonación del evento
form.addEventListener('submit', () => {
    //Lectura del nombre del usuario
    const nombre = document.getElementById('userName').value
    //validación del nombre del usuario mediante regex
    const nombreRegex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/;   //nota :el \s permite que haya espacios
    //Lectura del correo del usuario
    const correo = document.getElementById('userEmail').value
    //validación del correo del usuario mediante regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //lectura del teléfono del usuario
    const telefono = document.getElementById('userPhone').value
    //validación del teléfono del usuario mediante regex
    const telefonoRegex = /^\d{10}$/;
    //lectura de la empresa del usuario
    const compania = document.getElementById('userCompany').value
    //Lectura del comentario del usuario
    const comentario = document.getElementById('userComment').value
    //Validación del comentario mediante regex
    const comentarioRegex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s0-9._%-]+$/;
//Condicionales que le dicen al usuario que los datos son erroneos
    if (!nombreRegex.test(nombre)) {
        alert('El nombre no es válido.');
        return;
    }
    if (!emailRegex.test(correo)) {
        alert('El email no es válido.');
        return;
    }
    if (!telefonoRegex.test(telefono)) {
        alert('El número no es válido.');
        return;
    }
    if (!comentarioRegex.test(comentario)) {
        alert('EL MENSAJE SE ENCUENTRA VACIO o tiene algun caracter no valido');
        return;
    }
//Almacenamiento local de los datos ingresados en el form
    localStorage.setItem('name', nombre)
    localStorage.setItem('email', correo)
    localStorage.setItem('telephone', telefono)
    localStorage.setItem('company', compania)
    localStorage.setItem('mail', comentario)
    alert('saved')
})
