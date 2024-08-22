//Definición del estado de los textos, hidden por defecto
const derechosArco = document.getElementById("DerechosArco");
derechosArco.hidden =true;
const datosPersonales = document.getElementById("DatosPersonales");
datosPersonales.hidden = true;
const identidadDom = document.getElementById("IdentidadDom");
identidadDom.hidden = true;
const tratamientoDatos = document.getElementById("TratamientoDatos");
tratamientoDatos.hidden = true;

//Evento para mostrar la sección de derechos
const derechosArcoLi = document.getElementById("derechosArc");

//Evento para la versión movil
derechosArcoLi.addEventListener('click', ()=> {
    derechosArco.hidden=false;
    datosPersonales.hidden=true;
    identidadDom.hidden = true;
    tratamientoDatos.hidden = true;
})

//Evento para la versión escritorio
derechosArcoLi.addEventListener('mouseover',()=>{
    derechosArco.hidden=false;
    datosPersonales.hidden=true;
    identidadDom.hidden = true;
    tratamientoDatos.hidden = true;
})

//Evento para mostrar la sección de datos personales
const datosPersonalesLi = document.getElementById("datosPer");

//Evento para la versión movil
datosPersonalesLi.addEventListener('click', ()=>{
    derechosArco.hidden=true;
    datosPersonales.hidden=false;
    identidadDom.hidden = true;
    tratamientoDatos.hidden = true;
})

//Evento para la versión de escritorio
datosPersonalesLi.addEventListener('mouseover', ()=> {
    derechosArco.hidden=true;
    datosPersonales.hidden=false;
    identidadDom.hidden = true;
    tratamientoDatos.hidden = true; 
})

//Evento para mostrar la sección de identidad
const identidadDomLi = document.getElementById("identDom");

//Evento para la versión móvil
identidadDomLi.addEventListener('click', ()=> {
    derechosArco.hidden=true;
    datosPersonales.hidden=true;
    identidadDom.hidden=false;
    tratamientoDatos.hidden = true;
});

//Evento para la versión de escritorio
identidadDomLi.addEventListener('mouseover', ()=>{
    derechosArco.hidden=true;
    datosPersonales.hidden=true;
    identidadDom.hidden=false;
    tratamientoDatos.hidden = true;
})

//Evento para mostrar la sección de datos personales
const tratamientoDatosLi = document.getElementById("tratamDato");

//Evento para la versión movil
tratamientoDatosLi.addEventListener('click', ()=>{
    derechosArco.hidden=true;
    datosPersonales.hidden=true;
    identidadDom.hidden=true;
    tratamientoDatos.hidden = false;
})

//Evento para la versión de escritorio
tratamientoDatosLi.addEventListener('mouseover', ()=>{
    derechosArco.hidden=true;
    datosPersonales.hidden=true;
    identidadDom.hidden=true;
    tratamientoDatos.hidden = false;
})