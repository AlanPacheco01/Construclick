//Alertas boostrap, atributo hidden por default
document.getElementById("name--alert").hidden=true;
document.getElementById("email--alert").hidden=true;
document.getElementById("phone--alert").hidden=true;
document.getElementById("text--alert").hidden=true;
document.getElementById("mesage--alert").hidden=true;
document.getElementById("saved--alert").hidden=true;

//Activación de la check box
//obteniendo información de la checkbox
const checkBox = document.getElementById('form--chechOk');
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
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
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
    const companiaRegex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ,\s0-9._%-]+$/;
    //Lectura del comentario del usuario
    const comentario = document.getElementById('userComment').value
    //Validación del comentario mediante regex
    const comentarioRegex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ,\s0-9._%-]+$/;

//Condicionales que le dicen al usuario que los datos son erroneos
    if (!nombreRegex.test(nombre)) {
        document.getElementById("name--alert").hidden=false;
     return;
    } else{
        document.getElementById("name--alert").hidden=true;
    }
    if (!emailRegex.test(correo)) {
        document.getElementById("email--alert").hidden=false;
        return;
    }else{
        document.getElementById("email--alert").hidden=true;
    }
    if (!telefonoRegex.test(telefono)) {
        document.getElementById("phone--alert").hidden=false;
        return;
    }else{
        document.getElementById("phone--alert").hidden=true;
    }
    if (!companiaRegex.test(compania)) {
        document.getElementById("text--alert").hidden=false;
        return;
    }else{
        document.getElementById("text--alert").hidden=true;
    }

    if (!comentarioRegex.test(comentario)) {
        document.getElementById("mesage--alert").hidden=false;
        return;
    }else{
        document.getElementById("mesage--alert").hidden=true;
    }

    //Almacenamiento local de los datos ingresados en el form
    localStorage.setItem('name', nombre)
    localStorage.setItem('email', correo)
    localStorage.setItem('telephone', telefono)
    localStorage.setItem('company', compania)
    localStorage.setItem('mail', comentario)
    document.getElementById("saved--alert").hidden=false;
    //ocultar la
    setTimeout(()=>{
        const hide = document.getElementById("saved--alert");
        hide.style.display = 'none';
    },3500)    
    form.reset();
})


