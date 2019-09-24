document.body.style.background = "lightgray";
document.body.style.fontFamily = "Arial, Helvetica, sans-serif;";



document.getElementById('password').setAttribute("style", "margin:auto; width:40%; text-align:center; padding: 65px; font-size: 20px; border-style: dashed; ");

document.getElementById('generate').setAttribute("style", "background:red; color:white; border-radius:20px; padding:14px; margin-right: 230px;");
document.getElementById('copy').setAttribute("style", "background:grey; color:white; border-radius:20px; padding:14px");

document.getElementById('top').setAttribute("style", "text-align: center; color:#353434; ");
document.getElementById('content').setAttribute("style", "text-align: center; background-color: white; width:50%; margin: auto; padding: 10px;");
document.getElementById('text').setAttribute("style", "margin-right: 300px; ");

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