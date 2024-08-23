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
