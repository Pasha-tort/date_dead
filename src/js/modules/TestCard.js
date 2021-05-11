"use strict";
import {index} from "./submitForm";

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
                                    <form action="#" name = "question_${index + 1}" 
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
                                        Вопрос ${index + 1}-5
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
                                <form action="#" name = "question_${index + 1}" 
                                                            class = "form-test form-test_go-test buttons">
                                    <div class = "button button_list">
                                        <input type = "numder" name="day" placeholder="День" 
                                            class = "button_list-text" aria-invalid="false">

                                        <img src="icons/triangle.svg" class = "button_list-click">
                                    </div>
                                    <div class = "button button_list">
                                        <input type = "text" name="mounth" placeholder="Месяц" 
                                            class = "button_list-text" aria-invalid="false">

                                        <img src="icons/triangle.svg" class = "button_list-click">
                                    </div>
                                    <div class = "button button_list">
                                        <input type = "numder" name="year" placeholder="Год" 
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
                                    Вопрос ${index + 1}-5
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
                                    Спасибо за Ваши ответы!
                                    <span>
                                        Мы подготовили для Вас 
                                        персональную аудио запись с 
                                        Вашим прогнозом.
                                    </span>
                                </div>
                                <div class="title title_final title_25">
                                    Вы можете узнать, как повлиять на события, 
                                    которые ожидают вас в ближайшем будущем. 
                                </div>
                                <div class="border-final">
                                    <div class = "question question_go-test question_final">
                                        Первое значимое событие может произойти уже 14.02.2021, 
                                        <span>
                                            Вам надо быть готовым, что бы последствия не оказались необратимыми.
                                        </span>
                                    </div>
                                </div>
                                <div class="title title_final title_25">
                                    Нажмите на кнопку ниже прямо сейчас и наберите наш 
                                    номер телефона. Прослушайте важную информацию!
                                </div>
                                <form action="#" name = "question_${index + 1}" class="form-test">
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

export default TestCard;