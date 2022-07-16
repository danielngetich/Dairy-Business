
document.getElementById("btn").onclick = function production(ev){
    let shade = {
        shadeA:document.getElementById("shadea"),
        shadeB:document.getElementById("shadeb"),
        shadeC:document.getElementById("shadec"),
        shadeD:document.getElementById("shaded"),
    }
    let shades = [];
    shades.push(shade);
    let sum = [shadea.value + shadeb.value + shadec.value + shaded.value];
    document.getElementById("shadeA").value = "Your production in Shed A is " + shadea.value +" litres per day";
    document.getElementById("shadeB").value = "Your production in Shed B is " + shadeb.value +" litres per day";
    document.getElementById("shadeC").value = "Your production in Shed C is " + shadec.value +" litres per day";
    document.getElementById("shadeD").value = "Your production in Shed D is " + shaded.value +" litres per day";
    document.getElementById("total").value = "The total production is "+ total.value+ " litres per day";
   
    ev.preventDefault();
    total();
}


