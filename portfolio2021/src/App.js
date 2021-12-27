import React from "react";
import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Nav from '../src/nav'
import RotatingText from '../src/RotatingText'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Filler from '../src/Filler';
import PictureSlide from './PictureCarousel/PictureSlide';

require("dotenv").config();
function App() {

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Spartan',
        'sans-serif',
      ].join(','),
    },});
  return (
    
   <div style={{ flexDirection: 'auto', }}>
    {/* <Slide bottom> */}
    <Nav />
    <ThemeProvider theme={theme}>
    <div className="headerBackground">
    
      <div   className="bg-text">
        <div className="NameText">
          <Typography style={{fontSize: '350%', marginTop: 5, marginLeft: -30, textAlign: 'left'}}>Casey Overton</Typography>
          <Typography style={{fontSize: '150%',  marginLeft: -20, textAlign: 'left'}}>Full Stack/Front End Developer</Typography>
          <div style={{ marginLeft: -20, }} >
            <RotatingText />
          </div>
       </div>
     <div>
        <Filler />
     </div>
       <div className="PictureSlide">
           <PictureSlide />
       </div>
    </div> 
    </div>
    </ThemeProvider>
    {/* </Slide> */}
    </div>
 
  );
}




export default App;
