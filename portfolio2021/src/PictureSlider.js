import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
  url: './pictures/backgroundimg1',
  caption: 'First Slide'
  },
  {
  url: './pictures/backgroundimg1',
  caption: 'Second Slide'
  },
  {
  url: './pictures/backgroundimg1',
  caption: 'Third Slide'
  },
];


const PictureSlide = () => {
    return (
      <div className="slide-container">
      <Fade>
        {fadeImages.map(fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        )}
      </Fade>
    </div>
    )
} 

export default PictureSlide
