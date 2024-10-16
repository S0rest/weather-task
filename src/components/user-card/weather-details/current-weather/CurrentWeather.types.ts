import { UserResponse } from '@/services/user.types'
import { WeatherResponse } from '@/services/weather.types'

export type CurrentWeatherProps = {
	weather: WeatherResponse
	user?: UserResponse
}
