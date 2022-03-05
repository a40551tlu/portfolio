import React from 'react'
import contactStyles from './contact.module.css'
import Layout from './LayoutScrollEffect'
function Contact() {
  return (
	<div className={`${contactStyles.container}`} id='contact'>
		<h1 className={contactStyles.title}>☎️ Contact Me: </h1>
		<div className={contactStyles.info}>
			<p>Email: hadtran3@gmail.com</p>
			<p>Phone: 0-123-456-789</p>
			{/* <Layout>
				<Layout animation='animate__pulse'>
					<p style={{color: 'pink', background: '#004943', padding: '.5rem'}}>My love: Mai Anh {'<3 <3'}</p>
				</Layout>
			</Layout> */}
		</div>
		<Layout animation='animate__headShake'>
			<form className={contactStyles.form}>
				<label>📧 Email: </label>
				<input type="text" placeholder='Enter your email'/>
				<label>💬 Message: </label>
				<textarea placeholder='Enter your message'></textarea>
				<button className={contactStyles.button}>Send 🏹</button>
			</form>
		</Layout>
	</div>
  )
}

export default Contact