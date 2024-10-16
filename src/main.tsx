import '@styles/fonts.scss'
import '@styles/styles.scss'
import '@styles/utils.scss'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'query/queryClient.ts'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</StrictMode>
)
