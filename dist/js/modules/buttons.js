"use strict";

import {index} from "./submitForm";

function buttons({wrapperSelector, button, click, effect}) {

    const wrapperButtons = document.querySelector(wrapperSelector);


    


    //Нажатие на первые две кнопки, их плавный скролл и всплытие

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
     

    //Наведение мыши на кнопки

    if (document.documentElement.clientWidth >= 1440) {

        let hoverButton = function (eventHover, evenNumber, oddNumber, hoverColor) {
            wrapperButtons.addEventListener(eventHover, (event) => {
                const buttonClick = document.querySelectorAll(click),
                      gradient = document.querySelectorAll(effect);
                if (event.target && event.target.matches('.button-click')) {
                    buttonClick.forEach((item, i) => {
                        if (event.target === item) {
                            if (index !== 1 && index !== 3) {
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

export default buttons;
