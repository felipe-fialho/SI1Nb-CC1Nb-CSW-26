document.writeln("Ola, mundo!");
document.writeln("<h2>Bem-vindo ao Javascript</h2>");

window.alert("Está e uma mensagem de alerta!");

document.getElementById("title").
innerHTML = "Apredendo Javascript com o melhor professor da UVV!!!";

let nome = //prompt("Digite seu nome:");
document.getElementById("novafrase").innerHTML = "Olà, " + nome + " Seja bem-vindo ao JavaScript!";
document.getElementById("novafrase").style.color = "blue";
document.getElementById("novafrase").style.fontSize = "80px";
document.getElementById("novafrase").style.textAlign = "center"; 

function exibirmensagem (){
    let nome = document.getElementById("nome").value;
    document.getElementById("novafrase").innerHTML = "Olà, " + nome + " Seja bem-vindo ao JavaScript!";
    document.getElementById("novafrase").style.color = "blue";
    document.getElementById("novafrase").style.fontSize = "50px";
    document.getElementById("novafrase").style.textAlign = "center"; 
}