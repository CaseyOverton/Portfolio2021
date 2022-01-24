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
      fontSize: 30,
    },
        primary: {
            main: '#F8F8F8',
            contrastText: '#fff',
        },
        secondary: {
            light: '#F8F8F8',
            main: '#00a883',
            dark: '#007856',
            contrastText: '#000'
        }
      });
      const date = new Date();
    
    return (
      <ThemeProvider style={theme} >
      <Breadcrumbs style={style} aria-label="breadcrumb">
     <Link  color='secondary' href="/">
        Home
      </Link>
      <Link  color='secondary' href="/Contact">
        Contact
      </Link>
      <Link   color='secondary' href="/Resume">
        Resume
      </Link>
      <div style={{paddingRight: '-50%', }} >
      <Moment  style={{color: '#00a883', fontSize: 20,}} format='h:mm a'>{date}</Moment>
      </div>
    </Breadcrumbs>
    </ThemeProvider>
   
);
    }

export default Nav;