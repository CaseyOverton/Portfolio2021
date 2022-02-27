import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Moment from 'react-moment';

const Nav = () => {
  const style = 
  {
    display: 'flex',
    justifyContent: 'center',
    fontSize:  20,
  }
 
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Spartan',
        'sans-serif',
      ].join(','),
      fontSize: 40,
    },
        primary: {
            main: 'black',
            contrastText: '#fff',
        },
        secondary: {
            light: 'black',
            main: 'black',
            dark: '#007856',
            contrastText: '#000'
        }
      });
      const date = new Date();
    
    return (
      <ThemeProvider style={theme} >
      <Breadcrumbs style={{marginTop: 10, color: 'black', fontWeight: 'boldest', display: 'flex',
    justifyContent: 'center', fontSize:  20,}} aria-label="breadcrumb">
     <Link  style={{color: 'black', fontWeight: 'bold'}} href="/" >
        Home
      </Link>
      <Link style={{color: 'black', fontWeight: 'bold', fontSize:  20,}}  href="/Contact">
        Contact
      </Link>
      <Link  style={{color: 'black', fontWeight: 'bold', fontSize:  20,}}   href="/Resume">
        Resume
      </Link>
      <div style={{paddingRight: '-50%', }} >
      <Moment  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}} format='h:mm a'>{date}</Moment>
      </div>
    </Breadcrumbs>
    </ThemeProvider>
   
);
    }

export default Nav;