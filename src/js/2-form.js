"use strict";
const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const textarea = document.querySelector("textarea");
let parsedData;

form.addEventListener("input", formInputHandler);

function formInputHandler(event) {
    event.preventDefault();
    const message = textarea.value;
    const email = form.elements.email.value;
    const saveValue = JSON.stringify({ message, email });
    localStorage.setItem(STORAGE_KEY, saveValue);
};

const storedData = localStorage.getItem(STORAGE_KEY);

if (storedData !== null) {
    parsedData = JSON.parse(storedData);
    textarea.value = parsedData.message;
    form.elements.email.value = parsedData.email;
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (textarea.value === "" || form.elements.email.value === "") {
        return alert("Заповніть усі поля");
    } else {
        form.reset();
        console.log(parsedData);
        localStorage.removeItem(STORAGE_KEY);
    }
});
















