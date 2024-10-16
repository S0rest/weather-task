import { XIcon } from 'lucide-react'
import { useEffect } from 'react'
import { WeatherModalProps } from '../WeatherModal.types'
import s from './ModalContainer.module.scss'

const ModalContainer = ({ setIsOpen, isOpen, children }: WeatherModalProps) => {
	useEffect(() => {
		const root = document.getElementById('root')
		if (root) {
			if (isOpen) {
				root.style.overflow = 'hidden'
			} else {
				root.style.overflow = 'auto'
			}
		}

		return () => {
			if (root) {
				root.style.overflow = 'auto'
			}
		}
	}, [isOpen])

	const handleCloseModal = () => {
		const root = document.getElementById('root')
		if (root) {
			root.style.overflow = 'auto'
		}
		setIsOpen(false)
	}

	return (
		<>
			<div className={s.darkBG} onClick={handleCloseModal} />
			<div className={`${s.centered} ${s.compact}`}>
				<div className={s.modal}>
					<div className={s.modalHeader}>
						<h5 className={s.heading}>Weather forecast</h5>
						<button className={s.closeBtn} onClick={handleCloseModal}>
							<XIcon />
						</button>
					</div>
					{children}
				</div>
			</div>
		</>
	)
}

export default ModalContainer
