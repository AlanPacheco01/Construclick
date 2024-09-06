//atributos de las alertas, hidden por defecto
const nameAlert = document.getElementById("name--alert");
nameAlert.hidden = true;
const correoAlert = document.getElementById("email--alert");
correoAlert.hidden = true;
const contrasenaAlert = document.getElementById("password--alert");
contrasenaAlert.hidden = true;
const contrasenaCoincide = document.getElementById("password2--alert");
contrasenaCoincide.hidden = true;
const telefonoAlert = document.getElementById("phone--alert");
telefonoAlert.hidden = true;
const serviciosAlert = document.getElementById("place--alert");
serviciosAlert.hidden = true;
const ineAlert = document.getElementById("ine--alert");
ineAlert.hidden = true;
const savedAlert = document.getElementById("saved--alert");
savedAlert.hidden = true;


//información de los botones
const placeOptions = document.getElementById("placeOption");

//alertas para el evento de la promoción de servicios dentro de cdmx o edomex
placeOptions.addEventListener('change', () => {
    if (placeOptions.value === "No") {
        serviciosAlert.hidden = false;
    } else {
        serviciosAlert.hidden = true;
    }
})


//Recepción de los datos del usuario en el formulario
const formServices = document.getElementById('RegistroPrestador');

//Evento del formulario
formServices.addEventListener('submit', (event) => {
    event.preventDefault();

    //lectura de los datos del usuario e implementación de las regex
    //Nombre de usuario
    const nombre = document.getElementById("userName").value;
    const nombreRegex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/;

    //Correo del usuario
    const email = document.getElementById("userEmail").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //Teléfono del usuario
    const telefono = document.getElementById("userPhone").value;
    const telefonoRegex = /^\d{10}$/;

    //Constraseña del usuario
    const contrasena = document.getElementById("contrasena").value;
    const constrasenaRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    //Consfirmación contraseña del usuario
    const contrasenaMatch = document.getElementById("confirmaContrasena").value;

    //carga de INE
    const ineCarga = document.getElementById("ineCarga").files.length>0;

    //Validación de los campos del formulario
    let validacion=true;

    if (!nombreRegex.test(nombre)) {
        nameAlert.hidden = false;
        validacion = false;
    } else {
        nameAlert.hidden = true;
        
    }
    if (!emailRegex.test(email)) {
        correoAlert.hidden = false;
        validacion = false;
    } else {
        correoAlert.hidden = true;
        
    }
    if (!constrasenaRegex.test(contrasena)) {
        contrasenaAlert.hidden = false;
        validacion = false;
    } else {
        contrasenaAlert.hidden = true;
        
    }
    if (contrasena !== contrasenaMatch) {
        contrasenaCoincide.hidden = false;
        validacion = false;
    } else {
        contrasenaCoincide.hidden = true;
        
    }
    if (!ineCarga) {
        ineAlert.hidden = false;
        validacion = false;
    } else {
        ineAlert.hidden = true;
        
    }
    if (!telefonoRegex.test(telefono)) {
        telefonoAlert.hidden = false;
        validacion = false;
    } else {
        telefonoAlert.hidden = true;
        
    }

    //Almacenamiento local de los datos ingresados en el form
    localStorage.setItem('name', nombre)
    localStorage.setItem('email', email)
    localStorage.setItem('contraseña', contrasena)
    localStorage.setItem('confirmaContraseña', contrasenaMatch)
    localStorage.setItem('telephone', telefono)
    localStorage.setItem('INE', ineCarga)

   if(validacion){
    savedAlert.hidden = false;
   }
// Conexión con el backend
const user = {
    'username': nombre,
    'password': contrasena,
    'email': email,
    'telephone': telefono
};

const URL = `http://3.144.151.137localhost:8080/registro/r1`;

fetch(URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})
.then(response => response.json())
.then(data => console.log('Guardado', data))
.catch(error => console.error('Error:', error));

})
formServices.reset()
