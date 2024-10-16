import { Outlet } from 'react-router'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = () => {
	return (
		<main className='w-full min-h-full flex flex-col'>
			<Header />
			<section className='flex-auto bg-[#232931] flex justify-center items-center'>
				<Outlet />
			</section>
			<Footer />
		</main>
	)
}

export default Layout
