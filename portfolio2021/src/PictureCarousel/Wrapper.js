import React, { useState } from 'react';
import Carousel from './components/Carousel';
import styled from 'styled-components';
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
export default function PictureWrapper() {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);

useEffect(() => {
  const handleAutoplay = setInterval(handleClicknext, 3000);
  return () => clearInterval(handleAutoplay);
}, [handleClicknext]);
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
    
      <Carousel
        images={images}
        setWidth={setWidth}
        xPosition={xPosition}
        handleClickPrev={handleClickPrev}
        handleClicknext={handleClicknext}
      />
    
  );
}