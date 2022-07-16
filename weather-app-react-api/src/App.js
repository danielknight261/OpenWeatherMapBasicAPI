import React, {useState} from "react"
import axios from "axios"

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState ('')

const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7bfd5d49f5095f73ef7b60ef91d31b16`
 
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
           <p>London</p>
          </div>
          <div className="temp">
           <h1>22C</h1>
          </div>
          <div className="description">
           <p>Sunny</p>
          </div>
        </div> 
       <div className="bottom">
        <div className="feels">
         <p className="bold">35C</p>
         <p>Feels Like</p>
        </div>
        <div className="humidity">
         <p className="bold">20%</p>
         <p>Humidity</p>
        </div>  
        <div className="wind">
         <p className="bold">5 MPH</p>
         <p>Wind Speed</p>
        </div>  
       </div>
     </div> 
    </div>
    
  );
}

export default App;


/*API using axios
new use STate hook */