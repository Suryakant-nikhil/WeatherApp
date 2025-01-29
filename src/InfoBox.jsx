import React from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import "./InfoBox.css";
import { comment } from 'stylis';



const InfoBox = ({info}) => {
    const INIT_URL=" https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    const HOT_URL="https://media.istockphoto.com/id/692641634/photo/landscape-horizontal-blurred-field-banner.webp?s=1024x1024&w=is&k=20&c=oGNfX9tjLgm9_Zr1mOxmDlop9mgQEu4QUDWpv1qItKM=";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://media.istockphoto.com/id/683973882/photo/bluured-photo-of-indian-road-traffic-during-rain.jpg?s=1024x1024&w=is&k=20&c=ffvQzP7uWuLYsdbpWdeEm0KRYA_JVCY8lFKQFevJWww=";

  return (
    <div className='InfoBox'>
      <h1>WeatherInfo-{info.weather}</h1>

      <div className='container'>
      <Card sx={{ maxWidth: 545 }}>
      <CardMedia
        sx={{ height: 140,width:340 } }
        image={info.humidity > 80 ? RAIN_URL:info.temp>15? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <AcUnitIcon/> :info.temp >15?<FilterDramaIcon/>:<ThunderstormIcon/>}
        </Typography>
        <Typography variant="body2"  color= 'text.secondary' component={"span"} >
          <p >Temrature:{info.temp}&deg;C</p>
          <p>Humidity:{info.humidity}</p>
          <p>Min Temp:{info.tempMin}&deg;C</p>
          <p>Max Temp:{info.tempMax}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
      </div>

     
    </div>
  )
}

export default InfoBox
