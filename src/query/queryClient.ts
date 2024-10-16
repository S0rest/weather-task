import { APIResponse } from '@/services/user.types'
import { WeatherResponse } from '@/services/weather.types'
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			placeholderData: (prev: APIResponse | WeatherResponse) => prev,
		},
	},
})
