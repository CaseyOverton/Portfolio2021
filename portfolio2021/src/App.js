import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Nav from '../src/nav'
import RotatingText from '../src/RotatingText'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Slide from 'react-reveal/Slide';
import Filler from '../src/Filler';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Spartan',
      'sans-serif',
    ].join(','),
  },});

function App() {
  return (
    
   <div style={{ flex: ''}}>
    {/* <Slide bottom> */}
    <Nav />
    <ThemeProvider theme={theme}>
    <div className="headerBackground">
    <div   className="bg-text">
    <Filler />
    </div>
    </div>
    <div className="NameText">
        <Typography style={{fontSize: '350%', marginTop: 2, flex: 2}}>Casey Overton</Typography>
        <RotatingText />
     </div>
    </ThemeProvider>
    {/* </Slide> */}
    </div>
 
  );
}




export default App;
