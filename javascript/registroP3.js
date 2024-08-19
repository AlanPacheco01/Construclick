document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('register3');
    const submitButton = document.getElementById('send--form');

    // Escucha el evento "submit" en el formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío por defecto

        // Obtener y limpiar los valores de los campos de entrada
        let nombre = document.getElementById('userName').value.trim();
        let email = document.getElementById('userEmail').value.trim();
        let password = document.getElementById('userPassword').value.trim();
        let confirmPassword = document.getElementById('userPassword2').value.trim();
        let phone = document.getElementById('userPhone').value.trim();
        let location = document.getElementById('tipo-locacion').value.trim();

        // Validación básica: verificar si alguno de los campos está vacío
        if (nombre === "" || email === "" || password === "" || confirmPassword === "" || phone === "" || location === "") {
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
            location: location,
            image: document.getElementById('userImage').value // Solo almacenamos el nombre del archivo
        };

        // Convertir el objeto a una cadena JSON y guardarlo en localStorage
        localStorage.setItem("datosFormulario", JSON.stringify(datosFormulario, null, 2));

        // Mostrar un mensaje de confirmación
        alert("Datos guardados correctamente en el LocalStorage.");

        // Limpiar el formulario después de guardar los datos
        form.reset();
    });
});
