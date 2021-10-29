// api url: api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
// api key: 5ce4087d015baa18617d85c961cefaa8
import './weather.css'
import axios from "axios";
import { useEffect , useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun, faMoon, faCloudSun, faSmog, faSnowflake, faCloud, faCloudShowersHeavy, faCloudMoon, faCloudMoonRain, faCloudSunRain, faBolt} from '@fortawesome/free-solid-svg-icons'

function Weather(){

    const [temp, setTemp] = useState(0)
    const [weatherDescriptor, setWeatherDescriptor] = useState("Sunny")
    const [weatherCode, setWeatherCode] = useState('01d')
    
    function getIcon(){
        let size = "fa-4x";
        switch(weatherCode){
            case "01d": return(<FontAwesomeIcon icon={faSun} className={size}/>); //Clear Day
            case "01n": return(<FontAwesomeIcon icon={faMoon} className={size}/>); //Clear Night
            case "02d": return(<FontAwesomeIcon icon={faCloudSun} className={size}/>); //Partly Cloudy Day
            case "02n": return(<FontAwesomeIcon icon={faCloudMoon} className={size}/>); //Partly Cloudy Night
            case "03d": return(<FontAwesomeIcon icon={faCloud} className={size}/>); //Overcast Day
            case "03n": return(<FontAwesomeIcon icon={faCloud} className={size}/>); //Overcast Night
            case "04d": return(<FontAwesomeIcon icon={faCloud} className={size}/>); //Overcast Day 2
            case "04n": return(<FontAwesomeIcon icon={faCloud} className={size}/>); //Overcast Night 2
            case "09d": return(<FontAwesomeIcon icon={faCloudSunRain} className={size}/>); //Rain Shower Day
            case "09n": return(<FontAwesomeIcon icon={faCloudMoonRain} className={size}/>); //Rain Shower Night
            case "10d": return(<FontAwesomeIcon icon={faCloudShowersHeavy} className={size}/>); //Rain Day
            case "10n": return(<FontAwesomeIcon icon={faCloudShowersHeavy} className={size}/>); //Rain Night
            case "11d": return(<FontAwesomeIcon icon={faBolt} className={size}/>); //ThunderStorm Day
            case "11n": return(<FontAwesomeIcon icon={faBolt} className={size}/>); //ThunderStorm Night
            case "13d": return(<FontAwesomeIcon icon={faSnowflake} className={size}/>); //Snow Day
            case "13n": return(<FontAwesomeIcon icon={faSnowflake} className={size}/>); //Snow Night
            case "50d": return(<FontAwesomeIcon icon={faSmog} className={size}/>); //Mist Day
            case "50n": return(<FontAwesomeIcon icon={faSmog} className={size}/>); //Mist Night
            default: return
        }

    }
    function getWeather(){
        axios.get("https://api.openweathermap.org/data/2.5/weather?lat=39.4808&lon=-106.0676&appid=5ce4087d015baa18617d85c961cefaa8&units=imperial").then((response) => {
            // console.log(response.data)
            setTemp(Math.round(response.data.main.temp))
            // console.log(response.data.main.temp)
            setWeatherDescriptor(response.data.weather[0].main)
            setWeatherCode(response.data.weather[0].icon)
            console.log("Weather Updated!")
        });
    }

    useEffect(() => {
        getWeather()
        setInterval(getWeather, 60000)
    });


    return(
        <div className="Weather">
            <div>
                <span className="temp"> {temp}<span>&deg;</span></span>
                <span className="weatherType">{weatherDescriptor}</span>
            </div>
            {getIcon()}
        </div>
    );
}

export default Weather;