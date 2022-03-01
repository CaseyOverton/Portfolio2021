import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import '../src/App.css';
import img from '../src/pictures/CaseyOverton2022Resume.jpg'
const Resume = () => {
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
                 <div className="bg-textR">
                      <div className="NameText" style={{marginTop: -40,}}>
                         <Typography style={{fontSize: '250%',marginTop: 15, marginLeft: -30, fontWeight: 'bold', textAlign: 'left'}}>Casey Overton</Typography>
                         <Typography style={{fontSize: '120%',  marginLeft: -20, fontWeight: 'bold',textAlign: 'left'}}>Resume</Typography>
                      </div>
                  </div>
             </div>
             <div className="contactContainer">
             <div className="resume">
              <img style={{marginLeft: '20%',marginRight: '20%' }}src={img} />
             </div>
             </div>
         </ThemeProvider>
    
    );
}
 
export default Resume;