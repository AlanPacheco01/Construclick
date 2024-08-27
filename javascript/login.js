//alerta de bootstrap, atributo "hidden = true" por defecto 

const welcomeUser = document.getElementById("welcomeUser");
welcomeUser.hidden = true;
const wrongUser = document.getElementById("wrongMail");
wrongUser.hidden = true;
const wrongMailAlert = document.getElementById("wrongMail--alert");
wrongMailAlert.hidden = true;
const blankPassword =document.getElementById("blankPassword--alert");
blankPassword.hidden=true;


//información del formulario 
const loginForm = document.getElementById("form--publication");

//evento de inicio de sesión
loginForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // lectura de los datos del formulario 
    const email = document.getElementById('emailUser').value;
    const password = document.getElementById('passwordUser').value;

    //validación de la información
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        wrongMailAlert.hidden = false;
        loginForm.reset();
        setTimeout(()=>{
            wrongMailAlert.hidden=true;
        },4500)
        return;
    }else{
        wrongUser.hidden = true;
        loginForm.reset();
    }
    //validación de la información contraseña
    const passwordRegex = /^[a-zA-Z0-9!@#$%&*_+¿? -]{6,}$/; // Al menos 6 caracteres
if (!passwordRegex.test(password)) {
    blankPassword.hidden = false;
    loginForm.reset();
    setTimeout(() => {
        blankPassword.hidden = true;
    }, 4500);
    return;
}else{
        wrongUser.hidden = true;
        loginForm.reset();
    }

    // Obtener los valores del localStorage
    const getEmail = 'j@gmail.com';
    const getPassword = 'galleta';

    // Validación de los campos de entrada 
    if (!emailRegex.test(email)) {
        wrongMailAlert.hidden = false;
        setTimeout(() => {
            wrongMailAlert.hidden = true;
        }, 4500);
    } else if (!passwordRegex.test(password)) {
        // Validación de la contraseña
        blankPassword.hidden = false;
        setTimeout(() => {
            blankPassword.hidden = true;
        }, 4500);
    } 
    
        // validación del usuario 

        if (email === getEmail && password === getPassword) {
            welcomeUser.hidden = false;
            wrongUser.hidden = true;
            loginForm.hidden = true;
            setTimeout(() => {
                window.location.href = "../index.html";
            }, 3000);
        } else {
            wrongUser.hidden = false;
            setTimeout(() => {
                wrongUser.hidden = true;
            }, 4500);
            return;
        }
        loginForm.reset(); 
    
})


