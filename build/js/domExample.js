"use strict";
//Dom manipulation
const title = document.createElement('h1'); //allows us to create html elements, and we can save it into variables
title.innerText = "Hello World from typescript"; //with inner text we put text within the h1 tag
document.body.append(title); //with this we access to the boddy and we append de element.
//we can create any type of element
const button = document.createElement('button');
button.innerText = 'Yes';
document.body.append(button);
button.addEventListener('click', function () {
    title.innerText = 'Title change with a button';
    console.log('Hello world zdsfa');
    alert('event done');
});
