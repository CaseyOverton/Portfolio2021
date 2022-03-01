import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import '../App.css';


import { AiFillLinkedin, AiFillGithub, AiOutlineMail} from "react-icons/ai";

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
                 <div className="bg-textR">
                      <div className="NameText" style={{marginTop: -40,}}>
                         <Typography style={{fontSize: '250%',marginTop: 15, marginLeft: -30, fontWeight: 'bold', textAlign: 'left'}}>Casey Overton</Typography>
                         <Typography style={{fontSize: '120%',  marginLeft: -20, fontWeight: 'bold',textAlign: 'left'}}>Contact</Typography>
                      </div>
                  </div>
             </div>
             <div className="contactContainer">
             <br />
             <div className="contact1">
               <Typography style={{color: 'var(--text-primary)', fontWeight: 'bold', textAlign: 'center', fontSize: '120%'}}><AiOutlineMail  style={{padding: 3}}/>Email: Overtonc1@gmail.com </Typography>
             </div>
             <br />
             <div className="contact2">
               <Typography style={{color: 'var(--text-primary)', fontWeight: 'bold',  textAlign: 'center', fontSize: '120%'}}>
               <a style={{color: 'var(--text-primary)', fontWeight: 'bold',  marginBottom: 100,}} href="https://github.com/CaseyOverton"><AiFillGithub style={{padding: 3}}/>Github</a>
               </Typography>
               
             </div>
             <br />
             <div className="contact3">
             <Typography style={{color: 'var(--text-primary)', fontWeight: 'bold',  textAlign: 'center', fontSize: '120%'}}>
               <a style={{color: 'var(--text-primary)', fontWeight: 'bold',  marginBottom: 100, }} href="https://www.linkedin.com/in/casey-overton-3584151b1/"><AiFillLinkedin style={{padding: 3}}/>Linkedin </a>
               </Typography>
             </div>
             </div>
         </ThemeProvider>
    
    );
}
 
export default Contact;