import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';




const style = {
  display: 'flex',
  justifyContent: 'center',
//   backgroundColor: 'rgb(81, 133, 91)',
  color: 'white',
      
};


export default function nav() {
    return (
      <Breadcrumbs style={style} aria-label="breadcrumb">
        <Link color="Secondary" href="/">
          Home
        </Link>
        <Link color="Secondary" href="/Contact">
          Contact
        </Link>
        <Link color="Secondary" href="/Resume">
          Resume
        </Link>
      </Breadcrumbs>
    );
  }