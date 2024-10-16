import { WeatherType } from '@/components/types/hooks.types'
import { URL_WEATHER_API } from '@utils/consts'
import axios, { AxiosResponse } from 'axios'
import { WeatherResponse } from './weather.types'

export const weatherService = {
	getWeather: async ({
		latitude,
		longitude,
	}: WeatherType): Promise<WeatherResponse> => {
		const response: AxiosResponse<WeatherResponse, Error> = await axios.get(
			URL_WEATHER_API +
				`?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`
		)
		return response.data
	},
}
