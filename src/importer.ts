//MODULES IN ECMA SCRIPT LESSON
import * as moduleTest from './example-module/exporter.js'

let number1:number = 12;
let number2:number = 65;

const result2:number = moduleTest.add1(number1,number2);
console.log(result2)