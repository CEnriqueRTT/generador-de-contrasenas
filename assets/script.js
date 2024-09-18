let cantidad = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
let contrasena = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje');
let botonLimpiar = document.getElementById('limpiar');

function generarContrasena(){
    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 4 || numeroDigitado > 12) {
        alert('Ingresar una cantidad de caracteres en el rango de [4-12]');
        return; //Salir de la función antes de tiempo
    }

    let password = '';

    for(let i=0; i<numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random()*cadenaCaracteres.length)];
        console.log(caracterAleatorio);
        password+=caracterAleatorio;
    }
    
    contrasena.value = password;
    validarContrasena(password);
}

function validarContrasena(password) {
    let letraMinuscula = /[a-z]/.test(password);
    let letraMayuscula = /[A-Z]/.test(password);
    let numero = /[0-9]/.test(password);
    let caracterEspecial = /[!@#$%^&*()]/.test(password);
    let mensajeValidacion = '';

    // Quitar cualquier mensaje anterior
    mensaje.classList.remove('mensaje-muy-fuerte', 'mensaje-fuerte', 'mensaje-debil', 'mensaje-muy-debil');

    if (letraMinuscula && letraMayuscula && numero && caracterEspecial) {
        mensajeValidacion = 'La contraseña es muy fuerte.';
        mensaje.classList.add('mensaje-muy-fuerte'); //Color verde
    } else if ((letraMinuscula && letraMayuscula && numero) || (letraMinuscula && letraMayuscula && caracterEspecial) || (letraMinuscula && numero && caracterEspecial) || (letraMayuscula && numero && caracterEspecial)) {
        mensajeValidacion = 'La contraseña es fuerte.';
        mensaje.classList.add('mensaje-fuerte'); //Color amarillo
    } else if ((letraMinuscula && letraMayuscula) || (letraMinuscula && numero) || (letraMinuscula && caracterEspecial) || (letraMayuscula && numero) || (letraMayuscula && caracterEspecial) || (numero && caracterEspecial)) {
        mensajeValidacion = 'La contraseña es débil.';
        mensaje.classList.add('mensaje-debil'); //Color naranja
    }else { 
        mensajeValidacion = 'La contraseña es muy débil.';
        mensaje.classList.add('mensaje-muy-debil'); //Color rojo
    }

    mensaje.textContent = mensajeValidacion;
}

function limpiarCampos() {
    cantidad.value = '';
    contrasena.value = '';
    mensaje.textContent = ''; //Borrar el mensaje
}
