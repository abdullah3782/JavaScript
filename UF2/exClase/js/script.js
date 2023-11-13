let iniciarSessionBtn = document.getElementById("iniciarsesion")
let logoutbtn = document.getElementById("logOut")

document.addEventListener('DOMContentLoaded', function() {
    
    // Obtenemos fecha y hora de ahora
    function getCurrentDateTime() {
        let options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        };
        let locale = 'ca-ES';
        let dateTime = new Date().toLocaleString(locale, options);
        return dateTime;
    }

    function updateDateTime() {
        let dateTimeElement = document.getElementById('dateTime');
        dateTimeElement.innerHTML = `Avui és ${getCurrentDateTime()}`;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

   
})



function acceptCookies() {
    // Código para crear y almacenar la cookie
    document.getElementById("cookieConsent").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    logoutbtn.style.display = "none";
    localStorage.setItem('cookiesAccepted', 'true');

    // Habilitar campos de usuario y contraseña
    document.getElementById("username").removeAttribute('disabled');
    document.getElementById("password").removeAttribute('disabled');
    document.getElementById("iniciarsesion").removeAttribute('disabled');
}

document.getElementById("iniciarsesion").addEventListener("click", function () {
    
    
    let usuaris = ["usu01" ];
    let contrasenyes = ["pass01"];
    
    let usuarioIngresado = document.getElementById("username").value;
    let contrasenaIngresada = document.getElementById("password").value;
    
    
      var indiceUsuario = usuaris.indexOf(usuarioIngresado);
      if (indiceUsuario !== -1 && contrasenyes[indiceUsuario] === contrasenaIngresada) {
        var selectElement = document.createElement("select");
        selectElement.id = "miSelect"; // Puedes darle el ID que prefieras
      
        // Crear las opciones y agregarlas al select
        var option1 = document.createElement("option");
        option1.value = "DAM";
        option1.text = "DAM";
        selectElement.add(option1);
      
        var option2 = document.createElement("option");
        option2.value = "DAW";
        option2.text = "DAW";
        selectElement.add(option2);
      
        var option3 = document.createElement("option");
        option3.value = "ASIX";
        option3.text = "ASIX";
        selectElement.add(option3);
      
        // Agregar el select al documento
        document.body.appendChild(selectElement);


        document.getElementById("username").value = "";
        errorUser.style.display = "none";
        goodUser.style.display = "block";
        iniciarSessionBtn.style.display = "none";
        logoutbtn.style.display = "block";

      } else {
        document.getElementById("errorContra").innerHTML = "Credencial incorrecta"
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        errorUser.style.display = "block";
        goodUser.style.display = "none";
        
      }
    
    
    
    });

  

function logout() {
    // Restablecer el formulario
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("loginForm").style.display = "block";

    // Deshabilitar campos de usuario y contraseña
    document.getElementById("username").setAttribute('disabled', 'true');
    document.getElementById("password").setAttribute('disabled', 'true');
    document.getElementById("iniciarsesion").setAttribute('disabled', 'true');

    // Eliminar información de la sesión
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('cookiesAccepted');

    // Recargar la página
    window.location.reload();
}