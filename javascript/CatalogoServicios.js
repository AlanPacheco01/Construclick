function generarCatalogo(servicios) {
    const catalogoContainer = document.getElementById('catalogo');
    catalogoContainer.innerHTML = '';  

    servicios.forEach(servicio => {
        const servicioHTML = `
            <div class="catalogo--container">
                <div class="catalogo--image">
                    <img class="img" src="${servicio.fotosServicios}" alt="${servicio.tipoServicio}">
                </div>
                <div class="catalogo--information">
                    <h3 class="catalogo--title">${servicio.tipoServicio}</h3>
                    <h5 class="catalogo--price">${servicio.nombrePrestador}</h5>
                    <p class="catalogo--paragraph">${servicio.descripcionServicio}</p>
                    <div class="catalogo--buttons">
                        <button class="catalogo--options">Contratar</button>
                        <div class="button--container">
                            <img class="butto--heart" src="../assets/catalogo/heart.svg" alt="heart icon" data-id="${servicio.id}" data-favorito="false">
                        </div>
                        <div class="button--container">
                            <img class="butto--eye" src="../assets/catalogo/eye-fill.svg" alt="eye icon" data-id="${servicio.id}">
                        </div>
                    </div>
                </div>
            </div>
        `;

        catalogoContainer.innerHTML += servicioHTML;
    });

    heartEvent();
    eyeEvent();
}

function fetchService() {
    fetch("../.vscode/servicios.json")
        .then(response => response.json())
        .then(data => {
            generarCatalogo(data);
        })
        .catch(error => {
            console.error('Error al cargar los servicios:', error);
        });
}

function heartEvent() {
    const heartButtons = document.querySelectorAll('.butto--heart');

    heartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const like = button.getAttribute('data-favorito') === 'true';
            if (like) {
                button.src = '../assets/catalogo/heart.svg';
                button.setAttribute('data-favorito', 'false');
            } else {
                button.src = '../assets/catalogo/heart-fill.svg';
                button.setAttribute('data-favorito', 'true');
            }
        });
    });
}

function eyeEvent() {
    const eyeButtons = document.querySelectorAll('.butto--eye');

    eyeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const container = button.closest('.catalogo--container');
            const img = container.querySelector('.img');
            const title = container.querySelector('.catalogo--title').textContent;
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                     <h3 class="modal-title">${title}</h3>
                    <img class="modal-image" src="${img.src}" alt="${img.alt}">
                </div>
            `;
            document.body.appendChild(modal);

            modal.style.display = 'block';

            modal.querySelector('.close-button').addEventListener('click', () => {
                modal.style.display = 'none';
            });

            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    });
}
document.addEventListener('DOMContentLoaded', fetchService);
