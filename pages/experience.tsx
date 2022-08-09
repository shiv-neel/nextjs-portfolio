import { Box, Divider, Heading } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import { CgLaptop } from 'react-icons/cg'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Experience: NextPage = () => {
	return (
		<Box className='mt-28 px-20 justify-center'>
			<Heading
				as='h1'
				size='xl'
				className='flex mx-auto mb-6 items-center gap-3'
			>
				<CgLaptop />
				Work Experience
			</Heading>
			<Box>
				<Experiences />
			</Box>
		</Box>
	)
}

export default Experience
