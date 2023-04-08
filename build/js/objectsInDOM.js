"use strict";
//Objects used withitn the DOM
const carlos = {
    name: 'carlos',
    age: 23
};
//we can call object properties within the dom
function nameCaller(usr) {
    return '<h3>' + usr.name + '</h3>';
}
console.log(nameCaller(carlos));
document.body.innerHTML = nameCaller(carlos);
