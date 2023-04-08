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

const product = { //This is one way of doing it without using the variables above.
    productName: 'laptop',
    productPrice: 12300
}

console.log(product)