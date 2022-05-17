"use strict"
const parent1 = document.getElementById("list2");
const elem1 = document.getElementById("sound1");
const elem2 = document.getElementById("sound2");

/*Функция, создающая клон*/
const createCopy = (a,b) => {
let clone = a.cloneNode(true);
let list = (b);
let thisClone = document.createElement(list.appendChild(clone));
}
/*ondblclick - реакция на два клика*/
/*Вызова функции*/
document.getElementById("sound1").onclick = () =>{
createCopy(elem1, parent1)};
document.getElementById("sound2").onclick = () =>{
createCopy(elem2, parent1)};