import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20,
`;
export default function PictureSlide() {

  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);

const images = ['../pictures/backgroundimg1', '../pictures/backgroundimg1',]

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