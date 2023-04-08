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
button1.innerText = 'Press me'

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
