export class Slider{
       constructor(el){
              this.el = el;
              this.slides = Array.from(this.el.querySelectorAll(".hero-slide-moja"));
              this.totalSlides = this.slides.length;
              this.autoPlay = true;
              this.current = 0;
              this.transitionTime = 7000;
              this.indexElements = []

              for(let i = 0; i < this.totalSlides; i++){
                     this.indexElements.push(i)
              }

              this.setCurrentSlide();
              this.initEvents()
       }
      setCurrentSlide(){
            this.slides[this.current].classList.add('active')
      }
      initEvents() {
             const self = this;

             setInterval(()=> {
                    if(self.autoPlay){
                           self.current =  self.current < self.slides.length - 1 ? self.current + 1 : 0;
                           self.changeSlide(self.current);
                    }
             }, this.transitionTime)
      }

      changeSlide(index){
           this.slides.forEach(allSlides => allSlides.classList.remove('prev', 'active'));

           //const getAllPrev = value => value < index;

           const prevElements = this.indexElements.filter(value => value < index);

           prevElements.forEach(prevEl => this.slides[prevEl].classList.add('prev'));

           this.slides[index].classList.add('active');
      }
}