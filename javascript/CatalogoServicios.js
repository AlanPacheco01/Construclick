const catalogo = document.getElementById("store--desc");
let servicios = null;

const url = "/.vscode/servicios.json";
fetch(url)
    .then(response => response.json())
    .then(response => {
        servicios = response;
        mostrarServicios(servicios);
    })
    .catch(error => console.error());

const mostrarServicios = (servicios) => {
    servicios.map((servicio) => {

        // Crear un div para cada servicio
        const divServicio = document.createElement("div");
        divServicio.className = "servicio"; // Clase para estilizar cada servicio

        // Crear el contenedor para la imagen
        const divImagen = document.createElement("div");
        divImagen.className = "servicio-imagen";

        const fotosServicios = document.createElement("img");
        fotosServicios.src = servicio.fotosServicios;
        fotosServicios.alt = "Imagen del servicio";

        divImagen.appendChild(fotosServicios);

        // Crear el contenedor para la información
        const divInfo = document.createElement("div");
        divInfo.className = "servicio-info";

        const nombrePrestador = document.createElement("h4");
        nombrePrestador.textContent = servicio.nombrePrestador;

        const tipoServicio = document.createElement("h4");
        tipoServicio.textContent = servicio.tipoServicio;

        const ubicacionPrestador = document.createElement("h4");
        ubicacionPrestador.textContent = servicio.ubicacionPrestador;

        const descripcionServicio = document.createElement("p");
        descripcionServicio.textContent = servicio.descripcionServicio;

        const boton = document.createElement("button");
        boton.innerHTML = `Contactar`;
        boton.id = `boton--contactar`;

        const botonCorazon = document.createElement("button");
        botonCorazon.innerHTML = `♥`;
        botonCorazon.id = `boton--corazon`;

        const botonOjo = document.createElement("button");
        botonOjo.innerHTML = `👁️‍🗨️`;
        botonOjo.id = `boton--ojo`;
        const estrella = document.createElement("label");
        estrella.innerHTML = `★★★★★`;
        estrella.id=`store-estrella`

        // Añadir los elementos al contenedor de información
        divInfo.appendChild(nombrePrestador);
        divInfo.appendChild(tipoServicio);
        divInfo.appendChild(ubicacionPrestador);
        divInfo.appendChild(estrella);
        divInfo.appendChild(descripcionServicio);
        divInfo.appendChild(boton);
        /*
        divInfo.appendChild(botonCorazon);
        divInfo.appendChild(botonOjo);
*/
        // Añadir imagen e información al div del servicio
        divServicio.appendChild(divImagen);
        divServicio.appendChild(divInfo);

        // Añadir el div del servicio al catálogo
        catalogo.appendChild(divServicio);
    });
}
