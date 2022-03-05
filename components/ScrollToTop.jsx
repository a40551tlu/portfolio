import React from 'react'
import Link from 'next/link'

function ScrollToTop() {
  return (
	<div>
		<Link href='#about'>
			<a href="">Top⬆️</a>
		</Link>
		<style jsx>
			{
				`
					a {
						font-size: .75rem;
						position: fixed;
						right: .75rem;
						bottom: 2rem;
					}
				`
			}
		</style>
	</div>
  )
}

export default ScrollToTop