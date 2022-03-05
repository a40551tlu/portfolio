import React from 'react'

function Layout({children, animation}) {
	let currRef = React.useRef(null);
	let onScroll = (entries, observer) => {
		entries.forEach(
			(entry) => {
				entry.target.classList.toggle(animation, entry.isIntersecting)
		})
	}
	React.useEffect(() => {
		const observer = new IntersectionObserver(onScroll, {
			threshold: 0.8,
			rootMargin: '200px'
		});
		observer.observe(currRef.current);
		return () => {
			observer.unobserve(currRef.current);
		}
	}, [])
	return (
		<div ref={currRef} className='animate__animated animation-delay-2s'>
			{children}
		</div>
	)
}

export default Layout