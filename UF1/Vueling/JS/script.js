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

var idaRadioButton = document.getElementById('ida');
var vueltaRadioButton = document.getElementById('vuelta');

let fechaIdaInput = document.getElementById('fechaIda');
let fechaVueltaInput = document.getElementById('fechaVuelta');

let usuarios = ["usu01", "usu02", "usu03"];
let contrasenya = ["pass01", "pass02", "pass03"];

//const paises = ["España", "Francia", "Alemania", "Italia", "Reino Unido", "Portugal", "Suecia", "Holanda", "Bélgica", "Suiza"];

document.addEventListener("DOMContentLoaded", function () {

  /**
   * check, check2 --> llama a la funcion checkYourCookie pasando le el nombre de la cookie, retorna true si ya existe, y false si no existe
   */
  let check = checkYourCookie("nomUsuari");
  let check2 = checkYourCookie("contador");

  let cookieAvanzar = getCookie("contador");

  if (cookieAvanzar != "") {

    cookieAvanzar++;
    setCookie("contador", cookieAvanzar);
  }


  /**
   * Comprueba que los dos valores sean false, si son false los DOS llama la funcion showCookieModal
   */
  if (!check && !check2) {
    showCookieModal();
  }

  /**
   * localStorage("login"): true --> muestra el la opción del LOGOUT
   * localStorage("login"): false --> muestra solo la opción de LOGIN y REGISTER, no muestra la opción LOGOUT
   */
  if (localStorage.getItem("login") != null) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("cfvForm").style.display = "block";
    document.getElementById("logout-btn").style.display = "block";
  } else {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("cfvForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("logout-btn").style.display = "none";
    document.getElementById("cfv").style.display = "none";

    
  }


});

/**
 * showCookieModal() --> muestra el div para aceptar las cookies con tres opciones
 * allCookies --> allCookies();
 * minCookies --> minCookies();
 */
function showCookieModal() {
  document.getElementById("allCookiesBtn").addEventListener("click", allCookies);
  document.getElementById("minCookiesBtn").addEventListener("click", minCookies);
  document.getElementById("rechazarCookiesBtn").addEventListener("click", rechazarCookies);

  document.getElementById("cookieModal").style.display = "block";
}

/**
* allCookies() --> crea las dos cookies
*/

function allCookies() {
  setCookie("nomUsuari", "acceptada la cookie", 365);
  setCookie("contador", 1, 365);

  document.getElementById("cookieModal").style.display = "none";
}

/**
* minCookies() --> crea solo una cookie
*/
function minCookies() {
  setCookie("nomUsuari", "acceptada la cookie", 365);
  document.getElementById("cookieModal").style.display = "none";
}


/**
* rechazarCookies() --> no crea cookies, pero cada vez que se recargue preguntará el modal, porque no existen cookies
*/
function rechazarCookies() {
  document.getElementById("cookieModal").style.display = "none";
}




function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
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

function checkYourCookie(accept) {
  let acceptCookie = getCookie(accept);

  let existe = true;

  if (acceptCookie == "") {
    existe = false;
  }

  return existe;
}


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
loginButton.addEventListener("click", function () {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
  cfvForm.style.display = "none";
  tpForm.style.display = "none";
  panelViajeButton.style.display = "none";
  panelViaje2Button.style.display = "none";
  panelViajeForm.style.display = "none";


});

registerButton.addEventListener("click", function () {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  cfvForm.style.display = "none";
  tpForm.style.display = "none";
  panelViajeButton.style.display = "none";
  panelViaje2Button.style.display = "none";
  panelViajeForm.style.display = "none";

});

cfvButton.addEventListener("click", function () {
  loginForm.style.display = "none";
  registerForm.style.display = "none";
  cfvForm.style.display = "block";
  tpForm.style.display = "none";
  panelViajeButton.style.display = "block";
  panelViaje2Button.style.display = "block";
  panelViajeForm.style.display = "none";

})

tpButton.addEventListener("click", function () {
  loginForm.style.display = "none";
  registerForm.style.display = "none";
  cfvForm.style.display = "block";
  tpForm.style.display = "none";
  panelViajeForm.style.display = "block";

});

