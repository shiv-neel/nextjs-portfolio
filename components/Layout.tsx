import { Box, useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout: React.FC = ({ children }) => {
	const { colorMode } = useColorMode()
	const bgc = colorMode === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
	return (
		<Box className={`min-h-screen flex flex-col px-96 ${bgc}`}>
			<Navbar />
			<Box className='flex flex-1'>{children}</Box>
			{/* <Footer /> */}
		</Box>
	)
}

export default Layout
