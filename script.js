document.body.style.background = "lightgray";


document.getElementById('password').style.padding="65px";

document.getElementById('generate').style.background="red";
document.getElementById('generate').style.color="white";
document.getElementById('generate').style.borderRadius="20px";
document.getElementById('generate').style.padding="14px";

document.getElementById('copy').style.background="grey";
document.getElementById('copy').style.color="white";
document.getElementById('copy').style.borderRadius="20px";
document.getElementById('copy').style.padding="14px";


var num = "0123456789";
var low = "abcdefghijklmnopqrstuvwxyz";
var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var spe = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var speBox = document.getElementById("spe");
var lowBox = document.getElementById("low");
var uppBox = document.getElementById("upp");



generate.addEventListener("click", generateNum);

function generateNum() {
    var characters = "";
    (numBox.checked) ? characters += num : '';
    (speBox.checked) ? characters += spe : '';
    (lowBox.checked) ? characters += low : '';
    (uppBox.checked) ? characters += upp : '';
    password.value = passwordGen(charNum.value, characters); 
}
    
    function passwordGen(length, characters){
        var gen = "";
        for (var i = 0; i<length; i++){ 
        gen += characters.charAt(Math.random() * characters.length);
    }

    return gen;
    }

    function myFunction() {
        var copyText = document.getElementById("password");
        copyText.select();
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
      }