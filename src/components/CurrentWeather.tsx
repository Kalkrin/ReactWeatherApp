import { celcFromKalv, mPerSecToKmPerHour } from '../utils/Utils';

const CurrentWeather = (props: any) => {
  const weatherData = props.weather;
  return (
    <div className='curWeatherBlock'>
      <div className='weatherBlockPicture'>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        />
      </div>
      <div className='weatherBlockItem'>
        <p>{weatherData.weather[0].main}</p>
        <p>{weatherData.weather[0].description}</p>
      </div>
      <div className='weatherBlockItem'>
        <p>Temperature</p>
        <p>{`${celcFromKalv(weatherData.main.temp)}`}&deg;</p>
      </div>
      <div className='weatherBlockItem'>
        <p>Feels Like</p>
        <p>{`${celcFromKalv(weatherData.main.feels_like)}`}&deg;</p>
      </div>
      <div className='weatherBlockItem'>
        <p>Humidity</p>
        <p>{`${weatherData.main.humidity}%`}</p>
      </div>
      <div className='weatherBlockItem'>
        <p>Wind Speed</p>
        <p>{`${mPerSecToKmPerHour(weatherData.wind.speed)}km/h`}</p>
      </div>
      <div className='weatherBlockItem'>
        <p>Cloud Coverage</p>
        <p>{`${weatherData.clouds.all}%`}</p>
      </div>
      <div className='weatherBlockItem'>
        <p>Rainfall</p>
        {weatherData.rain ? <p>{`${weatherData.rain['1h']}mm`}</p> : <p>0mm</p>}
      </div>
    </div>
  );
};

export default CurrentWeather;
