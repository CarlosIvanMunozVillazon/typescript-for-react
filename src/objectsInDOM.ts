//Objects used withitn the DOM

type user = {
    name: string,
    age: number
}

const carlos:user = {
    name: 'carlos',
    age: 23
}

//we can call object properties within the dom

function nameCaller (usr:user): string{
    return '<h3>' + usr.name + '</h3>'
}

console.log(nameCaller(carlos))
document.body.innerHTML = nameCaller(carlos)