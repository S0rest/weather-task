import { getIconFromCode } from '@/utils/helpers'
import {
	MapPinIcon,
	ThermometerIcon,
	ThermometerSnowflakeIcon,
	ThermometerSunIcon,
} from 'lucide-react'
import React from 'react'
import { CurrentWeatherProps } from './CurrentWeather.types'

const CurrentWeather = ({ weather, user }: CurrentWeatherProps) => {
	const currentDayTemp =
		weather && weather.hourly && weather.hourly.temperature_2m
			? weather.hourly.temperature_2m.slice(0, 23)
			: []

	return (
		<div className='mb-5'>
			{user?.location && (
				<>
					<span className='flex items-center my-4'>
						<span className='mr-2'>
							<MapPinIcon />
						</span>
						<p>
							{user.location.country +
								', ' +
								user.location.state +
								', ' +
								user.location.city}
						</p>
					</span>
				</>
			)}
			<span className='flex items-center justify-center mb-4'>
				{React.createElement(
					getIconFromCode(weather.current_weather.weathercode).icon
				)}
				<p className='ml-3'>
					{getIconFromCode(weather.current_weather.weathercode).description}
				</p>
			</span>
			<span className='flex items-center mb-2'>
				<ThermometerIcon />
				<p className='ml-3'>{weather.current_weather.temperature}°C</p>
			</span>
			<span className='flex items-center justify-between mb-2'>
				<span className='flex items-center justify-center'>
					<ThermometerSnowflakeIcon />
					<p className='ml-3'>{Math.min(...currentDayTemp)}°C</p>
				</span>
				<span className='flex items-center justify-center'>
					<ThermometerSunIcon />
					<p className='ml-3'>{Math.max(...currentDayTemp)}°C</p>
				</span>
			</span>
		</div>
	)
}

export default CurrentWeather
