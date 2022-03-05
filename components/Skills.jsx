import React from 'react'
import skillsStyles from './skills.module.css'
function Skills() {
	return (
		<div className={`${skillsStyles.container}`} id='skill'>
			<h1 className={skillsStyles.title}>🧰 My Skills: </h1>
			<ul className={skillsStyles.list}>
				<ul>
					<h3>Front-end:</h3>
					<li>
						<i class='bx bxl-javascript bx-tada bx-rotate-90' style={{color: '#0070f3'}}></i>
						JavaScript
					</li>
					<li>
						<i class='bx bxl-html5 bx-tada bx-rotate-90' style={{color: '#0070f3'}}></i>
						HTML
					</li>
					<li>
						<i class='bx bxl-css3 bx-tada bx-rotate-90' style={{color: '#0070f3'}} ></i>
						CSS
					</li>
					<li>
						<i class='bx bxl-react bx-rotate-90 bx-tada' style={{color: '#0070f3'}}  ></i>
						ReactJS
					</li>
					<li>
						<i class='bx bx-code-curly bx-tada' style={{color: '#0070f3'}} ></i>
						TypeScript
					</li>
					<li>
						<i class='bx bx-code-curly bx-tada' style={{color: '#0070f3'}} ></i>
						NextJS
					</li>
				</ul>
				<ul>
					<h3>Back-end:</h3>
					<li>
						<i class='bx bxl-nodejs bx-tada bx-rotate-90' style={{color: '#0070f3'}} ></i>
							NodeJS
					</li>
					<li>
						<i class='bx bxs-data bx-tada' style={{color: '#0070f3'}} ></i>
						MongoDB
					</li>
				</ul>
			</ul>
		</div>
	)
}

export default Skills