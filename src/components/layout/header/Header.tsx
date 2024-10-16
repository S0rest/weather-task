import { useStorageCounter } from '@/hooks/useStorageCounter'
import { ROUTE } from '@/utils/enums'
import { MoveRightIcon } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import s from './Header.module.scss'

const Header = () => {
	const counter = useStorageCounter()
	const location = useLocation()

	return (
		<header className={s.header}>
			<h2 className={s.header__title}>Weather Forecast</h2>
			{location.pathname === ROUTE.MAIN && counter > 0 && (
				<Link to={ROUTE.SAVED_CARDS} className={s.button}>
					<span className='mr-2'>
						<MoveRightIcon />
					</span>
					<span className='flex justify-center items-center'>
						<p className='mr-2'>Go to saved cards</p>
						<span className={s.counter}>{counter}</span>
					</span>
				</Link>
			)}
			{location.pathname === ROUTE.SAVED_CARDS && (
				<Link to={ROUTE.MAIN} className={s.button}>
					<span className='mr-2'>
						<MoveRightIcon />
					</span>
					<span className='flex justify-center items-center'>
						<p className='mr-2'>Go to cards</p>
					</span>
				</Link>
			)}
		</header>
	)
}

export default Header
