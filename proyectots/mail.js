"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipoMail, direccionMail) {
        this.tipoMail = tipoMail;
        this.direccionMail = direccionMail;
    }
    Object.defineProperty(Mail.prototype, "direccion", {
        get: function () {
            return this.direccionMail;
        },
        set: function (direccionMail) {
            this.direccionMail = direccionMail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "tipo", {
        get: function () {
            return this.tipoMail;
        },
        set: function (tipoMail) {
            this.tipoMail = tipoMail;
        },
        enumerable: false,
        configurable: true
    });
    return Mail;
}());
exports.Mail = Mail;
