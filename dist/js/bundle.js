/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/TestCard.js":
/*!************************************!*\
  !*** ./src/js/modules/TestCard.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _submitForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submitForm */ "./src/js/modules/submitForm.js");



class TestCard {
    constructor({descr, question, value1, value2, value3, value4, deleteButton4, deleteButton34}) {
        this.descr = descr;
        this.question = question;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.deleteButton4 = deleteButton4;
        this.deleteButton34 = deleteButton34;
    }

    addTestCardButton() {
        const testCard = document.createElement('section'),
              mainContainer = document.querySelector('.main-container');
        testCard.classList.add('test-card');
        testCard.innerHTML = `
                                <div class = "container container_go-test">
                                    <div class="footer-descr__descr_blue-background"></div>
                                    <img src = "icons/triangle_blue-message.svg" alt="message__descr" 
                                        class="footer-descr__descr_triangle">
                                    <div class = "footer-descr__descr footer-descr__descr_go-test">
                                        ${this.descr}
                                    </div>
                                    <span class = "promo__line promo__line_go-test"></span>
                                    <div class = "question question_go-test">
                                        ${this.question}
                                    </div>
                                    <form action="#" name = "question_${_submitForm__WEBPACK_IMPORTED_MODULE_0__.index + 1}" 
                                                                class = "form-test form-test_go-test buttons">
                                        <div class = "button">
                                            <div class = "gradient gradient_left"></div>
                                            <button value = ${this.value1} class = "button-click">${this.value1}
                                            </button>
                                        </div>
                                        <div class = "button">
                                            <div class = "gradient gradient_left-center"></div>
                                            <button value = ${this.value2} class = "button-click">${this.value2}
                                            </button>
                                        </div>
                                        <div class = "button">
                                            <div class = "gradient gradient_right-center"></div>
                                            <button value = ${this.value3} class = "button-click">${this.value3}
                                            </button>
                                        </div>
                                        <div class = "button">
                                            <div class = "gradient gradient_right"></div>
                                            <button value = ${this.value4} class = "button-click">${this.value4}
                                            </button>
                                        </div>
                                    </form>
                                    <div class="title title_16 title_go-test">
                                        ???????????? ${_submitForm__WEBPACK_IMPORTED_MODULE_0__.index + 1}-5
                                    </div>
                                    <img src="icons/eye_go-test.png" alt="eye" class="footer-descr__img 
                                        footer-descr__img_go-test">
                                
                                    <img src="icons/circle_go-test.png" alt="circle" 
                                        class="footer-descr__img_second footer-descr__img_second_go-test">
                                </div>
                                
                            `;
        const buttons = testCard.querySelectorAll('.button'),
                deleteButton = function(numberOfButton) {
                    buttons.forEach((item, i) => {
                        if (i > numberOfButton) {
                            item.remove();
                        }
                    });
                };               
        if ( this.deleteButton4 === true) {
            deleteButton(2); 
        }
        if (this.deleteButton34 === true) {
            deleteButton(1);
        }
        mainContainer.append(testCard);
       
    }
    addTestCardList() {
        const testCard = document.createElement('section'),
              mainContainer = document.querySelector('.main-container');
        testCard.classList.add('test-card');
        testCard.innerHTML = `
                            <div class = "container container_go-test">
                                <div class = "footer-descr__descr footer-descr__descr_go-test">
                                    ${this.descr}
                                </div>
                                <span class = "promo__line promo__line_go-test"></span>
                                <div class = "question question_go-test">
                                    ${this.question}
                                </div>
                                <form action="#" name = "question_${_submitForm__WEBPACK_IMPORTED_MODULE_0__.index + 1}" 
                                                            class = "form-test form-test_go-test buttons">
                                    <div class = "button button_list">
                                        <input type = "numder" name="day" placeholder="????????" 
                                            class = "button_list-text" aria-invalid="false">

                                        <img src="icons/triangle.svg" class = "button_list-click">
                                    </div>
                                    <div class = "button button_list">
                                        <input type = "text" name="mounth" placeholder="??????????" 
                                            class = "button_list-text" aria-invalid="false">

                                        <img src="icons/triangle.svg" class = "button_list-click">
                                    </div>
                                    <div class = "button button_list">
                                        <input type = "numder" name="year" placeholder="??????" 
                                            class = "button_list-text" aria-invalid="false">

                                        <img src="icons/triangle.svg" class = "button_list-click">
                                    </div>
                                    <div class = "button">
                                            <div class = "gradient gradient_left"></div>
                                            <button value = ${this.value4} class = "button-click">${this.value4}
                                            </button>
                                    </div>
                                </form>
                                <div class="title title_16 title_go-test">
                                    ???????????? ${_submitForm__WEBPACK_IMPORTED_MODULE_0__.index + 1}-5
                                </div>
                                <img src="icons/eye_go-test.png" alt="eye" class="footer-descr__img 
                                footer-descr__img_go-test">
                                
                                <img src="icons/circle_go-test.png" alt="circle" class="footer-descr__img_second 
                                    footer-descr__img_second_go-test">
                                
                            </div>
        `;
        mainContainer.append(testCard);
    }
    addTestCardFinal() {
        const testCard = document.createElement('section'),
              mainContainer = document.querySelector('.main-container');
        testCard.classList.add('test-card');
        testCard.innerHTML = `
                            <div class = "container container_go-test">
                                <div class="footer-descr__descr_blue-background"></div>
                                <img src = "icons/triangle_blue-message.svg" alt="message__descr" 
                                    class="footer-descr__descr_triangle">
                                <div class = "footer-descr__descr footer-descr__descr_final 
                                    footer-descr__descr_go-test">
                                    ?????????????? ???? ???????? ????????????!
                                    <span>
                                        ???? ?????????????????????? ?????? ?????? 
                                        ???????????????????????? ?????????? ???????????? ?? 
                                        ?????????? ??????????????????.
                                    </span>
                                </div>
                                <div class="title title_final title_25">
                                    ???? ???????????? ????????????, ?????? ???????????????? ???? ??????????????, 
                                    ?????????????? ?????????????? ?????? ?? ?????????????????? ??????????????. 
                                </div>
                                <div class="border-final">
                                    <div class = "question question_go-test question_final">
                                        ???????????? ???????????????? ?????????????? ?????????? ?????????????????? ?????? 14.02.2021, 
                                        <span>
                                            ?????? ???????? ???????? ??????????????, ?????? ???? ?????????????????????? ???? ?????????????????? ????????????????????????.
                                        </span>
                                    </div>
                                </div>
                                <div class="title title_final title_25">
                                    ?????????????? ???? ???????????? ???????? ?????????? ???????????? ?? ???????????????? ?????? 
                                    ?????????? ????????????????. ?????????????????????? ???????????? ????????????????????!
                                </div>
                                <form action="#" name = "question_${_submitForm__WEBPACK_IMPORTED_MODULE_0__.index + 1}" class="form-test">
                                    <div class = "button">
                                        <div class = "gradient gradient_left"></div>
                                        <button class = "button-click">${this.value1}
                                        </button>
                                    </div>
                                </form>
                                <div class="output-require">
                                </div>
                                <div class="footer-descr__text footer-descr__text_final">
                                    TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. 
                                    PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, 
                                </div>
                                
                        
                            </div>
        `;
        mainContainer.append(testCard);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (TestCard);

/***/ }),

