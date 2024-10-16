import { UserResponse } from '@/services/user.types'
import { Dispatch, SetStateAction } from 'react'

export type ObserverType = {
	isLoading: boolean
	hasNextPage: boolean
	setPage: Dispatch<SetStateAction<number>>
}

export type CardsType = {
	isLoading: boolean
	card: UserResponse[] | undefined
}

export type CardTuple = [
	UserResponse[],
	Dispatch<SetStateAction<UserResponse[]>>
]

export type WeatherType = {
	latitude: number
	longitude: number
}
