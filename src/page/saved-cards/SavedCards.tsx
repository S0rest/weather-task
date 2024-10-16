import UserCard from '@/components/user-card/UserCard'
import { useStorageCards } from '@/hooks/useStorageCards'
import { createRef } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import s from '../user-cards/UserCards.module.scss'

const SavedCards = () => {
	const profiles = useStorageCards()

	return (
		<div className='container'>
			<TransitionGroup className={s.cardsBody}>
				{profiles &&
					profiles.map(u => {
						const nodeRef = createRef<HTMLDivElement>()
						return (
							<CSSTransition
								key={u.login.uuid}
								timeout={500}
								classNames={'cardItem'}
								nodeRef={nodeRef}
							>
								<UserCard ref={nodeRef} user={u} action='saved' />
							</CSSTransition>
						)
					})}
			</TransitionGroup>
		</div>
	)
}

export default SavedCards