/***/ "./src/js/modules/adaptiv.js":
/*!***********************************!*\
  !*** ./src/js/modules/adaptiv.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ "./src/js/modules/test.js");




function adaptiv() {
    const eye = document.querySelector('.footer-descr__img'),
          eyeImg = document.querySelector('.footer-descr__img img');

    if (document.documentElement.clientWidth <= 1650 && document.documentElement.clientWidth > 576) {
        eye.src = "icons/eye.png";
        const i = document.documentElement.clientWidth - (187 + 407/2 + 
        document.documentElement.clientWidth/2);
        eye.style.left = `${i + 407}px`; 
    }
    
    const hands = document.querySelector('.information__descr img'),
          icon3 = document.querySelector('.footer-descr__img_second img');

    if (document.documentElement.clientWidth <= 576) {
        hands.src = "img/hands.svg";
        eyeImg.src = "icons/eye_mobile.svg";
        icon3.src = "icons/icon3_mobile.svg";
    }
   
}

/* harmony default export */ __webpack_exports__["default"] = (adaptiv);

/***/ }),

/***/ "./src/js/modules/buttons.js":
/*!***********************************!*\
  !*** ./src/js/modules/buttons.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _submitForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submitForm */ "./src/js/modules/submitForm.js");




function buttons({wrapperSelector, button, click, effect}) {

    const wrapperButtons = document.querySelector(wrapperSelector);


    


    //?????????????? ???? ???????????? ?????? ????????????, ???? ?????????????? ???????????? ?? ????????????????

    function scroll(item, event) {
        event.preventDefault();
        const blockID = item.getAttribute('href').substr(1);

        document.querySelector(`#${blockID}`).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });  
    }

    wrapperButtons.addEventListener('click', (event) => {
            const buttonClick = document.querySelectorAll(click);
            if (event.target && event.target.matches('.button-click')) {
                buttonClick.forEach((item) => {
                    if (event.target === item && item.localName === "a") {
                        scroll(item, event);
                    }
                }); 
            }
        });
     

    //?????????????????? ???????? ???? ????????????

    if (document.documentElement.clientWidth >= 1440) {

        let hoverButton = function (eventHover, evenNumber, oddNumber, hoverColor) {
            wrapperButtons.addEventListener(eventHover, (event) => {
                const buttonClick = document.querySelectorAll(click),
                      gradient = document.querySelectorAll(effect);
                if (event.target && event.target.matches('.button-click')) {
                    buttonClick.forEach((item, i) => {
                        if (event.target === item) {
                            if (_submitForm__WEBPACK_IMPORTED_MODULE_0__.index !== 1 && _submitForm__WEBPACK_IMPORTED_MODULE_0__.index !== 3) {
                                if (i % 2 === 0) {
                                    gradient[i].style.transform = evenNumber;
                                }
                                else {
                                    gradient[i].style.transform = oddNumber;
                                } 
                            } else {
                                item.style.color = hoverColor;
                            }
                        }
                    });  
                }
            });  
        };
        
            hoverButton("mouseover", "translate(0%)", "translate(-100%)", "#000");
            hoverButton("mouseout", "translate(-100%)", "translate(0%)", "#fff");
        
    }
}

