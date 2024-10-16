import { WeatherType } from '@/components/types/hooks.types'
import { weatherService } from '@/services/weather.service'
import { useQuery } from '@tanstack/react-query'

export const useWeather = ({ latitude, longitude }: WeatherType) => {
	return useQuery({
		queryKey: ['weather', latitude, longitude],
		queryFn: () => weatherService.getWeather({ latitude, longitude }),
		retry: 0,
		refetchInterval: 300000, // refetch every 5 min
	})
}
