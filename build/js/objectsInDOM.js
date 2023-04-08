"use strict";
//Objects used withitn the DOM
const carlos = {
    name: 'carlos',
    age: 23
};
//a destructuring example 1:
function nameCaller({ name }) {
    return '<h3>' + name + '</h3>';
}
function ageCaller({ age }) {
    return '<h3>' + age + '</h3>';
}
console.log(nameCaller(carlos));
document.body.innerHTML = nameCaller(carlos);
console.log(ageCaller(carlos));
document.body.innerHTML = ageCaller(carlos);
const worm = {
    name: 'tenia',
    legs: 0
};
function wormFunction(a) {
    //we can also make some destructuring we want in any part of the code, using the same syntax
    const { name, legs } = a;
    return `Animal name is ${name} and has ${legs} legs.`;
}
console.log(wormFunction(worm));
