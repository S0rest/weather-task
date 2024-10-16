import { FemaleIcon, MaleIcon } from '@/assets/CommonIcons'
import { AtSignIcon, MapPinIcon } from 'lucide-react'
import s from './UserDetails.module.scss'
import { UserDetailsProps } from './UserDetails.types'

const UserDetails = ({ user }: UserDetailsProps) => {
	return (
		<div className='flex flex-col items-center h-full mb-5'>
			<img src={user.picture.large} alt='profile' className={s.profileImg} />
			<h2 className={s.fullName}>{`${user.name.first} ${user.name.last}`}</h2>
			<span className='mb-2'>
				{user.gender === 'male' ? <MaleIcon /> : <FemaleIcon />}
			</span>
			<span className='flex items-center justify-center self-start mb-2'>
				<MapPinIcon />
				<p className='ml-2'>{user.location.country}</p>
			</span>
			<span className='flex items-center justify-center self-start mb-2'>
				<AtSignIcon />
				<p className='ml-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]'>
					{user.email}
				</p>
			</span>
		</div>
	)
}

export default UserDetails
