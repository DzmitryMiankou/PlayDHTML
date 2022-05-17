"use strict"
const parent1 = document.getElementById("list2");
const elem1 = document.getElementById("sound1");
const elem2 = document.getElementById("sound2");
const elem3 = document.getElementById("sound3");
const elem4 = document.getElementById("sound4");
const elem5 = document.getElementById("sound5");

/*Клонирование и Удаление*/
const createCloneDelCopy = (a,b,c) => {
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
createCloneDelCopy(a,b,c)};
}

/*Значения*/
getOnclik(elem1, parent1,"soundNew1");
getOnclik(elem2, parent1,"soundNew2");
getOnclik(elem3, parent1,"soundNew3");
getOnclik(elem4, parent1,"soundNew4");
getOnclik(elem5, parent1,"soundNew5");

