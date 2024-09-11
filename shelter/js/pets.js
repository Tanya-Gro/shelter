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

/*************************************************************************** */
/************************************* burger ********************************/
burger.addEventListener("click", () => burgerClick()
);

navigation.addEventListener("click", (event) => {
    // console.log(event.target.classList.value);
    if (event.target.classList.value === 'navigation active' || event.target.classList.value === 'p-l color-dark-l' || event.target.classList.value === 'p-l color-dark-3xl') burgerClick();
});

const burgerClick = () => {
    navigation.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('active');
}

/*************************************************************************** */
/************************************* pop up ********************************/
const friend_card = document.querySelectorAll('.friend-card');
for (let i = 0; i < friend_card.length; i++) {
    friend_card[i].addEventListener('click', (event) => {
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

/*********************************************************************************** */
/****************************** pagination ******************************/
/***  get new per`s id ***/
let flag = 0;
const generateNewItem = (exeptItems = []) => {
    flag = 1;
    while (flag === 1) {
        randomNum = Math.floor(Math.random() * 8);
        // console.log(randomNum, exeptItems, exeptItems.includes(randomNum));
        if (!exeptItems.includes(randomNum) && randomNum !== 8) {
            flag = 0;
            return randomNum;
        }
    }
}

let paggination = [];
let pagginationCol = [];
let pages = 6;
let pageId = 1;
let countCardsOnPage = 8;
// let exeptArray = [];
// let RN = 1;

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
        pagginationCol.push(generateNewItem(pagginationCol));
        // pagginationCol.push(RN);
        // exeptArray.push(RN);
    }
    paggination.push([...pagginationCol]);
    pagginationCol.length = 0;
}
// console.log(paggination);

/****************************************************** */
/********** pagination ******************************** */
const leftAtAll = document.querySelectorAll('.button-group .round-button')[0];
const stepOnLeft = document.querySelectorAll('.button-group .round-button')[1];
const numberButton = document.querySelectorAll('.button-group .round-button')[2];
const stepOnRight = document.querySelectorAll('.button-group .round-button')[3];
const rightAtAll = document.querySelectorAll('.button-group .round-button')[4];

// console.log(numberButton);
const checkPushedButtons = (event) => {
    const ButtonName = event.target.innerText;
    // console.log(ButtonName);
    switch (ButtonName) {
        case '>':
            // console.log('шаг вправо');
            console.log(pageId, pages);
            pageId = pageId + 1;
            if (pageId === 2) leftOn();
            if (pageId === pages) rightOff();
            break;
        case '>>':
            // console.log('до упора вправо');
            if (pageId === 1) leftOn();
            pageId = pages;
            rightOff();
            // console.log(pageId, pages);
            break;
        case '<':
            // console.log('шаг влево');
            pageId = pageId - 1;
            if (pageId === 1) leftOff();
            if (pageId === (pages - 1)) rightOn();
            break;
        case '<<':
            // console.log('до упора влево');
            if (pageId === 6) rightOn();
            pageId = 1;
            leftOff();
            // console.log(pageId, pages);
            break;
        default: console.log('Роджер Всегда Не Туда');
    }
    numberButton.innerText = ` ${pageId} `;
    refreshPage();
};
const leftOn = () => {
    leftAtAll.classList.add('on');
    stepOnLeft.classList.add('on');
    leftAtAll.classList.remove('off');
    stepOnLeft.classList.remove('off');
    // addEventPagination();
    leftAtAll.addEventListener('click', checkPushedButtons);
    stepOnLeft.addEventListener('click', checkPushedButtons);
}

const leftOff = () => {
    leftAtAll.classList.remove('on');
    stepOnLeft.classList.remove('on');
    leftAtAll.classList.add('off');
    stepOnLeft.classList.add('off');

    leftAtAll.removeEventListener('click', checkPushedButtons);
    stepOnLeft.removeEventListener('click', checkPushedButtons);
}

const rightOn = () => {
    stepOnRight.classList.add('on');
    rightAtAll.classList.add('on');
    stepOnRight.classList.remove('off');
    rightAtAll.classList.remove('off');
    stepOnRight.addEventListener('click', checkPushedButtons);
    rightAtAll.addEventListener('click', checkPushedButtons);
};

const rightOff = () => {
    stepOnRight.classList.remove('on');
    rightAtAll.classList.remove('on');
    stepOnRight.classList.add('off');
    rightAtAll.classList.add('off');
    stepOnRight.removeEventListener('click', checkPushedButtons);
    rightAtAll.removeEventListener('click', checkPushedButtons);
};

const cardSet = document.querySelectorAll('.friend-card');

const refreshPage = () => {
    for (let i = 0; i < countCardsOnPage; i++) {
        // console.log(paggination[pageId - 1][i]);
        // console.log(petsInformation[paggination[pageId - 1][i]].img);
        cardSet[i].querySelector('.friend-img').setAttribute('src', petsInformation[paggination[pageId - 1][i]].img);
        cardSet[i].querySelector('.friend-img').setAttribute('alt', petsInformation[paggination[pageId - 1][i]].name);
        cardSet[i].querySelector('.friend-p').innerText = petsInformation[paggination[pageId - 1][i]].name;
    }
};

const addEventPagination = () => {
    const buttonSet = document.querySelectorAll('.on');
    for (let i = 0; i < buttonSet.length; i++)
        buttonSet[i].addEventListener('click', checkPushedButtons);
}

addEventPagination();
