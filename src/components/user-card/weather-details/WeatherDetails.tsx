import { CardLoader } from '@/assets/CommonIcons'
import { useWeather } from '@/hooks/useWeather'
import ActionButtons from '../action-buttons/ActionButtons'
import CurrentWeather from './current-weather/CurrentWeather'
import { WeatherDetailsProps } from './WeatherDetails.types'

const WeatherDetails = ({ user, action }: WeatherDetailsProps) => {
	const { data, isLoading, isError } = useWeather({
		latitude: user.location.coordinates.latitude,
		longitude: user.location.coordinates.longitude,
	})

	return (
		<>
			{isLoading ? (
				<div className='flex items-center justify-center'>
					<CardLoader />
				</div>
			) : (
				!isError &&
				data && (
					<>
						<CurrentWeather weather={data} />
						<ActionButtons weather={data} user={user} action={action} />
					</>
				)
			)}
		</>
	)
}

export default WeatherDetails
