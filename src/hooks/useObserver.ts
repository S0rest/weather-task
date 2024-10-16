import { ObserverType } from '@/components/types/hooks.types'
import { useRef, useState, useCallback } from 'react'

export const useObserver = ({
	isLoading,
	hasNextPage,
	setPage,
}: ObserverType) => {
	const intObserver = useRef<IntersectionObserver>()

	const [visibleElements, setVisibleElements] = useState<Set<HTMLElement>>(
		new Set()
	)

	const contentRef = useCallback(
		(crd: HTMLDivElement) => {
			if (isLoading || !crd || !hasNextPage) return

			if (intObserver.current) intObserver.current.disconnect()

			intObserver.current = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						const targetElement = entry.target as HTMLElement

						if (
							entry.isIntersecting &&
							hasNextPage &&
							!visibleElements.has(targetElement)
						) {
							setVisibleElements(prev => {
								const newSet = new Set<HTMLElement>(prev)
								newSet.add(targetElement)
								return newSet
							})
							// console.log('We are near the last card!')
							setPage(prev => prev + 1)
						}
					})
				},
				// { threshold: 0.5 } // displayed when 50% is visible
			)

			if (crd) intObserver.current.observe(crd)

			visibleElements.forEach(element =>
				intObserver.current?.unobserve(element)
			)
		},
		[isLoading, hasNextPage, visibleElements, setPage]
	)

	return contentRef
}