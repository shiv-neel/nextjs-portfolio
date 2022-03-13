import { Badge, Box } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import NotionSVG from '../../images/notion-svg'
import { SpotifySVG } from '../../images/spotify-svg'

const IncrementProject = () => {
	return (
		<div className='mb-16 hover:scale-105 duration-150'>
			<Box
				maxW='sm'
				h={'lg'}
				border={'none'}
				borderRadius='lg'
				overflow='hidden'
				className='shadow-lg hover:shadow-xl duration-150'
			>
				<Box className='p-6'>
					<Box className='pb-6 flex justify-center'></Box>
					<Box className='flex items-center gap-2 flex-wrap'>
						<Badge borderRadius='full' colorScheme='cyan' px={2} py={1}>
							Typescript
						</Badge>
						<Badge borderRadius='full' colorScheme='green' px={2} py={1}>
							Next.js
						</Badge>
						<Badge borderRadius='full' colorScheme='purple' px={2} py={1}>
							GraphQL
						</Badge>
						<Badge borderRadius='full' colorScheme='orange' px={2} py={1}>
							Firebase
						</Badge>
						<Badge borderRadius='full' colorScheme='facebook' px={2} py={1}>
							PostgreSQL
						</Badge>

						<Box className='text-gray-500 font-semibold tracking-wide text-xs ml-auto uppercase'>
							Mar 2022-Present
						</Box>
					</Box>
					<Box className='text-2xl py-4 font-bold' as='h3'>
						INCREMENT++
					</Box>
					<Box>
						Coming Soon!
						<br />
						<br />
						<Link href='' passHref>
							<a target='_blank' className='underline'>
								View Github Repository
							</a>
						</Link>
					</Box>
				</Box>
			</Box>
		</div>
	)
}

export default IncrementProject
