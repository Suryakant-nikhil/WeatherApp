import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

const SearchBox = ({updateInfo}) => {

    const [city,setCity]=useState("");
    const [error,setError]=useState(false);


    // const apiUrl = process.env.API_URL;
    // const apikey = process.env.API_KEY;

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="8a4c41e0895ccefa83d820103caf7b8e";
    

    let getWeatherInfo= async()=>{

        try{
            let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonresponse=await response.json();
      console.log(jsonresponse);

      let result={
        city:city,
        temp:jsonresponse.main.temp,
        tempMin:jsonresponse.main.temp_min,
        tempMax:jsonresponse.main.temp_max,
        humidity:jsonresponse.main.humidity,
        fellsLike:jsonresponse.main.feels_like,
        weather:jsonresponse.weather[0].description,
      };
      console.log(result);
      return result;
        }catch(err){
           throw err;
        } 
    }

    let handleClick =(evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit= async(evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
          let newinfo= await  getWeatherInfo();
          updateInfo(newinfo);
        }catch(err){
            setError(true);
        }
      
    }

  return (
    <div className='SearchBox'>
       
        <br /> <br />   
      <form  onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="Search-City" variant="outlined" value={city}  required  onChange={handleClick}/>
      <br /> <br />
      <Button variant="contained" size="large" type='submit'>
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exits!</p>}
      </form>
    </div>
  )
}

export default SearchBox
