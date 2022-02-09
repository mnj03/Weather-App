// http://api.openweathermap.org/
import React, { useState } from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import axios from 'axios';
import './App.css';


function App() {
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

  return (
    <>
      <h1>Weather</h1>
      <main>
        <p>
          <b>DAY:</b> {weather.day}{" "}
        </p>
        <p>
          <b>DATE:</b> {weather.date}{" "}
        </p>
        <p>
          <b>CITY:</b> {weather.city}{" "}
        </p>
      </main>

      <footer>
      </footer>


    </>
  );
};

export default App;
