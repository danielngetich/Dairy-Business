
document.getElementById("btn").onclick = function production(ev){
    let shade = ({
        shadeA:document.getElementById("shadea"),
        shadeB:document.getElementById("shadeb"),
        shadeC:document.getElementById("shadec"),
        shadeD:document.getElementById("shaded"),
    })
    let shades = [];
    shades.push(shade);
    const total = (Number(shadea.value) + Number(shadeb.value)+ Number(shadec.value) + Number(shaded.value));
    document.getElementById("shadeA").value = "Your production in Shed A is " + shadea.value +" litres per day";
    document.getElementById("shadeB").value = "Your production in Shed B is " + shadeb.value +" litres per day";
    document.getElementById("shadeC").value = "Your production in Shed C is " + shadec.value +" litres per day";
    document.getElementById("shadeD").value = "Your production in Shed D is " + shaded.value +" litres per day";
    document.getElementById("total").value = "The total production is "+ total+ " litres per day";
   
    ev.preventDefault();

document.getElementById("button").onclick = function(){
    const price = 45 ;
    const weekly = total * price * 7;
   const yearly = total * price *365;

   document.getElementById("weekly").value = "Your weekly income will be Ksh "+ weekly;
   document.getElementById("yearly").value = "Your weekly income will be Ksh "+ yearly;
   
   ev.preventDefault();
}
document.getElementById("yearly-report").onclick = Function(leapyear);{
    const leapyear = {
        January : 31,
        February : 29,
        march : 31,
        April : 30,
        May : 31,
        June : 30,
        July : 31,
        August : 31,
        September:30,
        October: 31,
        November: 30,
        December:31,
    }
}
}


