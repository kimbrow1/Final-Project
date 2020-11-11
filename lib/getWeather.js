import axios from "axios";
import { response } from "express";
import * as state from "../store";

axios;

  .get(
    "http://api.openweathermap.org/data/2.5/weather?q=nashville&appid=3fa03a84bcbee6ee40906d4f6d74b43b"
  )
  .then(response => {
    console.log(response);
    state.Home.weather.city = response.data.name;
    state.Home.weather.temp = response.data.main.temp;
    state.Home.weather.description = response.data.weather.main;
    console.log("Weather data retrived");
  });
