import { UserResponse } from '@/services/user.types'
import {
	CloudDrizzle,
	CloudFog,
	CloudHail,
	CloudLightning,
	CloudRain,
	CloudSnow,
	CloudSun,
	CloudSunRain,
	Sun,
	Zap,
} from 'lucide-react'
import {
	getCardCounter,
	getCardProfiles,
	setCardCounter,
	setCartProfiles,
} from './cardStorage'

export const getIconFromCode = (weatherCode: number) => {
	switch (weatherCode) {
		case 0:
			return {
				icon: Sun,
				description: 'Clear sky',
			}
		case 1:
		case 2:
		case 3:
			return {
				icon: CloudSun,
				description: 'Partly cloudy',
			}
		case 45:
		case 48:
			return {
				icon: CloudFog,
				description: 'Overcast',
			}
		case 51:
		case 53:
		case 55:
			return {
				icon: CloudSunRain,
				description: 'Drizzle',
			}
		case 56:
		case 57:
			return {
				icon: CloudDrizzle,
				description: 'Freezing Drizzle',
			}
		case 61:
		case 63:
		case 65:
			return {
				icon: CloudRain,
				description: 'Rain',
			}
		case 66:
		case 67:
			return {
				icon: CloudSnow,
				description: 'Freezing Rain',
			}
		case 71:
		case 73:
		case 75:
			return {
				icon: CloudHail,
				description: 'Snow fall',
			}
		case 77:
			return {
				icon: CloudSnow,
				description: 'Snow grains',
			}
		case 80:
		case 81:
		case 82:
			return {
				icon: CloudDrizzle,
				description: 'Rain showers',
			}
		case 85:
		case 86:
			return {
				icon: CloudSnow,
				description: 'Snow showers',
			}
		case 95:
			return {
				icon: CloudLightning,
				description: 'Thunderstorm slight',
			}
		case 96:
		case 99:
			return {
				icon: Zap,
				description: 'Thunderstorm with slight and heavy hail',
			}
		default:
			throw new Error('Unknown weather code')
	}
}

export const incrementCounter = () => {
	let counter = getCardCounter()
	return ++counter
}

export const decrementCounter = () => {
	let counter = getCardCounter()
	return --counter
}

const checkIfExistsItem = (profiles: UserResponse[], card: UserResponse) => {
	return profiles.filter(p => p.login.uuid === card.login.uuid).length > 0
}

export const addItemToStorage = (card: UserResponse) => {
	const profiles = getCardProfiles()

	// Check if profiles exists
	if (profiles) {
		// Check if item already exists
		const isExists = checkIfExistsItem(profiles, card)

		if (!isExists) {
			// copy previous arr, add card
			setCartProfiles([...profiles, card])

			const counter = incrementCounter()
			setCardCounter(counter)

			// notify listeners
			window.dispatchEvent(new StorageEvent('counter-storage'))
		}
	} else {
		// create new arr, add card
		setCartProfiles([{ ...card }])

		const counter = incrementCounter()
		setCardCounter(counter)

		// notify listeners
		window.dispatchEvent(new StorageEvent('counter-storage'))
	}
}

export const removeItemFromStorage = (card: UserResponse) => {
	const profiles = getCardProfiles()
		if (!profiles) return

		// update storage
		const result = profiles.filter(p => p.login.uuid !== card.login.uuid)
		setCartProfiles(result)

		const counter = decrementCounter()
		setCardCounter(counter)

		// notify listeners
		window.dispatchEvent(new StorageEvent('local-storage'))
		window.dispatchEvent(new StorageEvent('cards-storage'))
}