"use strict";
import {getResurs, postData} from "./test";
import TestCard from "./TestCard";

let index = 0;
const submitForm = function() {
    const mainContainer = document.querySelector('.main-container'),
          form = document.querySelector('.form-test');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(index < 5) {
            
            if (index === 2) {
                //Отправка данных формы на сервер 3 вопроса
                const formData = new FormData(form);

                const object = {};

                formData.forEach(function(value, key) {
                    object[key] = value;
                });
                const arr = [];
                postData('http://localhost:3000/requests', JSON.stringify(object))
                .then(data => {
                    for (let x in data) {
                        if (data[x] === "Январь" || data[x] === "январь") {
                            arr.push("0");
                        } else if (data[x] === "Февраль" || data[x] === "февраль") {
                            arr.push("1");
                        } else if (data[x] === "Март" || data[x] === "март") {
                            arr.push("2");
                        } else if (data[x] === "Апрель" || data[x] === "апрель") {
                            arr.push("3");
                        } else if (data[x] === "Май" || data[x] === "май") {
                            arr.push("4");
                        } else if (data[x] === "Июнь" || data[x] === "июнь") {
                            arr.push("5");
                        } else if (data[x] === "Июль" || data[x] === "июль") {
                            arr.push("6");
                        } else if (data[x] === "Август" || data[x] === "август") {
                            arr.push("7");
                        } else if (data[x] === "Сентябрь" || data[x] === "сентябрь") {
                            arr.push("8");
                        } else if (data[x] === "Октябрь" || data[x] === "октябрь") {
                            arr.push("9");
                        } else if (data[x] === "Ноябрь" || data[x] === "ноябрь") {
                            arr.push("10");
                        } else if (data[x] === "Декабрь" || data[x] === "декабрь") {
                            arr.push("11");
                        } else {
                            arr.push(data[x]);
                        } 
                    }
                    const age = new Date(arr[2], arr[1], arr[0]);
                    let now = new Date();
                    const descr1 = {descr: `По вам скучает очень близкий человек, 
                    которого больше нет в мире живых.`};
                    const descr2 = {descr: `По вам скучает очень близкий человек, 
                    которого больше нет в мире живых. Возможно это дедушка или бабушка.`};
                    const descr3 = {descr: `По вам скучает очень близкий человек, 
                    которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.`};
                    const diference = (now - age)/1000/3600/24/365.25;

                    if(diference >= 18 && diference <= 35) {
                        postData('http://localhost:3000/descr', JSON.stringify(descr1));  
                    } else if (diference >= 36 && diference <= 45 ) {
                        postData('http://localhost:3000/descr', JSON.stringify(descr2));
                    } else if (diference >= 46) {
                        postData('http://localhost:3000/descr', JSON.stringify(descr3));
                    }
                });
                
                
            }
            //Появление спинера при переходе между экранами
            const loadSpinner = document.createElement('img');
            loadSpinner.src = "icons/spinner.svg";
            loadSpinner.classList.add('spinner');
            mainContainer.innerHTML = "";
            mainContainer.append(loadSpinner);
            index++;
            
            //Запросы на сервер для появления новых вопросов
            getResurs('http://localhost:3000/testCards')
            .then (data => data.forEach(({descr, question}, i) => {

                if (index === 1 && i === 0) {
                    //Появление второго вопроса
                    new TestCard({descr, question,  
                        value1: "Утро",
                        value2: "День",
                        value3: "Вечер", 
                        value4: "Ночь",
                    }).addTestCardButton();
                } else if (index === 2 && i === 1) {
                    //Появление 3 вопроса
                    new TestCard({descr, question,  
                        
                        value4: "Далее"
                    }).addTestCardList(); 
                    const inputs = document.querySelectorAll('.button_list-text'),
                          buttonList = document.querySelectorAll('.button_list');
                    inputs.forEach((item, i) => {
                        item.oninput = function() {
                            buttonList[i].classList.remove('button_red-border');
                        };
                    });
                } else if (index === 3 && i === 2) {
                    //Появление 4 вопроса
                    new TestCard({descr, question,
                        value1: "Да",
                        value2: "Нет",
                        value3: "Иногда",
                        deleteButton4: true
                    }).addTestCardButton();
                } else if (index === 4 && i === 3) {
                    //Появление 5 вопроса
                    new TestCard({descr, question,
                        value1: "Да",
                        value2: "Затрудняюсь ответить",
                        deleteButton34: true
                    }).addTestCardButton();
                    document.querySelector('.footer-descr__descr_blue-background').style.display = "block";
                    document.querySelector('.footer-descr__descr_triangle').style.display = "block";
                    document.querySelector('.footer-descr__descr_go-test').style.color = "#000";
                    const gradient = document.querySelector('.gradient_left-center'),
                          title = document.querySelector('.footer-descr__descr_go-test');
                    getResurs('http://localhost:3000/descr')
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
                    //Появление финального экрана
                    new TestCard({value1: "Позвонить и прослушать"}).addTestCardFinal();
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
                messageError.textContent = "Что-то пошло не так";
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
            //Нажатие зеленой кнопки на финальном экране
            const outPut = document.querySelector('.output-require');

            getResurs('https://swapi.dev/api/people/1/')
            .then(data => {
                for( let x in data) {
                    const y = document.createElement('div');
                    y.textContent = data[x];
                    outPut.append(y); 
                }   
                const y = document.createElement('button');
                y.classList.add('read');
                y.textContent = "Читать далее";
                outPut.insertAdjacentElement('afterend', y); 
                let z = 1;
                y.addEventListener('click', ()=> {
                    ++z;
                    outPut.classList.toggle('output-require_active');
                    if (z%2) {
                        y.textContent = "Читать далее";
                    } else {
                       y.textContent = "Скрыть"; 
                    }
                }); 
                index++;
            });
            
        } else if (index === 6){
            e.preventDefault();
        }
        
    });
    
};
export {index};
export default submitForm;