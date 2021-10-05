import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
 import '../../../style/style.css';
 import ContactCard1 from "../src/pictures/backgroundimg1.jpg";
 import ContactCard2 from "../src/pictures/backgroundimg1.jpg";
 import ContactCard3 from "../src/pictures/backgroundimg1.jpg";
 import ContactCard4 from "../src/pictures/backgroundimg1.jpg";


 const PictureSlide = () => {
    return (
       <div class='slider'>
      <CarouselProvider
      isPlaying={true} 
      width="90px"
      height="70px"
      dragEnabled={true}
      touchEnabled={true}
      interval={5000}
        naturalSlideWidth={50}
        naturalSlideHeight={50}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}><ContactCard1 /></Slide>
          <Slide index={1}><ContactCard2 /></Slide>
          <Slide index={2}><ContactCard3 /></Slide>
        </Slider>
      </CarouselProvider>
      </div>
    );
  }


export default PictureSlide; 