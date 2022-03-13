import { Badge, Box } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import NotionSVG from '../../images/notion-svg'
import { SpotifySVG } from '../../images/spotify-svg'

const NotionProject = () => {
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
					<Box className='pb-6 flex justify-center'>
						<NotionSVG />
					</Box>
					<Box className='flex items-center gap-2'>
						<Badge borderRadius='full' colorScheme='cyan' px={2} py={1}>
							Typescript
						</Badge>
						<Badge borderRadius='full' colorScheme='green' px={2} py={1}>
							Node.js
						</Badge>
						<Badge borderRadius='full' colorScheme='gray' px={2} py={1}>
							Crontab
						</Badge>
						<Box className='text-gray-500 font-semibold tracking-wide text-xs ml-auto uppercase'>
							01.2022
						</Box>
					</Box>
					<Box className='text-2xl py-4 font-bold' as='h3'>
						Notion Habit Automation
					</Box>
					<Box>
						An automated database for Notion workspaces that uses CRUD
						operations to set up a fresh daily habit tracker each day using a
						terminal-based cron job.
						<br />
						<br />
						<Link href='https://github.com/shiv-neel/notionhabits' passHref>
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

export default NotionProject
