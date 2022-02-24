import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// import HotelIcon from '@mui/icons-material/Hotel';
// import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function TimeLineComponent() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
        style={{color: 'var(--text-primary)', fontWeight: 'bold', fontSize: 30}}
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
        >
          2012-2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" style={{color: 'var(--text-primary)', fontSize: 25}}> 
           East Carolina University
          </Typography>

        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent
        style={{color: 'var(--text-primary)',  fontWeight: 'bold', fontSize: 25}}
        variant="h6"
        component="span"
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
        >
        University of North Carolina 
        <Typography style={{color: 'var(--text-primary)'}}>Full-Stack Web Development</Typography>
        </TimelineOppositeContent>
        
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" style={{color: 'var(--text-primary)', fontWeight: 'bold', fontSize: 30}}> 
          2020-2021
          </Typography>
          {/* <Typography style={{color: 'var(--text-primary)'}}>Full-Stack Web Development</Typography> */}
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
        style={{color: 'var(--text-primary)', fontWeight: 'bold', fontSize: 30,}}
          sx={{ m: 'auto 0' }}
          variant="body2"
        >
         February 2021-Present
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineConnector />
          <TimelineDot color="primary"/>
          <TimelineConnector />
        </TimelineSeparator >
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" style={{color: 'var(--text-primary)',  fontWeight: 'bold', }}>
          Colorful Desires Full-Stack Developer 
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            {/* <HotelIcon /> */}
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main',  }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            1+ Year in React/React Native
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            MERN STACK experience
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator >
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
          <TimelineDot color="secondary" >
            {/* <HotelIcon /> */}
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" >
            REDUX Experience
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}