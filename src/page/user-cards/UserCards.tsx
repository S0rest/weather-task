import CardSkeleton from '@/components/skeleton/CardSkeleton'
import UserCard from '@/components/user-card/UserCard'
import { useCards } from '@/hooks/useCards'
import { useObserver } from '@/hooks/useObserver'
import { useUsers } from '@/hooks/useUsers'
import { useEffect, useState } from 'react'
import s from './UserCards.module.scss'

const UserCards = () => {
	const [page, setPage] = useState(1)
	const { data, isLoading, isError } = useUsers(page)
	const [hasNextPage, setHasNextPage] = useState(true)
	const [cardsData, setCardsData] = useCards({
		isLoading,
		card: data?.results,
	})

	const lastCardRef = useObserver({
		isLoading,
		hasNextPage,
		setPage,
	})

	useEffect(() => {
		if (isLoading || isError || !data?.info?.page) return
		// Limit to 3 pages
		if (data.info.page >= 3) setHasNextPage(false)

		return () => {
			if (!hasNextPage) {
				setCardsData([])
			}
		}
	}, [data?.info?.page, hasNextPage, isError, isLoading, setCardsData])

	return (
		<div className='container'>
			<div className={s.cardsBody}>
				{isLoading || isError
					? [...Array(12).keys()].map(i => <CardSkeleton key={i} />)
					: cardsData.length !== 0 &&
					  cardsData.map((u, i) => {
							// Add ref to last card
							const ref = cardsData.length === i + 1 ? lastCardRef : null
							return (
								<UserCard
									key={u.login.uuid}
									ref={ref}
									user={u}
									action='default'
								/>
							)
					  })}
			</div>
		</div>
	)
}

export default UserCards
