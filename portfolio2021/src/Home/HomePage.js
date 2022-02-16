import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import '../App.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import RotatingText from '../RotatingText'
import BulletPoints from '../Filler';
import Gallery from '../PictureSlide2/React-Carousel'
import TimeLineComponent from './TimeLine'
const Home = () => {
    const theme = createMuiTheme({
        typography: {
          fontFamily: [
            'Spartan',
            'sans-serif',
          ].join(','),
        },});
    return (
      <div>
        <ThemeProvider theme={theme}>
             <div className="headerBackground">
                 <div className="bg-text">
                      <div className="NameText">
                         <Typography style={{fontSize: 40 , fontWeight: 'boldest',  marginTop: 5, marginLeft: -30, textAlign: 'left', color: 'var(--text-primary)', fontWeight: 'bold'}}>Casey Overton</Typography>
                         <Typography style={{fontSize: 30 , fontWeight: 'bold',  marginLeft: -20, textAlign: 'left'}}>Full Stack/Front End Developer</Typography>
                    <div style={{ marginLeft: -20, }} >
                        <RotatingText />
                    </div>
                    <AnimationOnScroll animateIn='animate__fadeInUp'>
                      <BulletPoints />
                      <div className='imageSlide'>
                      <Gallery/>
                      </div>
                    </AnimationOnScroll>
                    <TimeLineComponent />
                </div>
             </div>
           </div>
         </ThemeProvider>
         </div>
    
    );
}
 
export default Home;

// Semantic HTML and modular CSS and JavaScript (ES6 and onwards)
// Testing and resolving performance concerns
// Strong understanding of core OOP practices
// Strong understanding and experience with Angular, React, Vue, or other modern JS frameworks (Preferably AngularJs)
// Familiarity with TypeScript (or experience with other strongly typed languages)
// CSS preprocessors (i.e., Sass) and advanced CSS concepts (i.e., CSS3)
// Understanding of Design Patterns and when/how to apply them
// Strong ability to break down UI designs into extensible/modifiable/reusable/responsive component architectures
// Leveraging APIs
// Progressive enhancement
// Team Git workflow and version control
// Package managers (i.e., NPM, Yarn)
// Scrum/agile software development methodologies 