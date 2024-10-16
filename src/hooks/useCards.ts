import { CardsType, CardTuple } from '@/components/types/hooks.types'
import { UserResponse } from '@/services/user.types'
import { useEffect, useState } from 'react'

export const useCards = ({ isLoading, card }: CardsType) => {
	const [cardsData, setCardsData] = useState<UserResponse[]>([])
	useEffect(() => {
		if (isLoading || !card) return

		setCardsData(prev => {
			const uniqueCards = new Set(prev.map(c => c.login.uuid))

			card.forEach(c => {
				uniqueCards.add(c.login.uuid)
			})

			const newCardData = Array.from(uniqueCards).map(cardId => {
				const newDataCard = card.find(c => c.login.uuid === cardId)

				if (!newDataCard)
					return prev.find(c => c.login.uuid === cardId) as UserResponse

				return newDataCard
			})

			return newCardData
		})
	}, [card, isLoading])

	return [cardsData, setCardsData] as CardTuple
}