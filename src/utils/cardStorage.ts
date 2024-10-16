import { UserResponse } from '@/services/user.types'

export const getCardCounter = (): number => {
	const counter = localStorage.getItem('card_counter')
	return counter ? JSON.parse(counter) : 0
}

export const setCardCounter = (counter: number) => {
	localStorage.setItem('card_counter', JSON.stringify(counter))
}

export const getCardProfiles = (): UserResponse[] | null => {
	const profiles = localStorage.getItem('profile_card')
	return profiles ? JSON.parse(profiles) : null
}

export const setCartProfiles = (data: UserResponse[]) => {
	localStorage.setItem('profile_card', JSON.stringify(data))
}

export const clearCardStorage = () => {
	localStorage.removeItem('card_counter')
	localStorage.removeItem('profile_card')
}
