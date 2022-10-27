"use strict"; 
//captcha
let codigocaptcha;
codigocaptcha = Math.floor(Math.random() * 9999) + 1;
let numero = document.getElementById("numero");
let confirmacion = document.getElementById("confirmacion");
let botonCaptcha = document.getElementById("botonCaptcha");
botonCaptcha.addEventListener("click", validacion);
numero.innerText = codigocaptcha;

function validacion() {
    if (numero.innerText == escribirCaptcha.value) {
        let correcto = document.getElementById("confirmacion");
        correcto.innerText = "Verificación Exitosa";
        if (document.getElementById("confirmacion") == correcto) {
            correcto.classList.remove('conf-not');
            correcto.classList.add('conf-yes');
        }
    }
    else {
        let incorrecto = document.getElementById("confirmacion");
        incorrecto.innerText = "Verificación Erronea";
        if (document.getElementById("confirmacion") == incorrecto) {
            incorrecto.classList.remove('conf-yes');
            incorrecto.classList.add('conf-not');}
   }}