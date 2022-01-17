import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import 'react-slideshow-image/dist/styles.css';
import { Zoom } from 'react-slideshow-image';
import img1 from '../pictures/backgroundimg1.jpg';
import Typography from '@material-ui/core/Typography';
const Gallery = () => {
    return (
      <div style={{ height: 400,}}>
        <Zoom scale={0.4}>
          {
            <>
            <img style={{height: '100%', width:'70%'}} src={img1} />
            <div style={{backgroundColor: '#218056',}}>
              <Typography style={{ height: '100%', marginTop: '10%'}}>Working in a professional work environment, as a part of a full stack team, I developed functional pages of a React-Native applicaiton using JSX, and typescript mostly. While the Github repository is private, here are various shots of the pages assembled by myself using dry, reusable code.</Typography>
            </div>
            </>
          },
          {/* {
            <>
            <img style={{height: '100%', width:'70%'}} src={img1} />
            <div>
              <Typography style={{backgroundColor: 'white', height: '100%', justifyContent: 'center'}}>Working in a professional work environment, as a part of a full stack team, I developed functional pages of a React-Native applicaiton using JSX, and typescript mostly. While the Github repository is private, here are various shots of the pages assembled by myself using dry, reusable code.</Typography>
            </div>
            </>
          },
        {
            <>
            <img style={{height: '100%', width:'70%'}} src={img1} />
            <div>
              <Typography style={{backgroundColor: 'white', height: '100%', justifyContent: 'center'}}>Working in a professional work environment, as a part of a full stack team, I developed functional pages of a React-Native applicaiton using JSX, and typescript mostly. While the Github repository is private, here are various shots of the pages assembled by myself using dry, reusable code.</Typography>
            </div>
            </>
          } */}
        </Zoom>
      </div>
    )
}
export default Gallery


