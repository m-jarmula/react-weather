import axios from 'axios';

const API_KEY = 'dd17b437cd16ba724e38e0e078bfb095';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  var url = `${ROOT_URL}&q=${city},us`;
  var request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
