"use strict";

import TestCard from "./TestCard";
import submitForm from "./submitForm";


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
                if (inputs[0].value > 28 && (inputs[1].value === "Февраль" || inputs[1].value === "февраль")) {
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
                            (inputs[0].value > 28 && (inputs[1].value === "Февраль" || inputs[1].value === "февраль"))||
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
                        submitForm();  
                    }
                           
                }
            });  
        } 
    });
    //Нажатие на один из пунктов листа в форме
    wrapperButtons.addEventListener('click', (event)=> {
        if (event.target && event.target.matches("li")) {
            const button = document.querySelector('ul').previousElementSibling;
            button.childNodes[1].value = event.target.textContent;
            let inputs = document.querySelectorAll(".button_list-text");
                        inputs.forEach(item => {
                            if (item.value === "" || inputs[0].value > 31 || 
                            (inputs[0].value > 28 && (inputs[1].value === "Февраль" || inputs[1].value=== "февраль"))|| 
                            inputs[1].value >
                                inputs[2].value > 2016 || inputs[2].value < 1940) {
                                button.classList.remove('button_red-border');
                            }
                        });
            
            closeButtonClick();
        }
    });
    //Нажатие на кнопку открывающую лист в форме
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
                        case 1 : list.innerHTML = `<li value="0">Январь</li><li value="1">Февраль</li>
                            <li value="2">Март</li><li value="3">Апрель</li><li value = "4">Май</li>
                            <li value="5">Июнь</li><li value="6">Июль</li><li value="7">Август</li>
                            <li value="8">Сентябрь</li><li value="9">Октябрь</li><li value="10">Ноябрь</li>
                            <li value="11">Декабрь</li>`; 
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

export default test;
export {getResurs, postData};