import { createPortal } from 'react-dom'
import ModalContainer from './container/ModalContainer'
import { WeatherModalProps } from './WeatherModal.types'

const WeatherModal = ({ setIsOpen, isOpen, children }: WeatherModalProps) => {
	return (
		<>
			{isOpen &&
				createPortal(
					<ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
						{children}
					</ModalContainer>,
					document.body
				)}
		</>
	)
}

export default WeatherModal
