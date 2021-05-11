"use strict";

import adaptiv from "./modules/adaptiv";
// import {index} from "./modules/test";
import test from "./modules/test";
import buttons from "./modules/buttons";


window.addEventListener("DOMContentLoaded", ()=> {
    adaptiv();
    buttons({wrapperSelector:"body", button:".button", click:".button-click", effect: ".gradient"});
    test();
});
