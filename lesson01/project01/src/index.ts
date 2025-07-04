// имплицитная типизация. На основании значения, присваиваемого переменной
let x = 10;
console.log(x);

let y: number = 11;

y = 12;
//y = "12"; // ошибка компиляции
// примитивы в качестве типов
let myName: string = "Vasilii";
let isInVillage: boolean = false;

// Создание своих типов
// Union
type Gender = "male" | "female";

const myGender: Gender = "male";

// расширение типа
type ExtendedGender = Gender | "non-binary";

let eltonGender: ExtendedGender = "non-binary";

eltonGender = "male";

type CarType = "sedan" | "coupe" | "van" | "truck";

const studentsNames: string[] = ["Evgenii", "Vasilii", "Victoria"];

studentsNames.push("Fred");
//studentsNames.push(12); // ошибка компиляции

// Кортежи tuple

// число, строка, булеан
type UserInfo = [number, string, boolean];

const isHappy = true;
const myInfo: UserInfo = [42, "Vasilii", isHappy];

const johnInfo: [number, string, boolean] = [43, "John", false];
// тип any - указывает на отсутствие типизации, мы не знаем что внутри.
// Такого надо избегать

// Как типизировать объект

interface User {
  name: string;
  age: number;
}

const user: User = { name: "Bob", age: 28 };

//Создайте тип пират у которого есть следующие поля:
// isDrunk boolean
// age число
// parrot типа Parrot
// Parrot -> объект с ключем nickName: "Ra"
// weapons массив стрингов ["pistol", "saber"]

interface Parrot {
  nickName: string;
}

// type Parrot = {nickName: string}; тоже можно

type Weapon = "pistol" | "saber" | "musket";

interface Pirate {
  name: string;
  isDrunk: boolean;
  age: number;
  parrot?: Parrot; // это поле является опциональным
  weapons: Weapon[];
}
// ? - opptional
const parrot: Parrot = { nickName: "Ra" };

let weapons: Weapon[] = ["pistol", "saber"];

const pirateSam: Pirate = {
  name: "Sam",
  isDrunk: false,
  age: 32,
  parrot,
  weapons,
};

const blackBeard: Pirate = {
  name: "Black Beard",
  isDrunk: false,
  age: 0,
  parrot: { nickName: "Little Bill" },
  weapons: ["saber", "musket"],
};

const jackSparrow: Pirate = {
  name: "Jack Sparrow",
  isDrunk: true,
  age: 40,
  weapons: ["musket"],
};

// Functions
function sum(x: number, y: number): number {
  return x + y;
}

function repeatString(word: string, n: number): string {
  return word.repeat(n);
}

const res = repeatString("Apple", 10);
console.log(res);

// arrow function

const multiply = (x: number, y: number): number => x + y; // строчная функция
const multiply2 = (x: number, y: number): number => {
  // блочная функция
  return x + y;
};

// напишите функцию, которая принимает массив строк и слово, возвращает булеан
//функция ищет есть ли указанное слово в массиве

const hasWord = (array: string[], word: string): boolean => {
  return array.includes(word);
};

const hasWord2 = (array: string[], word: string): boolean => {
  return array.some((item) => item === word);
  // return array.indexOf(word) !== -1;
  // return array.find(item => item === word) !== undefined;
  //const set = new Set(array);
  // return set.has(word);
};

const fruits = ["apple", "orange", "banana"];
console.log(hasWord(fruits, "orange"));

function printWord(word: string): void {
  console.log(word);
}

// undefined, null
type Name = string | undefined | null;
let myName2: Name = null;

// Сложные вещи
let b: unknown; // сами мы такой назначать не будем
// когда мы не знаем, какой тип. Так же как any

// преобразование типов для TS

b = "apple";
console.log((b as string).length);

const res2 = (<string>b).length; // в стиле java
// Generic
function universalPrint<T>(arg: T) {
  console.log(arg);
}

universalPrint<string>("apple");
universalPrint<number>(15);
universalPrint("orange"); // программа поймет

// Enum

enum Days {
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thursday = "thursday",
  Friday = "friday",
  Saturday = "saturday",
  Sunday = "Sunday",
}
