import React from 'react'
import Layout from './LayoutScrollEffect';
import projectStyles from './project.module.css'
import Image from 'next/image';

interface ProjectCardProps {
	name: string;
	pic: string;
	desc: string;
}
function ProjectCard({name, pic, desc}: ProjectCardProps) {
	return (
		<div className={projectStyles.card}>
			<Image 
				src={pic}
				width='600px'
				height='400px'
				layout='responsive'
				placeholder='blur'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEVCtOYdpEiFAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC'
				
			/>
			<div className={projectStyles.card__info}>
				<p className={projectStyles.card__title}>{name}</p>
				<p className={projectStyles.card__desc}>{desc}</p>
			</div>
			<div className={projectStyles.buttons}>
				<a>Demo</a>
				<a>View code</a>
			</div>
		</div>
	)
}
function Project() {
	let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar tellus maximus mauris accumsan pretium.'
	return (
		<div className={`${projectStyles.container}`} id='project'>
			<h1 className={projectStyles.title}>🏢 My Projects: </h1>
			<div className={projectStyles.cards}>
				<Layout animation='animate__zoomIn'>
					<ProjectCard name="Project 1" desc={lorem} pic='https://theoldreader.com/kittens/files/images/30972961@N04-4356558195/600x400.jpg'/>
				</Layout>
				<Layout animation='animate__zoomIn'>
					<ProjectCard name="Project 2" desc={lorem} pic='https://theoldreader.com/kittens/files/images/30972961@N04-4356558195/600x400.jpg'/>
				</Layout>
				<Layout animation='animate__zoomIn'>
					<ProjectCard name="Project 3" desc={lorem} pic='https://theoldreader.com/kittens/files/images/30972961@N04-4356558195/600x400.jpg'/>
				</Layout>
			</div>	
		</div>
	)
}

export default Project