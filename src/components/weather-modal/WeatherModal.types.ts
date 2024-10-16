import { Dispatch, ReactNode, SetStateAction } from 'react'

export type WeatherModalProps = {
	setIsOpen: Dispatch<SetStateAction<boolean>>
	isOpen: boolean
	children: ReactNode
}
