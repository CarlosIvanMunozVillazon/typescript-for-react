console.log('Hello')

function hello (msg:string):void {
    console.log(msg)
}

hello('niggers')

const anotherFunction = (num: number):number => {
    
    let j = 0
    for(let k = 0; k < num; k++){
        j += k
    }

    return j
}


console.log(anotherFunction(100))


function andereFunk () {
    return function (){
        return 'Hello folks!'//functions can return other functions
    }
}


console.log(andereFunk()()) //returns string
console.log(andereFunk()) //returns function


function brug (a:number, b:string):string {
    
    let r:string = '';
    for(let k = 0; k < a; k++){
        r += b
    }

    return r
}


console.log(brug(12, 'rogelio'))


//Undefined test:

function add(a:number, b:number = 0):number {
    return a + b
}


console.log(add(12))


//Objects
const user = {
    name:'roger',
    age:32,
    mail: 'roger12@mail.com',
    adress: {
        country: 'Colombia',
        city:'Medellin',
        coordinates:'1234szwwegg'
    },
    friends: ['Andrea', 'Steve'],
    active:true,

    sendMail:function (){
        return 'mail sended by ' + this.name
    }
}


console.log(user.sendMail())
console.log(user['mail'])


//shorthand property names

const productName:string = 'laptop';
const productPrice:number = 12300;

const product = { //This is the other way of doing it, using the variables above
    productName, //we can just use the name of the variables above for setting object properties.
    productPrice
}

console.log(product)

//i'll continue working all my lessons from this point. Having multiple documents for this is stupid when having verision control

//ANONYMOUS FUNCTIONS:
//functions that don't need a name
function start (): string {
    return 'starting...'
}

console.log(start()) //regular function call

console.log(function(){return 'starting...'}()) //anonymous function call, remember "()" are neccesary to execute the function


//another example: , this can also be done with none anonymous functions

const button1 = document.createElement('button')
button1.innerText = 'button 1'

button1.addEventListener('click', function () {
    alert('button1 clicked')
})

document.body.append(button1)


//ARROW FUNCTIONS:

const add1 = (a:number, b:number):number => {
    return a + b
}

//equivalent regular function:
//const add1 = function () {
//
//}

//arrow functions can also be anonymous

const button2 = document.createElement('button')
button2.innerText = 'button 2'

button2.addEventListener('click', ()=> {
    alert('button with arrow anonymous function')
})

document.body.append(button2)


//INLINE ARROW FUNCTIONS

//string numero booleano arreglo objeto

const returnString = ():string => 'String returned.'
const returnNumber = ():number => 69
const returnBoolean = ():boolean => false

type anyArray = string[] | number[] | boolean[]

const returnArray = (): anyArray => ['hello', 'master', 'yoda']
const returnObject = (): object => ({name: 'gonzi', age: 34})

console.log(returnString())
console.log(returnNumber())
console.log(returnBoolean())
console.log(returnArray())
console.log(returnObject())


//STRING LITERALS
const backgroundColor1:string = 'yellow';
const textColor1:string = 'green' //we could concat this values to the props of style, which is very zzz

const validationVariable:boolean = false

const stringLiteralExample:string = `${backgroundColor1} fafafa ${textColor1}`
console.log(stringLiteralExample)

const button3 = document.createElement('button')
button3.innerText = 'button 3'
button3.style.backgroundColor = `${validationVariable ? backgroundColor1:'black'}`
button3.style.color = `${textColor1}`

document.body.append(button3)


//ARRAY METHODS

let names:string[] = ['ryan', 'vladimir', 'maria']

//traditional for
for(let k = 0; k < names.length; k++){
    console.log(names[k])
}


//for each
names.forEach(function (k) {
    k += '襣'
    console.log(k)
})


//map function
const newNames:string[] = names.map(function (name) {
    if (name === 'ryan'){
        return name
    } else {
        return '⍇'
    }
})

console.log(newNames)

//map is very useful cause allows us to modify values within the array and store those modifications in a new one
const newNames1:string[] = names.map(function (name){
    return `F*cking ${name} hello !!!`
})

console.log(newNames1)

//There are many functions within the Array class that we can use in order to iterating over an array. Another example would be
//find function

//find
const foundName:string|undefined = names.find(function (name){
    if (name === 'vladimir'){
        let h:string = `${name} putin`
        return h
    }
})

console.log(foundName)


//filter
const filteredNames:string[] = names.filter(function (name){
    if (name === 'vladimir'){
        return name
    }
})

const filteredNames1:string[] = names.filter(function (name){
    if (name !== 'vladimir'){
        return name
    }
})

console.log(filteredNames)
console.log(filteredNames1)


//concat
const anotherNames:string[] = ['antony', 'david', 'vinicius']
const anotherNames1:string[] = ['karim', 'federico']

const concatNames:string[] = anotherNames.concat(anotherNames1)

console.log(anotherNames)
console.log(anotherNames1)
console.log(concatNames)


//spread operator

const numbers:number[] = [1,2,3,45,213,35]
const numbers1:number[] = [36, 165, 65, 87]

console.log(...numbers)
console.log(...numbers, ...numbers1)

const numbers2:number[] = [...numbers, ...numbers1]

console.log(numbers2)
console.log(...numbers2)

type userTest = {
    name:string,
    lastName:string
}

type userInformationTest = {
    address: string,
    country: string
}

const user1:userTest= {
    name:'james',
    lastName:'johnson'
}

const userInformation:userInformationTest = {
    address: 'main street 456',
    country: 'peru'
}

const completeUser:object = {...user1,...userInformation}

console.log(user1)
console.log(userInformation)
console.log(completeUser)