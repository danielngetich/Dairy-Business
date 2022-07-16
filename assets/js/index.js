let shades = [];
let totalProduction = {
    shadeA:document.getElementById("shadea"),
    shadeB:document.getElementById("shadeb"),
    shadeC:document.getElementById("shadec"),
    shadeD:document.getElementById("shaded"),
}
shades.push(totalProduction);
document.forms[0].reset();
document.addEventListener('DOMContentLoaded', ()=>{
    Document.getElementById('btn').addEventListener('click',totalProduction);
} );