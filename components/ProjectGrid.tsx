import { Grid, GridItem, Heading } from '@chakra-ui/react'
import React from 'react'
import NotionProject from './projectCards/Notion'
import SpotifyProject from './projectCards/Spotify'

const ProjectGrid = () => {
	return (
		<div>
			<Heading
				as='h3'
				size='lg'
				className='py-5 flex justify-center hover:scale-105 duration-100'
			>
				Personal Projects
			</Heading>
			<Grid templateColumns='repeat(3, 1fr)' gap={6} className='flex'>
				<GridItem w='100%'>
					<NotionProject />
				</GridItem>
				<GridItem w='100%'>
					<SpotifyProject />
				</GridItem>
			</Grid>
		</div>
	)
}

export default ProjectGrid
