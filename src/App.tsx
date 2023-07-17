import { useEffect, useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Banner from './components/Banner';
import SearchBox from './components/SearchBox';
import CurrentWeather from './components/CurrentWeather';

function App() {
  const [location, setLocation] = useState({ 'lat': 0, 'lon': 0 });
  const [currentWeather, setCurrentWeather] = useState(null as any);
  const [forecast, setForecast] = useState(null as any);

  const apiKey: string = 'bef583c6f2567b3008fe4068a240d791';

  useEffect(() => {
    const checkLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      }
    };
    checkLocation();
  }, [location]);

  const success = async (position: any) => {
    if (location.lat == 0 && location.lon === 0) {
      setLocation({
        'lat': position.coords.latitude,
        'lon': position.coords.longitude,
      });
    } else {
      setCurrentWeather(await fetchCurrentWeather());
      setForecast(await fetchForecast());
    }
  };

  const search = async (search:string) => {
    setCurrentWeather(await fetchCurrentWeatherBySearch(search));
    setForecast(await fetchForecastBySearch(search));
  };

  const error = () => {
    alert('Could not retrieve location. Please search for weather data.');
  };

  //Get CurrentWeather
  const fetchCurrentWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`
    );
    const data = await res.json();
    return data;
  };

  const fetchCurrentWeatherBySearch = async (search:string) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`
    );
    const data = await res.json();
    return data;
  }

  //Get Forecast
  const fetchForecast = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`
    );
    const data = await res.json();
    return data;
  };

  const fetchForecastBySearch = async (search:string) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${apiKey}`
    );
    const data = await res.json()
    return data;
  };

  return (
    <div className='App'>
      <Banner />
      <div className='container'>
        {currentWeather && <SearchBox location={`${currentWeather.name}, ${currentWeather.sys.country}`} search={search} /> } 
        {currentWeather && <CurrentWeather weather={currentWeather} />}
      </div>
      <div className='flexContainer'>
        {forecast && <CardContainer forecast={forecast} />}
      </div>
    </div>
  );
}

export default App;
