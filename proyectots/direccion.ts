export class Direccion {
    private calleDireccion: string;
    private numeroDireccion: number;
    private pisoDireccion: number;
    private letraDireccion: string;
    private cpDireccion: number;
    private poblacionDireccion: string;
    private provinciaDireccion: string
  
    constructor(calleDireccion: string, numeroDireccion: number, pisoDireccion: number, letraDireccion: string, cpDireccion: number, poblacionDireccion: string, provinciaDireccion: string) {
      this.calleDireccion = calleDireccion;
      this.numeroDireccion = numeroDireccion;
      this.pisoDireccion = pisoDireccion;
      this.letraDireccion = letraDireccion;
      this.cpDireccion = cpDireccion;
      this.poblacionDireccion = poblacionDireccion;
      this.provinciaDireccion = provinciaDireccion;
    }
  
    get calle() {
      return this.calleDireccion;
    }
  
    get numero() {
      return this.numeroDireccion;
    }
  
    get piso() {
      return this.pisoDireccion;
    }
  
    get letra() {
      return this.letraDireccion;
    }
  
    get codigoPostal() {
      return this.cpDireccion;
    }
  
    get poblacion() {
      return this.poblacionDireccion;
    }
  
    get provincia() {
      return this.provinciaDireccion;
    }
  
    set calle(calleDireccion: string) {
      this.calleDireccion = calleDireccion;
    }
  
    set numero(numeroDireccion: number) {
      this.numeroDireccion = numeroDireccion;
    }
  
    set piso(pisoDireccion: number) {
      this.pisoDireccion = pisoDireccion;
    }
  
    set letra(letraDireccion: string) {
      this.letraDireccion = letraDireccion;
    }
  
    set codigoPostal(cpDireccion: number) {
      this.cpDireccion = cpDireccion;
    }
  
    set poblacion(poblacionDireccion: string) {
      this.poblacionDireccion = poblacionDireccion;
    }
  
    set provincia(provinciaDireccion: string) {
      this.provinciaDireccion = provinciaDireccion;
    }
  }