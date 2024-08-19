const seletElement=document.getElementById('lenguajes');
console.log(lenguajes);
const linkElement=document.getElementById('gofuture')
seletElement.addEventListener('change', ()=>{
   const selectedValue=seletElement.value;
   linkElement.href=selectedValue;

});
