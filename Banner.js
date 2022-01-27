
import './Banner.css';
import React,{ useState ,useEffect}from 'react'
import {TiWeatherPartlySunny } from "react-icons/ti";

import axios from 'axios'
import { TiWeatherSnow} from "react-icons/ti";
function Banner() {
    const API_Key='007545f894687e688700b9320e5dc0db'
const[weatherData,setweatherData]=useState([])
const[city,setCity]=useState('')
    const getWeather=()=>{
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city }&appid=007545f894687e688700b9320e5dc0db`).then((Response)=>{
        console.log(Response.data)
      setweatherData(Response.data)
      })
}


     
    const searches=(e)=>{
    console.log(e.target.value)
    setCity(e.target.value)
    }
    return (

            <div className='app'>
                
                <div className='textBox'>
             <input type="text" className='textbox' placeholder='Search Place...' onChange={(e)=> searches(e)} onKeyPress={getWeather}></input> 

             </div>
             
             {
                weatherData.length===0 ?
                    <div >
                        <h1 className='initial'>Whereever you go, no matter what</h1>
                        <h1 className='initial'>the weather, always bring your </h1>
                        <h1 className='initial'>own sunshine.</h1>
                        <p className='init'> - Antony J.D' Angelo</p>
                        
                        </div>
                   : 
                    <div>
                    <div className='location-box'>
                        <div className='location'>{weatherData.name}, {weatherData.sys.country}</div>
                       
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                             <h1><TiWeatherPartlySunny/></h1>
                                {Math.round(weatherData.main.temp / 10)} °C
                            </div>
                        </div>
                        </div>
                   
            }
                
             </div>
             
    )
}

export default Banner
