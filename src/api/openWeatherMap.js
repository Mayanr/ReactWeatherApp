import axios from "axios";

const OPEN_WEATHER_MAP_URL = "https://api.openweathermap.org/data/2.5/weather?appid=5d6f5386b2edd1e41cec23d4d3149450&units=imperial";


export default { getTemp(loc){
    var encodedLocation = encodeURIComponent(loc)
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`
    console.log(requestURL)
    
    return axios.get(requestURL).then(res=>
        {if(res.data.cod && res.data.message){
            throw new Error(res.data.message);
        } else {
            return res.data.main.temp;
        }
    }, (res=>{
        throw new Error(res.data.message);
            })
        )
    }
}