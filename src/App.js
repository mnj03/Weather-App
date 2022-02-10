// http://api.openweathermap.org/
import React, { useState } from "react";
import axios from 'axios';
import './App.css';

const api = {
  key: "8c2a096453fb47ade71a65fb1354cd91",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  {/*}
  const [weather, cWeather] = useState({
    day: "",
    date: "",
    city: "",
  });

 const [fetching] = useState(true);
 

 const [day, cDay] = useState([]);

  const updateWeather = (jsonResponse) => {
    cWeather({
      day: jsonResponse.day,
      date: jsonResponse.date,
      city: jsonResponse.city
    });
  };

  const status = (jsonResponse) => {
    if (jsonResponse.status >= 200 && jsonResponse.status < 300) {
      return Promise.resolve(jsonResponse);
    } else {
      return Promise.reject(new Error(jsonResponse.statusText));
    }
  }

    fetching(true);{
    axios
      .get("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8c2a096453fb47ade71a65fb1354cd91")
      
      
      .then(status)
      .then((res) => {
        updateWeather(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally((useState) => fetching(false));
  };
  */}

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        
        {/* SEARCH BOX */}
        <div className="searchBox">
          <input 
          type="text"
          className="searchBar"
          placeholder="Search location..."/>
        </div>

        {/* SHOWS LOCATION & DATE */}
        <div className="locationBox">
          <div className="location">London, UK</div>
          <div className="date"> {dateBuilder(new Date())} </div>
        </div>

        {/* WEATHER */}
        <div className="weatherBox">

            <div className="weatherItem" className="tempMin">
              <div className="tempText">min</div>
              10°c
            </div>

            <div className="weatherItem" className="tempMax">
              <div className="tempText">max</div>
              20°c
            </div>

            <div className="weatherItem" className="windSpeed">
              <div className="windSpeedText">mph</div>
              5
            </div>

            <div className="weatherItem" className="weatherEmoji">🌤️</div>
            <div className="weatherItem" className="weatherText">Sunny with clouds...</div>
          
          </div>
        

      </main>

      <footer>
      </footer>


    </div>
  );
};

export default App;
