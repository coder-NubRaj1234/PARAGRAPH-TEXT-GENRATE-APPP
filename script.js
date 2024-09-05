import {Text} from "./text.js";

const form = document.getElementById("form");
const parAamount = document.getElementById("amount");
const text_area = document.querySelector(".text-area");

form.addEventListener("submit" , function(e){
    e.preventDefault();

    const value = parseInt(parAamount.value);
    const renromNumber = Math.floor(Math.random() * Text.length);
    if(renromNumber === -1){
        renromNumber = 0;
    };

    if(isNaN(value) || value <= 0 || value > 9 ){
        text_area.innerHTML = `<p class="items">${Text[renromNumber]}</p>`;
    }else{
        let temText = Text.slice(0 , value);
        temText = temText.map(function(item){
            return `<p class="items">${item}</p>`;
        }).join("");
        text_area.innerHTML = temText;
    };
});
