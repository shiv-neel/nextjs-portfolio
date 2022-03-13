import { Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import ProjectGrid from '../components/ProjectGrid'
import Techstack from '../components/Techstack'

const Projects = () => {
	return (
		<div className='mx-48 flex flex-col w-full justify-center'>
			<Heading as='h1' size='xl' className='flex p-20 -mb-5 mx-auto'>
				Portfolio
			</Heading>
			<Techstack />
			<Divider className='my-10' />
			<ProjectGrid />
		</div>
	)
}

export default Projects
