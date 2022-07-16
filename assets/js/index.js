let shades = [];
 
const production = (ev)=>{
    ev.preventDefault();
}
let shade = {
    shadeA:document.getElementById("shadea"),
    shadeB:document.getElementById("shadeb"),
    shadeC:document.getElementById("shadec"),
    shadeD:document.getElementById("shaded"),
}
shades.push(shade);
document.forms[0].reset();

document.addEventListener('DOMContentLoaded', ()=>{
    Document.getElementById('btn').addEventListener('click',production);
} );