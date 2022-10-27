const heroImage = document.querySelector('.hero__content__image');
const circleLeft = document.querySelector('.background__circle-left');
const circleRight = document.querySelector('.background__circle-right');
const circleBottom = document.querySelector('.background__circle-bottom');

console.log(circleBottom);
const section2 = document.querySelector('.big__corp');

const section3TxtCards = document.querySelectorAll('.features__text-card');
const section3 = document.querySelector('.features');
const section3Images = document.querySelector('.features__decoration');

const section4 = document.querySelector('.pricing');
const section4FirstCard = document.querySelector('.pricing__card:nth-child(1)');
const section4SecondCard = document.querySelector('.pricing__card:nth-child(2)');
const section4LastCard= document.querySelector('.pricing__card:last-child');

const testimonial = document.querySelector('.testimonial');
const bottomSection = document.querySelector('.bottom');



const options ={
threshold:0.2,
rootMargin: "-200px"
}


const threshold = (val)=>{
    const options = {
        threshold:val,
        
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
          
         }
       })
    },threshold(0.5)
   );


const section3Observer = new IntersectionObserver(
    (entries,observer)=>{
       entries.forEach(entry=>{
      
         if(!entry.isIntersecting){
          
            return;
         }else{
            entry.target.classList.add('brighter');
            section3Observer.unobserve(section3);
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
            cardsObserver.unobserve(entry.target)
            
          
         }
       })
    }, {
        threshold:0.1,
        rootMargin: '0px 0px 100px 0px'
    }
   );

const section3ImageObserver = new IntersectionObserver(
    (entries,observer)=>{
       entries.forEach(entry=>{
      
         if(!entry.isIntersecting){
          
            return;
         }else{
            entry.target.classList.add('brighter');
            console.log('image');
            section3ImageObserver.unobserve(entry.target)
          
         }
       })
    }, threshold(0.1)
   );

const firstCardObserver = new IntersectionObserver(
    (entries,observer)=>{
       entries.forEach(entry=>{
      
         if(!entry.isIntersecting){
          
            return;
         }else{
      
            entry.target.classList.add('firstCardSLideIn');
          console.log('first CARD');
            firstCardObserver.unobserve(entry.target); 
         }
       })
    },{
      threshold:0,
      rootMargin: '0px 0px 0px 0px'
  }
   );

const secondCardObserver = new IntersectionObserver(
    (entries,observer)=>{
       entries.forEach(entry=>{
      
         if(!entry.isIntersecting){
          
            return;
         }else{
           
            entry.target.classList.add('slideUp');
            
    
            secondCardObserver.unobserve(section4SecondCard); 
         }
       })
    },{
      threshold:0.2,
      rootMargin: '0px 0px 500px 0px'
  }
   );

const lastCardObserver = new IntersectionObserver(
    (entries,observer)=>{
       entries.forEach(entry=>{
      
         if(!entry.isIntersecting){
          
            return;
         }else{
           
            entry.target.classList.add('thirdCardSlideIn');
          
            lastCardObserver.unobserve(section4LastCard); 
            
          
         }
       })
    },{
      threshold:0,
      rootMargin: '0px 0px 0px 0px'
  }
   );

   const testimonialObserver = new IntersectionObserver(
      (entries,observer)=>{
         entries.forEach(entry=>{
        
           if(!entry.isIntersecting){
            
              return;
           }else{
              entry.target.classList.add('slideUp');
              console.log('Testimonial');
              testimonialObserver.unobserve(entry.target);
           }
         })
      }, threshold(0.2)
     );

   const bottomObserver = new IntersectionObserver(
      (entries,observer)=>{
         entries.forEach(entry=>{
        
           if(!entry.isIntersecting){
            
              return;
           }else{
              entry.target.classList.add('slideUp');
              console.log('bottom');
              bottomObserver.unobserve(entry.target);
           }
         })
      }, {
         threshold:0,
         rootMargin:'0px 0px 200px 0px'
      }
     );
   
const bottomCircleObserver = new IntersectionObserver(
   (entries,observer)=>{
      entries.forEach(entry=>{
     
        if(!entry.isIntersecting){
         
           return;
        }else{
           entry.target.classList.add('slideDownLeft');
           bottomCircleObserver.unobserve(entry.target);
        }
      })
   }, {
      threshold:0,
      rootMargin:'0px'
   }
  );


imgObserver.observe(heroImage);
section2Observer.observe(section2);
section3Observer.observe(section3);

section3TxtCards.forEach(card=>{
    cardsObserver.observe(card);
})

section3ImageObserver.observe(section3Images);
firstCardObserver.observe(section4FirstCard);
secondCardObserver.observe(section4SecondCard);
lastCardObserver.observe(section4LastCard);
testimonialObserver.observe(testimonial);
bottomObserver.observe(bottomSection);
bottomCircleObserver.observe(circleBottom);