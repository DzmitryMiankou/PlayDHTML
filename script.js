"use strict"
/*dblclick  - событие двойного клика*/ 
const getCopy = document.getElementById("sound1").onclick = () => {
 let parent = document.getElementById('sound1');
 let elem = parent.querySelector('.sound11');
 let clone = elem.cloneNode(true);
 parent.appendChild(clone);
    } 
