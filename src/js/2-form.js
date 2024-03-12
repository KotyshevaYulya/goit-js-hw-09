"use strict";
const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const textarea = document.querySelector("form textarea[name=message]");

form.addEventListener("input", formSubmitHandler)

form.addEventListener("submit", (event) => {
    if (textarea.value === '' || form.elements.email.value === '') {
        return;
    } else {
        event.preventDefault();
        textarea.value = "";
        form.elements.email.value = '';
        localStorage.removeItem(STORAGE_KEY);
        console.log(getValue);
    }
});

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