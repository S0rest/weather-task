import { UserResponse } from '@/services/user.types'
import { getCardProfiles } from '@/utils/cardStorage'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export const useStorageCards = () => {
	const [cards, setCards] = useState<UserResponse[]>([])
	const location = useLocation()

	useEffect(() => {
		const updateCards = () => {
			// console.log('storage...')
			const profiles = getCardProfiles()			
			if (profiles) setCards(profiles)
		}

		updateCards()

		const handleStorageChange = (e: StorageEvent) => {
			if (e.type === 'cards-storage' || e.type === 'storage') updateCards()
		}

		window.addEventListener(
			'cards-storage',
			handleStorageChange as EventListener
		)
		window.addEventListener('storage', handleStorageChange)

		return () => {
			window.removeEventListener(
				'cards-storage',
				handleStorageChange as EventListener
			)
			window.removeEventListener('storage', handleStorageChange)
		}
	}, [location.pathname])

	return cards
}
