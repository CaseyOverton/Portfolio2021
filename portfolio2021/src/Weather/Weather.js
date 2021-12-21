import React from 'react';
import Typography from '@material-ui/core/Typography';


const WeatherDisplay = ({weatherData}) => (
    <Typography className="weatherDisplay">
        {weatherData.name}, 
    </Typography>
)

export default WeatherDisplay;