import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Nav from '../src/nav'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import JavaScriptQuiz from './JavaScriptQuiz';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Spartan',
      'sans-serif',
    ].join(','),
  },});

function QuizCollection() {
  return (
    
   <div style={{ flexDirection: 'auto', }}>
    {/* <Slide bottom> */}
    {/* <QuizNav /> */}
    <ThemeProvider theme={theme}>
    <div className="headerBackground">
      <div   className="bg-text">
        <div className="NameText">
        <JavaScriptQuiz />
       </div>
       <div>
         <ReactQuiz/>
       </div>
    </div> 
    </div>
 
    </ThemeProvider>
    {/* </Slide> */}
    </div>
 
  );
}




export default QuizCollection;
