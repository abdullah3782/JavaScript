// Cuando el documento HTML está completamente cargado, se ejecuta la función proporcionada.
$(document).ready(function () {

    
    // Agrega un listener al botón con el id 'myBtn' para que llame a la función validaFormulario cuando se haga clic.
    $('#myBtn').click(validaFormulario);

    
});

/**
 * Función que valida el formulario y 
 * muestra mensajes de error si es necesario.
 *  
 * 
 */

function validaFormulario() {

    // Obtiene el valor ingresado por el usuario en el campo de nombre.
    let nombre = $('#nombre').val();

    // Obtiene el valor ingresado por el usuario en el campo de DNI.
    let dni = $('#dni').val();

    // Obtiene el valor ingresado por el usuario en el campo de edad.
    let edadValue = $('#edad').val();

    // Convierte el valor de la edad a un número entero.
    let edad = parseInt(edadValue);

    // Array para almacenar mensajes de error durante la validación.
    let errores = [];

    // Array para almacenar mensajes de "OK" durante la validación.
    let camposOk = [];

    // Comienza la sección de validación.

    // Valida el nombre (solo letras) usando una expresión regular que permite letras con acentos y nombres en español o catalán.
    var patronNombre = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑÀ-ÿ\s]+$/;
    if (!patronNombre.test(nombre)) {
        // Si el nombre no cumple con la expresión regular, agrega un mensaje de error al array.
        errores.push("El nombre no es válido");
    } else {
        camposOk.push("Nombre correcto (" + nombre + ")");
    }

    // Valida el formato del DNI usando una expresión regular: 8 dígitos seguidos de una letra.
    var patronDNI = /^\d{8}[a-zA-Z]$/;
    if (patronDNI.test(dni)) {
        // Si el formato del DNI es correcto, extrae los primeros 8 dígitos como número y la letra, y luego valida el DNI completo.
        let numDNI = parseInt(dni.substring(0, 8), 10);
        let letraDNI = dni.charAt(8).toUpperCase();

        if (!validaDNI(numDNI, letraDNI)) {
            // Si el DNI no es válido, agrega un mensaje de error al array.
            errores.push("El DNI no es válido");
        } else {
            camposOk.push("DNI correcto (" + dni + ")");
        }

    } else {
        // Si el formato del DNI no es válido, agrega un mensaje de error al array.
        errores.push("El formato introducido no es válido");
    }

    // Valida si la edad es un número.
    if (isNaN(edad)) {
        // Si la edad no es un número, agrega un mensaje de error al array.
        errores.push("La edad debe ser un número");
    } else {
        camposOk.push("Edad correcta (" + edad + ")");

    }

    // Muestra todos los mensajes de error acumulados en los elementos small correspondientes.
    $('#smallErrorNombre').html(errores.includes("El nombre no es válido") ? errores[errores.indexOf("El nombre no es válido")] : "");
    $('#smallErrorDni').html(errores.includes("El DNI no es válido") ? errores[errores.indexOf("El DNI no es válido")] : (errores.includes("El formato introducido no es válido") ? errores[errores.indexOf("El formato introducido no es válido")] : ""));
    $('#smallErrorEdad').html(errores.includes("La edad debe ser un número") ? errores[errores.indexOf("La edad debe ser un número")] : "");

    // Muestra mensajes de campo "OK" si el campo es válido.
    $('#smallNombreOk').html(camposOk.includes("Nombre correcto (" + nombre + ")") ? "Nombre correcto (" + nombre + ")" : "");
    $('#smallDniOk').html(camposOk.includes("DNI correcto (" + dni + ")") ? "DNI correcto (" + dni + ")" : "");
    $('#smallEdadOk').html(camposOk.includes("Edad correcta (" + edad + ")") ? "Edad correcta (" + edad + ")" : "");
}

/**
 * Función que valida un número 
 * de DNI español con su letra correspondiente.
 * @param {int} num el numero del dni a validar
 * @param {string} lle la letra del dno a comprobar
 * @returns flag booleà per saber si és V o F
 */

function validaDNI(num, lle) {
    // Inicializa una bandera en falso.
    let flag = false;

    // Lista de letras válidas para un DNI.
    let letrasValidas = "TRWAGMYFPDXBNJZSQVHLCKE";

    // Calcula el residuo al dividir el número de DNI por 23.
    let residuo = num % 23;

    // Obtiene la letra correcta correspondiente al residuo calculado.
    let letraCorrecta = letrasValidas[residuo];

    // Compara la letra calculada con la letra proporcionada y actualiza la bandera.
    if (letraCorrecta === lle) {
        flag = true;
    }

    // Devuelve la bandera, indicando si el DNI es válido o no.
    return flag;
}
