import React from 'react'
import Link from 'next/link'
import footerStyles from './footer.module.css';

function Footer() {
  return (
	<div className={footerStyles.container}>
		<Link href='https://fb.com'>
			<i class='bx bxl-facebook-circle bx-tada' style={{color: "#4267B2"}}></i>
		</Link>
		<Link href='https://github.com' >
			<i class='bx bxl-github bx-tada' style={{background: "white"}}></i>
		</Link>
		<Link href='https://linkedin.com'>
			<i class='bx bxl-linkedin-square bx-tada'  style={{color: "#2867B2"}}></i>
		</Link>
	</div>
  )
}

export default Footer