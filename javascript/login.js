//alerta de bootstrap, atributo "hidden = true" por defecto 

const welcomeUser = document.getElementById("welcomeUser");
welcomeUser.hidden = true;
const wrongMail = document.getElementById("wrongMail--alert");
wrongMail.hidden = true;
const wrongPassword = document.getElementById("wrongPassword--alert");
wrongPassword.hidden = true;
const unexistingUser =document.getElementById("unexistingUser--alert");
unexistingUser.hidden=true;

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
        wrongMail.hidden = false;
        loginForm.reset();
        setTimeout(()=>{
            wrongMail.hidden=true;
        },4500)
        return;
    }else{
        unexistingUser.hidden = true;
        loginForm.reset();
    }
    //validación de la información contraseña
    const passwordRegex = /^[a-zA-Z0-9!@#$%&*_+¿? -]{6,}$/; // Al menos 6 caracteres
if (!passwordRegex.test(password)) {
    wrongPassword.hidden = false;
    loginForm.reset();
    setTimeout(() => {
        wrongPassword.hidden = true;
    }, 4500);
    return;
}else{
        unexistingUser.hidden = true;
        loginForm.reset();
    }

    // Obtener los valores del localStorage
    const getEmail = 'j@gmail.com';
    const getPassword = 'galleta';

    // Validación de los campos de entrada 
    if (!emailRegex.test(email)) {
        wrongMail.hidden = false;
        setTimeout(() => {
            wrongMail.hidden = true;
        }, 4500);
    } else if (!passwordRegex.test(password)) {
        // Validación de la contraseña
        wrongPassword.hidden = false;
        setTimeout(() => {
            wrongPassword.hidden = true;
        }, 4500);
    } 
    
        // validación del usuario 

        if (email === getEmail && password === getPassword) {
            welcomeUser.hidden = false;
            unexistingUser.hidden = true;
            loginForm.hidden = true;
            setTimeout(() => {
                window.location.href = "../index.html";
            }, 3000);
        } else {
            unexistingUser.hidden = false;
            setTimeout(() => {
                unexistingUser.hidden = true;
            }, 4500);
            return;
        }
        loginForm.reset(); 
    
})


