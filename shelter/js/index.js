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

/********************************************************************************* */
/************************************ slider ************************************* */
let item = [];
let randomNum = 0;
let flag = 1;

const generateCard = (petsName, path) => {
    const slider_card = document.createElement('div');
    slider_card.classList.add("slider-card", "coll", "bg-light-s");
    slider_card.innerHTML = `<img class="slider-img" src="${path}" alt="${petsName}">
                        <p class="slider-p color-dark-l">${petsName}</p>
                        <button class="slider-button bg-light-s">Learn more</button>`;
    slider.appendChild(slider_card);
}

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

// console.log(item);
let generateLeftSet, generateRightSet = false;
const moveLeft = () => {
    // btn_left.classList.add('btn-disable');
    slider.classList.add('transition-left');
    btn_left.removeEventListener('click', moveLeft);
    generateLeftSet = true;
}
const moveRight = () => {
    slider.classList.add('transition-right');
    btn_right.removeEventListener('click', moveRight);
    generateRightSet = true;
}

btn_left.addEventListener('click', moveLeft);
btn_right.addEventListener('click', moveRight);

slider.addEventListener('animationend', () => {
    if (generateLeftSet) {
        slider.classList.remove('transition-left');
        btn_left.addEventListener('click', moveLeft);
        generateLeftSet = false;
    }
    else {
        // if (generateRightSet) 
        slider.classList.remove('transition-right');
        btn_right.addEventListener('click', moveRight);
        generateRightSet = false;
    }
    // btn_right.classList.remove('btn-disable');
    // btn_left.classList.remove('btn-disable');
})

/*************************************************************************** */
/************************************* burger ********************************/
burger.addEventListener("click", () => burgerClick());

navigation.addEventListener("click", (event) => {
    // console.log(event);
    if (event.target.className === 'navigation active' || event.target.className === 'p-l color-dark-s' || event.target.className === 'p-l color-light-s') {
        navigation.classList.remove('active');
        burger.classList.remove('active');
        body.classList.remove('active');
    }
});

const burgerClick = () => {
    navigation.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('active');
}

/*************************************************************************** */
/************************************* pop up ********************************/
const slider_card = document.querySelectorAll('.slider-card');
for (let i = 0; i < slider_card.length; i++) {
    slider_card[i].addEventListener('click', (event) => {
        popUp_container.classList.add('active');
        body.classList.add('active');
        generatePopUp(event.target.tagName === 'DIV' ? event.target.children[1].textContent : event.target.parentNode.children[1].textContent);
    });
}

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
// console.log("Реализация слайдера-карусели на странице Main: +36");
// console.log("Реализация пагинации на странице Pets: +36");
console.log("Реализация попап на обеих страницах: +12");

console.log("ИТОГО 38 балла");