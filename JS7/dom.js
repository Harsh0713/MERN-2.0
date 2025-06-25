let main = document.getElementById('main');
console.log(main);

let nav = document.getElementById('nav');
console.log(nav);

let container = document.getElementsByClassName('container');
console.log(container);

let select = document.querySelector('#nav');
console.log("Selector returns: "+select);

let select2 = document.querySelectorAll('#nav>li');
console.log("Selector returns: "+select2);