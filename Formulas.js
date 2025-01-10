// Función para validar el formulario de contacto
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Función para mostrar detalles del programa
function showProgramDetails(programId) {
    var details = document.getElementById(programId);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// Función para calcular el total con impuestos
function calculateTotal(price, taxRate) {
    return price + (price * taxRate / 100);
}

// Ejemplo de uso: calcular el precio total de un programa con un impuesto del 10%
var price = 500000; // Precio base
var taxRate = 10; // Tasa de impuesto en porcentaje
var total = calculateTotal(price, taxRate);
console.log("El total con impuestos es: " + total);

// Función para actualizar la descripción del programa
function updateProgramDescription(description) {
    var element = document.getElementById("programDescription");
    if (element) {
        element.innerText = description;
    }
}
