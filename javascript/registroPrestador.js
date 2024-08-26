

//Recepción de los datos del usuario en el formulario
const formServices = document.getElementById('RegistroPrestador');
//obteniendo informaciónd del boton
const button = document.getElementById('send--form');
const buttonPlace = document.getElementById('buttons');

const buttonYes = document.getElementById('cdmx--yes');
const buttonNo = document.getElementById('cdmx--no');

    placeOption.addEventListener('click', function seleccionarOpcion() {
    //Leemos el valor del select
    let placeOption = document.getElementById("place");
    document.querySelector("#place").value = place;
    if(value == "si"){
    document.getElementById("place--alert").hidden=true;
    }
    if(value == "no"){
    document.getElementById("place--alert").hidden=false;
    }
    if (valor = null) {
    document.getElementById("place--alert2").hidden=false;
    }
    })


    function seleccionarOpcion(){
        document.querySelector("#place").value = place;
    }


//detonación del evento
formServices.addEventListener('submit', (event) => {
    event.preventDefault();
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
    const contraseñaRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    //Lectura de confirmacion de contraseña del usuario
    const confirmaContraseña = document.getElementById('confirmaContraseña').value
    //carga de INE
    const ineCarga = document.getElementById('ine--alert').value;
    
    //Condicionales que le dicen al usuario que los datos son erroneos
        if (!nombreRegex.test(nombre)) {
            document.getElementById("name--alert").hidden=false;
        } else{
            document.getElementById("name--alert").hidden=true;
        }
        if (!emailRegex.test(correo)) {
            document.getElementById("email--alert").hidden=false;
        } else{
            document.getElementById("email--alert").hidden=true;
        }

        if(!contraseñaRegex.test(contraseña)){
            document.getElementById("password--alert").hidden=false;
        } else{
            document.getElementById("password--alert").hidden=true;
        }
        //Validacion de contraseña
        if (contraseña === confirmaContraseña) {
            document.getElementById("password2--alert").hidden=true;
        } else{
            document.getElementById("password2--alert").hidden=false;
        }

        if (!telefonoRegex.test(telefono)) {
            document.getElementById("phone--alert").hidden=false;
        } else{
            document.getElementById("phone--alert").hidden=true;
        }

        if (ineCarga) {
            document.getElementById("ine--alert").hidden=true;
        } else {
            document.getElementById("ine--alert").hidden=false;
        }
        if (referencia) {
            document.getElementById("referencia--alert").hidden=true;
        } else {
            document.getElementById("referencia--alert").hidden=false;
        }
        
    //Almacenamiento local de los datos ingresados en el form
        localStorage.setItem('name', nombre)
        localStorage.setItem('fotoPerfil', foto)
        localStorage.setItem('email', correo)
        localStorage.setItem('contraseña', contraseña)
        localStorage.setItem('confirmaContraseña', confirmaContraseña)
        localStorage.setItem('telephone', telefono)
        localStorage.setItem('LugarServicios', botonSi)
        localStorage.setItem('INE', ineCarga)
        localStorage.setItem('referenciaTrabajo', referencia)
        if (nombreRegex.test(nombre) && emailRegex.test(correo) && telefonoRegex.test(telefono) && contraseñaRegex.test(contraseña) && contraseña === confirmaContraseña && botonSi && ineCarga &&  referencia) {
            document.getElementById("saved--alert").hidden=false;
        }
    
}) 