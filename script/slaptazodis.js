function passCheck() {
    
        var pw = document.getElementById("passinput").value;
    
        if(pw ==""){
            document.getElementById("demo").innerHTML = "Laukelis negali būti tuščias";
        }
    
          else if(pw.length > 0 && pw.length < 8){
            document.getElementById("demo").innerHTML = "Slaptažodis turi būt mažiausiai 8 simbolių";
    
        } else if(pw.search(/[a-z]/) < 0) {
            document.getElementById("demo").innerHTML = "Slaptažodis turi turėt mažąją raidę"
        }
    
         else if(pw.search(/[A-Z]/) < 0) {
        document.getElementById("demo").innerHTML = "Slaptažodis turi turėt didžiąją raidę"
        }
    
        else if(pw.search(/[0-9]/) < 0) {
            document.getElementById("demo").innerHTML = "Slaptažodis turi bent vieną skaičių"
            }
    
        else {  
            alert("Slaptažodis tinka!");  
         }  
    
    
    }