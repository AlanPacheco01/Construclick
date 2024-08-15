//obteniendo informaciónd del boton
const button = document.getElementById('send--form');

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
    //lectura de la contraseña del usuario
    const contraseña = document.getElementById('contraseña').value
    //Validación de de la contraseña mediante regex
    const contraseñaRegex = /^\d{10}$/;
    //Lectura de confirmacionde contraseña del usuario
    const confirmaContraseña = document.getElementById('confirmaContraseña').value
    
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
    
//Validacion de contraseña
    if(!contraseñaRegex.test(contraseña)){
        alert('Contrasena no valida.');
        return;
    } if(contraseña === confirmaContraseña) {
        alert('Las contraseñas coinciden.');
    } else {
        alert('Las contraseñas no coinciden');
        }
    


//Almacenamiento local de los datos ingresados en el form
    localStorage.setItem('name', nombre)
    localStorage.setItem('email', correo)
    localStorage.setItem('telephone', telefono)
    localStorage.setItem('contraseña', contraseña)
    localStorage.setItem('confirmaContraseña', confirmaContraseña)
    alert('Datos Guardados Correctamente')
})