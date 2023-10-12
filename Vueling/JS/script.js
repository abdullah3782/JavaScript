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

document.getElementById("login").addEventListener("click", function() { 
  contra = document.getElementById("contrasenaUsuario").value;
  correo = document.getElementById("correoElectronico").value;

  const usuarioIndex = usuarios.indexOf(correo);

  if (usuarioIndex === -1) {
    document.getElementById("EerrMsg").innerHTML = "El correo es incorrecto";
    document.getElementById("EcrrMsg").innerHTML = "";
  } else if (contra !== contrasenya[usuarioIndex]) {
    document.getElementById("errMsg").innerHTML = "La contraseña es incorrecta";
    document.getElementById("crrMsg").innerHTML = "";
  } else {
    document.getElementById("EerrMsg").innerHTML = "";
    document.getElementById("EcrrMsg").innerHTML = "El correo es correcto";
    document.getElementById("errMsg").innerHTML = "";
    document.getElementById("crrMsg").innerHTML = "La contraseña es correcta";
  }
});

document.getElementById("nameRegister").addEventListener("blur", function() { 
  let nom = document.getElementById("nameRegister").value;

  if (nom === "") {
    document.getElementById("errMsgNom").innerHTML = "Por favor, ingresa tu nombre";
  } else if (/\d/.test(nom)) {
    document.getElementById("errMsgNom").innerHTML = "Tu nombre no puede contener números";
  } else {
    document.getElementById("errMsgNom").innerHTML = "";
  }
});



document.getElementById("surname").addEventListener("blur", function() { 
  let cognom = document.getElementById("surname").value;
  

 if (cognom === "") {
    document.getElementById("errMsgCogNom").innerHTML = "Por favor, ingresa tu apellido";
  } else if (/\d/.test(cognom)) {
    document.getElementById("errMsgCogNom").innerHTML = "Tu apellido no puede ser un número";

  } else {
    document.getElementById("errMsgCogNom").innerHTML = "";

  }

});

document.getElementById("gmail").addEventListener("blur", function() { 
  let correoRegister = document.getElementById("gmail").value;
  
  if (correoRegister === "") {
    document.getElementById("errMsgCorreo").innerHTML = "Por favor, ingresa tu correo";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoRegister)) {
    document.getElementById("errMsgCorreo").innerHTML = "Formato de correo electrónico no válido";
  } else {
    document.getElementById("errMsgCorreo").innerHTML = "";
  }
});



document.getElementById("contrasena").addEventListener("blur", function() { 
  let contraRegister = document.getElementById("contrasena").value;

 if (contraRegister === "") {
    document.getElementById("errMsgContra").innerHTML = "Por favor, ingresa tu contraseña";
  } else {
    document.getElementById("errMsgContra").innerHTML = "";

  }

});

document.getElementById("name").addEventListener("blur", function() { 
  let nomUsuari = document.getElementById("name").value;

 if (nomUsuari === "") {
    document.getElementById("errMsgNu").innerHTML = "Por favor, ingresa un nombre de usuario";
  } else {
    document.getElementById("errMsgNu").innerHTML = "";

  }

});

document.getElementById("dni").addEventListener("blur", function() {
  let dni = document.getElementById("dni").value;

  if (dni === "") {
    document.getElementById("errMsgEdad").innerHTML = "Rellena el campo";
  } else if (dni.length != 8 || !/[A-Za-z]$/.test(dni)) {
    document.getElementById("errMsgEdad").innerHTML = "Formato de DNI incorrecto";
  } else {
    document.getElementById("errMsgEdad").innerHTML = "";
  }
});


document.getElementById("register").addEventListener("click", function() {
  let nom = document.getElementById("nameRegister").value;
  let cognom = document.getElementById("surname").value;
  let correoRegister = document.getElementById("gmail").value;
  let contraRegister = document.getElementById("contrasena").value;
  let nomUsuari = document.getElementById("name").value;

  if (nom !== "" && isNaN(nom) && cognom !== "" && isNaN(cognom) && correoRegister !== "" && contraRegister !== "" && nomUsuari !== "") {
    // Todos los campos están completos correctamente
    document.getElementById("successMessage").style.color = "green";
    document.getElementById("successMessage").innerHTML = "Registrado con éxito";
  } else {
    document.getElementById("successMessage").style.color = "green";
    document.getElementById("successMessage").innerHTML = "";
  
  }
});

var idaRadioButton = document.getElementById('ida');
var vueltaRadioButton = document.getElementById('vuelta');

  var vueltaCalendar = document.getElementById('fechaVueltaForm');
  var textoVuelta = document.getElementById('selectFechaVuelta');

  // Agregar un event listener al botón "IDA"
  idaRadioButton.addEventListener('click', function () {
      // Ocultar el calendario de vuelta si el botón "IDA" está seleccionado
      vueltaCalendar.style.display = 'none';
      textoVuelta.style.display = 'none';

  });

  vueltaRadioButton.addEventListener('click', function () {
    // Ocultar el calendario de vuelta si el botón "IDA" está seleccionado
    textoVuelta.style.display = 'block';
    vueltaCalendar.style.display = 'block';

});