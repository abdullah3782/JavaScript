var myNum;
var myLle;
let patron = /[a-zA-ZñÑ]/;



document.getElementById("myNum").addEventListener("blur", function () {

    myNum = document.getElementById("myNum").value;


    if (myNum.length != 8) {
      document.getElementById("subBtn").disabled = true;
      document.getElementById("errNum").innerHTML = "Longitud incorrecta";

    } else if (isNaN(myNum)) {
        document.getElementById("subBtn").disabled = true;

        document.getElementById("errNum").innerHTML = "Incorrecto, Solo debe de tener numeros";

        document.getElementById("myNum").value = "";


    } else {
      document.getElementById("subBtn").disabled = false;

      document.getElementById("errNum").innerHTML = "";

    }

})


document.getElementById("lletra").addEventListener("blur", function () {

    myLle = document.getElementById("lletra").value;
    myNum = document.getElementById("myNum").value;


    if (myLle.length != 1) {
        document.getElementById("subBtn").disabled = true;
        document.getElementById("errLetra").innerHTML = "Longitud Incorrecta";
        document.getElementById("lletra").value = "";



    } else if (!patron.test(myLle)) {
        document.getElementById("subBtn").disabled = true;
        document.getElementById("errLetra").innerHTML = "Solo debe de tener una letra";
        document.getElementById("lletra").value = "";


    } else if (myNum.length < 0 ) {
      document.getElementById("subBtn").disabled = true;
      document.getElementById("errLetra").innerHTML = "Longitud Incorrecta";

    } else {
      document.getElementById("subBtn").disabled = false;


    }

})



document.getElementById("subBtn").addEventListener("click", function () {
    document.getElementById("subBtn").disabled = false;

    if (verificaDNI(myNum, myLle)) {
        document.getElementById("fals").style.color = "red";
        document.getElementById("vertader").style.color = "green";


    } else {
        document.getElementById("vertader").style.color = "red";
        document.getElementById("fals").style.color = "green";

    }
})


function verificaDNI(num, lle) {
    let flag = false;

    let lletres = "TRWAGMYFPDXBNJZSQVHLCKE";

    let residu = num % 23;

    let lletraBona = lletres[residu];


    if (lletraBona == lle.toUpperCase()) {
        flag = true;
    }

    return flag;
}