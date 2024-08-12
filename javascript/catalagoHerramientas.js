//store div vacio en html para alojar la variable tienda 
//const tienda=document.getElementById('store');

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
        




  //  const mostrarProductos = (productos) => {
    //    productos.map((producto) => {
//             // El método map me permite recorre toda la API como si fuera un array de arrays tomando cada producto con el nombre `producto`
    
//             // 1. Crear elementos HTML en donde voy a ir guardando cada parte del producto (title<h2> image<img> price<h3> description<p> <hr>)
//             const titulo = document.createElement('h2');
      //       const imagen = document.createElement('imagen');
//             const precio = document.createElement('h3');
//             const descripcion = document.createElement('p');
           
//             const tamano=document.createElement('h3');
//             const peso=document.createElement('h4')
// ;    
//             // 2. Llenar los elementos creados. Podemos utilizar innerHTML para llenarlo con los datos del objeto. Para ellos mandamos a llamar las claves del objeto
//             titulo.innerHTML = producto.nombre ;
//             precio.innerHTML=`${producto.precio}`;
  //           imagen.src = producto.imagen;
//             imagen.width = 5 ;

//             tamano.innerHTML = producto.tamano ;
//             peso.innerHTML = producto.peso ;
//             descripcion.innerHTML = producto.descripcion;
    
//             // 3. Agregar los nodos en el nodo Padre
//             tienda.appendChild(titulo);
 //           tienda.appendChild(imagen);
//             tienda.appendChild(precio);
//             tienda.appendChild(descripcion);
          
//})
//}


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
