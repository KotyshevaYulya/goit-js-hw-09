"use strict";
const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const textarea = document.querySelector("textarea");
form.addEventListener("input", formSubmitHandler)
form.addEventListener("submit", (event) => {
    if (textarea.value === '' || form.elements.email.value === '') {
        return;
    } else {
        event.preventDefault();
        console.log(data);
        textarea.value = "";
        form.elements.email.value = '';
    }
});

function formSubmitHandler(event) {
    event.preventDefault();
    const message = textarea.value;
    const email = form.elements.email.value;

    const data = JSON.stringify({ message, email });
    localStorage.setItem(STORAGE_KEY, data);
    
}; 

const jsn = localStorage.getItem(STORAGE_KEY);
const data = JSON.parse(jsn);
textarea.value = data.message;
form.elements.email.value = data.email;