var submitFlow = false;

var expText = /^[a-zA-Z ]+$/;
var expEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var expPwd = /^[a-zA-Z0-9_-]+$/;

var submitBtn = document.getElementById("submitBtn");

function comprobarTexto(id){
    var inputTexto = document.getElementById(id);
    if (expText.exec(inputTexto.value) ){
        inputTexto.classList.remove("error");
        inputTexto.classList.add("success");
        submitFlow = true;
    }else {
        inputTexto.classList.remove("success");
        inputTexto.classList.add("error");
        submitFlow = false;
    }
    aceptarEnvio();
}

function comprobarEmail(id){
    var inputEmail = document.getElementById(id);
    if (expEmail.exec(inputEmail.value) ){
        inputEmail.classList.remove("error");
        inputEmail.classList.add("success");
        submitFlow = true;
    }else {
        inputEmail.classList.remove("success");
        inputEmail.classList.add("error");
        submitFlow = false;
    }
    aceptarEnvio();
}

function comprobarPwd(id){
    var inputPwd = document.getElementById(id);
    if (expPwd.exec(inputPwd.value) ){
        inputPwd.classList.remove("error");
        inputPwd.classList.add("success");
        submitFlow = true;
    }else {
        inputPwd.classList.remove("success");
        inputPwd.classList.add("error");
        submitFlow = false;
    }
    aceptarEnvio();
}

function aceptarEnvio(){
    if (submitFlow == false) {
        submitBtn.classList.add("ocultar");
    }else {
        submitBtn.classList.remove("ocultar");
    }
}

function subirDatos(){
    if (submitFlow == false){
        alert("Error: no se han llenado correctamente todos los campos");
    }
}