nadaButton.addEventListener("click", function () {
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

document.getElementById("login").addEventListener("click", function () {
  contra = document.getElementById("contrasenaUsuario").value;
  correo = document.getElementById("correoElectronico").value;

  let myUser = {
    email: correo,
    password: contra
}

  //POST
  fetch('http://localhost:3000/vueling/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myUser),
  })
    .then(response => response.json())
    .then(responseData => {
      if (responseData.error) {
        alert(responseData.message);
      } else {
        if (responseData.results && responseData.results.length > 0) {
          alert("Credenciales correctas");
          localStorage.setItem("login", true);
          // showLoginTrue();

          //cuando se haya logueado correctamente, se pondra a block el logout, los demas a none
          document.getElementById("log").style.display = "none";
          document.getElementById("reg").style.display = "none";
          document.getElementById("logout-btn").style.display = "block";
          document.getElementById("loginForm").style.display = "none";
          document.getElementById("registerForm").style.display = "none";
          document.getElementById("cfvForm").style.display = "block";


      
        } else {
          alert("Credenciales incorrectas");

          //cuando no se haya logueado correctamente, se pondra a block el login y register, logout  a none
          document.getElementById("log").style.display = "block";
          document.getElementById("reg").style.display = "block";
          document.getElementById("logout-btn").style.display = "none";



          document.getElementById("result").style.display = "block";
          document.getElementById("result").innerHTML = "<h2 class='text-center pt-3'>Login Results </h2> <p class='pt-4'>USUARIO Y/O CONTRASEÑA INCORRECTA</p>";
        }
      }
    })
    .catch(err => console.log('La solicitud ha fallado:', err));
});

document.getElementById("nameRegister").addEventListener("blur", function () {
  let nom = document.getElementById("nameRegister").value;

  if (nom === "") {
    document.getElementById("errMsgNom").innerHTML = "Por favor, ingresa tu nombre";
  } else if (/\d/.test(nom)) {
    document.getElementById("errMsgNom").innerHTML = "Tu nombre no puede contener números";
  } else {
    document.getElementById("errMsgNom").innerHTML = "";
  }
});

document.getElementById("logout-btn").addEventListener("click", () => {
  localStorage.removeItem("login");
  window.location.href = "index.html"
  // document.getElementById("log").style.display = "block";
  // document.getElementById("reg").style.display = "block";
  // document.getElementById("logout-btn").style.display = "none";
  // document.getElementById("loginForm").style.display = "block";
  //    document.getElementById("registerForm").style.display = "block";
  //   document.getElementById("cfvForm").style.display = "none";
  
});

document.getElementById("reg").addEventListener("click", () => {
  
  document.getElementById("log").style.display = "block";
  document.getElementById("reg").style.display = "block";
  document.getElementById("logout-btn").style.display = "none";
   document.getElementById("loginForm").style.display = "none";
   document.getElementById("registerForm").style.display = "block";
    document.getElementById("cfvForm").style.display = "none";
  
});
const formulariDiv = document.getElementById("formulari");
//GET
fetch('http://localhost:3000/vueling/booking')
  .then(response => response.json())
  .then(json => {
    if (json.error) { //comprueba si hay algun error, si lo hay, lo muestra
      formulariDiv.innerHTML = json.message;
    } else {
      //si no hay ningun error crea las opcions dinamicamente y las muestra
      for (let index = 0; index < json.results.length; index++) {

        const optionCiudad = document.createElement('option');
        optionCiudad.value = json.results[index].nomCiutat;
        optionCiudad.textContent = json.results[index].nomCiutat;
        origen.appendChild(optionCiudad);

        const optionDestino = document.createElement('option');
        optionDestino.value = json.results[index].nomCiutat;
        optionDestino.textContent = json.results[index].nomCiutat;
        destino.appendChild(optionDestino);
      }

      // Mostrar el formulario después de cargar las opciones
      formulariDiv.style.display = 'block';
    }
  })
  .catch(error => console.log('La solicitud ha fallado:', error));



document.getElementById("surname").addEventListener("blur", function () {
  let cognom = document.getElementById("surname").value;


  if (cognom === "") {
    document.getElementById("errMsgCogNom").innerHTML = "Por favor, ingresa tu apellido";
  } else if (/\d/.test(cognom)) {
    document.getElementById("errMsgCogNom").innerHTML = "Tu apellido no puede ser un número";

  } else {
    document.getElementById("errMsgCogNom").innerHTML = "";

  }

});

document.getElementById("gmail").addEventListener("blur", function () {
  let correoRegister = document.getElementById("gmail").value;

  if (correoRegister === "") {
    document.getElementById("errMsgCorreo").innerHTML = "Por favor, ingresa tu correo";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoRegister)) {
    document.getElementById("errMsgCorreo").innerHTML = "Formato de correo electrónico no válido";
  } else {
    document.getElementById("errMsgCorreo").innerHTML = "";
  }
});



