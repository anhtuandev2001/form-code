const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let toogleElement = (element,className) => {
    $(element).classList.toggle(className);
}