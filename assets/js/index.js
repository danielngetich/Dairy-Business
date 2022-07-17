
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

document.getElementById("yearly-report").onclick = function(){
    const January = total* price *31;
    const February = total*price* 29;
    const march = total *price*31;
    const  April = total *price*30;
    const  May = total *price*31;
    const   June = total *price*30;
    const   July = total *price*31;
    const   August = total *price*31;
    const   September=total *price*30;
    const   October= total *price*31;
    const  November= total *price*30;
    const  December=total *price*31;
    
  document.getElementById("jan").value = "Your income for January is "+January;
  document.getElementById("feb").value = "Your income for February is "+February;
  document.getElementById("mar").value = "Your income for March is "+march;
  document.getElementById("apr").value = "Your income for April is "+April;
  document.getElementById("may").value = "Your income for May is "+May;
  document.getElementById("june").value = "Your income for June is "+June;
  document.getElementById("july").value = "Your income for July is "+July;
  document.getElementById("aug").value = "Your income for August is "+August;
  document.getElementById("sept").value = "Your income for September is "+September;
  document.getElementById("oct").value = "Your income for October is "+ October;
  document.getElementById("nov").value = "Your income for November is "+November;
  document.getElementById("dec").value = "Your income for December is "+December;
}
}
}

