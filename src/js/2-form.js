"use strict";
const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const textarea = document.querySelector("textarea");
let parsedData;

form.addEventListener("input", formInputHandler);

function formInputHandler(event) {
    const message = textarea.value.trim();
    const email = form.elements.email.value.trim();
    const saveValue = JSON.stringify({ email, message });
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
    const getData = localStorage.getItem(STORAGE_KEY);
    const parsedGetData = JSON.parse(getData);

    if (textarea.value === "" || form.elements.email.value === "") {
        return alert("Заповніть усі поля");
    } else {
        console.log(parsedGetData);
        form.reset();
        localStorage.removeItem(STORAGE_KEY);
    }
});

















