let pounds = document.querySelector(".pounds"),
   kilograms = document.querySelector(".kilograms"),
   grams = document.querySelector(".grams"),
   ounces = document.querySelector(".ounces"),
   form = document.querySelector("form");

   form.addEventListener("input", () => {
    weightConverter(event);
 })

    function weightConverter(event) {    
        if(event.target.classList.contains("pounds")) {
            let x = event.target.value;
            console.log("grow up");
            kilograms.value = (x / 2.2046).toFixed(2);
            grams.value = (x / 0.0022046).toFixed(2);
            ounces.value = (x * 16).toFixed(2);
        }
    
        if(event.target.classList.contains("kilograms")) {
            let x = event.target.value;
            pounds.value = (x * 2.2046).toFixed(2);
            grams.value = (x * 1000).toFixed(2); 
            ounces.value = (x * 35.274).toFixed(2); 
        }
    
        if(event.target.classList.contains("grams")){
            let x = event.target.value;
            kilograms.value = (x / 1000).toFixed(2); 
            pounds.value = (x * 0.0022046).toFixed(2);
            ounces.value = (x * 0.035274).toFixed(2);
        }   
        
        if(event.target.classList.contains("ounces")){
             let x = event.target.value;
             pounds.value = (x / 16).toFixed(2);
             kilograms.value = (x / 35.274).toFixed(2);
             grams.value = (x / 0.035274).toFixed(2);
        }
    }

    
    








