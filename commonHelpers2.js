import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form");let l={email:"",message:""};const s=()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e!==null){l=e;for(const t in e)e.hasOwnProperty(t)&&(a.elements[t].value=e[t])}};s();const r=e=>{const t=e.target.name,o=e.target.value;l[t]=o,localStorage.setItem("feedback-form-state",JSON.stringify(l))},m=e=>{const t=a.elements.email.value,o=a.elements.message.value;e.preventDefault(),t&&o?(console.log(l),e.target.reset(),localStorage.removeItem("feedback-form-state")):alert("Fill please all fields")};a.addEventListener("change",r);a.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers2.js.map
