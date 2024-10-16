import WeatherModal from '@/components/weather-modal/WeatherModal'
import { addItemToStorage, removeItemFromStorage } from '@/utils/helpers'
import { useState } from 'react'
import CurrentWeather from '../weather-details/current-weather/CurrentWeather'
import { ActionButtonsProps } from './ActionButtons.types'
import s from './ActionsButtons.module.scss'

const ActionButtons = ({ weather, user, action }: ActionButtonsProps) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClickSave = () => {
		addItemToStorage(user!)
	}

	const handleClickDelete = () => {
		removeItemFromStorage(user!)
	}

	return (
		<div className={s.cardActions}>
			{action === 'default' ? (
				<button className={s.saveBtn} onClick={handleClickSave}>
					Save
				</button>
			) : (
				<button className={s.deleteBtn} onClick={handleClickDelete}>
					Delete
				</button>
			)}
			<button className={s.weatherBtn} onClick={() => setIsOpen(true)}>
				Weather
			</button>
			<WeatherModal isOpen={isOpen} setIsOpen={setIsOpen}>
				<CurrentWeather weather={weather} user={user} />
			</WeatherModal>
		</div>
	)
}

export default ActionButtons
