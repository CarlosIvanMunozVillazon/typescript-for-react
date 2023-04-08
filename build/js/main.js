"use strict";
console.log('Hello');
function hello(msg) {
    console.log(msg);
}
hello('niggers');
const anotherFunction = (num) => {
    let j = 0;
    for (let k = 0; k < num; k++) {
        j += k;
    }
    return j;
};
console.log(anotherFunction(100));
function andereFunk() {
    return function () {
        return 'Hello folks!'; //functions can return other functions
    };
}
console.log(andereFunk()()); //returns string
console.log(andereFunk()); //returns function
function brug(a, b) {
    let r = '';
    for (let k = 0; k < a; k++) {
        r += b;
    }
    return r;
}
console.log(brug(12, 'rogelio'));
//Undefined test:
function add(a, b = 0) {
    return a + b;
}
console.log(add(12));
//Objects
const user = {
    name: 'roger',
    age: 32,
    mail: 'roger12@mail.com',
    adress: {
        country: 'Colombia',
        city: 'Medellin',
        coordinates: '1234szwwegg'
    },
    friends: ['Andrea', 'Steve'],
    active: true,
    sendMail: function () {
        return 'mail sended by ' + this.name;
    }
};
console.log(user.sendMail());
console.log(user['mail']);
//shorthand property names
const productName = 'laptop';
const productPrice = 12300;
const product = {
    productName,
    productPrice
};
console.log(product);
//i'll continue working all my lessons from this point. Having multiple documents for this is stupid when having verision control
