

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


document.getElementById("login").addEventListener("click", function() { 
  let contra = document.getElementById("contrasenaUsuario").value;
  let correo = document.getElementById("correoElectronico").value;


  if (contra.length < 5) {
    document.getElementById("errMsg").innerHTML = "La contraseña es demasiada corta" 
    document.getElementById("crrMsg").innerHTML = ""
  } 

 else  if (contra != "alumnat") {
    document.getElementById("errMsg").innerHTML = "La contraseña es incorrecta" 
    document.getElementById("crrMsg").innerHTML = "" 


  } else {
    document.getElementById("errMsg").innerHTML = "" 

    document.getElementById("crrMsg").innerHTML = "La contraseña es correcta" 

  }


if (correo != "daw2@proven.cat") {
  document.getElementById("EerrMsg").innerHTML = "La correo es incorrecto" 
  document.getElementById("EcrrMsg").innerHTML = "" 


} else {
  document.getElementById("EcrrMsg").innerHTML = "La correo es correcto" 
  document.getElementById("EerrMsg").innerHTML = "" 

}

}); 
