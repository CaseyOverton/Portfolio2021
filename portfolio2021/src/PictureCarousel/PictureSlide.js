import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import styled from 'styled-components';
import img1 from '../pictures/backgroundimg1.jpg'
import img2 from '../pictures/backgroundimg1.jpg'
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20,
`;


const images = [
  img1,
  img2,
];
export default function PictureSlide() {

  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);


const handleClickPrev = () => { 
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };
const handleClicknext = () => {
    if (index === images.length - 1) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };
return (
    <Wrapper className="App">
      <Carousel
        images={images}
        setWidth={setWidth}
        xPosition={xPosition}
        handleClickPrev={handleClickPrev}
        handleClicknext={handleClicknext}
      />
    </Wrapper>
  );
}