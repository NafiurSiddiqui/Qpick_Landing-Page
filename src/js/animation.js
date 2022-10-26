const heroImage = document.querySelector('.hero__content__image');
const circleLeft = document.querySelector('.background__circle-left');
const circleRight = document.querySelector('.background__circle-right');

const section2 = document.querySelector('.big__corp');

const section3TxtCards = document.querySelectorAll('.features__text-card');
const section3 = document.querySelector('.features');



const options ={
threshold:0.2,
rootMargin: "-200px"
}

const circleOptions = {
    threshold:0.5,
    // rootMargin: "-200px"
    }

const threshold = (val)=>{
    const options = {
        threshold:val
    }

    return options;
};

const imgObserver = new IntersectionObserver(
 (entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('flip');
            circleRight.classList.add('slopeToTheRight');
        }else{
            entry.target.classList.remove('flip');
           
        }
    })
 },options
);



const section2Observer = new IntersectionObserver(
    (entries,observer)=>{
       entries.forEach(entry=>{
       
         if(!entry.isIntersecting){
            circleLeft.classList.remove('rollToTheRight');
            return;
         }else{
            circleLeft.classList.add('rollToTheRight');
            // circleRight.classList.remove('slopeToTheRight');
         }
       })
    },circleOptions
   );


const section3Observer = new IntersectionObserver(
    (entries,observer)=>{
       entries.forEach(entry=>{
      
         if(!entry.isIntersecting){
          
            return;
         }else{
            entry.target.classList.add('brighter');
            
          
         }
       })
    }, threshold(0.2)
   );


const cardsObserver = new IntersectionObserver(
    (entries,observer)=>{
       entries.forEach(entry=>{
      
         if(!entry.isIntersecting){
          
            return;
         }else{
            entry.target.classList.add('cardsSlideIn');
            console.log(entry.target);
            
          
         }
       })
    }, {
        threshold:0.1,
        rootMargin: '0px 0px 100px 0px'
    }
   );




imgObserver.observe(heroImage);
section2Observer.observe(section2);
section3Observer.observe(section3);

section3TxtCards.forEach(card=>{
    cardsObserver.observe(card);
})
