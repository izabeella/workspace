"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipoTelefono, numeroTelefono) {
        this.tipoTelefono = tipoTelefono;
        this.numeroTelefono = numeroTelefono;
    }
    Object.defineProperty(Telefono.prototype, "numero", {
        get: function () {
            return this.numeroTelefono;
        },
        set: function (numeroTelefono) {
            this.numeroTelefono = numeroTelefono;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "tipo", {
        get: function () {
            return this.tipoTelefono;
        },
        set: function (tipoTelefono) {
            this.tipoTelefono = tipoTelefono;
        },
        enumerable: false,
        configurable: true
    });
    return Telefono;
}());
exports.Telefono = Telefono;
