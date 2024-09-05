document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const productName = document.getElementById('productName');
    const photo = document.getElementById('photo');
    const shippingOptions = document.getElementById('shippingOptions');
    const productDescription = document.getElementById('productDescription');
    const submitButton = document.getElementById('button--publicarServicio');

    const nameAlert = document.getElementById('name-alert');
    const photoAlert = document.getElementById('photo-alert');
    const shippingAlert = document.getElementById('shipping-alert');
    const descriptionAlert = document.getElementById('description-alert');

   
    submitButton.disabled = true;

    function validateProductName() {
        if (productName.value.trim() === '' || productName.value.length < 5) {
            nameAlert.hidden = false;
            return false;
        } else {
            nameAlert.hidden = true;
            return true;
        }
    }

    function validatePhoto() {
        if (photo.files.length === 0) {
            photoAlert.hidden = false;
            return false;
        } else {
            photoAlert.hidden = true;
            return true;
        }
    }

    function validateShippingOptions() {
        if (shippingOptions.value === 'Selecciona tipo de entrega' || shippingOptions.value === 'Selecciona zona a laborar' ) {
            shippingAlert.hidden = false;
            return false;
        } else {
            shippingAlert.hidden = true;
            return true;
        }
    }

    function validateProductDescription() {
        if (productDescription.value.trim() === '' || productDescription.value.length < 10) {
            descriptionAlert.hidden = false;
            return false;
        } else {
            descriptionAlert.hidden = true;
            return true;
        }
    }

 
    function validateForm() {
        const isProductNameValid = validateProductName();
        const isPhotoValid = validatePhoto();
        const isShippingOptionsValid = validateShippingOptions();
        const isProductDescriptionValid = validateProductDescription();

        return isProductNameValid && isPhotoValid && isShippingOptionsValid && isProductDescriptionValid;
    }

   
    function updateSubmitButtonState() {
        if (validateForm()) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    productName.addEventListener('input', function () {
        validateProductName();
        updateSubmitButtonState();
    });

    productDescription.addEventListener('input', function () {
        validateProductDescription();
        updateSubmitButtonState();
    });

    shippingOptions.addEventListener('change', function () {
        validateShippingOptions();
        updateSubmitButtonState();
    });

    photo.addEventListener('change', function () {
        validatePhoto();
        updateSubmitButtonState();
    });


    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const data = new FormData(form);
        const completeData = Object.fromEntries(data.entries());

        const pictures = data.getAll('photo');
        const pictureUrls = pictures.map(picture => URL.createObjectURL(picture));
        completeData.photoUrls = pictureUrls;

        console.log(JSON.stringify(completeData));

        form.reset();
        submitButton.disabled = true;  
    });
});
