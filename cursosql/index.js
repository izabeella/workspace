var submitFlow = false;

var expText = /^[a-zA-Z ]+$/;
var expEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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

function aceptarEnvio(){
    if (submitFlow == false) {
        submitBtn.classList.add("ocultar");
    }else {
        submitBtn.classList.remove("ocultar");
    }
}