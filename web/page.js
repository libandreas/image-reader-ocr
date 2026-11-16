(async function(){
window.initializeSpellHeader();
document.addEventListener('keydown',event=>{if(event.key==='Escape'){const trigger=document.querySelector('.dropdown-trigger');trigger.classList.remove('active');trigger.setAttribute('aria-expanded','false');}});
const copyright=document.querySelector('.footer-bottom p');copyright.innerHTML=copyright.innerHTML.replace(/2026/,new Date().getFullYear());
})().catch(console.error);

document.querySelector('.language-pause')?.addEventListener('click',event=>{const button=event.currentTarget;const paused=button.closest('.leafpad-languages').classList.toggle('is-paused');button.setAttribute('aria-pressed',String(paused));button.textContent=paused?button.dataset.resume:button.dataset.pause;});
