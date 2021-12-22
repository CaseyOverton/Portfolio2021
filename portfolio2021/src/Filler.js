import ReactRotatingText from 'react-rotating-text'
import './App.css';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Zoom from 'react-reveal/Zoom';
import '../src/App.css'

const Filler = () => {
    return (
        <div>
             <br></br>
             <br></br>
            <Typography style={{color: 'white', fontSize: 25, }}>
               About Me
            </Typography>
            <br></br>
            <Typography style={{color: 'white' }}>
                 Passionate hard-working web/mobile developer interested in frontend and full-stack development. Experience in react and react native frameworks as well as Javascript and Node/NPM. Currently building ios/andriod application with team. Well versed in Agile Methodologies and Github collaborations. Looking for an environment to learn as much possible and produce dry, reusable code!
             </Typography>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
        </div>
    )
    }
export default Filler;

