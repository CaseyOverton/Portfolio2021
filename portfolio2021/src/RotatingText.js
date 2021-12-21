import ReactRotatingText from 'react-rotating-text'
import './App.css';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../src/App.css'
const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Spartan',
         'sans-serif',
      ].join(','),
      fontSize: 20,
    },});
const RotatingText = () => {
    return (
        <ThemeProvider theme={theme}>
        <Typography>Proficient In: </Typography>
        <div>
         <ReactRotatingText items={['JavaScript', 'React', 'HTML/CSS', 'React-Native', 'XML', ]} color='white' fontFamily='Spartan' />
        </div>
        </ThemeProvider>
    )
    }
export default RotatingText;

