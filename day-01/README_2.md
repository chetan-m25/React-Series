# 📘 JavaScript Basics You Must Know Before React

* This repository covers the **core JavaScript concepts** that you must understand **before starting React**.  
* It focuses on the fundamentals that React heavily depends on, explained in a **simple and easy-to-follow way**.  
* If you are comfortable with these topics, learning React will feel **much smoother and more confident**.


## 🧱 JavaScript Fundamentals

### Variables (`var`, `let`, `const`)
**Always prefer `let` and `const` (React standard)**

| Keyword | Scope | Reassign | Redeclare |
|-------|------|----------|-----------|
| var | Function | ✅ | ✅ |
| let | Block | ✅ | ❌ |
| const | Block | ❌ | ❌ |

```
let a = 10;
a = 20;

const b = 30;
// b = 40 ❌
```


# Data Types
* **Primitive** : Number, String, Boolean, Undefined, Null
* **Non-Primitive** : Object, Array, Function
```
let age = 24;
let name = "Anubhav";
let isActive = true;
```


# Operators
* **Arithmetic** : + - * /
* **Logical** : && || !

# Console Methods
```
console.log("Hello");
console.error("Error");
console.table([{a:1},{a:2}]);
```


# Conditions & Loops
```
if (age >= 18) {
  console.log("Adult");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```


# Arrays & Objects
```
let arr = [10, 20, 30];
```
**Common Array Methods** : push, pop, shift, unshift, length


# Higher Order Functions (Very Important for React)
```
arr.map(n => n * 2);           // most used in React
arr.filter(n => n > 10);
arr.reduce((a, b) => a + b, 0);
arr.forEach(n => console.log(n));
arr.find(n => n > 15);
arr.some(n => n > 25);
```


# Objects & Array of Objects
```
let user = { name: "A", age: 24 };

let users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

users.map(u => u.name);
```


# Destructuring & Spread Operator
**Destructuring**  (Used heavily in React)
```
const [a, b] = [10, 20];

const { name, age } = user;
```
**Spread & Rest**
```
let newArr = [...arr, 40];

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
```


# Functions
**Normal & Arrow Functions**
```
function greet(name) {
  return "Hello " + name;
}

const greet = name => `Hello ${name}`;
```
**Parameters vs Arguments**
```
function add(a, b) {}   // parameters
add(10, 20);            // arguments
```


# Async JavaScript
**Promises**
```
const promise = new Promise((resolve, reject) => {
  resolve("Done");
});
```
**Async / Await with Fetch API**
```
async function getData() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
```


# Error Handling
```
try {
  let x = y + 10;
} catch (error) {
  console.log(error.message);
}
```


# Import & Export (ES Modules)
``` html
<!-- This script tag is written inside the HTML body -->
<!-- type="module" allows us to use modern JavaScript features like import and export -->
<script type="module" src="main.js"></script>

```
``` js
// These lines are written in a JavaScript file to EXPORT functions

// Named export → must be imported using the same name
export const add = (a, b) => a + b;

// Default export → can be imported with any name
export default function greet() {}


// These lines are written in another JavaScript file to IMPORT functions
// Importing:
// - default export (greet)
// - named export (add)
import greet, { add } from "./file.js";

```


# ✅ Final Checklist Before React
Make sure you are comfortable with:
* map, filter, reduce
* Array & object destructuring
* Spread operator
* Arrow functions
* Async / await
* import / export