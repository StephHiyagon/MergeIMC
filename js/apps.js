function calculaImc(){
var peso=document.getElementById("peso").value;
var altura=document.getElementById("altura").value;
var imc= (peso/Math.pow(altura,2)).toFixed(2);
var mensaje="";
 alert(imc);

 if(imc < 18){
   mensaje=" Peso bajo. Necesario valorar signos de desnutrición";
 }else if(imc >= 18 && imc <= 24.9){
   mensaje="Su peso es: Normal";
 }else if(imc>=25 && imc <= 26.9){
   mensaje="Ud. esta con sobrepeso.";
 }else if(imc > 27){
   mensaje="Ud. tiene Obesidad";

 }
 document.getElementById("mostrar-resultado").innerHTML=mensaje;
}
