import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import '../App.css';
import RotatingText from '../RotatingText'
import Filler from '../Filler';
import Gallery from '../PictureSlide2/React-Carousel'
const Home = () => {
    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Spartan',
            'sans-serif',
          ].join(','),
        },});
    return (
        <ThemeProvider theme={theme}>
             <div className="headerBackground">
                 <div className="bg-text">
                      <div className="NameText">
                         <Typography style={{fontSize: '350%', marginTop: 5, marginLeft: -30, textAlign: 'left'}}>Casey Overton</Typography>
                         <Typography style={{fontSize: '150%',  marginLeft: -20, textAlign: 'left'}}>Full Stack/Front End Developer</Typography>
                    <div style={{ marginLeft: -20, }} >
                        <RotatingText />
                    </div>
                    <>
                      <Filler />
                      <Gallery />
                    </>
                </div>
             </div>
           </div>
         </ThemeProvider>
    
    );
}
 
export default Home;