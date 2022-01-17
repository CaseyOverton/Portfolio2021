import React, {
  useRef,
  useEffect
} from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';
import SlideText from './data';
import {
  Typography
} from '@material-ui/core';
const Wrapper = styled.div `
  position: relative;
  width: 55%;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
`;
const Slide = styled.div `
  display: flex;
  width: 100%;
  height: 450px;
  transition: transform 0.6s ease-in-out;
  transform: ${props => `translateX(${props.xPosition}px)`}; // (*)
img {
    width: 100%;
    height: 100%;
  }
`;

function Carousel({
  images,
  setWidth,
  xPosition,
  handleClickPrev,
  handleClicknext,
  SlideText,
  props
}) {
  const slideRef = useRef();
  useEffect(() => {
    if (slideRef.current) {
      const width = slideRef.current.clientWidth;
      setWidth(width);
    }
  }, [setWidth]);
  return ( <
    Wrapper >
    <
    Slide xPosition = {
      xPosition
    }
    ref = {
      slideRef
    } > {
      images.map((img, i) => ( <
        img src = {
          img
        }
        key = {
          i
        }
        />

        // data={images.concat(SlideText)} 
        // <Typography>{i.text}</Typography>
      ))
    }

    <
    /Slide> {
      /* <div> 
         {SlideText.map((a) => (
                <li key={a}>{SlideText.a}</li>
               
         ))}
         </div> */
    } <
    Buttons handleClickPrev = {
      handleClickPrev
    }
    handleClicknext = {
      handleClicknext
    }
    />



    <
    /Wrapper>
  );
}
export default Carousel;