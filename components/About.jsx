import React from 'react'
import aboutStyles from './about.module.css'
import Layout from './LayoutScrollEffect'
function About() {
  return (
	<div className={`${aboutStyles['container']}`} id='about'>
		<Layout animation='animate__zoomInLeft'>
			<p className={`${aboutStyles.header}`}>
				Hello, I'm Ha
				<span style={{color: '#49A8AD'}}>
					<strong> (⌐▀͡ ̯ʖ▀) </strong>
				</span>
			</p>
		</Layout>
		<Layout animation='animate__zoomInRight'>
			<p className="animate__animated">I'm Computer Science student in Thang Long University.</p>
		</Layout>
	</div>
  )
}

export default About