document.getElementById("contrasena").addEventListener("blur", function () {
  let contraRegister = document.getElementById("contrasena").value;

  if (contraRegister === "") {
    document.getElementById("errMsgContra").innerHTML = "Por favor, ingresa tu contraseña";
  } else {
    document.getElementById("errMsgContra").innerHTML = "";

  }

});


document.getElementById("dni").addEventListener("blur", function () {
  let dni = document.getElementById("dni").value;

  if (dni === "") {
    document.getElementById("errMsgEdad").innerHTML = "Rellena el campo";
  } else if (!/^\d{8}[A-Za-z]$/.test(dni)) {
    document.getElementById("errMsgEdad").innerHTML = "Formato de DNI incorrecto";
  } else {
    document.getElementById("errMsgEdad").innerHTML = "";
  }
});



document.getElementById("register").addEventListener("click", function () {
  let nom = document.getElementById("nameRegister").value;
  let cognom = document.getElementById("surname").value;
  let correoRegister = document.getElementById("gmail").value;
  let contraRegister = document.getElementById("contrasena").value;
  let dni = document.getElementById("dni").value;


  if (nom !== "" && isNaN(nom) && cognom !== "" && isNaN(cognom) && correoRegister !== "" && contraRegister !== "") {
    let myUser = {
      name: nom,
      surname: cognom,
      password: contraRegister,
      email: correoRegister,
      dni: dni
    };

    fetch('http://localhost:3000/vueling/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myUser)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Registro exitoso, mostrar mensaje de éxito o redirigir a otra página
        document.getElementById("successMessage").style.color = "green";
        document.getElementById("successMessage").innerHTML = "Registrado con éxito";
      } else {
        // Mostrar mensaje de error del servidor
        document.getElementById("successMessage").style.color = "red";
        document.getElementById("successMessage").innerHTML = data.message;
      }
    })
    .catch(error => {
      // Manejar errores de red o del servidor
      console.error('Error:', error);
    });
  } else {
    document.getElementById("successMessage").style.color = "red";
    document.getElementById("successMessage").innerHTML = "Por favor, completa todos los campos correctamente.";
  }
});


let origen = document.getElementById("origen")
let destino = document.getElementById("destino")

origen.addEventListener('blur', function () {
  validarPaises();
});

destino.addEventListener('blur', function () {
  validarPaises();
});

function validarPaises() {

  if (origen.value == destino.value) {
    document.getElementById("errMsgVuelo").innerHTML = "El origen y el destino no pueden ser iguales"
  } else {
    document.getElementById("errMsgVuelo").innerHTML = ""

  }

}

fechaIdaInput.addEventListener('blur', function () {
  validarFecha(fechaIdaInput);
});

fechaVueltaInput.addEventListener('blur', function () {
  validarFecha(fechaVueltaInput);
});





function validarFecha(input) {
  let fechaSeleccionada = new Date(input.value);
  let hoy = new Date();
  let seisMesesEnElFuturo = new Date();
  seisMesesEnElFuturo.setMonth(seisMesesEnElFuturo.getMonth() + 6);

  if (fechaSeleccionada < hoy) {
    document.getElementById("errMsgfechas").innerHTML = " <br> La fecha no puede ser anterior a hoy.<br>"

  } else if (fechaSeleccionada > seisMesesEnElFuturo) {

    document.getElementById("errMsgfechas").innerHTML = " <br> La fecha no puede ser anterior a hoy ni estar a más de 6 meses en el futuro.<br>"

  } else {
    document.getElementById("errMsgfechas").innerHTML = ""

  }
}



let vueltaCalendar = document.getElementById('selectFechaVuelta');
let textoVuelta = document.getElementById('fechaVuelta');

