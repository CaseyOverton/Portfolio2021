import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import 'react-slideshow-image/dist/styles.css';
import { Zoom } from 'react-slideshow-image';
import img1 from '../pictures/backgroundimg1.jpg';
import img2 from '../pictures/GarageSwap.jpg';
import img3 from '../pictures/EmployeeDirectory.png'
import img4 from '../pictures/Crypto2.png'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Gallery = () => {
    return (
      <AnimationOnScroll animateIn='animate__fadeInUp'>
      <div style={{ height: 'auto', flex: 1}}>
        <Zoom scale={0.2}>
        {
            <>
            <img style={{height: '70%', width:'60%',  marginBottom: 100,}} src={img3} />
            <div style={{backgroundColor: 'transparent', border: '2px solid rgb(52, 97, 86)', height: '70%', width: '60%', display: 'inline-block', overflowY: 'scroll'}}>
              <Typography style={{ fontWeight: 'bold', padding: 30, color: 'var(--text-primary)', textAlign: 'center',}}>React powered website filters through a list of names, as the user types into an input. The data is obtained by an API with popular NPM package, axios. A javascript function was used to filter through each name typed in search bar.</Typography>
              <Typography>
              <a style={{color: 'var(--text-primary)', marginBottom: 100, padding: 20, alignText: 'center', fontWeight: 'bold'}}href='https://jamescbaldwin.github.io/crypto-dashboard/'>Deployed Website</a><br></br>
              <a style={{color:'var(--text-primary)', marginBottom: 100, padding: 20, alignText: 'center', fontWeight: 'bold'}} href="https://github.com/CaseyOverton/crypto-dashboard">Github Repo</a>
              </Typography> 
              
            </div>
            </>
          }
          {
         <>
         <img style={{ height: '70%', width:'60%', border: '2px solid rgb(52, 97, 86)' }} src={img2} />
         <div style={{backgroundColor: 'transparent', border: '2px solid rgb(52, 97, 86)', height: '70%', width: '60%', display: 'inline-block', overflowY: 'scroll'}} >
           <Typography style={{  fontWeight: 'bold', padding: 30, color: 'var(--text-primary)', textAlign: 'center',}}>Garage-Swap is a project built by team of UNC developers to work with react application that displays data using MongoDB</Typography>
           <div style={{padding: 20, alignText: 'center', color: 'var(--text-primary)',}}>
           <Typography style={{color:'black', fontWeight: 'bold',color: 'var(--text-primary)' }} >
           <a style={{color: 'var(--text-primary)', marginBottom: 100,}} href='https://github.com/CaseyOverton/PROJECT2-DEMO?organization=CaseyOverton&organization=CaseyOverton'>Github Repo </a><br></br>
           <a style={{color: 'var(--text-primary)', marginBottom: 100,}} href='https://enigmatic-savannah-33392.herokuapp.com/'>Garage Swap Website</a>
           </Typography>
           </div>
         </div>
         </>
          }


          {
         <>
         <img style={{ height: '70%', width:'60%', border: '2px solid rgb(52, 97, 86)' }} src={img4} />
         <div style={{backgroundColor: 'transparent', border: '2px solid rgb(52, 97, 86)', height: '70%', width: '60%', display: 'inline-block', overflowY: 'scroll'}} >
           <Typography style={{  fontWeight: 'bold', padding: 30, color: 'var(--text-primary)', textAlign: 'center',}}>Crypto-Tracker is a React Web Application built by team of UNC developers to sort and display stock data. The website is fully responsive and uses local storage to save user favorites.</Typography>
           <div style={{padding: 20, alignText: 'center', color: 'var(--text-primary)',}}>
           <Typography style={{color:'black', fontWeight: 'bold',color: 'var(--text-primary)' }} >
           <a style={{color: 'var(--text-primary)', marginBottom: 100,}} href="https://github.com/CaseyOverton/crypto-dashboard?organization=CaseyOverton&organization=CaseyOverton">Github Repo </a><br></br>
           <a style={{color: 'var(--text-primary)', marginBottom: 100,}} href='https://github.com/CaseyOverton/crypto-dashboard?organization=CaseyOverton&organization=CaseyOverton'>Crypto-Tracker Website</a>
           </Typography>
           </div>
         </div>
         </>
          }
        </Zoom>
      </div>
      </AnimationOnScroll>
    )
}
export default Gallery





