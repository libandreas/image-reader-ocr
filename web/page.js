const spellGreekUrl=new URL('page-el.html',document.currentScript.src);
(async function(){
if(new URLSearchParams(location.search).get('lang')==='el'){const response=await fetch(spellGreekUrl);if(!response.ok)throw new Error('Greek page unavailable');document.body.innerHTML=await response.text();document.documentElement.lang='el';document.querySelector('meta[name="description"]').content='Ορθογραφικός έλεγχος, μετάφραση, εκφώνηση κειμένου και φωνητική πληκτρολόγηση.';}
window.initializeSpellHeader();
document.addEventListener('keydown',event=>{if(event.key==='Escape'){const trigger=document.querySelector('.dropdown-trigger');trigger.classList.remove('active');trigger.setAttribute('aria-expanded','false');}});
const copyright=document.querySelector('.footer-bottom p');copyright.innerHTML=copyright.innerHTML.replace(/2026/,new Date().getFullYear());
})().catch(console.error);
