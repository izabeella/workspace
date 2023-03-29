"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calleDireccion, numeroDireccion, pisoDireccion, letraDireccion, cpDireccion, poblacionDireccion, provinciaDireccion) {
        this.calleDireccion = calleDireccion;
        this.numeroDireccion = numeroDireccion;
        this.pisoDireccion = pisoDireccion;
        this.letraDireccion = letraDireccion;
        this.cpDireccion = cpDireccion;
        this.poblacionDireccion = poblacionDireccion;
        this.provinciaDireccion = provinciaDireccion;
    }
    Object.defineProperty(Direccion.prototype, "calle", {
        get: function () {
            return this.calleDireccion;
        },
        set: function (calleDireccion) {
            this.calleDireccion = calleDireccion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "numero", {
        get: function () {
            return this.numeroDireccion;
        },
        set: function (numeroDireccion) {
            this.numeroDireccion = numeroDireccion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "piso", {
        get: function () {
            return this.pisoDireccion;
        },
        set: function (pisoDireccion) {
            this.pisoDireccion = pisoDireccion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "letra", {
        get: function () {
            return this.letraDireccion;
        },
        set: function (letraDireccion) {
            this.letraDireccion = letraDireccion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "codigoPostal", {
        get: function () {
            return this.cpDireccion;
        },
        set: function (cpDireccion) {
            this.cpDireccion = cpDireccion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "poblacion", {
        get: function () {
            return this.poblacionDireccion;
        },
        set: function (poblacionDireccion) {
            this.poblacionDireccion = poblacionDireccion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "provincia", {
        get: function () {
            return this.provinciaDireccion;
        },
        set: function (provinciaDireccion) {
            this.provinciaDireccion = provinciaDireccion;
        },
        enumerable: false,
        configurable: true
    });
    return Direccion;
}());
exports.Direccion = Direccion;
