import { celcFromKalv, mPerSecToKmPerHour } from '../utils/Utils';

const Card = (props: any) => {
  const weather = props.weather;
  return (
    <div className='weatherCard'>
      <div className='weatherCardImage'>
        <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
      </div>
      <div className='weatherCardItem'>
        <p>{weather.weather[0].main}</p>
        <p>{weather.weather[0].description}</p>
      </div>
      <div className='weatherCardItem'>
        <p>{`Temperature: ${celcFromKalv(weather.main.temp)}`}&deg;</p>
      </div>
      <div className='weatherCardItem'>
      <p>{`Feels like: ${celcFromKalv(weather.main.feels_like)}`}&deg;</p>
      </div>
      <div className='weatherCardItem'>
      <p>{`Humidity: ${weather.main.humidity}%`}</p>
      </div>
      <div className='weatherCardItem'>
      <p>{`Wind Speed: ${mPerSecToKmPerHour(weather.wind.speed)}km/h`}</p>
      </div>
      <div className='weatherCardItem'>
      <p>{`Cloud Coverage: ${weather.clouds.all}%`}</p>
      </div>
      <div className='weatherCardItem'>
        <p>Rainfall: {weather.rain ? `${weather.rain['3h']}mm` : '0mm'}</p>
      </div>
    </div>
  );
};

export default Card;
