//cuando cargue la página
document.addEventListener("DOMContentLoaded",function (){
  
  //cookies navegador
  //crear una cookie de nom user i de contingut Marga1989

  //el temps de vida si és per max-age es calcula en segons
  //document.cookie="user=Marga1989;max-age=86400";//temps en GMT
  //expires: anem a crear la data
  // const d = new Date(); //el dia d'avui en milisegons des de 1/1/1970
  // d.setTime(d.getTime() + (3*24*60*60*1000));//afegim 3 dies
  // console.log(d.toUTCString());
  //document.cookie="user=Marga1989;expires="+ d.toUTCString();
  //expires: ficant la data directament
  //document.cookie="user=Marga1989;expires=Thu, 18 Dec 2023 12:00:00 UTC"; 

  //esborrem la cookie user
  //document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  //crear 3 cookies amb temps de vida el que duri la sessió 
  document.cookie="color=green";
  document.cookie="lletra=gran";
  document.cookie="fons=clar";

  console.log(document.cookie); //imprimeixo totes les cookies
  
  //manipular la cookie lletra, com ho faig

  //1.- la tornes a crear
  document.cookie="lletra=normal;max-age=3600";

  //2.- vull saber el valor concret actual d'una cookie-->
  //has de fer servir una funció

  //console.log(getCookie("fonso"));
  //saber les visites

  checkCookie("comptador");

});

//funció agafada de w3schools tal qual
//em retorna el valor concret d'una cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//funció de w3schools tunejada
//aquesta funció mira si tenim una cookie
function checkCookie() {
  let valorCookie = getCookie("comptador");
  if (valorCookie == "") { //no existeix la cookie, la vaig a crear
    document.cookie="comptador=1";
  } else {
    valorCookie++;
    document.cookie="comptador="+valorCookie;
  }
  document.getElementById("total").innerHTML=getCookie("comptador");
}


