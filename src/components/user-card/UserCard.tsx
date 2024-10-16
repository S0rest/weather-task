import { forwardRef } from 'react'
import UserDetails from './user-details/UserDetails'
import s from './UserCard.module.scss'
import { UserCardProps } from './UserCard.types'
import WeatherDetails from './weather-details/WeatherDetails'

const UserCard = forwardRef<HTMLDivElement, UserCardProps>(
	({ user, action }, ref) => {
		return (
			<div className={s.cardsColumn} ref={ref}>
				<div className={s.userCard}>
					<UserDetails user={user} />
					<WeatherDetails user={user} action={action} />
				</div>
			</div>
		)
	}
)

export default UserCard
