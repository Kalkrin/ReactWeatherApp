import { useEffect, useState } from 'react';
import Card from './Card';
import moment from 'moment';

const CardContainer = (props: any) => {
  const [forecasts, setForecasts] = useState([] as any);
  const forecastData: any = props.forecast;
  let forecastDay: number = Number(
    moment(forecastData.list[0].dt_txt).format('DD')
  );
  if(Number(moment().format('DD')) === forecastDay)
    forecastDay++;
  let forecastList: any[] = [];

  useEffect(() => {
    forecastData.list.forEach((forecast: any) => {
      if (
        moment(forecast.dt_txt).format('LT') === '12:00 PM' &&
        Number(moment(forecast.dt_txt).format('DD')) === forecastDay
      ) {
        forecastList.push(forecast);
        forecastDay++;
      }
    });

    setForecasts(forecastList);
  }, [forecastData]);

  return (
    <>
      { forecasts.length > 0 &&
        forecasts.map((cast: any, index: number) => {
          return(<Card key={index} weather={cast}/>)
        })}
    </>
  );
};

export default CardContainer;
