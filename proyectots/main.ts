import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

const direccionUno = new Direccion(
  "Calle Loreto",
  23,
  2,
  "A",
  23852,
  "Madrid",
  "Madrid"
)

const direccionDos = new Direccion(
  "Calle Verdad",
  2,
  5,
  "B",
  23345,
  "Madrid",
  "Madrid"
)

const mailUno = new Mail(
  "personal",
  "pacogarcia@gmail.com"
)

const telefonoUno = new Telefono(
  "fijo",
  916548345
)

const telefonoDos = new Telefono(
  "movil",
  648348976
)

const personaUno = new Persona(
  'Paco',
  'García Pérez',
  56,
  '34599543C',
  new Date(1967, 4, 12),
  'verde',
  'hombre',
  [direccionUno, direccionDos],
  [mailUno],
  [telefonoUno, telefonoDos],
  "Persona agradable que contesta al teléfono siempre"
);

const direccionTres = new Direccion(
  "Paseo de la Libertad",
  15,
  8,
  "D",
  22150,
  "Villaverde",
  "Madrid"
)

const direccionCuatro = new Direccion(
  "Calle Carlos 3",
  1,
  1,
  "C",
  34201,
  "Salamanca",
  "Salamanca"
)

const mailDos = new Mail(
  "personal",
  "martaflores@gmail.com"
)

const mailTres = new Mail(
  "trabajo",
  "martaf@deysant.com"
)

const telefonoTres = new Telefono(
  "fijo",
  914987945
)

const telefonoCuatro = new Telefono(
  "movil",
  676626282
)

const personaDos = new Persona(
  'Marta',
  'Flores Diaz',
  25,
  '52003945G',
  new Date(1998, 9, 20),
  'morado',
  'mujer',
  [direccionTres, direccionCuatro],
  [mailDos, mailTres],
  [telefonoTres, telefonoCuatro],
  "Está pensando en adquirir una tercera residencia"
);

const direccionCinco = new Direccion(
  "Calle Palermo",
  5,
  3,
  "B",
  31011,
  "Badajoz",
  "Extremadura"
)

const direccionSeis = new Direccion(
  "Calle Sintoniza",
  4,
  5,
  "D",
  51520,
  "Valencia",
  "Valencia"
)

const mailCuatro = new Mail(
  "personal",
  "cecilio45@gmail.com"
)

const mailCinco = new Mail(
  "trabajo",
  "ceciliog@pacter.es"
)

const telefonoCinco = new Telefono(
  "fijo",
  916567832
)

const telefonoSeis = new Telefono(
  "movil",
  634946521
)

const personaTres = new Persona(
  'Cecilio',
  'Guzmán Trillo',
  63,
  '20683789S',
  new Date(1960, 4, 7),
  'rojo',
  'hombre',
  [direccionCinco, direccionSeis],
  [mailCuatro, mailCinco],
  [telefonoCinco, telefonoSeis],
  "No llamar por las mañanas"
);

console.log("Personas antes de hacer el cambio:");
console.log(personaUno);
console.log(personaDos);
console.log(personaTres);

const agenda: Array<Persona> = new Array(personaUno, personaDos, personaTres);

const dniABuscar: string = "20683789S";

const personaAEditar: Persona = agenda.find(persona => persona.dni === dniABuscar) as Persona;

const nuevaDireccion = new Direccion(
  "Calle Ferran",
  2,
  3,
  "E",
  43453,
  "Zaragoza",
  "Zaragoza"
)

const nuevoMail = new Mail(
  "trabajo",
  "cecilio_guzman@ferreterialorty.com"
)

const nuevoTelefono = new Telefono(
  "fijo",
  916776492
)

personaAEditar.agregarNuevaDireccion(nuevaDireccion);
personaAEditar.agregarNuevoMail(nuevoMail);
personaAEditar.agregarNuevoTelefono(nuevoTelefono);

console.log("Personas después de hacer el cambio:");
console.log(personaUno);
console.log(personaDos);
console.log(personaTres);