/* harmony default export */ __webpack_exports__["default"] = (buttons);


/***/ }),

/***/ "./src/js/modules/submitForm.js":
/*!**************************************!*\
  !*** ./src/js/modules/submitForm.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "index": function() { return /* binding */ index; }
/* harmony export */ });
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ "./src/js/modules/test.js");
/* harmony import */ var _TestCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestCard */ "./src/js/modules/TestCard.js");




let index = 0;
const submitForm = function() {
    const mainContainer = document.querySelector('.main-container'),
          form = document.querySelector('.form-test');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(index < 5) {
            
            if (index === 2) {
                //???????????????? ???????????? ?????????? ???? ???????????? 3 ??????????????
                const formData = new FormData(form);

                const object = {};

                formData.forEach(function(value, key) {
                    object[key] = value;
                });
                const arr = [];
                (0,_test__WEBPACK_IMPORTED_MODULE_0__.postData)('http://localhost:3000/requests', JSON.stringify(object))
                .then(data => {
                    for (let x in data) {
                        if (data[x] === "????????????" || data[x] === "????????????") {
                            arr.push("0");
                        } else if (data[x] === "??????????????" || data[x] === "??????????????") {
                            arr.push("1");
                        } else if (data[x] === "????????" || data[x] === "????????") {
                            arr.push("2");
                        } else if (data[x] === "????????????" || data[x] === "????????????") {
                            arr.push("3");
                        } else if (data[x] === "??????" || data[x] === "??????") {
                            arr.push("4");
                        } else if (data[x] === "????????" || data[x] === "????????") {
                            arr.push("5");
                        } else if (data[x] === "????????" || data[x] === "????????") {
                            arr.push("6");
                        } else if (data[x] === "????????????" || data[x] === "????????????") {
                            arr.push("7");
                        } else if (data[x] === "????????????????" || data[x] === "????????????????") {
                            arr.push("8");
                        } else if (data[x] === "??????????????" || data[x] === "??????????????") {
                            arr.push("9");
                        } else if (data[x] === "????????????" || data[x] === "????????????") {
                            arr.push("10");
                        } else if (data[x] === "??????????????" || data[x] === "??????????????") {
                            arr.push("11");
                        } else {
                            arr.push(data[x]);
                        } 
                    }
                    const age = new Date(arr[2], arr[1], arr[0]);
                    let now = new Date();
                    const descr1 = {descr: `???? ?????? ?????????????? ?????????? ?????????????? ??????????????, 
                    ???????????????? ???????????? ?????? ?? ???????? ??????????.`};
                    const descr2 = {descr: `???? ?????? ?????????????? ?????????? ?????????????? ??????????????, 
                    ???????????????? ???????????? ?????? ?? ???????? ??????????. ???????????????? ?????? ?????????????? ?????? ??????????????.`};
                    const descr3 = {descr: `???? ?????? ?????????????? ?????????? ?????????????? ??????????????, 
                    ???????????????? ???????????? ?????? ?? ???????? ??????????. ???????????????? ?????? ??????-???? ???? ?????????? ??????????????????.`};
                    const diference = (now - age)/1000/3600/24/365.25;

                    if(diference >= 18 && diference <= 35) {
                        (0,_test__WEBPACK_IMPORTED_MODULE_0__.postData)('http://localhost:3000/descr', JSON.stringify(descr1));  
                    } else if (diference >= 36 && diference <= 45 ) {
                        (0,_test__WEBPACK_IMPORTED_MODULE_0__.postData)('http://localhost:3000/descr', JSON.stringify(descr2));
                    } else if (diference >= 46) {
                        (0,_test__WEBPACK_IMPORTED_MODULE_0__.postData)('http://localhost:3000/descr', JSON.stringify(descr3));
                    }
                });
                
                
            }
            //?????????????????? ?????????????? ?????? ???????????????? ?????????? ????????????????
            const loadSpinner = document.createElement('img');
            loadSpinner.src = "icons/spinner.svg";
            loadSpinner.classList.add('spinner');
            mainContainer.innerHTML = "";
            mainContainer.append(loadSpinner);
            index++;
            
            //?????????????? ???? ???????????? ?????? ?????????????????? ?????????? ????????????????
            (0,_test__WEBPACK_IMPORTED_MODULE_0__.getResurs)('http://localhost:3000/testCards')
            .then (data => data.forEach(({descr, question}, i) => {

                if (index === 1 && i === 0) {
                    //?????????????????? ?????????????? ??????????????
                    new _TestCard__WEBPACK_IMPORTED_MODULE_1__.default({descr, question,  
                        value1: "????????",
                        value2: "????????",
                        value3: "??????????", 
                        value4: "????????",
                    }).addTestCardButton();
                } else if (index === 2 && i === 1) {
                    //?????????????????? 3 ??????????????
                    new _TestCard__WEBPACK_IMPORTED_MODULE_1__.default({descr, question,  
                        
                        value4: "??????????"
                    }).addTestCardList(); 
                    const inputs = document.querySelectorAll('.button_list-text'),
                          buttonList = document.querySelectorAll('.button_list');
                    inputs.forEach((item, i) => {
                        item.oninput = function() {
                            buttonList[i].classList.remove('button_red-border');
                        };
                    });
                } else if (index === 3 && i === 2) {
                    //?????????????????? 4 ??????????????
                    new _TestCard__WEBPACK_IMPORTED_MODULE_1__.default({descr, question,
                        value1: "????",
                        value2: "??????",
                        value3: "????????????",
                        deleteButton4: true
                    }).addTestCardButton();
                } else if (index === 4 && i === 3) {
                    //?????????????????? 5 ??????????????
                    new _TestCard__WEBPACK_IMPORTED_MODULE_1__.default({descr, question,
                        value1: "????",
                        value2: "?????????????????????? ????????????????",
                        deleteButton34: true
                    }).addTestCardButton();
                    document.querySelector('.footer-descr__descr_blue-background').style.display = "block";
                    document.querySelector('.footer-descr__descr_triangle').style.display = "block";
                    document.querySelector('.footer-descr__descr_go-test').style.color = "#000";
                    const gradient = document.querySelector('.gradient_left-center'),
                          title = document.querySelector('.footer-descr__descr_go-test');
                    (0,_test__WEBPACK_IMPORTED_MODULE_0__.getResurs)('http://localhost:3000/descr')
                    .then(data => {
                        data.forEach((item, i) => {
                            if (i === data.length-1) {
                                title.textContent = item.descr;
                            }
                        });
                    });
                    gradient.classList.remove('gradient_left-center');
                    gradient.classList.add('gradient_right');
                } else if (index === 5 && i === 0){
                    //?????????????????? ???????????????????? ????????????
                    new _TestCard__WEBPACK_IMPORTED_MODULE_1__.default({value1: "?????????????????? ?? ????????????????????"}).addTestCardFinal();
                    document.querySelector('.footer-descr__descr_blue-background').style.display = "block";
                    document.querySelector('.footer-descr__descr_triangle').style.display = "block";
                    document.querySelector('.footer-descr__descr_go-test').style.color = "#000";
                    document.querySelector('.footer-descr__text').style.display = "block";
                    document.querySelector('.button').style.background =
                    `linear-gradient(90deg, rgba(76, 217, 100, 0.9) -6.2%, rgba(50, 185, 73, 0.9) 100%)`;
                }
            
            }))
            .catch (() => {
                const messageError = document.createElement('div');
                messageError.style.cssText = `
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                `;
                messageError.textContent = "??????-???? ?????????? ???? ??????";
                mainContainer.append(messageError);
            })
            .finally(() => {
                loadSpinner.remove();
                if (index > 0 && index < 5 && document.documentElement.clientWidth <= 576) {
                    let eye = document.querySelector('.footer-descr__img_go-test'),
                        icon3 = document.querySelector('.footer-descr__img_second_go-test');
                    eye.src = "icons/eye_mobile.svg";
                    icon3.src = "icons/icon3_mobile.svg";
                    eye.style.left = `${document.documentElement.clientWidth - 11 - 60}px`;
                }
            });
            
        } else if (index === 5) {
            //?????????????? ?????????????? ???????????? ???? ?????????????????? ????????????
            const outPut = document.querySelector('.output-require');

            (0,_test__WEBPACK_IMPORTED_MODULE_0__.getResurs)('https://swapi.dev/api/people/1/')
            .then(data => {
                for( let x in data) {
                    const y = document.createElement('div');
                    y.textContent = data[x];
                    outPut.append(y); 
                }   
                const y = document.createElement('button');
                y.classList.add('read');
                y.textContent = "???????????? ??????????";
                outPut.insertAdjacentElement('afterend', y); 
                let z = 1;
                y.addEventListener('click', ()=> {
                    ++z;
                    outPut.classList.toggle('output-require_active');
                    if (z%2) {
                        y.textContent = "???????????? ??????????";
                    } else {
                       y.textContent = "????????????"; 
                    }
                }); 
                index++;
            });
            
        } else if (index === 6){
            e.preventDefault();
        }
        
    });
    
};

