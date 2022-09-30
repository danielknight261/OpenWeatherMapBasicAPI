import React, {useState} from "react"
import axios from "axios"

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState ('')

const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7bfd5d49f5095f73ef7b60ef91d31b16`
 
 const searchLocation = (event) => {
  if (event.key === 'Enter') {
  axios.get(url).then((response) => {
    setData(response.data)
    console.log(response.data)
  })
  setLocation('')
 }
}
  
 return (
    <div className="app">
     <div className="search">
      <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
      />
     </div>
      <div className="container">
        <div className="top">
          <div className="location">
           <p>{data.name}</p>
          </div>
          <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}     {/*data.main had to be used fist because it did not like the dat.main.temp as it would not recognise the temp child. &toFixed() remove decimals */}
          </div>
          <div className="mintemp">
          {data.main ? <p>{data.main.temp_min.toFixed()}°C Min Temp</p> : null}
          
          </div>
          <div className="maxtemp">
          {data.main ? <p>{data.main.temp_max.toFixed()}°C Max Temp</p> : null}
          
          </div>

          <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}   {/* so weather was in an object so had to follow it similar to temp but link to the array */}
          </div>
        </div> 
{/*data.name undefined beans the bottom div will no show unless you type in the the enter location input box */}
{data.name !== undefined &&   
      
       <div className="bottom">
        <div className="feels">
        {data.main ? <p className="bold">{data.main.feels_like.toFixed()}</p> : null}
         <p>Feels Like</p>
        </div>
        <div className="humidity">
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
        <p>Humidity</p>
        </div>  
        <div className="wind">
        {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null}
         <p>Wind Speed</p>
        </div>  
        <div className="visibility">
        {data.main ? <p className="bold">{data.visibility.toFixed()/100} %</p> : null}
        <p>Visibility</p>
        </div>
       </div>
      }  

     </div> 
    </div>
    
  );
}

export default App;


/*API using axios
new use STate hook */