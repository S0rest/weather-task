import Layout from '@/components/layout/Layout'
import RequireStorageCards from '@/components/validation/RequireStorageCards'
import SavedCards from '@/page/saved-cards/SavedCards'
import UserCards from '@/page/user-cards/UserCards'
import { ROUTE } from '@/utils/enums'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path={ROUTE.MAIN} element={<UserCards />} />
					<Route element={<RequireStorageCards />}>
						<Route path={ROUTE.SAVED_CARDS} element={<SavedCards />} />
					</Route>
				</Route>
				<Route path='*' element={<Navigate to={ROUTE.MAIN} />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
