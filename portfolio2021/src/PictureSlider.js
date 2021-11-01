import React from 'react';
import { Zoom } from 'react-slideshow-image';

const PictureSlide = () => {
  const images = [
    './pictures/backgroundimg1',
    './pictures/backgroundimg1',
    './pictures/backgroundimg1'
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.4
  }
  return (
    <div>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} style={{width: "100%"}}>
            <img style={{ objectFit: "cover", width: "100%" }} src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default PictureSlide;