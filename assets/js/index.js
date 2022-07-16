function totalProduction()

let shades = [];
 
const production = (ev)=>{
    ev.preventDefault();
}
let shade = {
    shadeA:document.getElementById("shade-a"),
    shadeB:document.getElementById("shade-b"),
    shadeC:document.getElementById("shade-c"),
    shadeD:document.getElementById("shade-d"),
}
shades.push(shade);
document.forms[0].reset();

document.addEventListener('DOMContentLoaded', ()=>{
    Document.getElementById('btn').addEventListener('click',production);
} );