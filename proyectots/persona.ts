import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

export class Persona {
  private nombrePersona: string;
  private apellidosPersona: string;
  private edadPersona: number;
  private dniPersona: string;
  private cumpleanosPersona: Date;
  private colorFavoritoPersona: string;
  private sexoPersona: string;
  private direccionesPersona: Array<Direccion>;
  private mailsPersona: Array<Mail>;
  private telefonosPersona: Array<Telefono>;
  private notasPersona: string

  constructor(nombrePersona: string, apellidosPersona: string, edadPersona: number, dniPersona: string, cumpleanosPersona: Date, colorFavoritoPersona: string, sexoPersona: string, direccionesPersona: Array<Direccion>, mailsPersona: Array<Mail>, telefonosPersona: Array<Telefono>, notasPersona:string) {
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

  get nombre() {
    return this.nombrePersona;
  }

  get apellidos() {
    return this.apellidosPersona;
  }

  get edad() {
    return this.edadPersona;
  }

  get dni() {
    return this.dniPersona;
  }

  get cumpleanos() {
    return this.cumpleanosPersona;
  }

  get colorFavorito() {
    return this.colorFavoritoPersona;
  }

  get sexo() {
    return this.sexoPersona;
  }

  get direcciones() {
    return this.direccionesPersona;
  }

  get mails() {
    return this.mailsPersona;
  }

  get telefonos() {
    return this.telefonosPersona;
  }

  get notas() {
    return this.notasPersona;
  }

  set nombre(nombrePersona: string) {
    this.nombrePersona = nombrePersona;
  }

  set apellidos(apellidosPersona: string) {
    this.apellidosPersona = apellidosPersona;
  }

  set edad(edadPersona: number) {
    this.edadPersona = edadPersona;
  }

  set dni(dniPersona: string) {
    this.dniPersona = dniPersona;
  }

  set cumpleanos(cumpleanosPersona: Date) {
    this.cumpleanosPersona = cumpleanosPersona;
  }

  set colorFavorito(colorFavoritoPersona: string) {
    this.colorFavoritoPersona = colorFavoritoPersona;
  }

  set sexo(sexoPersona: string) {
    this.sexoPersona = sexoPersona;
  }

  set direcciones(direccionesPersona: Array<Direccion>) {
    this.direccionesPersona = direccionesPersona;
  }

  set mails(mailsPersona: Array<Mail>) {
    this.mailsPersona = mailsPersona;
  }

  set telefonos(telefonosPersona: Array<Telefono>) {
    this.telefonosPersona = telefonosPersona;
  }

  set notas(notasPersona: string) {
    this.notasPersona = notasPersona;
  }

  agregarNuevaDireccion(direccion:Direccion) {
    this.direccionesPersona.push(direccion)
  }

  agregarNuevoTelefono(telefono:Telefono) {
    this.telefonosPersona.push(telefono)
  }

  agregarNuevoMail(mail:Mail) {
    this.mailsPersona.push(mail)
  }
}