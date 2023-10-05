document.getElementById("myBtn").addEventListener("click", function () {



    //window.open("http://www.proven.cat","_blank")

//---------solo una vez despues de 3 segundos ---------------
//setTimeout(saludo,3000)

//--------cada 5 segundos-----------
//setInterval(despedida,5000);



let fecha = new Date()
alert(fecha)




let myDate=new Date(24*60*60*1000)
alert(myDate)


})

function saludo() {
    alert("holi")
}

function despedida() {
   console.log("adios");
}