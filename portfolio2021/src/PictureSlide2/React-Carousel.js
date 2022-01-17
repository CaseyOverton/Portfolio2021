import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import 'react-slideshow-image/dist/styles.css';
import { Zoom } from 'react-slideshow-image';
import img1 from '../pictures/backgroundimg1.jpg';
import img2 from '../pictures/GarageSwap.jpg';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router';

const Gallery = () => {
    return (
      <div style={{ height: '60%'}}>
        <Zoom scale={0.4}>
          {
            <>
            <img style={{height: '70%', width:'70%',  marginBottom: 100,}} src={img1} />
            <div style={{backgroundColor: 'transparent', border: '2px solid rgb(119, 255, 223)',}}>
              <Typography style={{ height: '100%', fontWeight: 'bold', padding: 30, color: 'white', textAlign: 'center',}}> Currently developing pages of a multi-operating system React-Native applicaiton using JSX, and Expo and various phone simulation technology. While the Github repository is private, here are various shots of the application made by myself using hooks, ES6 and more!</Typography>
              <Typography><a style={{bottom: 300,}} href="https://github.com/CaseyOverton/crypto-dashboard?organization=CaseyOverton&organization=CaseyOverton">Github Repo</a>
              </Typography>
              {/* <a href='https://github.com/CaseyOverton/crypto-dashboard?organization=CaseyOverton&organization=CaseyOverton'>Website</a> */}
            </div>
            </>
          },
          {
         <>
         <img style={{height: '70%', width:'70%'}} src={img1} />
         <div style={{backgroundColor: 'transparent', border: '2px solid rgb(119, 255, 223)',}}>
           <Typography style={{ height: '100%', fontWeight: 'bold', padding: 30, color: 'white', textAlign: 'center',}}>Crypto Tracker is a React made web application built by team of developers for experience, to show expertise with APIS, and a web responsive user friendly site!</Typography>
           <a style={{backgroundColor:'white', marginBottom: 100,}} href="https://github.com/CaseyOverton/crypto-dashboard?organization=CaseyOverton&organization=CaseyOverton">Github Repo</a>
           <a href='https://github.com/CaseyOverton/crypto-dashboard?organization=CaseyOverton&organization=CaseyOverton'>Website</a>
         </div>
         </>
          },
          {/* {
        <>
            <img style={{height: '100%', width:'70%'}} src={img2} />
            <div style={{backgroundColor: 'transparent', border: '2px solid rgb(119, 255, 223)',}}>
              <Typography style={{ height: '100%', fontWeight: 'bold', padding: 30, color: 'white', textAlign: 'center',}}>Garage-Swap is a project built by team of UNC developers to work with react application that displays data using MongoDB</Typography>
              {/* <Link to='https://enigmatic-savannah-33392.herokuapp.com/'>Web Link</Link> 
              <Link to='https://github.com/CaseyOverton/PROJECT2-DEMO?organization=CaseyOverton&organization=CaseyOverton'>Github Repo</Link>  */}
            {/* </div>
            </>
          } */} */}
        </Zoom>
      </div>
    )
}
export default Gallery


