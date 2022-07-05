// for know  type
const x = 42;
console.log(typeof x)

const explicit = String(x)
console.log(typeof explicit)
console.log(explicit)
const implicit = x + "";
console.log(typeof explicit)
console.log(implicit)

console.log(typeof null)

const o = new Object();
o.fristname = "Eslam";
o.lastname = "Ghazy";
o.isgood = true;
o.greet = function () {
    console.log("hello");
}

console.log(o)

const o2 = {}
o.fristname = "Eslam"
o['lastname'] = "Alaa"
const key = "isgood";
o[key] = false;
o['greet'] = function () {
    console.log("Hi");
}

console.log(o)

const o3 = {
    1: "TEST",
    fristname: "Eslam",
    lastname: "Ghazy",
    isgood: true,
    greet: function () {
        console.log("hola")
    },
    //object in object
    address: {
        street: "Syof",
        number: "3"
    }
}

console.log(o3)

console.log(o3.address["number"])
console.log(o3.address.number)
const k = "number"
console.log(o3.address[k])

console.log(o3[1])

const o4 = Object.assign({}, o3) // here he create target by source
o4.fristname = "DoubleClick"
console.log(o4.fristname)
console.log(o3.fristname)


const o5 = o3; // here are two reference the same locate in memory
// o5.fristname = "Double"
// console.log(o5.fristname)
// console.log(o3.fristname)


const p1 = Object.assign({}, o3);

//deep copy
function deepCopy(obj) {
    /*
    * check if vals are objects
    * if so , copy that object (deep copy)
    * else return the value
    * */
    // Object.assign("","")
    const keys = Object.keys(obj); // save keys here
    const newObject = {}
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i] //1 ,fristname,...
        if (typeof obj[keys[i]] === "object") {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key] //1 = 1
        }
    }
    return newObject;
}

const o6 = deepCopy(o3)
o6.fristname = "GHAZZZZZY"
console.log(o6)
console.log(o3)


/*
const arr = []
arr.push("dgfbsd")
arr.toString()

//change prototype is very dengours
Number.prototype.toString = function () {
    return "200";
}

const num = 500;
console.log(num.toString())
*/
