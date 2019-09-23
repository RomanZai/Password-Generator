document.body.style.background = "lightgray";
document.getElementById('generate').setAttribute( "border-radius", "8px");
document.getElementById('generate').setAttribute( "background-color", "red");

var num = "0123456789";
var low = "abcdefghijklmnopqrstuvwxyz";
var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var spe = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var speBox = document.getElementById("spe");
var lowBox = document.getElementById("low");
var uppBox = document.getElementById("upp");

generate.addEventListener("click",function(a){
var characters = "";
(numBox.checked) ? characters += num : '';
(speBox.checked) ? characters += spe : '';
(lowBox.checked) ? characters += low : '';
(uppBox.checked) ? characters += upp : '';
password.value = passwordGen(charNum.value, characters);
});

    
    function passwordGen(length, characters){
        var gen = "";
        for (var i = 0; i<length; i++){ 
        gen += characters.charAt(Math.random() * characters.length);
    }

    return gen;
    }