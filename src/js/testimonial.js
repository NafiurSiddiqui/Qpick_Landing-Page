const slideA = document.querySelector('.testimonial__slide-A');
const slideB = document.querySelector('.testimonial__slide-B');
const navLeft = document.querySelector('.testimonial__slide-navigator.left');
const navRight = document.querySelector('.testimonial__slide-navigator.right');
const dotLeft = document.querySelector('.testimonial__slide-dot__left');    
const dotRight = document.querySelector('.testimonial__slide-dot__right');   



// ----what a mess 😂

navLeft.addEventListener('click',()=>{
    slideB.classList.remove('activeB');
    dotRight.classList.remove('active');
    slideA.classList.remove('removeA');
    slideA.classList.add('activeA');
    dotLeft.classList.add('active');
})
navRight.addEventListener('click',()=>{
    slideA.classList.remove('activeA')
    dotLeft.classList.remove('active');
    slideA.classList.add('removeA');
    slideB.classList.add('activeB');
    dotRight.classList.add('active')

    
})