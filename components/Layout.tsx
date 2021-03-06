import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout: React.FC = ({ children }) => {
  return (
		<div className='min-h-screen flex flex-col mx-96'>
			<Navbar />
			<div className='flex flex-1'>{children}</div>
			{/* <Footer /> */}
		</div>
	)
}

export default Layout