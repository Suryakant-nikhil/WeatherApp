import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './infoBox'

const WeatherApp = () => {
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike:24.24,
        temp:24.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });

    let updateInfo=(newresult)=>{
        setWeatherInfo(newresult);
    }
  return (
    <div style={{textAlign:"center"}}>
      <h2>Weather App by Delta</h2>

      <SearchBox updateInfo={updateInfo}/>
      
      <InfoBox info={weatherInfo}/>

    </div>
  )
}

export default WeatherApp
