import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t="feedback-form-state",e=document.querySelector(".feedback-form"),r=document.querySelector("textarea");let o;e.addEventListener("input",c);function c(s){const a=r.value.trim(),l=e.elements.email.value.trim(),m=JSON.stringify({email:l,message:a});localStorage.setItem(t,m)}const n=localStorage.getItem(t);n!==null&&(o=JSON.parse(n),r.value=o.message,e.elements.email.value=o.email);e.addEventListener("submit",s=>{s.preventDefault();const a=localStorage.getItem(t),l=JSON.parse(a);if(r.value===""||e.elements.email.value==="")return alert("Заповніть усі поля");console.log(l),e.reset(),localStorage.removeItem(t)});
//# sourceMappingURL=commonHelpers2.js.map
