function acceptCookies() {
    // Crear cookie que expira en una semana
    document.cookie = "cookieAccepted=true; max-age=" + 60 * 60 * 24 * 7;
  
    // Ocultar el mensaje de cookies
    document.getElementById('cookieMessage').style.display = 'none';
  
    // Habilitar los elementos del formulario y del selector de cursos
    var formElements = document.getElementById('loginForm').elements;
    for (var i = 0; i < formElements.length; i++) {
      formElements[i].removeAttribute('disabled');
    }
  
    var selectorElements = document.getElementById('courseSelector').elements;
    for (var i = 0; i < selectorElements.length; i++) {
      selectorElements[i].removeAttribute('disabled');
    }
  }

function validarFormulario() {
  var usuario = document.getElementById('usuario').value;
  var contrasena = document.getElementById('contrasena').value;

  // Lógica de validación de usuario y contraseña
  // Supongamos que users es un array de objetos con usuarios y contraseñas
  var users = [
    { usuario: 'user1', contrasena: 'pass1' },
    { usuario: 'user2', contrasena: 'pass2' },
    // ... otros usuarios ...
  ];

  var validacion = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i].usuario === usuario && users[i].contrasena === contrasena) {
      validacion = true;
      break;
    }
  }

  if (validacion) {
    // Mostrar el selector de cursos y el botón de logout
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('courseSelector').style.display = 'block';

    // Guardar en localStorage que el usuario ha iniciado sesión
    localStorage.setItem('isLoggedIn', true);
  } else {
    // Avisar al usuario en caso de validación incorrecta
    alert('Usuario o contraseña incorrectos');
  }
}

function actualizarFechaHora() {
    var date = new Date();
    var dateTimeElement = document.getElementById('date-time');
    dateTimeElement.textContent = 'Fecha y hora actual: ' + date.toLocaleString();
  }

  function aceptar() {
    // Habilitar los elementos del formulario y del selector de cursos
    var formElements = document.getElementById('loginForm').elements;
    for (var i = 0; i < formElements.length; i++) {
      formElements[i].removeAttribute('readonly');
    }
  
    var selectorElements = document.getElementById('courses').options;
    for (var i = 0; i < selectorElements.length; i++) {
      selectorElements[i].removeAttribute('disabled');
    }
  
    // Ocultar el mensaje de cookies
    document.getElementById('cookieMessage').style.display = 'block';
  }

  function aceptar() {
    // Mostrar el formulario
    document.getElementById('loginForm').style.display = 'block';
  }

// Verificar si el usuario ya está logueado al cargar la página
window.onload = function () {
  if (localStorage.getItem('isLoggedIn')) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('courseSelector').style.display = 'block';
  }
};

// Actualizar la fecha y hora cada segundo
setInterval(actualizarFechaHora, 1000);

// Llamar a actualizarFechaHora al cargar la página para mostrar la hora actual
actualizarFechaHora();
