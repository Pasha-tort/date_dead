"use strict";

import {index} from "./test";

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

export default adaptiv;