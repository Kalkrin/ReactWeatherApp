const CurrentWeather = (props: any) => {
	return (
		<div className='curWeatherBlock'>
			<div className='weatherBlockPicture'>
				<img
					src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
				/>
			</div>
			<div className='weatherBlockItem'>
				<p>{props.weather.weather[0].main}</p>
				<p>{props.weather.weather[0].description}</p>
			</div>
			<div className='weatherBlockItem'></div>
			<div className='weatherBlockItem'></div>
			<div className='weatherBlockItem'></div>
			<div className='weatherBlockItem'></div>
			<div className='weatherBlockItem'></div>
			<div className='weatherBlockItem'></div>
		</div>
	);
};

export default CurrentWeather;
