
//Alertas boostrap, atributo hidden por default
let name = document.getElementById("name--alert");
let email =  document.getElementById("email--alert");
let phone = document.getElementById("phone--alert");
let password = document.getElementById("password--alert");
let password2 = document.getElementById("password2--alert");
let place = document.getElementById("place--alert");
let place2 = document.getElementById("place--alert2");
let foto = document.getElementById("foto");
let ine = document.getElementById("ine--alert");
let referencia = document.getElementById("referencia--alert");
let saved = document.getElementById("saved--alert");

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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact');
    const submitButton = document.getElementById('send--form');

    // Manejo de la selección de botones
    const buttons = document.querySelectorAll('#buttons .btn-primary');
    let selectedOption = null;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Eliminar la clase activa de todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar la clase activa al botón clickeado
            this.classList.add('active');
            
            // Almacenar la opción seleccionada
            selectedOption = this.dataset.value;
            console.log(`Botón seleccionado: ${selectedOption}`);
        });
    });

    // Escucha el evento "submit" en el formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío por defecto

        // Obtener y limpiar los valores de los campos de entrada
        let nombre = document.getElementById('userName').value.trim();
        let email = document.getElementById('userEmail').value.trim();
        let password = document.getElementById('userPassword').value.trim();
        let confirmPassword = document.getElementById('confirmaContraseña').value.trim();
        let phone = document.getElementById('userPhone').value.trim();
        
        // Verificar si al menos un botón está seleccionado
        if (!selectedOption) {
            alert("Debes seleccionar una opción.");
            return;
        }

        // Verificar que los campos de archivo tengan archivos seleccionados
        const ineFile = document.getElementById('ine').files.length;
        const cartaRecomendacionFile = document.getElementById('cartaRecomendacion').files.length;

        if (ineFile === 0) {
            alert("Debes subir tu INE.");
            return;
        }

        if (cartaRecomendacionFile === 0) {
            alert("Debes subir la referencia de trabajo.");
            return;
        }

        // Validación básica: verificar si alguno de los campos está vacío
        if (nombre === "" || email === "" || password === "" || confirmPassword === "" || phone === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        // Validación de formato de email
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        // Validación de las contraseñas
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // Validación del teléfono: que sea un número y tenga al menos 10 dígitos
        if (isNaN(phone) || phone.length < 10) {
            alert("Por favor, ingresa un número de teléfono válido.");
            return;
        }

        // Crear un objeto con los datos del formulario
        let datosFormulario = {
            nombre: nombre,
            email: email,
            password: password,
            phone: phone,
            cdmxEstadodemexico: selectedOption, // Guardar la opción seleccionada
            ineFile: document.getElementById('ine').files[0] ? document.getElementById('ine').files[0].name : '', // Obtener el nombre del archivo
            cartaRecomendacionFile: document.getElementById('cartaRecomendacion').files[0] ? document.getElementById('cartaRecomendacion').files[0].name : '' // Obtener el nombre del archivo
        };

        // Convertir el objeto a una cadena JSON y guardarlo en localStorage
        localStorage.setItem("datosFormulario", JSON.stringify(datosFormulario, null, 2));

        // Mostrar un mensaje de confirmación
        alert("Datos guardados correctamente en el LocalStorage.");

        // Limpiar el formulario después de guardar los datos
        form.reset();
        
        // Limpiar la selección de botones
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Resetear la opción seleccionada
        selectedOption = null;
    });
});
>>>>>>> 09bee7d327999f96b0fff51dd817ac72ba2e70ea
