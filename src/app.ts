//Practise 1

const button = document.querySelector("button")! as HTMLInputElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

//Practise 2

//ex.1
let age: number;
let nameMale: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (arg: number) => number;

age = 50;
nameMale = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => {
  return 100 + a;
};

//ex.2
let anything: any;

anything = -20;
anything = "Text";
anything = {};

//ex.3

let some: string;
some = "Text";

let str: string;
str = some;

//ex.4
// let person: [string, number];

// person = ["Max", 21];

//ex.5

enum Status {
  LOADING,
  READY,
}

//ex.6

let unit: "enable" | "disable";

//ex.7

function showMessage(message: any): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

//ex.8

type Data = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1: Data = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2: Data = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

//Practise 4

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class Home {
  protected door = false;
  private teenats: Person[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error("Door is closed");
    }

    this.teenats.push(person);
    console.log("Person inside");
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends Home {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error("Key to another door");
    }

    return (this.door = true);
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
// Practise 5