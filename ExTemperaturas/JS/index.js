let text;
document.getElementById("myBtn").addEventListener("click", function () {

let temperaturas=[];
let erores="";
for (let i = 1; i <= 10; i++) {

if (isNaN(document.getElementById("input"+i).value)) {
    document.getElementById("input"+i).value="";
    //document.getElementById("error1").hidden=false;
    alert("Hay que poner temperaturas")
} else {
    temperaturas.push(document.getElementById("input"+i).value);
}

   

    
}


//recorremos temeperaturas


console.log(temperaturas);

let contadors = []
let unicas = []
for (let i = 0; i < temperaturas.length; i++) {
    if (unicas.includes(temperaturas[i])) {
       let posicion=unicas.indexOf(temperaturas[i])
       contadors[posicion] +=1
    } else {
        unicas.push(temperaturas[i])
        contadors.push(1)
    }
    
}
console.log(unicas);
console.log(contadors);
for (let i = 0; i < contadors.length; i++) {
   if (contadors[i]>1) {
    
   }
    
}
});