/* harmony default export */ __webpack_exports__["default"] = (submitForm);

/***/ }),

/***/ "./src/js/modules/test.js":
/*!********************************!*\
  !*** ./src/js/modules/test.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResurs": function() { return /* binding */ getResurs; },
/* harmony export */   "postData": function() { return /* binding */ postData; }
/* harmony export */ });
/* harmony import */ var _TestCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestCard */ "./src/js/modules/TestCard.js");
/* harmony import */ var _submitForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submitForm */ "./src/js/modules/submitForm.js");






const getResurs = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw Error (`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
};

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    
    return await res.json();
};

function test () {


    function validForm() {
        const form = document.querySelector('.form-test');
        form.addEventListener('submit', (e)=> {
            e.preventDefault();
            const buttons = document.querySelectorAll('.button_list'),
                  inputs = document.querySelectorAll('.button_list-text');    
            inputs.forEach((item, i) => {
                if (inputs[0].value > 28 && (inputs[1].value === "??????????????" || inputs[1].value === "??????????????")) {
                    buttons[0].classList.add('button_red-border'); 
                }
                 else if (item.value === "" || inputs[0].value > 31 || 
                inputs[1].value > 11 ||
                inputs[2].value > 2016 || inputs[2].value < 1940) {
                   
                    buttons[i].classList.add('button_red-border');
                } 
            });
        });
    }

    

    

    function closeButtonClick() {
        const list = document.querySelectorAll(".list");
        list.forEach(item => {
            item.remove();
        });
    }

    const wrapperButtons = document.querySelector("body");
    

    wrapperButtons.addEventListener('click', (event) => {
        const buttonClick = document.querySelectorAll(".button-click");
        if (event.target && event.target.matches('.button-click')) {
            buttonClick.forEach((item) => {
                if (event.target === item && item.localName === "button") {
                    let validForms;
                    const requiredForms = function () {
                        let inputs = document.querySelectorAll(".button_list-text");
                        inputs.forEach(item => {
                            if (item.value === "" || inputs[0].value > 31 || 
                            (inputs[0].value > 28 && (inputs[1].value === "??????????????" || inputs[1].value === "??????????????"))||
                             inputs[1].value > 11 ||
                                inputs[2].value > 2016 || inputs[2].value < 1940) {
                                validForms = false;
                            }
                        });
                    };
                    requiredForms();
                    
                    if(validForms === false) {
                        validForm();
                    } else {
                        (0,_submitForm__WEBPACK_IMPORTED_MODULE_1__.default)();  
                    }
                           
                }
            });  
        } 
    });
    //?????????????? ???? ???????? ???? ?????????????? ?????????? ?? ??????????
    wrapperButtons.addEventListener('click', (event)=> {
        if (event.target && event.target.matches("li")) {
            const button = document.querySelector('ul').previousElementSibling;
            button.childNodes[1].value = event.target.textContent;
            let inputs = document.querySelectorAll(".button_list-text");
                        inputs.forEach(item => {
                            if (item.value === "" || inputs[0].value > 31 || 
                            (inputs[0].value > 28 && (inputs[1].value === "??????????????" || inputs[1].value=== "??????????????"))|| 
                            inputs[1].value >
                                inputs[2].value > 2016 || inputs[2].value < 1940) {
                                button.classList.remove('button_red-border');
                            }
                        });
            
            closeButtonClick();
        }
    });
    //?????????????? ???? ???????????? ?????????????????????? ???????? ?? ??????????
    wrapperButtons.addEventListener('click', (event) => {
        const buttonListClick = document.querySelectorAll(".button_list-click");
        if (event.target && event.target.matches('.button_list-click')) {
            buttonListClick.forEach((item, i) => {
                
                if (event.target === item && event.target.matches('.active')) {
                    item.classList.remove("active");
                    closeButtonClick();
                }
                else if (event.target === item) {
                    closeButtonClick();
                    item.classList.add("active");
                    const list = document.createElement('ul');
                    list.classList.add('list');
                    switch (i) {
                        case 0: list.innerHTML = `<li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li>
                            <li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li>
                            <li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li>
                            <li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li>
                            <li>31</li>`;
                            break;
                        case 1 : list.innerHTML = `<li value="0">????????????</li><li value="1">??????????????</li>
                            <li value="2">????????</li><li value="3">????????????</li><li value = "4">??????</li>
                            <li value="5">????????</li><li value="6">????????</li><li value="7">????????????</li>
                            <li value="8">????????????????</li><li value="9">??????????????</li><li value="10">????????????</li>
                            <li value="11">??????????????</li>`; 
                            break;
                        case 2 : list.innerHTML = `<li>2010</li><li>2009</li><li>2008</li><li>2007</li><li>2006</li>
                            <li>2005</li><li>2004</li><li>2003</li><li>2002</li><li>2001</li><li>2000</li><li>1999</li>
                            <li>1998</li><li>1997</li><li>1996</li><li>1995</li><li>1994</li><li>1993</li><li>1992</li>
                            <li>1991</li><li>1990</li><li>1989</li><li>1988</li><li>1987</li><li>1986</li><li>1985</li>
                            <li>1984</li><li>1983</li><li>1982</li><li>1981</li><li>1980</li><li>1979</li><li>1978</li>
                            <li>1977</li><li>1976</li><li>1975</li><li>1974</li><li>1973</li><li>1972</li><li>1971</li>
                            <li>1970</li><li>1969</li><li>1968</li><li>1967</li><li>1966</li><li>1965</li><li>1964</li>
                            <li>1963</li><li>1962</li><li>1961</li><li>1960</li><li>1959</li><li>1958</li><li>1957</li>
                            <li>1956</li><li>1955</li><li>1954</li><li>1953</li><li>1952</li><li>1951</li><li>1950</li>
                            <li>1949</li><li>1948</li><li>1947</li><li>1946</li><li>1945</li><li>1944</li><li>1943</li>
                            <li>1942</li><li>1941</li><li>1940</li>`;
                            break;
                    }  
                    item.parentElement.after(list);
                }
            });  
        } 
    });
    
}

/* harmony default export */ __webpack_exports__["default"] = (test);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_adaptiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/adaptiv */ "./src/js/modules/adaptiv.js");
/* harmony import */ var _modules_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/test */ "./src/js/modules/test.js");
/* harmony import */ var _modules_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/buttons */ "./src/js/modules/buttons.js");



// import {index} from "./modules/test";




window.addEventListener("DOMContentLoaded", ()=> {
    (0,_modules_adaptiv__WEBPACK_IMPORTED_MODULE_0__.default)();
    (0,_modules_buttons__WEBPACK_IMPORTED_MODULE_2__.default)({wrapperSelector:"body", button:".button", click:".button-click", effect: ".gradient"});
    (0,_modules_test__WEBPACK_IMPORTED_MODULE_1__.default)();
});

}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map