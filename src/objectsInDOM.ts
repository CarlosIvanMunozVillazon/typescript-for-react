//Objects used withitn the DOM

type user = {
    name: string,
    age: number
}

const carlos:user = {
    name: 'carlos',
    age: 23
}

//a destructuring example 1:
function nameCaller ({name}:user): string{ //this means that i'll only take the name property of an "user" type object
    return '<h3>' + name + '</h3>'
}


function ageCaller ({age}:user): string{ //this means that i'll only take the age property of an "user" type object
    return '<h3>' + age + '</h3>'
}

console.log(nameCaller(carlos))
document.body.innerHTML = nameCaller(carlos)

console.log(ageCaller(carlos))
document.body.innerHTML = ageCaller(carlos)


// document.body.innerHTML = ageCaller(carlos) and document.body.innerHTML = nameCaller(carlos): this ones do not function at
//the same time.

//destructuring example 2:

type animal = {
    [index: string]:string | number;
    name: string,
    legs: number
}


const worm:animal = {
    name: 'tenia',
    legs: 0
}


function wormFunction(a:animal):string {
    //we can also make some destructuring we want in any part of the code, using the same syntax
    const {name, legs} = a;

    return `Animal name is ${name} and has ${legs} legs.`

}

console.log(wormFunction(worm));
