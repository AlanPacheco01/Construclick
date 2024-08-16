const propInt = document.getElementById("propiedadIntelectual");
propInt.hidden =true;
const regCont = document.getElementById("registroContrasenas");
regCont.hidden = true;
const servApart = document.getElementById("servApart");
servApart.hidden = true;


const propiedadIntLi = document.getElementById("propiedadInt");
propiedadIntLi.addEventListener('click', ()=> {
    propInt.hidden=false;
    regCont.hidden=true;
    servApart.hidden = true;
})
propiedadIntLi.addEventListener('mouseover',()=>{
    propInt.hidden=false;
    regCont.hidden=true;
    servApart.hidden = true;
})

const registroContLi= document.getElementById("registroContra");
registroContLi.addEventListener('click', ()=>{
    propInt.hidden=true;
    regCont.hidden=false;
    servApart.hidden = true;
})

registroContLi.addEventListener('mouseover', ()=> {
    propInt.hidden=true;
    regCont.hidden=false;
    servApart.hidden = true;
})

const serviciosApartLi = document.getElementById("serviciosApart");
serviciosApartLi.addEventListener('click', ()=> {
    propInt.hidden=true;
    regCont.hidden=true;
    servApart.hidden = false;
});

serviciosApartLi.addEventListener('mouseover', ()=>{
    propInt.hidden=true;
    regCont.hidden=true;
    servApart.hidden = false;
})