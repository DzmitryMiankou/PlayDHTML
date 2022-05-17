"use strict"
let parent = document.getElementById("listT");
let elem = document.querySelector(".sound12");

/*Функция, создающая клон*/
let createCopy = (a,b) => {
let clone = a.cloneNode(true);
let list = (b);
let item = document.createElement(list.appendChild(clone));
}
/*Вызова функции*/
document.getElementById("sound2").onclick = () =>{
createCopy(elem, parent)};