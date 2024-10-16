import { UserResponse } from '@/services/user.types'

export type WeatherDetailsProps = {
	user: UserResponse
	action: "saved" | "default"
}