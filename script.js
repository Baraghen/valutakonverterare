function tillConvert(){
    var x = document.getElementById("fråga").value;
    var y = document.getElementById("valutaEtt").value;
    var z = document.getElementById("valutaTvå").value;
    document.getElementById("svar").value = (x*y)/z;
}

function frånConvert(){
    var x = document.getElementById("svar").value;
    var y = document.getElementById("valutaEtt").value;
    var z = document.getElementById("valutaTvå").value;
    document.getElementById("fråga").value = (x*z)/y;
}