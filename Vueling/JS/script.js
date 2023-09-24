// Obtén referencias a los botones y formularios por sus IDs.
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


// Agrega eventos clic a los botones para mostrar/ocultar los formularios.
// Agrega eventos clic a los botones para mostrar/ocultar los formularios y elementos adicionales.
loginButton.addEventListener("click", function() {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
  cfv.style.display = "block";
  cfvForm.style.display = "none";
  tpForm.style.display = "none";
  panelViajeButton.style.display = "none";
  panelViaje2Button.style.display = "none";


});

registerButton.addEventListener("click", function() {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  cfvForm.style.display = "none";
  tpForm.style.display = "none";
  panelViajeButton.style.display = "none";
  panelViaje2Button.style.display = "none";
});

cfvButton.addEventListener("click", function() {
  loginForm.style.display = "none";
  registerForm.style.display = "none";
  cfvForm.style.display = "block";
  tpForm.style.display = "none";
})

tpButton.addEventListener("click", function() {
  loginForm.style.display = "none";
  registerForm.style.display = "none";
  cfvForm.style.display = "block";
  tpForm.style.display = "block";
});

nadaButton.addEventListener("click", function() {
  loginForm.style.display = "none";
  registerForm.style.display = "none";
  cfvForm.style.display = "none";
  tpForm.style.display = "none";
  panelViajeButton.style.display = "none";
  panelViaje2Button.style.display = "none";
});

