// Variable para almacenar el texto original
let textosOriginales = [];
let buttonCatalogoServicios = document.querySelector('#aboutUs--button');
let buttonPublicarServicios = document.querySelector('#aboutUs--button2');

// Función para actualizar el texto
function actualizarTexto() {
    // Obtener el contenedor por ID
    const colaboradores = document.getElementById('Collaborators');
    
    // Obtener todos los párrafos dentro del contenedor
    const parrafos = colaboradores.getElementsByTagName('p');

    // Verificar si el ancho de la ventana es menor a 415px
    if (window.matchMedia('(max-width: 415px)').matches) {
        // Reemplazar el texto de cada párrafo
        for (let i = 0; i < parrafos.length; i++) {
            if (textosOriginales[i] === undefined) {
                // Guardar el texto original
                textosOriginales[i] = parrafos[i].textContent;
            }
        }
        for (let i = 0; i < parrafos.length; i++) {
            if (i === 1 || i === 2) {
              parrafos[i].textContent = 'Desarrolladora Java Fullstack';
            } else {
              parrafos[i].textContent = 'Desarrollador Java Fullstack';
            }
          }
    } else {
        // Restaurar el texto original si la condición no se cumple
        for (let i = 0; i < parrafos.length; i++) {
            if (textosOriginales[i] !== undefined) {
                parrafos[i].textContent = textosOriginales[i];
            }
        }
    }
}

// Llamar a la función al cargar la página
actualizarTexto();

// Añadir un event listener para actualizar el texto cuando cambie el tamaño de la ventana
window.addEventListener('resize', actualizarTexto);

buttonCatalogoServicios.addEventListener('click', function() {
    window.location.href = "../html/CatalogoServicios.html";
    })

buttonPublicarServicios.addEventListener('click', function() {
    window.location.href = "../html/publicarServicio.html";
})
