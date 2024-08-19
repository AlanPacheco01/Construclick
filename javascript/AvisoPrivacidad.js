const derechosArco = document.getElementById("DerechosArco");
derechosArco.hidden =true;
const datosPersonales = document.getElementById("DatosPersonales");
datosPersonales.hidden = true;
const identidadDom = document.getElementById("IdentidadDom");
identidadDom.hidden = true;
const tratamientoDatos = document.getElementById("TratamientoDatos");
tratamientoDatos.hidden = true;

const derechosArcoLi = document.getElementById("derechosArc");
derechosArcoLi.addEventListener('click', ()=> {
    derechosArco.hidden=false;
    datosPersonales.hidden=true;
    identidadDom.hidden = true;
    tratamientoDatos.hidden = true;
})
derechosArcoLi.addEventListener('mouseover',()=>{
    derechosArco.hidden=false;
    datosPersonales.hidden=true;
    identidadDom.hidden = true;
    tratamientoDatos.hidden = true;
})

const datosPersonalesLi = document.getElementById("datosPer");
datosPersonalesLi.addEventListener('click', ()=>{
    derechosArco.hidden=true;
    datosPersonales.hidden=false;
    identidadDom.hidden = true;
    tratamientoDatos.hidden = true;
})

datosPersonalesLi.addEventListener('mouseover', ()=> {
    derechosArco.hidden=true;
    datosPersonales.hidden=false;
    identidadDom.hidden = true;
    tratamientoDatos.hidden = true; 
})

const identidadDomLi = document.getElementById("identDom");
identidadDomLi.addEventListener('click', ()=> {
    derechosArco.hidden=true;
    datosPersonales.hidden=true;
    identidadDom.hidden=false;
    tratamientoDatos.hidden = true;
});

identidadDomLi.addEventListener('mouseover', ()=>{
    derechosArco.hidden=true;
    datosPersonales.hidden=true;
    identidadDom.hidden=false;
    tratamientoDatos.hidden = true;
})

const tratamientoDatosLi = document.getElementById("tratamDato");
tratamientoDatosLi.addEventListener('click', ()=>{
    derechosArco.hidden=true;
    datosPersonales.hidden=true;
    identidadDom.hidden=true;
    tratamientoDatos.hidden = false;
})

tratamientoDatosLi.addEventListener('mouseover', ()=>{
    derechosArco.hidden=true;
    datosPersonales.hidden=true;
    identidadDom.hidden=true;
    tratamientoDatos.hidden = false;
})
/*
const ocultarTodo = document.getElementById('main-container');
ocultarTodo.addEventListener('click', ()=>{
    derechosArco.hidden=true;
    datosPersonales.hidden=true;
    identidadDom.hidden=true;
    tratamientoDatos.hidden = true;
})
    */
/*
let x = window.matchMedia('(max-width: 700px)');

function cambioPantalla(x){
    if(x.matches){
        derechosArcoLi.addEventListener('click', ()=> {
            derechosArco.hidden = false;
            datosPersonales.hidden = true;
            identidadDom.hidden = true;
            tratamientoDatos.hidden = true;
        });
    }
}

// Run the function at least once on page load
cambioPantalla(x);

// Listen for changes in screen size and run the function when a change occurs
x.addEventListener('change', () => {
    cambioPantalla(x);
});
*/