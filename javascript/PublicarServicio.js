
const formPublication = document.querySelector('#form--publication');
const buttonContinuarPublicacion = document.querySelector('#form--continue');
const whatsPromoted = document.querySelector('#whatsPromoted');
const whichCategory = document.querySelector('#whichCategory');


buttonContinuarPublicacion.disabled = true;

const formValidator = () => {
    const whatsPromotedValidation = whatsPromoted.value !== 'Selecciona que vas a promocionar';
    const whichCategoryValidation = whichCategory.value !== 'Selecciona la categoría';

    if (whatsPromotedValidation && whichCategoryValidation) {
        buttonContinuarPublicacion.disabled = false;
    } else {
        buttonContinuarPublicacion.disabled = true;
    }
};

whatsPromoted.addEventListener('change', formValidator);
whichCategory.addEventListener('change', formValidator);

const infoPublication = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.target);
    const completeData = Object.fromEntries(data.entries());

    console.log(JSON.stringify(completeData));

    formPublication.reset();
}

formPublication.addEventListener('submit', infoPublication); 

buttonContinuarPublicacion.addEventListener('click', function() {
    //Leemos el valor del select
    let valor = document.getElementById("whatsPromoted").value;
    if(valor == "1"){
    window.location.href = "../html/PublicarServicio3.html";
    }
    if(valor == "2"){
    window.location.href = "../html/PublicarServicio2.html";
    }
})
    
