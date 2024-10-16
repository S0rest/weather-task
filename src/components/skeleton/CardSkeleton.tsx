import s from '../user-card/UserCard.module.scss'
import Skeleton from './Skeleton'

const CardSkeleton = () => {
	return (
		<div className={s.cardsColumn}>
			<div className={s.userCard}>
				<div className='flex flex-col items-center h-full mb-5'>
					<Skeleton classes='image' />
					<Skeleton classes='title width-50' />
					<span className='my-2 w-[30px]'>
						<Skeleton classes='text width-100' />
					</span>
					<Skeleton classes='text width-100' />
					<span className='w-full mt-2 mb-12'>
						<Skeleton classes='text width-100' />
					</span>
					<Skeleton classes='title width-50' />
					<span className='w-full mt-2'>
						<Skeleton classes='text width-50' />
					</span>
					<span className='flex items-center justify-between mt-2 w-full gap-5 mb-12'>
						<Skeleton classes='text width-50' />
						<Skeleton classes='text width-50' />
					</span>
					<div className='flex items-center justify-between w-full gap-5'>
						<Skeleton classes='button width-100' />
						<Skeleton classes='button width-100' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardSkeleton
