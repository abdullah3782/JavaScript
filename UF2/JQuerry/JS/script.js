$(document).ready(function () {

    function validarDatos() {
        // Obtener los valores de los campos
        var nombre = $("#nombre").val();
        var dni = $("#dni").val();
        var edad = $("#edad").val();
    
        // Limpiar mensajes de error previos
        $("#errorNombre, #errorDNI, #errorEdad").text("");
    
        // Validar Nombre (solo permite caracteres alfabéticos)
        if (!/^[a-zA-Z\s]+$/.test(nombre.trim())) {
            $("#errorNombre").text("Por favor, ingresa un nombre válido.");
            return ;
        }
    
        // Validar DNI (formato: 8 dígitos numéricos seguidos por una letra)
        if (!/^\d{8}[a-zA-Z]$/.test(dni.trim())) {
            $("#errorDNI").text("Por favor, ingresa un DNI válido (8 dígitos numéricos seguidos por una letra).");
            return;
        }
    
        // Validar Edad (debe ser un número positivo)
        if (isNaN(edad) || edad <= 0) {
            $("#errorEdad").text("Por favor, ingresa una edad válida.");
            return;
        }
    
        // Si todas las validaciones pasan, puedes realizar acciones adicionales aquí
        // Por ejemplo, enviar el formulario o realizar otras tareas.
        $("#datosValidados").text("Nombre: " + nombre + "\nDNI: " + dni + "\nEdad: " +  edad);
    }

    // Asigna la función al evento de click del botón
    $("#botonValidar").on("click", validarDatos);

});
