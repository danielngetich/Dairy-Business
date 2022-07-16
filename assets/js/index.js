
document.getElementById("btn").onclick = function production(ev){
    let shade = {
        shadeA:document.getElementById("shadea").value,
        shadeB:document.getElementById("shadeb").value,
        shadeC:document.getElementById("shadec").value,
        shadeD:document.getElementById("shaded").value,
    }
    let shades = [];
    shades.push(shade);

    document.getElementById("shadeA").value = "Your production in Shed A is"+ shadeA +  "litres per day";
    document.getElementById("shadeB").value = "Your production in Shed B litres per day";
    document.getElementById("shadeC").value = "Your production in Shed C litres per day";
    document.getElementById("shadeD").value = "Your production in Shed D litres per day";
    document.getElementById("total").value = "The total production is litres per day";
   
    ev.preventDefault();
}


