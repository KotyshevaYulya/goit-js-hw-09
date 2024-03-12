"use strict";
const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const textarea = document.querySelector("textarea");


form.addEventListener("input", formSubmitHandler)

function formSubmitHandler(event) {
    event.preventDefault();
    const message = textarea.value;
    const email = form.elements.email.value;

    const saveValue = JSON.stringify({ message, email });
    localStorage.setItem(STORAGE_KEY, saveValue);
}; 

const jsn = localStorage.getItem(STORAGE_KEY);
const getValue = JSON.parse(jsn);

if (jsn !== null) {
    textarea.value = getValue.message;
    form.elements.email.value = getValue.email;
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (textarea.value === '' || form.elements.email.value === '') {
        return;
    } else {
        form.reset();
        console.log(getValue);
        localStorage.removeItem(STORAGE_KEY);
    }
});



