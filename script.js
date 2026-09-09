const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.right='5vw';nav.style.top='64px';nav.style.flexDirection='column';nav.style.background='var(--paper)';nav.style.padding='20px';nav.style.border='1px solid var(--line)';});
