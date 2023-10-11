//declaracion de variables globales, constantes
//constantes = asignacion de ids que estan ya en el html
const loginButton = document.getElementById("log");
const loginForm = document.getElementById("loginForm");

const registerButton = document.getElementById("reg");
const registerForm = document.getElementById("registerForm");

const cfvButton = document.getElementById("cfv");
const cfvForm = document.getElementById("cfvForm");

const tpButton = document.getElementById("cfv");
const tpForm = document.getElementById("tpForm");

const nadaButton = document.getElementById("nada");

const panelViajeButton = document.getElementById("panelviaje");
const panelViaje2Button = document.getElementById("panelviaje2");
const panelViajeForm = document.getElementById("panelviajeForm");

const usuarios = ["usu01", "usu02", "usu03"];
const contrasenya = ["pass01", "pass02", "pass03"];
let dni,rcontrasena,nom,cognom,correoRegister, contraRegister;
document.getElementById("login").addEventListener("click", clickBotonLogin);
document.getElementById("nameRegister").addEventListener("blur", myName);
document.getElementById("surname").addEventListener("blur", mySurname);


function vacio() {
  loginForm.style.display = "none";
  registerForm.style.display = "none";
  cfvForm.style.display = "none";
  tpForm.style.display = "none";
  panelViajeButton.style.display = "none";
  panelViaje2Button.style.display = "none";
  panelViajeForm.style.display = "none";
}
vacio()
loginButton.addEventListener("click", function() {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
  cfv.style.display = "block";
  cfvForm.style.display = "none";
  tpForm.style.display = "none";
  panelViajeButton.style.display = "none";
  panelViaje2Button.style.display = "none";
  panelViajeForm.style.display = "none";


});

registerButton.addEventListener("click", function() {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  cfvForm.style.display = "none";
  tpForm.style.display = "none";
  panelViajeButton.style.display = "none";
  panelViaje2Button.style.display = "none";
  panelViajeForm.style.display = "none";

});

cfvButton.addEventListener("click", function() {
  loginForm.style.display = "none";
  registerForm.style.display = "none";
  cfvForm.style.display = "block";
  tpForm.style.display = "none";
  panelViajeButton.style.display = "block";
  panelViaje2Button.style.display = "block";
  panelViajeForm.style.display = "block";

})

tpButton.addEventListener("click", function() {
  loginForm.style.display = "none";
  registerForm.style.display = "none";
  cfvForm.style.display = "block";
  tpForm.style.display = "block";
  panelViajeForm.style.display = "block";

});

nadaButton.addEventListener("click", function() {
  loginForm.style.display = "none";
  registerForm.style.display = "none";
  cfvForm.style.display = "none";
  tpForm.style.display = "none";
  panelViajeButton.style.display = "none";
  panelViaje2Button.style.display = "none";
  panelViajeForm.style.display = "none";

});

let contra = "";
let correo = "";

function clickBotonLogin() { 
  contra = document.getElementById("contrasenaUsuario").value;
  correo = document.getElementById("correoElectronico").value;

  const usuarioIndex = usuarios.indexOf(correo);
  
  if (usuarioIndex === -1) {
    document.getElementById("EerrMsg").innerHTML = "Credenciales incorrectas";
    
  } else{

      if (contra !== contrasenya[usuarioIndex]) {
        document.getElementById("EerrMsg").innerHTML = "Credenciales incorrectas";
        
      } else {
        document.getElementById("EerrMsg").innerHTML = "Usuario correcto";
        
      }

  }
};

function myName() { 
  nom = document.getElementById("nameRegister").value;
  let patron=/[0-9]/;
  if (nom.trim() === "") {
    document.getElementById("errMsgNom").innerHTML = "Por favor, ingresa tu nombre";
  } else if (patron.test(nom)) {
    document.getElementById("errMsgNom").innerHTML = "Esto no es un nombre válido";

  } else {
    document.getElementById("errMsgNom").innerHTML = "";

  }

};

function mySurname() { 
  cognom = document.getElementById("surname").value;
  let patron=/[0-9]/;

 if (cognom === "") {
    document.getElementById("errMsgCogNom").innerHTML = "Por favor, ingresa tu apellido";
  } else if (patron.test(cognom)) {
    document.getElementById("errMsgCogNom").innerHTML = "Esto no es un apellido válido";
  } else {
    document.getElementById("errMsgCogNom").innerHTML = "";

  }

};

document.getElementById("gmail").addEventListener("blur", function() { 
  correoRegister = document.getElementById("gmail").value;
  let patron=/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

 if (correoRegister === "") {
    document.getElementById("errMsgCorreo").innerHTML = "Por favor, ingresa tu correo";
  } else if (!patron.test(correoRegister)) {
    document.getElementById("errMsgCorreo").innerHTML = "Este correo electronico no es correcto";

  } else {
    document.getElementById("errMsgCorreo").innerHTML = "";

  }

});


document.getElementById("contrasena").addEventListener("blur", function() { 
  contraRegister = document.getElementById("contrasena").value;

 if (contraRegister === "") {
    document.getElementById("errMsgContra").innerHTML = "Por favor, ingresa tu contraseña";
  } else if(contraRegister.length<5){
    document.getElementById("errMsgContra").innerHTML = "Esta contraseña tiene que ser de 5 o más caracteres";
  }else{
    document.getElementById("errMsgContra").innerHTML="";
  }

});

document.getElementById("rcontrasena").addEventListener("blur", function() { 
  rcontrasena = document.getElementById("rcontrasena").value;

 if (rcontrasena === "") {
    document.getElementById("errMsgCon").innerHTML = "Por favor, ingresa un nombre de usuario";
  } else if(rcontrasena != document.getElementById("contrasena").value){
    document.getElementById("errMsgCon").innerHTML = "No coinciden ";
  }else{
    document.getElementById("errMsgCon").innerHTML = "";

  }

});

document.getElementById("dni").addEventListener("blur", function() {
  dni = document.getElementById("dni").value;

  if (dni === "") {
      document.getElementById("errMsgDNI").innerHTML = "Por favor, ingresa tu dni";
  } else if (!validateDNI(dni)) {
      document.getElementById("errMsgDNI").innerHTML = "Tu dni no es válido";
  } else {
      document.getElementById("errMsgDNI").innerHTML = "";
       
  }
});

function validateDNI(dni){
 return true;
}







document.getElementById("register").addEventListener("click", function() {
 
  //necessita saber que tots els camps OK


 
});

//client: 23/10/2013  heu de fer split
//client: 23  10  2013 les dades donades en caixes separades
calcularAnioNacimiento(2005,11,23); //month és el que et dona el client li has de restar 1

function calcularAnioNacimiento(year,month, day) {
  
  var anioCliente = new Date(year,month, day);
  var anioActual=new Date;

alert (anioActual-anioCliente.getTime());//treballar amb milisegons

console.log(anioActual.getFullYear()-anioCliente.getFullYear());

  
 
  

  
}
