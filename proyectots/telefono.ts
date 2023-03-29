export class Telefono {
    private tipoTelefono: string;
    private numeroTelefono: number;
  
    constructor(tipoTelefono: string, numeroTelefono: number ) {
      this.tipoTelefono = tipoTelefono;
      this.numeroTelefono = numeroTelefono;
    }
  
    get numero() {
      return this.numeroTelefono;
    }
  
    get tipo() {
      return this.tipoTelefono;
    }
  
    set numero(numeroTelefono: number) {
      this.numeroTelefono = numeroTelefono;
    }
  
    set tipo(tipoTelefono: string) {
      this.tipoTelefono = tipoTelefono;
    }
  }