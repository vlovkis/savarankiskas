function ChangeColor()   
{  
     document.getElementById("resultatas").style.background = 'Red';  
}  

function ChangeColor2()   
{  
   document.getElementById("resultatas").style.background = 'Green';   
}  

function ChangeColor3()   
{  
   document.getElementById("resultatas").style.background = 'Blue';   
}

var clicks = 0;
var clicks2 = 0;
var clicks3 = 0;

function onClick() {
   clicks += 1;
   document.getElementById("clicks").innerHTML = clicks;
};

function onClick2() {
   clicks2 += 1;
   document.getElementById("clicks2").innerHTML = clicks2;
};

function onClick3() {
   clicks3 += 1;
   document.getElementById("clicks3").innerHTML = clicks3;
};