import { UserResponse } from '@/services/user.types'
import { WeatherResponse } from '@/services/weather.types'

export type ActionButtonsProps = {
	weather: WeatherResponse
	user: UserResponse
	action: 'default' | 'saved'
}
