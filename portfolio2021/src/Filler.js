import ReactRotatingText from 'react-rotating-text'
import './App.css';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import '../src/App.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { RiSubtractFill } from "react-icons/ri";
const BulletPoints = () => {
    return (
        <div style={{height: 700, marginTop: 100, }}>
             <br></br>
             <br></br>
             <AnimationOnScroll animateIn='animate__fadeInUp'>
            <Typography style={{color: 'var(--text-primary)',  fontSize: 35 , fontWeight: 'bold'}}>
               About Me
            </Typography>
            </AnimationOnScroll>
            <hr style={{borderColor:'#9DFFCC' }}  />
            <br/>
            <br/>
            <AnimationOnScroll animateIn='animate__fadeInUp'>
                <Typography style={{color: 'var(--text-primary)',  fontSize: 25 , fontWeight: 'bold'}}>  <RiSubtractFill style={{padding: 10, marginBottom: -10, }}/>
                Interested in frontend and full-stack development.
               </Typography>
            </AnimationOnScroll>
             <br/>
             <br/>
             <AnimationOnScroll animateIn='animate__fadeInUp'>
            <Typography style={{color: 'var(--text-primary)',  fontSize: 25 , fontWeight: 'bold'}}>  <RiSubtractFill style={{padding: 10, marginBottom: -10, }}/>
            Currently building ios/andriod application with team. Well versed in Agile Methodologies and Github collaborations. 
               </Typography>
             </AnimationOnScroll >
             <br/> <br/>
             <AnimationOnScroll animateIn='animate__fadeInUp'>
            <Typography style={{color: 'var(--text-primary)',  fontSize: 25 , fontWeight: 'bold'}}>  <RiSubtractFill style={{padding: 10, marginBottom: -10, }}/>
            Looking for an environment to learn as much possible and produce dry, reusable code!
               </Typography>
             </AnimationOnScroll>
             <br/> <br/>
             <br></br>
             <br></br>
        </div>
    )
    }
export default BulletPoints;

