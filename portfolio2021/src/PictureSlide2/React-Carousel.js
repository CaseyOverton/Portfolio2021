import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import 'react-slideshow-image/dist/styles.css';
import { Zoom } from 'react-slideshow-image';
import img1 from '../pictures/backgroundimg1.jpg';
import img2 from '../pictures/GarageSwap.jpg';
import img3 from '../pictures/EmployeeDirectory.png'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router';

const Gallery = () => {
    return (
      <div style={{ height: '30%'}}>
        <Zoom scale={0.2}>
          {
            <>
            <img style={{height: '60%', width:'60%',  marginBottom: 100,}} src={img1} />
            <div style={{backgroundColor: 'transparent', border: '2px solid rgb(119, 255, 223)',  height: '60%'}}>
              <Typography style={{ fontWeight: 'bold', padding: 30, color: 'white', textAlign: 'center',}}>Currently developing pages of a multi-operating React-Native applicaiton using JSX, and Expo and various phone simulation technology. While the Github repository is private, here are various shots of the application made by myself using hooks, ES6 and more!</Typography>
              {/* <Typography>
                <a style={{color:'white', marginBottom: 100, padding: 20, alignText: 'center', fontWeight: 'bold'}} href="https://github.com/CaseyOverton/crypto-dashboard?organization=CaseyOverton&organization=CaseyOverton">Github Repo</a>
                <a style={{color:'white', marginBottom: 100, padding: 20, alignText: 'center', fontWeight: 'bold'}} href="https://github.com/CaseyOverton/crypto-dashboard?organization=CaseyOverton&organization=CaseyOverton">Github Repo</a>
              </Typography> */}
              {/* <a href='https://github.com/CaseyOverton/crypto-dashboard?organization=CaseyOverton&organization=CaseyOverton'>Website</a> */}
            </div>
            </>
          },
          {
         <>
         <img style={{ height: '60%', width:'60%',  }} src={img2} />
         <div style={{backgroundColor: 'transparent', border: '2px solid rgb(119, 255, 223)', height: '60%'}} >
           <Typography style={{  fontWeight: 'bold', padding: 30, color: 'white', textAlign: 'center',}}>Crypto-Tracker is a React made Web Application built by team of UNC developers to sort and display Stock data retrieved from an API, the website is fully responsive and a collabortation effort carefully organized by branches on github.</Typography>
           <div style={{padding: 20, alignText: 'center', color:'white',}}>
           <Typography style={{color:'white', fontWeight: 'bold', }} >
           <a style={{color:'white', marginBottom: 100,}} href="https://github.com/CaseyOverton/crypto-dashboard?organization=CaseyOverton&organization=CaseyOverton">Github Repo </a><br></br>
           <a style={{color:'white', marginBottom: 100,}} href='https://github.com/CaseyOverton/crypto-dashboard?organization=CaseyOverton&organization=CaseyOverton'>Crypto-Tracker Website</a>
           </Typography>
           </div>
         </div>
         </>
          },
          {
            <>
            <img style={{height: '60%', width:'60%',  marginBottom: 100,}} src={img3} />
            <div style={{backgroundColor: 'transparent', border: '2px solid rgb(119, 255, 223)',  height: '60%'}}>
              <Typography style={{ fontWeight: 'bold', padding: 30, color: 'white', textAlign: 'center',}}>React powered website filters through a list of names, as the user types into an input. The data is obtained by an API with popular NPM package, axios. A javascript function was used to filter through each name typed in search bar.</Typography>
              <Typography>
              <a style={{color:'white', marginBottom: 100, padding: 20, alignText: 'center', fontWeight: 'bold'}}href='https://caseyoverton.github.io/EmployeeDirectory/'>Deployed Website</a><br></br>
              <a style={{color:'white', marginBottom: 100, padding: 20, alignText: 'center', fontWeight: 'bold'}} href="https://github.com/CaseyOverton/EmployeeDirectory">Github Repo</a>
              </Typography> 
              
            </div>
            </>
          },
        </Zoom>
      </div>
    )
}
export default Gallery



{
  /* {
<>
    <img style={{height: '100%', width:'70%'}} src={img2} />
    <div style={{backgroundColor: 'transparent', border: '2px solid rgb(119, 255, 223)',}}>
      <Typography style={{ height: '100%', fontWeight: 'bold', padding: 30, color: 'white', textAlign: 'center',}}>Garage-Swap is a project built by team of UNC developers to work with react application that displays data using MongoDB</Typography>
      {/* <Link to='https://enigmatic-savannah-33392.herokuapp.com/'>Web Link</Link> 
      <Link to='https://github.com/CaseyOverton/PROJECT2-DEMO?organization=CaseyOverton&organization=CaseyOverton'>Github Repo</Link>  */}
    {/* </div>
    </>
  } */} 