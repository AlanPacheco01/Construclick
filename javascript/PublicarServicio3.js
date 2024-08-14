const form = document.querySelector('#form');
const buttonPublicarServicio = document.querySelector('#button--publicarServicio');
const productName = document.querySelector('#productName');
const photo = document.querySelector('#photo');
const productDescription = document.querySelector('#productDescription');
const shippingOptions = document.querySelector('#shippingOptions');

buttonPublicarServicio.disabled = true;




const formValidator = () => {
    const productNameValidation = productName.value.trim() !== '';
    const photoValidation = photo.files.length > 0;
    const productDescriptionValidation = productDescription.value.trim() !== '';
    const shippingOptionsValidation = shippingOptions.value !== 'Zona a laborar';

    
    if (productNameValidation && photoValidation && productDescriptionValidation && shippingOptionsValidation) {
        buttonPublicarServicio.disabled = false;
    } else {
        buttonPublicarServicio.disabled = true;
    }
};


productName.addEventListener('input', formValidator);
photo.addEventListener('change', formValidator);
productDescription.addEventListener('input', formValidator);
shippingOptions.addEventListener('change', formValidator);

const infoObjects = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.target);
    const completeData = Object.fromEntries(data.entries());

    // Obtener URLs de las imágenes seleccionadas
    const pictures = data.getAll('photo');
    const pictureUrls = pictures.map(picture => URL.createObjectURL(picture));
    completeData.photoUrls = pictureUrls;

    console.log(JSON.stringify(completeData));

    form.reset();
}

form.addEventListener('submit', infoObjects); 