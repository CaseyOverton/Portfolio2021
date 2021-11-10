import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Nav from '../src/nav'
import RotatingText from '../src/RotatingText'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Slide from 'react-reveal/Slide';
import Filler from '../src/Filler';
import PictureSlide from './PictureCarousel/PictureSlide';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Spartan',
      'sans-serif',
    ].join(','),
  },});

function App() {
  return (
    
   <div style={{ flexDirection: 'auto', }}>
    {/* <Slide bottom> */}
    <Nav />
    <ThemeProvider theme={theme}>
    <div className="headerBackground">
      <div   className="bg-text">
        <div className="NameText">
          <Typography style={{fontSize: '350%', marginTop: 5, marginLeft: -30, textAlign: 'left'}}>Casey Overton</Typography>
          <div style={{ marginLeft: -20, }} >
            <RotatingText />
          </div>
       </div>
     <div>
        <Filler />
     </div>
       <div>
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
