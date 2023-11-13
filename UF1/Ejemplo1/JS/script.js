
document.getElementById("hello").innerHTML="hola majinbo" //Cambiamos el texto entrando a traves del ID
let valors=document.getElementsByTagName("h2");
//(valors[1] es para que coja el segundo h2 del html 
console.log(valors[1].innerHTML);

let classe=document.getElementsByClassName("intro")
console.log(classe);

console.log(document.querySelector("#hello").innerHTML);//Acceso a la intro
console.log(document.querySelectorAll("h2.intro").innerHTML); //acceso a las classe
console.log(document.querySelectorAll(".intro").innerHTML); //acceso a todos los tags con clase intro las classes

//acceso a links
console.log(document.getElementById("link").href);
//cambio de link 
document.getElementById("link").href="https://campus.proven.cat/"

//Manera alternativade escribir

document.write("sas")

//Recojo el valor del formulario

document.getElementById("myBtn").addEventListener("click", function() {
  let myName=document.getElementById("mytext").innerHTML;
if (myName == "David") {
  console.log("Buenas David");
} else {
  console.log("Buenas anonimo");
}
});
