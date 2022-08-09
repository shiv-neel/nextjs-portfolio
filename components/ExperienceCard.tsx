import { Badge, Box, Button, Divider, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BsFillEyeFill, BsGithub } from 'react-icons/bs'

import { ExperienceCardType } from './Experiences'

const ExperienceCard: React.FC<ExperienceCardType> = ({
	title,
	subtitle,
	location,
	description,
	dates,
	stack,
}) => {
	const BadgeColors = {
		React: 'cyan',
		Dart: 'blue',
		Redux: 'purple',
		Kotlin: 'purple',
		'Graph DBMS': 'red',
		Typescript: 'blue',
		Python: 'yellow',
		PostgreSQL: 'blue',
		Node: 'green',
		Graphql: 'pink',
		Firebase: 'orange',
		Supabase: 'green',
		Javascript: 'yellow',
		TensorFlow: 'red',
		NumPy: 'green',
		'Jupyter Notebook': 'orange',
	}

	return (
		<Box>
			<Box className='flex items-center gap-10 w-full'>
				<p className='text-2xl font-semibold'>{title}</p>
				<Box className='flex gap-3 my-5 ml-auto flex-wrap justify-end'>
					{stack.map((s, index) => (
						<Badge
							colorScheme={BadgeColors[s]}
							key={index}
							px={2}
							py={1}
							rounded='full'
						>
							{s}
						</Badge>
					))}
				</Box>
			</Box>
			<p className='text-lg font-semibold'>{subtitle}</p>
			<p className='text-gray-500 italic mb-3'>{dates}</p>
			<p className='text-md'>{description}</p>

			<Divider my={8} />
		</Box>
	)
}

export default ExperienceCard
