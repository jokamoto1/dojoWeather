function removeCookie(a) {
    var a = document.querySelector(".cookie");
    a.remove();
}
var i = 0;
function convert() {
   
    if (i === 0) {
        var value = document.querySelector("#red1 span");
        var newTemp = Math.round((value.innerText * (9 / 5)) + 32);
        value.innerText = newTemp;
        
        var value = document.querySelector("#red2 span");
        var newTemp2 = Math.round((value.innerText * (9 / 5)) + 32);
        value.innerText = newTemp2;

        var value = document.querySelector("#red3 span");
        var newTemp3 = Math.round((value.innerText * (9 / 5)) + 32);
        value.innerText = newTemp3;
        
        var value = document.querySelector("#red4 span");
        var newTemp4 = Math.round((value.innerText * (9 / 5)) + 32);
        value.innerText = newTemp4;

        var value = document.querySelector("#blue1 span");
        var newTemp = Math.round((value.innerText * (9 / 5)) + 32);
        value.innerText = newTemp;
        
        var value = document.querySelector("#blue2 span");
        var newTemp2 = Math.round((value.innerText * (9 / 5)) + 32);
        value.innerText = newTemp2;

        var value = document.querySelector("#blue3 span");
        var newTemp3 = Math.round((value.innerText * (9 / 5)) + 32);
        value.innerText = newTemp3;
        
        var value = document.querySelector("#blue4 span");
        var newTemp4 = Math.round((value.innerText * (9 / 5)) + 32);
        value.innerText = newTemp4;
       
       
       
       
     i++;
    } else if (i === 1) {
        var value1 = document.querySelector("#red1 span");
        var newTemp1 = Math.round((value1.innerText -32 ) * 5/9);
        value1.innerText = newTemp1;

        var value1 = document.querySelector("#red2 span");
        var newTemp5 = Math.round((value1.innerText -32 ) * 5/9);
        value1.innerText = newTemp5;
       
        var value1 = document.querySelector("#red3 span");
        var newTemp6 = Math.round((value1.innerText -32 ) * 5/9);
        value1.innerText = newTemp6;

        var value1 = document.querySelector("#red4 span");
        var newTemp7 = Math.round((value1.innerText -32 ) * 5/9);
        value1.innerText = newTemp7;
        var value1 = document.querySelector("#blue1 span");
        var newTemp1 = Math.round((value1.innerText -32 ) * 5/9);
        value1.innerText = newTemp1;

        var value1 = document.querySelector("#blue2 span");
        var newTemp5 = Math.round((value1.innerText -32 ) * 5/9);
        value1.innerText = newTemp5;
       
        var value1 = document.querySelector("#blue3 span");
        var newTemp6 = Math.round((value1.innerText -32 ) * 5/9);
        value1.innerText = newTemp6;

        var value1 = document.querySelector("#blue4 span");
        var newTemp7 = Math.round((value1.innerText -32 ) * 5/9);
        value1.innerText = newTemp7;
       
       
        i--;
    }
}

   /* var temp = value.slice(0, -1);
 var forc = document.getElementById("#temp")
 if (forc === "f") {
     var temp = document.querySelector("#red")
     newTemp = Math.round(9 / 5 * temp + 32);
     temp.innerHTML = newTemp + "°";
 } else if (forc === "c") {
     var temp = document.querySelector("#red")
     newTemp = Math.round(5 / 9 * temp - 32);
     temp.innerHTML = newTemp + "°";
 }

}
/*
function convertCToF(temp){
return Math.round(9/5 * temp + 32);
}
function convertFToC(temp){
return Math.round(5/9 * temp - 32);
}
*/
