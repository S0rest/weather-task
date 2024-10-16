import { getCardProfiles } from '@/utils/cardStorage'
import { ROUTE } from '@/utils/enums'
import { Navigate, Outlet, useLocation } from 'react-router'

const RequireStorageCards = () => {
	const profiles = getCardProfiles()
	const location = useLocation()

	return profiles && profiles.length > 0 ? (
		<Outlet />
	) : (
		<Navigate to={ROUTE.MAIN} state={{ from: location }} replace />
	)
}

export default RequireStorageCards
