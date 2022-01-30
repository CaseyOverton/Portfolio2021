import ReactRotatingText from 'react-rotating-text'
import './App.css';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Zoom from 'react-reveal/Zoom';
import '../src/App.css'
import { GoZap } from "react-icons/go";
const Filler = () => {
    return (
        <div style={{height: 1100, marginTop: 100, }}>
             <br></br>
             <br></br>
            <Typography style={{color: 'var(--text-primary)',  fontSize: 35 , fontWeight: 'bold'}}>
               About Me
            </Typography>
            <hr style={{borderColor:'#9DFFCC' }}  />
            <br></br>
           
            <Typography style={{color: 'var(--text-primary)',  fontSize: 25 , fontWeight: 'bold'}}>  <GoZap />
                Interested in frontend and full-stack development.
                <br/><br/><GoZap />Experience in react and react native frameworks as well as Javascript and Node/NPM. <br/><br/>
                <GoZap />
                Currently building ios/andriod application with team. Well versed in Agile Methodologies and Github collaborations. <br/><br/>
                <GoZap />
                 Currently Looking for an environment to learn as much possible and produce dry, reusable code!
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

