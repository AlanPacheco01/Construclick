
let productos = null;

//direccion de ruta json
const url = `catalagoHerramientas.json`;
//funcion fetch para pedir que muestre los archivos en tipo json 
    fetch(url)
        .then(response => response.json())
        .then(response => {
            productos = response;
            // Invocar una función con parámetros para mostrar los productos (creados con creteelement )
          //  mostrarProductos(productos);
        })
        
    fetch('catalagoHerramientas.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('store');
        data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('item');
        
            div.innerHTML = `
                
                <img src="${item.imagen || 'placeholder.jpg'}" alt="${item.nombre}">
                <h2>${item.nombre}</h2>
                <h3>${item.descripcion}</h3>
                <p>Precio: $${item.precio}</p>
               
               
               
            `;
            container.appendChild(div);
        });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));

