interface User {
  name: string;
  id: number;
}

// const user: User = {
//   name: "sid",
//   id: 23,
// };
// ==========================================================================
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);

// ===========================================================================
// There is already a small set of primitive types available in JavaScript: boolean, bigint, null, number, string, symbol, and undefined, which you can use in an interface. TypeScript extends this list with a few more, such as any (allow anything), unknown (ensure someone using this type declares what the type is), never (it’s not possible that this type could happen), and void (a function which returns undefined or has no return value).

function add(a: number, b: number): number {
  return a + b;
}
//==============================Union==========================================
// With a union, you can declare that a type could be one of many types.
// A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:
type MyBool = true | false | "";
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
let myval: WindowStates = "sid";
let myvalq: WindowStates = "open";

function getLength(obj: string[]) {
  return obj.length;
}

getLength([2, 3, 4]);
getLength(["sid", "ram", "rim"]);

// ==================================Generics=======================================

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

let stringArr: StringArray = ["Sid", "data"];

// typeofcontent is just a placeholder for a specific type that will be determined when you create an instance of Backpack
interface Backpack<typeofcontent> {
  add: (obj: typeofcontent) => void;
  get: () => typeofcontent;
}
// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);

// ===========================Structural type programmin===================
interface Point {
  x: number;
  y: number;
}

// if the variable matches the interface then typsescript automatically detects it.
//The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.
const points = { r: 67, u: 78 };
// The shape-matching only requires a subset of the object’s fields to match.
const point2 = { t: 56 };

// If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
