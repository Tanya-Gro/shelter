const petsInformation = [
    {
        "name": "Jennifer",
        "img": "./assets/slider/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "./assets/slider/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "./assets/slider/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "./assets/slider/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "./assets/slider/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "./assets/slider/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "./assets/slider/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "./assets/slider/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
];

const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('body');
const popUp_container = document.querySelector('.popUp_container');
const popUp_close = document.querySelector('.popUp_close');
const slider = document.querySelector('.slider');
const btn_left = document.querySelector('.left');
const btn_right = document.querySelector('.right');
const slider_wrapper = document.querySelector('.slider_wrapper');
// const cardSet = document.querySelectorAll('.slider-card');

/********************************************************************************* */
/************************************ slider ************************************* */
let item = [];
let randomNum = 0;
let flag = 1;

const generateCard = (petsName, path, direction = 'end') => {
    const slider_card = document.createElement('div');
    slider_card.classList.add("slider-card", "coll", "bg-light-s");
    slider_card.innerHTML = `<img class="slider-img" src="${path}" alt="${petsName}">
                        <p class="slider-p color-dark-l">${petsName}</p>
                        <button class="slider-button bg-light-s">Learn more</button>`;
    // if (direction === 'start') slider.prepend(slider_card);
    // else if (direction === '1') slider.before(slider_card);
    // else slider.appendChild(slider_card);
    // console.log(direction);
    if (direction === 'start') slider.prepend(slider_card);
    else if (direction === 'end') slider.appendChild(slider_card);
    else slider.querySelectorAll('.slider-card')[+direction].before(slider_card);

    slider_card.addEventListener('click', (event) => {
        popUp_container.classList.add('active');
        body.classList.add('active');
        generatePopUp(event.target.tagName === 'DIV' ? event.target.children[1].textContent : event.target.parentNode.children[1].textContent);
    });
}

const deleteSlider = position => {
    let cardSet = document.querySelectorAll('.slider-card');
    if (position === 'end') cardSet[8].remove();
    else cardSet[0].remove();
    // else { console.log('удаляем с начала'); cardSet[0].remove(); console.log(cardSet[0], cardSet.length); }
}

/************ enter cards ******/
for (let i = 0; i < 8; i++) {
    flag = 1;
    while (flag === 1) {
        randomNum = Math.floor(Math.random() * 8);
        if (!item.includes(randomNum) && randomNum !== 8) {
            // console.log(item, randomNum);
            item.push(randomNum);
            flag = 0;
            generateCard(petsInformation[randomNum].name, petsInformation[randomNum].img);
        }
    }
}
item.push(item[0]);
generateCard(petsInformation[item[0]].name, petsInformation[item[0]].img);

let generateLeftSet, generateRightSet = false;

const moveLeft = () => {
    // btn_left.classList.add('btn-disable');
    slider.classList.add('transition-left');
    btn_left.removeEventListener('click', moveLeft);
    btn_right.removeEventListener('click', moveRight);
    generateLeftSet = true;
}
const moveRight = () => {
    slider.classList.add('transition-right');
    btn_right.removeEventListener('click', moveRight);
    btn_left.removeEventListener('click', moveLeft);
    generateRightSet = true;
}

/***  get new per`s id ***/
const generateNewItem = exeptItems => {
    flag = 1;
    while (flag === 1) {
        randomNum = Math.floor(Math.random() * 8);
        if (!exeptItems.includes(randomNum) && randomNum !== 8) {
            flag = 0;
            return randomNum;
        }
    }
}

// /**** Галя, замена! ****/
// const changeSlides = (oldItem, newItem) => {
//     let cardSet = document.querySelectorAll('.slider-card');
//     console.log(cardSet);
//     cardSet[+oldItem].querySelector('.slider-img').setAttribute('src', petsInformation[+newItem].img);
//     cardSet[+oldItem].querySelector('.slider-img').setAttribute('alt', petsInformation[+newItem].name);
//     cardSet[+oldItem].querySelector('.slider-p').innerText = petsInformation[+newItem].name;
//     item[+oldItem] = +newItem;
// };

const refreshSlider = moveDirection => {
    // console.log('старый набор: ', item);
    let newCentralItems = [];
    let movedItems = [];
    let newRandomItems = [];
    let amountSlides = 0;

    // slider_wrapper.offsetWidth>600 =>3 slides; < 400 =>1 slides ; else 2 slides
    if (slider_wrapper.offsetWidth > 600) amountSlides = 3;
    else if (slider_wrapper.offsetWidth < 400) amountSlides = 1;
    else amountSlides = 2;
    // 
    switch (amountSlides) {
        case 1:
            if (moveDirection === 'left') {
                newRandomItems.push(generateNewItem([item[0], item[1], item[2], item[3], item[4], item[5]]));
                // console.log(newRandomItems, item[2], item[3]);
                generateCard(petsInformation[newRandomItems[0]].name, petsInformation[newRandomItems[0]].img, 2);
                deleteSlider('end');
                item.pop();
                item.unshift(newRandomItems[0]);
            }
            else {
                newRandomItems.push(generateNewItem([item[4], item[3]]));
                generateCard(petsInformation[newRandomItems[0]].name, petsInformation[newRandomItems[0]].img, 5);
                deleteSlider('start');
                item.shift();
                item.push(newRandomItems[0]);
            }
            break;
        case 2:
            if (moveDirection === 'left') {
                // console.log('старый набор: ', item);
                for (let i = 0; i < amountSlides; i++) {
                    newCentralItems.push(item[i + 1]);
                    movedItems.push(item[i + 3]);
                }
                for (let i = 0; i < amountSlides; i++) newRandomItems.push(generateNewItem([...newCentralItems, ...newRandomItems], item[0]));

                for (let i = 0; i < amountSlides; i++) {
                    item[i + 1] = newRandomItems[i];
                    generateCard(petsInformation[newRandomItems[i]].name, petsInformation[newRandomItems[i]].img, 1);
                    deleteSlider('end');
                    item[i + 3] = newCentralItems[i];
                    item[i + 5] = movedItems[i];
                }
                // console.log(item, newCentralItems, movedItems);
            }
            else {
                // console.log('старый набор: ', item);
                for (let i = 0; i < amountSlides; i++) {
                    newCentralItems.push(item[i + 5]);
                    movedItems.push(item[i + 3]);
                }
                for (let i = 0; i < amountSlides; i++)
                    newRandomItems.push(generateNewItem([...newCentralItems, ...newRandomItems, item[8], item[7]]));

                for (let i = 0; i < amountSlides; i++) {
                    deleteSlider('start');
                    generateCard(petsInformation[newRandomItems[i]].name, petsInformation[newRandomItems[i]].img, 7);
                    item[i + 1] = movedItems[i];
                    item[i + 3] = newCentralItems[i];
                    item[i + 5] = newRandomItems[i];
                }
                // console.log(item, newCentralItems, movedItems);
            }
            break;
        default:
            if (moveDirection === 'left') {
                for (let i = 0; i < 3; i++) {
                    newCentralItems.push(item[i]);
                    movedItems.push(item[i + 3]);
                }
                for (let i = 0; i < 3; i++) {
                    newRandomItems.push(generateNewItem([...newCentralItems, ...newRandomItems]));
                };
                // console.log(newCentralItems, movedItems, newRandomItems);
                for (let i = 0; i < 3; i++) {
                    item[i] = newRandomItems[i];
                    deleteSlider('end');
                    generateCard(petsInformation[newRandomItems[i]].name, petsInformation[newRandomItems[i]].img, 'start');
                    item[i + 3] = newCentralItems[i];
                    item[i + 6] = movedItems[i];
                }
                // console.log('новый набор: ', item);
            }
            else {
                for (let i = 0; i < 3; i++) {
                    newCentralItems.push(item[i + 6]);
                    movedItems.push(item[i + 3]);
                }
                for (let i = 0; i < 3; i++) {
                    newRandomItems.push(generateNewItem([...newCentralItems, ...newRandomItems]));
                };
                // console.log(newCentralItems, movedItems, newRandomItems);
                for (let i = 0; i < 3; i++) {
                    item[i] = movedItems[i];
                    item[i + 3] = newCentralItems[i];
                    item[i + 6] = newRandomItems[i];
                    deleteSlider('start');
                    generateCard(petsInformation[newRandomItems[i]].name, petsInformation[newRandomItems[i]].img, 'end');
                }
            }
    }
    // console.log('новый набор: ', item);
}

btn_left.addEventListener('click', moveLeft);
btn_right.addEventListener('click', moveRight);

slider.addEventListener('animationend', () => {
    if (generateLeftSet) {
        refreshSlider('left');
        slider.classList.remove('transition-left');
        generateLeftSet = false;
    }
    else {
        refreshSlider('right');
        slider.classList.remove('transition-right');
        generateRightSet = false;
    }
    btn_left.addEventListener('click', moveLeft);
    btn_right.addEventListener('click', moveRight);
})

/*************************************************************************** */
/************************************* burger ********************************/

const burgerClick = () => {
    navigation.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('active');
}
burger.addEventListener("click", burgerClick);

navigation.addEventListener("click", (event) => {
    // console.log(event);
    if (event.target.className === 'navigation active' || event.target.className === 'p-l color-dark-s' || event.target.className === 'p-l color-light-s') {
        navigation.classList.remove('active');
        burger.classList.remove('active');
        body.classList.remove('active');
    }
});

/*************************************************************************** */
/************************************* pop up ********************************/
// const slider_card = document.querySelectorAll('.slider-card');
// for (let i = 0; i < slider_card.length; i++) {
//     slider_card[i].addEventListener('click', (event) => {
//         popUp_container.classList.add('active');
//         body.classList.add('active');
//         generatePopUp(event.target.tagName === 'DIV' ? event.target.children[1].textContent : event.target.parentNode.children[1].textContent);
//     });
// }

popUp_container.addEventListener('click', (event) => {
    // console.log(event);
    if (event.target.className.includes('popUp_container') || event.target.className.includes('popUp_close')) {
        popUp_container.classList.remove('active');
        body.classList.remove('active');
    }
});

const generatePopUp = (petsName) => {
    // console.log(petsName.tagName);
    let petsCard = petsInformation.find((item) => item.name === petsName);
    // console.log(petsCard);
    document.querySelector('.popUp_img').alt = petsCard.name;
    document.querySelector('.popUp_img').src = petsCard.img;
    document.querySelector('.popUp_title').textContent = petsCard.name;
    document.querySelector('.popUp_subtitle').textContent = `${petsCard.type} - ${petsCard.breed}`;
    document.querySelector('.popUp_text').textContent = petsCard.description;
    document.querySelector('.popUp_description').innerHTML = `
    <li class="h-5"><span><b>Age:</b> ${petsCard.age}</span></li> 
    <li class="h-5"><span><b>Inoculations:</b> ${petsCard.inoculations.join(', ') || 'none'}</span></li> 
    <li class="h-5"><span><b>Diseases:</b> ${petsCard.diseases.join(', ') ? petsCard.diseases.join(', ') : 'none'}</span></li> 
    <li class="h-5"><span><b>Parasites:</b> ${petsCard.parasites.join(', ') ? petsCard.parasites.join(', ') : 'none'}</span></li>`;
}

/********************************************************************************* */
/************************************ myself check ******************************* */
console.log("Реализация burger menu на обеих страницах: +26");
console.log("Реализация слайдера-карусели на странице Main: +36");
console.log("Реализация пагинации на странице Pets: +36");
console.log("Реализация попап на обеих страницах: +12");

console.log("ИТОГО 110 балла");