(()=>{"use strict";var e={660:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Planet=void 0,t.Planet=class{constructor(e,t,n,a){this.nev=e,this.age=t,this.size=n,this.waterContent=a}}}},t={};function n(a){var l=t[a];if(void 0!==l)return l.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}(()=>{const e=n(660);let t=document.getElementById("nevInput"),a=document.getElementById("evInput"),l=document.getElementById("meretInput"),r=document.getElementById("waterInput"),u=document.getElementById("errorKiir"),o=[];document.addEventListener("DOMContentLoaded",(()=>{var n;null===(n=document.getElementById("submit"))||void 0===n||n.addEventListener("click",(()=>{let n=new RegExp("[A-Za-z ]{2}");n.test(t.value)&&parseInt(a.value)>0&&parseInt(l.value)>=1500&&parseInt(r.value)>=0&&parseInt(r.value)<=100?(o.push(new e.Planet(t.value,parseInt(a.value),parseInt(l.value),parseInt(r.value))),function(){document.getElementById("bolygodb").textContent=o.length.toFixed();let e=0;for(let t of o)e+=t.age.valueOf();document.getElementById("atlagEletkor").textContent=(e/o.length).toFixed()}(),t.value="",a.value="",l.value="",r.value="",u.innerHTML=" "):(n.test(t.value)||(u.innerHTML="A név csak betüket tartalmazhat és két karakternél többet"),parseInt(a.value)>0||(u.innerHTML="Az életkor csak pozitív lehet"),parseInt(l.value)>=1500||(u.innerHTML="A méret nem lehet 1500-nál kisebb"),parseInt(r.value)>=0&&parseInt(r.value)<=100||(u.innerHTML="A viz felület csak 0-100 között lehet"))}))}))})()})();