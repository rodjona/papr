const menuButton=document.querySelector('.menu');
const navLinks=document.querySelector('.navlinks');
if(menuButton&&navLinks){menuButton.addEventListener('click',()=>navLinks.classList.toggle('open'));}
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>navLinks?.classList.remove('open')));
