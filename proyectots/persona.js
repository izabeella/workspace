"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombrePersona, apellidosPersona, edadPersona, dniPersona, cumpleanosPersona, colorFavoritoPersona, sexoPersona, direccionesPersona, mailsPersona, telefonosPersona, notasPersona) {
        this.nombrePersona = nombrePersona;
        this.apellidosPersona = apellidosPersona;
        this.edadPersona = edadPersona;
        this.dniPersona = dniPersona;
        this.cumpleanosPersona = cumpleanosPersona;
        this.colorFavoritoPersona = colorFavoritoPersona;
        this.sexoPersona = sexoPersona;
        this.direccionesPersona = direccionesPersona;
        this.mailsPersona = mailsPersona;
        this.telefonosPersona = telefonosPersona;
        this.notasPersona = notasPersona;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this.nombrePersona;
        },
        set: function (nombrePersona) {
            this.nombrePersona = nombrePersona;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this.apellidosPersona;
        },
        set: function (apellidosPersona) {
            this.apellidosPersona = apellidosPersona;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this.edadPersona;
        },
        set: function (edadPersona) {
            this.edadPersona = edadPersona;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this.dniPersona;
        },
        set: function (dniPersona) {
            this.dniPersona = dniPersona;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumpleanos", {
        get: function () {
            return this.cumpleanosPersona;
        },
        set: function (cumpleanosPersona) {
            this.cumpleanosPersona = cumpleanosPersona;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "colorFavorito", {
        get: function () {
            return this.colorFavoritoPersona;
        },
        set: function (colorFavoritoPersona) {
            this.colorFavoritoPersona = colorFavoritoPersona;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this.sexoPersona;
        },
        set: function (sexoPersona) {
            this.sexoPersona = sexoPersona;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direcciones", {
        get: function () {
            return this.direccionesPersona;
        },
        set: function (direccionesPersona) {
            this.direccionesPersona = direccionesPersona;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "mails", {
        get: function () {
            return this.mailsPersona;
        },
        set: function (mailsPersona) {
            this.mailsPersona = mailsPersona;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "telefonos", {
        get: function () {
            return this.telefonosPersona;
        },
        set: function (telefonosPersona) {
            this.telefonosPersona = telefonosPersona;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "notas", {
        get: function () {
            return this.notasPersona;
        },
        set: function (notasPersona) {
            this.notasPersona = notasPersona;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.agregarNuevaDireccion = function (direccion) {
        this.direccionesPersona.push(direccion);
    };
    Persona.prototype.agregarNuevoTelefono = function (telefono) {
        this.telefonosPersona.push(telefono);
    };
    Persona.prototype.agregarNuevoMail = function (mail) {
        this.mailsPersona.push(mail);
    };
    return Persona;
}());
exports.Persona = Persona;
