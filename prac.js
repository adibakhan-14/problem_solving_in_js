// var name = "Nicholas";
// var temp = new Object(name);
// temp.last = "Zakas";
// temp = null;

// var temp = new Object(name);
// console.log(temp.last);

// var result = add(5, 5);

// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(result);

// var numbers = [1, 5, 8, 4, 20, 10, 2, 6];
// // numbers.sort(function(first, second) {
// //     return first - second;
// // });
// numbers.sort();
// console.log(numbers);

// function sayMessage(message) {
//     if (arguments.length === 0) {
//         message = "default mesasge";
//     }
//     console.log(message);


// }

// sayMessage();

// function sayNameForAll(label) {
//     console.log(label + ":" + this.name);
// }
// var person1 = {
//     name: "Nicholas"
// };
// var person2 = {
//     name: "Greg"
// };
// var name = "Michael";
// sayNameForAll.apply(this, ["global"]);
// sayNameForAll.apply(person1, ["person1"]);
// sayNameForAll.apply(person2, ["person2"]);
// function sayNameForAll(label) {
//     console.log(label + ":" + this.name);
// }
// var person1 = {
//     name: "Nicholas"
// };
// var person2 = {
//     name: "Greg"
// };
// create a function just for person1

// var sayNameForPerson1 = sayNameForAll.bind(person1);
// sayNameForPerson1("person1");
// var sayNameForPerson2 = sayNameForAll.bind(person2, "person2");
// sayNameForPerson2();
// person2.sayName = sayNameForPerson1;
// person2.sayName("person1");


// var person1 = {
//     name: "Simon"
// }

// var person2 = new Object();
// person2.name = "Nayar";


// person2.age = "redacted";
// person1.age = "redacted";

// person1.name = "Greg";
// person2.name = "Michael";


// console.log(person1.age);
// console.log(person2.name);

// console.log("age" in person1);

// var object = {
//     name: "Adiba",
//     age: 27,
//     school: "Scholastica"

// }
// var property;
// for (property in object) {
//     console.log("Name: " + property);
//     console.log("Value: " + object[property]);
// }

// var properties = Object.keys(object);
// // if you want to mimic for-in behavior
// var i, len;
// for (i = 0, len = properties.length; i < len; i++) {
//     console.log("Name: " + properties[i]);
//     console.log("Value: " + object[properties[i]]);
// }

// var person1 = {};
// Object.defineProperty(person1, "name", {
//     value: "Nicholas"
// });
// console.log("name" in person1); // true
// console.log(person1.propertyIsEnumerable("name")); // false
// var hagoo = delete person1.name;
// console.log("name" in person1); // true
// person1.name = "Greg";
// console.log(person1.name);
// console.log(hagoo);


// var person2 = new Object();
// Object.defineProperty(person2, "name", {
//     value: "Adiba"
// })
// Object.defineProperty(person2, "age", {
//     value: 27
// })

// console.log(person2.name, person2.age);
// function Person() {


// }
// var person1 = new Person();
// var person2 = new Person();


// console.log(person1 instanceof Person);

// function Person(name) {
//     this.name = name;
//     this.sayName = function() {
//         console.log(this.name, "is a stupid man");
//     };
//     return name;
// }
// var person1 = new Person("Nicholas Aladin");
// var person2 = new Person("Greg");

// person1.sayName(); // outputs "Nicholas"
// person2.sayName();
// function Person(name) {
//     Object.defineProperty(this, "name", {
//         get: function() {
//             return name;
//         },
//         set: function(newName) {
//             name = newName;
//         },
//         enumerable: true,
//         configurable: true
//     });
//     this.sayName = function() {
//         console.log(this.name);
//     };
// }

// var person1 = new Person("Nicholas"); // note: missing "new"
// console.log(person1 instanceof Person); // false
// console.log(typeof person1); // "undefined"
// console.log(person1.name);
// var book = {
//     title: "The Principles of Object-Oriented JavaScript"
// };
// console.log("title" in book); // true
// console.log(book.hasOwnProperty("title")); // true
// console.log("hasOwnProperty" in book); // true
// console.log(book.hasOwnProperty("hasOwnProperty")); // false
// console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));

// function hasPrototypeProperty(object, name) {
//     return name in object && !object.hasOwnProperty(name);
// }
// console.log(hasPrototypeProperty(book, "title")); // false
// console.log(hasPrototypeProperty(book, "hasOwnProperty"));
// function ParkingLot(size) {
//     this.size = size;

// }
// ParkingLot.prototype.sizeOfParking = function() {
//     console.log(this.size);
// }

// var parking1 = new ParkingLot("small");
// var parking2 = new ParkingLot("large");
// var parking3 = new ParkingLot("medium");


// ParkingLot.prototype.brand = [];

// parking1.brand.push("Toyota");



// console.log(parking2.brand);
// console.log(parking1.brand);


// parking1.sizeOfParking();
// parking2.sizeOfParking();
// parking3.sizeOfParking();

// console.log(parking1);

// function Person(name) {
//     this.name = name;
// }
// Person.prototype = {
//     constructor: Person,
//     sayName: function() {
//         console.log(this.name);
//     },
//     toString: function() {
//         return "[Person " + this.name + "]";
//     }
// };
// var person1 = new Person("Nicholas");
// var person2 = new Person("Greg");
// console.log(person1 instanceof Person); // true
// console.log(person1.constructor === Person); // true
// console.log(person1.constructor === Object); // false
// console.log(person2 instanceof Person); // true
// console.log(person2.constructor === Person); // true
// console.log(person2.constructor === Object);

// Array.prototype.sum = function() {
//     return this.reduce(function(previous, current) {
//         return previous + current;
//     });
// };
// var numbers = [1, 2, 3, 4, 5, 6];
// var result = numbers.sum();
// console.log(result);
// var object = ['a', 'b', 'c'].reduce((a, v) => ({...a, [v]: v }), {});

// console.log(object);

// Array.prototype.sum = function() {
//     return this.reduce(function(prev, next) {
//         return prev + next;
//     });
// }


// var numbers = [1, 2, 3, 4, 5, 6];
// var result = numbers.sum();
// console.log(result);

// var person1 = {
//     name: "Nicholas",
//     sayName: function() {
//         console.log(this.name);
//     }
// };
// var person2 = Object.create(person1, {
//     name: {
//         configurable: true,
//         enumerable: true,
//         value: "Greg",
//         writable: true
//     }
// });
// person1.sayName(); // outputs "Nicholas"
// person2.sayName();
function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}
Rectangle.prototype.areaRect = function() {
    return this.length * this.width
}
Rectangle.prototype.toString = function() {
    return "[area " + this.length + "x" + this.width + "]";
};
rectangle1 = new Rectangle(5, 4);

console.log(rectangle1.toString(), '=', rectangle1.areaRect());


function Square(size) {
    Rectangle.call(this, size, size);
}
Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Square,
        writable: true
    }
});
Square.prototype.toString = function() {
    return "[Square " + this.length + "x" + this.width + "]";
};


var square = new Square(6);
console.log(square.toString(), "=", square.areaRect());

// var items = [];
// var object = {};

// function reflect(value) {
//     return value;
// }
// console.log(items instanceof Array); // true
// console.log(object instanceof Object); // true
// console.log(reflect instanceof Function);