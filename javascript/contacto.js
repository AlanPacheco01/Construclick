
//Alertas boostrap, atributo hidden por default
let nameAlert = document.getElementById("main--name--alert");
nameAlert.hidden=true;
let emailAlert = document.getElementById("main--email--alert");
emailAlert.hidden=true;
let phoneAlert = document.getElementById("main--phone--alert");
phoneAlert.hidden=true
let textAlert = document.getElementById("main--text--alert");
textAlert.hidden=true;
let mesageAlert = document.getElementById("main--mesage--alert");
mesageAlert.hidden=true;
let savedAlert = document.getElementById("saved--alert");
savedAlert.hidden=true;



//Activación de la check box
//obteniendo información de la checkbox
const checkBox = document.getElementById('form--chechOk');
//obteniendo informaciónd del boton
const button = document.getElementById('send--form');
//desactivando el botón para evitar envíos inesperados
button.disabled = true;

//detonación del evento de la checkbox
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
        nameAlert.hidden=false;
        setTimeout(()=>{
            nameAlert.hidden=true;
        },3000)
     return;
    } else{
        nameAlert.hidden=true;
    }
    if (!emailRegex.test(correo)) {
        emailAlert.hidden=false;
        setTimeout(()=>{
            emailAlert.hidden=true;
        },3000)
        return;
    }else{
        emailAlert.hidden=true;
    }
    if (!telefonoRegex.test(telefono)) {
        phoneAlert.hidden=false;
        setTimeout(()=>{
            phoneAlert.hidden=true;
        },3000)
        return;
    }else{
        phoneAlert.hidden=true;
    }
    if (!companiaRegex.test(compania)) {
        textAlert.hidden=false;
        setTimeout(()=>{
            textAlert.hidden=true;
        },3000)
        return;
    }else{
        textAlert.hidden=true;
    }

    if (!comentarioRegex.test(comentario)) {
        mesageAlert.hidden=false;
        setTimeout(()=>{
            mesageAlert.hidden=true;
        },3000)
        return;
    }else{
        mesageAlert.hidden=true;
    }

    //Almacenamiento local de los datos ingresados en el form
    localStorage.setItem('name', nombre);
    localStorage.setItem('email', correo);
    localStorage.setItem('telephone', telefono);
    localStorage.setItem('company', compania);
    localStorage.setItem('mail', comentario);
    savedAlert.hidden=false;

    //ocultar la alerta de almacenamiento de datos
    setTimeout(()=>{
        const hide = document.getElementById("saved--alert");
        hide.style.display = 'none';
    },3500)    
    form.reset();
})
