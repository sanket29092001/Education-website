burger=document.querySelector('.burger')
navlist=document.querySelector('.navlist')
navbar=document.querySelector('.navbar')
search=document.querySelector('.search')

burger .addEventListener('click', ()=>{
    navlist.classList.toggle('v-nav');
    search.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');
})


