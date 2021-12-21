import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Nav from '../src/nav'
import RotatingText from '../src/RotatingText'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Slide from 'react-reveal/Slide';
import Filler from '../src/Filler';
import PictureSlide from './PictureCarousel/PictureSlide';
import WeatherDisplay from '../src/Weather/Weather'

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  
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
    <div>
    {(typeof data.main != 'undefined') ? (
      <WeatherDisplay weatherData={data}/>
    ): (
      <div></div>
    )}
    </div>
    
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