idaRadioButton.addEventListener('click', function () {
  // Ocultar el calendario de vuelta si el botón "IDA" está seleccionado
  vueltaCalendar.style.display = 'none';
  textoVuelta.style.display = 'none';

});

vueltaRadioButton.addEventListener('click', function () {
  textoVuelta.style.display = 'block';
  vueltaCalendar.style.display = 'block';

});


let importeBase = 150;


document.getElementById("confirmar").addEventListener("click", function () {

  let origenSeleccionado = document.getElementById("origen").value;
  let destinoSeleccionado = document.getElementById("destino").value;
  let fechaIdaSeleccionada = document.getElementById("fechaIda").value;
  let fechaVueltaSeleccionada = document.getElementById("fechaVuelta").value;
  let horaSeleccionada = document.getElementById("inputHora").value;
  let cantidadAdultos = parseInt(document.getElementById("inputAdultos").value) || 1; //para que el valor de adultos minimo sea 1
  let cantidadNinos = parseInt(document.getElementById("inputNinos").value) || 0;
  let cantidadBebes = parseInt(document.getElementById("inputBebes").value) || 0;

  if (origenSeleccionado && destinoSeleccionado && fechaIdaSeleccionada && fechaVueltaSeleccionada && horaSeleccionada && cantidadAdultos) {
    const confirmacion = confirm("¿Estás seguro de confirmar el viaje?");




    if (confirmacion) {

      if (cantidadAdultos < 0 || cantidadAdultos > 9) {
        document.getElementById("errMsgAdultos").innerHTML = "  La cantidad mínima es de 1 persona y la máxima es de 9 para Adultos <br>";
        importeTotal = 0
      } else {
        document.getElementById("errMsgAdultos").innerHTML = "";
      }

      if (cantidadNinos < -1 || cantidadNinos > 9) {
        document.getElementById("errMsgNino").innerHTML = "  La cantidad mínima es de 0 persona y la máxima es de 9 para niños y bebés <br>";
        importeTotal = 0
      } else {
        document.getElementById("errMsgNino").innerHTML = "";

      }

      if (cantidadBebes < -1 || cantidadBebes > 9) {
        document.getElementById("errMsgBebe").innerHTML = "  La cantidad mínima es de 0 persona y la máxima es de 9 para niños y bebés <br>";
        importeTotal = 0
      } else {
        document.getElementById("errMsgBebe").innerHTML = "";
      }

      let importeAdicional = 0;
      if (horaSeleccionada >= "00:00" && horaSeleccionada < "06:00") {
        importeAdicional = 60;
      } else if (horaSeleccionada >= "06:00" && horaSeleccionada < "12:00") {
        importeAdicional = 120;
      }

      let importeTotal = importeBase * (cantidadAdultos + cantidadNinos + cantidadBebes) + importeAdicional;

      document.getElementById("totalDinero").innerHTML = importeTotal + "€";
      tpForm.style.display = "block";
      cfvForm.style.display = "none";
      panelViajeButton.style.display = "none";
      panelViaje2Button.style.display = "none";

    } else {
      alert("Viaje cancelado")
    }
  } else {
    alert("Completa todos los campos antes de confirmar el viaje.")
  }




});
let origenSeleccionado, destinoSeleccionado, fechaIdaSeleccionada, fechaVueltaSeleccionada, horaSeleccionada, cantidadAdultos, cantidadNinos, cantidadBebes;


function mostrarDetallesViaje(origen, destino, fechaIda, fechaVuelta, hora, adultos, ninos, bebes) {
  const detallesViaje = document.getElementById("detallesViaje");
  detallesViaje.innerHTML = `
      <h3>Detalles del Viaje</h3>
      <p>Origen: ${origen}</p>
      <p>Destino: ${destino}</p>
      <p>Fecha de Ida: ${fechaIda}</p>
      <p>Fecha de Vuelta: ${fechaVuelta}</p>
      <p>Hora: ${hora}</p>
      <p>Adultos: ${adultos}</p>
      <p>Niños: ${ninos}</p>
      <p>Bebés: ${bebes}</p>
      <!-- Agrega más detalles según sea necesario -->
  `;
  detallesViaje.style.display = "block";
}

mostrarDetallesViaje()
