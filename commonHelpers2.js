import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const n="feedback-form-state",e=document.querySelector(".feedback-form"),t=document.querySelector("form textarea[name=message]");e.addEventListener("input",u);e.addEventListener("submit",a=>{t.value===""||e.elements.email.value===""||(a.preventDefault(),t.value="",e.elements.email.value="",localStorage.removeItem(n),console.log(l))});function u(a){a.preventDefault();const m=t.value,s=e.elements.email.value,r=JSON.stringify({message:m,email:s});localStorage.setItem(n,r)}const o=localStorage.getItem(n),l=JSON.parse(o);o!==null&&(t.value=l.message,e.elements.email.value=l.email);
//# sourceMappingURL=commonHelpers2.js.map