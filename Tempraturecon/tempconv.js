const Calculatetemp = () =>{
    const inputtemp = document.getElementById("temp").value;
    const fromtempsel = document.getElementById('fromunit').value;
   const totempsel = document.getElementById('tounit').value;
   if(fromtempsel == "Celsius" && totempsel == "Fahrenheit"){
      let r = ((inputtemp*1.8)+32);
      document.getElementById("result").innerHTML = r + "&deg; F";
   }
   else if(fromtempsel == "Fahrenheit" && totempsel == "Celsius"){
      let r = ((inputtemp-32)*(5/9)).toFixed(2);
      document.getElementById("result").innerHTML = r + "&deg; C";
   }
   else if(fromtempsel == "Celsius" && totempsel == "kelvin"){
      let r = Number(inputtemp) + Number(273.15);
      document.getElementById("result").innerHTML = r + "K";
   }
   else if(fromtempsel == "Fahrenheit" && totempsel == "kelvin"){
      let r = Number(((inputtemp-32)*(5/9)) + Number(273.15)).toFixed(2);
      document.getElementById("result").innerHTML = r + "K";
   }
   else if(fromtempsel == "kelvin" && totempsel == "Celsius"){
      let r = (Number(inputtemp) - Number(273.15)).toFixed(2);
      document.getElementById("result").innerHTML = r + "&deg; C";
   }
   else if(fromtempsel == "kelvin" && totempsel == "Fahrenheit"){
      let r = ((((Number(inputtemp) - Number(273.15)))*1.8)+32).toFixed(2);
      document.getElementById("result").innerHTML = r + "&deg; F";
   }
   else if(fromtempsel == "Select" || totempsel == "Select"){
      document.getElementById("result").innerHTML = "Please select a Temperature Unit";
   }
   else{
      document.getElementById("result").innerHTML = "No change in value as same unit selected";
   }

}
