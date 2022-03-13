import { Badge, Box } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { SpotifySVG } from '../../images/spotify-svg'

const SpotifyProject = () => {
	return (
		<div className='mb-16 hover:scale-105 duration-150'>
			<Box
				maxW='sm'
				h='lg'
				border={'none'}
				borderRadius='lg'
				overflow='hidden'
				className='shadow-lg hover:shadow-xl duration-150'
			>
				<Box className='p-6'>
					<Box className='pb-6 flex justify-center'>
						<SpotifySVG />
					</Box>
					<Box className='flex items-center gap-2'>
						<Badge borderRadius='full' colorScheme='yellow' px={2} py={1}>
							Javascript
						</Badge>
						<Badge borderRadius='full' colorScheme='blue' px={2} py={1}>
							React
						</Badge>
						<Badge borderRadius='full' colorScheme='green' px={2} py={1}>
							Node.js
						</Badge>
						<Box className='text-gray-500 font-semibold tracking-wide text-xs ml-auto uppercase'>
							02.2022
						</Box>
					</Box>
					<Box className='text-2xl py-4 font-bold' as='h3'>
						Spotify Playlist Tidier
					</Box>
					<Box>
						An application that optimizes a user's Spotify playlist by removing
						any duplicate tracks while converting all tracks to explicit or
						clean versions.
						<br />
						<br />
					</Box>
					<Link href='https://github.com/shiv-neel/notionhabits' passHref>
						<a target='_blank' className='underline'>
							View Application
						</a>
					</Link>
				</Box>
			</Box>
		</div>
	)
}

export default SpotifyProject
