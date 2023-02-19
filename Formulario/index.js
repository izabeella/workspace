var nombreBool = false;
var correoBool = false;
var claveBool = false;
var confClaveBool = false;

function validarDatos() {
	if (nombreBool && correoBool && claveBool && confClaveBool) {
		alert('¡Te has inscrito correctamente!');
	}
}

function validarNombre() {
	let regexNombre = /^[a-zA-Z ]+$/;
	nombreBool = false;
	let nombre = document.getElementById('nombre').value;
	if 	(!nombre) {
		document.getElementById('nombre-p').innerHTML = "Rellene este campo";
		document.getElementById('nombre').style.border = "3px solid #d36c6d";
		document.getElementById('nombre').style.background = "content-box no-repeat right white url('images/error-icon.svg')";
	}
	else if (!regexNombre.test(nombre)){
		document.getElementById('nombre-p').innerHTML = "No se admiten números o caracteres especiales";
		document.getElementById('nombre').style.border = "3px solid #d36c6d";
		document.getElementById('nombre').style.background = "content-box no-repeat right white url('images/error-icon.svg')";
	}
	else {
		document.getElementById('nombre-p').innerHTML = "";
		document.getElementById('nombre').style.border = "3px solid #6bce80";
		document.getElementById('nombre').style.background = "content-box no-repeat right white url('images/success-icon.svg')";
		nombreBool = true;
	}
}

function validarCorreo() {
	let regexCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	correoBool = false;
	let correo = document.getElementById('correo').value;
	if 	(!correo) {
		document.getElementById('correo-p').innerHTML = "Rellene este campo";
		document.getElementById('correo').style.border = "3px solid #d36c6d";
		document.getElementById('correo').style.background = "content-box no-repeat right white url('images/error-icon.svg')";
	}
	else if (!regexCorreo.test(correo)){
		document.getElementById('correo-p').innerHTML = "Email inválido";
		document.getElementById('correo').style.border = "3px solid #d36c6d";
		document.getElementById('correo').style.background = "content-box no-repeat right white url('images/error-icon.svg')";
	}
	else {
		document.getElementById('correo-p').innerHTML = "";
		document.getElementById('correo').style.border = "3px solid #6bce80";
		document.getElementById('correo').style.background = "content-box no-repeat right white url('images/success-icon.svg')";
		correoBool = true;
	}
}

function validarClave() {
	claveBool = false;
	let clave = document.getElementById('clave').value;
	if 	(!clave) {
		document.getElementById('clave-p').innerHTML = "Rellene este campo";
		document.getElementById('clave').style.border = "3px solid #d36c6d";
		document.getElementById('clave').style.background = "content-box no-repeat right white url('images/error-icon.svg')";
	}
	else if (clave.length < 8) {
		document.getElementById('clave-p').innerHTML = "Debe tener al menos 8 caracteres";
		document.getElementById('clave').style.border = "3px solid #d36c6d";
		document.getElementById('clave').style.background = "content-box no-repeat right white url('images/error-icon.svg')";
	}
	else {
		document.getElementById('clave-p').innerHTML = "";
		document.getElementById('clave').style.border = "3px solid #6bce80";
		document.getElementById('clave').style.background = "content-box no-repeat right white url('images/success-icon.svg')";
		claveBool = true;
	}
}

function validarConfClave() {
	confClaveBool = false;
	let clave = document.getElementById('clave').value;
	let confClave = document.getElementById('conf-clave').value;
	if 	(!confClave) {
		document.getElementById('confclave-p').innerHTML = "Rellene este campo";
		document.getElementById('conf-clave').style.border = "3px solid #d36c6d";
		document.getElementById('conf-clave').style.background = "content-box no-repeat right white url('images/error-icon.svg')";
	}
	else if (confClave != clave){
		document.getElementById('confclave-p').innerHTML = "Las contraseñas no coinciden";
		document.getElementById('conf-clave').style.border = "3px solid #d36c6d";
		document.getElementById('conf-clave').style.background = "content-box no-repeat right white url('images/error-icon.svg')";
	}
	else {
		document.getElementById('confclave-p').innerHTML = "";
		document.getElementById('conf-clave').style.border = "3px solid #6bce80";
		document.getElementById('conf-clave').style.background = "content-box no-repeat right white url('images/success-icon.svg')";
		confClaveBool = true;
	}
}