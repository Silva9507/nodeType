1;
const luisCarlosOrodñezSilva: string = "luis Carlos";

2;
const favoriteNumber: number = 19;

3;
let animals: string[] = [
  "perro",
  "tigre",
  "leon",
  "gato",
  "tortuga",
  "elefante",
  "oso",
  "leopardo",
  "pantera",
  "águila",
];

4;
interface Organization {
  name: string;
  slogan: string;
  numberWorkers: number;
  HoursAttention: string;
  allowsWorkRemote: boolean;
  dateCreation: Date;
  worksSaturdays?: boolean;
}

let organizacion: Organization[] = [
  {
    name: "Desarrollo a tu alcance",
    slogan: "Hola Mundo",
    numberWorkers: 2500,
    HoursAttention: "8:00 AM - 6:00 PM",
    allowsWorkRemote: true,
    dateCreation: new Date("2023-04-24"),
    worksSaturdays: false,
  },
];

5;
interface Estudiantes {
  name: string;
  age: number;
  course: string;
  address?: string;
}

const Alumnos: Estudiantes[] = [
  {
    name: "Luis",
    age: 27,
    course: "Sistemas",
    address: "Calle falsa 25",
  },
  {
    name: "Valentina",
    age: 22,
    course: "Fisioterapia",
  },
  {
    name: "Katerine",
    age: 24,
    course: "Medicina",
  },
];

6;
const calculateArea = (radio: number): number => {
  const area = Math.PI * Math.pow(radio, 2);
  return area;
};

const radio = 19;
const area = calculateArea(radio);
console.log(`El área del círculo con radio ${radio} es: ${area}`);

7;
const findMore = (num1: number, num2: number, num3: number): number => {
  let mayor = num1;

  if (num2 > mayor) {
    mayor = num2;
  }

  if (num3 > mayor) {
    mayor = num3;
  }

  return mayor;
};

const numero1 = 15;
const numero2 = 35;
const numero3 = 101;

const resultado = findMore(numero1, numero2, numero3);
console.log(`El número mayor es: ${resultado}`);

8;
const nameConsole = "Luis Carlos";
const saludar = (nombre: string): void => {
  console.log(`Hola, soy ${nombre}`);
};
saludar(nameConsole);
