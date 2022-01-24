import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import '../App.css';

const Contact = () => {
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
                      </div>
                  </div>
             </div>
             <div className="contacts">
               <Typography style={{color: 'white', textAlign: 'center', fontSize: '120%'}}>Email: Overtonc1@gmail.com</Typography>
             </div>
             <div className="contacts">
               <Typography style={{color: 'white', textAlign: 'center', fontSize: '120%'}}>Github: Overtonc1@gmail.com</Typography>
             </div>
             <div className="contacts">
               <Typography style={{color: 'white', textAlign: 'center', fontSize: '120%'}}>Email: Overtonc1@gmail.com</Typography>
             </div>
         </ThemeProvider>
    
    );
}
 
export default Contact;