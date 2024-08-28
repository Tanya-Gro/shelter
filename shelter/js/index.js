const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('body');

burger.addEventListener("click", () => burgerClick()
);

navigation.addEventListener("click", (event) => {
    // console.log(event.target.classList.value);
    if (event.target.classList.value === 'navigation active' || event.target.classList.value === 'p-l color-dark-s' || event.target.classList.value === 'p-l color-light-s') burgerClick();
});

const burgerClick = () => {
    navigation.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('active');
}


console.log("Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14");
console.log("блок < header >: +2");
console.log("блок Not only: +2");
console.log("блок About: +2");
console.log("блок Our Friends: +2");
console.log("блок Help: +2");
console.log("блок In addition: +2");
console.log("блок < footer >: +2");
console.log("Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14");
console.log("блок < header >: +2");
console.log("блок Not only: +2");
console.log("блок About: +2");
console.log("блок Our Friends: +2");
console.log("блок Help: +2");
console.log("блок In addition: +2");
console.log("блок < footer >: +2");
console.log("Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14");
console.log("блок < header >: +2");
console.log("блок Not only: +2");
console.log("блок About: +2");
console.log("блок Our Friends: +2");
console.log("блок Help: +2");
console.log("блок In addition: +2");
console.log("блок < footer >: +2");
console.log("Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля.Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20");
console.log("нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх: +5");
console.log("нет полосы прокрутки при ширине страницы Main от 768рх до 320рх: +5");
console.log("Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции(Примеры неправильной и правильной реализации): +8");
console.log("на странице Main: +4");

console.log("ИТОГО 62 балла");