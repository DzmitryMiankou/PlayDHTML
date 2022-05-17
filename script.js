"use strict"
const parent1 = document.getElementById("list2");
const elem1 = document.getElementById("sound1");
const elem2 = document.getElementById("sound2");
const delelem1 = document.getElementById("soundNew1");

/*Клонирование*/
const createCopy = (a,b,c) => {
let clone = a.cloneNode(true);
let list = (b);
let copy = list.append(clone);
let copeDom = document.createElement(copy);
copeDom.append(copy)
clone.removeAttribute("id");
clone.setAttribute("id",c);
clone.ondblclick = () => {
    clone.remove();
}
}
/*Активация*/
const getOnclik = (a,b,c) => {
a.onclick = () =>{
createCopy(a,b,c)};
}
/*Удаление*/

/*Значения*/
getOnclik(elem1,parent1,"soundNew1");
getOnclik(elem2, parent1,"soundNew2");

/*ondblclick - реакция на два клика*/
