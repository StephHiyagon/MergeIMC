function verIMC(){
  var peso = document.getElementById('peso').value;
  var altura= document.getElementById('altura').value;
  document.getElementById('peso').value="";
  document.getElementById('altura').value="";
  var imc= (peso)/Math.pow(altura,2);
  var result = imc.toFixed(2);
  console.log(result);
  alert(result)
}
