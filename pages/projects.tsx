import { Box, Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import ProjectGrid from '../components/ProjectGrid'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Portfolio = () => {
	return (
		<Box className='mt-28 justify-center'>
			<Heading as='h1' size='xl' className='flex mx-auto mb-12'>
				Tech Stack
			</Heading>
			<Box>
				<Skills />
			</Box>
			<Divider className='my-12' />
			<Heading as='h1' size='xl' className='flex mx-auto mb-12'>
				Personal Projects
			</Heading>
			<Box>
				<Projects />
			</Box>
		</Box>
	)
}

export default Portfolio
