export class Mail {
    private tipoMail: string;
    private direccionMail: string;
  
    constructor(tipoMail: string, direccionMail: string ) {
      this.tipoMail = tipoMail;
      this.direccionMail = direccionMail;
    }
  
    get direccion() {
      return this.direccionMail;
    }
  
    get tipo() {
      return this.tipoMail;
    }
  
    set direccion(direccionMail: string) {
      this.direccionMail = direccionMail;
    }
  
    set tipo(tipoMail: string) {
      this.tipoMail = tipoMail;
    }
  
  }