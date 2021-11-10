import ReactRotatingText from 'react-rotating-text'
import './App.css';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Zoom from 'react-reveal/Zoom';
import '../src/App.css'

const Filler = () => {
    return (
        <div>
            <Typography style={{color: 'white', fontSize: 25, }}>
               Full Stack/Front End Developer
            </Typography>
            <Typography style={{color: 'white' }}>
                 Passionate hard-working web/mobile developer interested in frontend and full-stack development. Experience in react and react native frameworks as well as Javascript and Node/NPM. Well versed in Agile Methodologies and Github collaborations. Looking for an environment to learn as much possible and produce dry, reusable code!
             </Typography>
        </div>
    )
    }
export default Filler;

