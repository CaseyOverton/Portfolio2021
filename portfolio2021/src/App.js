import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Nav from '../src/nav'
// import ReactRotatingText from '../src/RotatingText'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Major Mono Display',
      'monospace',
    ].join(','),
    fontSize: 50,
  },});


function App() {
  return (
   
  <div>
    <Nav />
    <ThemeProvider theme={theme}>
    <div className="headerBackground">
    <div   className="bg-text">
      <div className="NameText">
        <Typography className="NameText">Casey Overton</Typography>
      </div>
        {/* <ReactRotatingText /> */}
        <div>
         {/* <Typography>GitHub/Linkedin</Typography> */}
        </div>
        </div>
    </div>
    </ThemeProvider>
  </div>
 
  );
}




export default App;
