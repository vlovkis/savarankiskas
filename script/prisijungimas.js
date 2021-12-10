function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Vardas" && password == "Pavarde" ){
       alert ("Prisijungimas pavyko!")
    }
    else if ( username == "Vardas" && password !=="Pavarde" ){
        alert ("Neteisingas slaptažodis")
    }

    else if ( username !== "Vardas" && password =="Pavarde" ){
        alert ("Neteisingas slapyvardis")
    }

    else if ( username !== "Vardas" && password !=="Pavarde" ){
        alert ("Neteisingas slapyvardis arba slaptažodis")
    }
        
    }