import { UserResponse } from '@/services/user.types'

export type UserCardProps = {
	user: UserResponse
	action: 'saved' | 'default'
}