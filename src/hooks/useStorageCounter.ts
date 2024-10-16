import { getCardCounter } from '@/utils/cardStorage'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export const useStorageCounter = () => {
	const [counter, setCounter] = useState<number>(0)
	const location = useLocation()

	useEffect(() => {
		const updateCounter = () => {
			// console.log('counter...');
			const storedCounter = getCardCounter()
			setCounter(storedCounter)
		}

		updateCounter()

		const handleStorageChange = (e: StorageEvent) => {
			if (e.type === 'counter-storage' || e.type === 'storage') updateCounter()
		}

		window.addEventListener(
			'counter-storage',
			handleStorageChange as EventListener
		)
		window.addEventListener('storage', handleStorageChange)

		return () => {
			window.removeEventListener(
				'counter-storage',
				handleStorageChange as EventListener
			)
			window.removeEventListener('storage', handleStorageChange)
		}
	}, [location.pathname])

	return counter
}
