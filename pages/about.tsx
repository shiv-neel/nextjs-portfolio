import Head from 'next/head'
import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import { HiExternalLink } from 'react-icons/hi'
import { CgUser } from 'react-icons/cg'

const About = () => {
	return (
		<Box className='mt-28 px-20 justify-center mx-auto max-w-5xl'>
			<Head>
				<title>About Me</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Heading
				as='h1'
				size='xl'
				className='flex mx-auto mb-6 items-center gap-3'
			>
				<CgUser />
				About Me
			</Heading>
			<Box>
				<p className='mt-2 leading-relaxed'>
					👋🏾 Hey there, I&apos;m Shiva!
					<br /><br />
					I have {new Date().getFullYear() - 2022} years of experience in software development, as well as a Master&apos;s in Computer Science from the Georgia Institute of Technology (Georgia Tech). I am currently working as a Software Engineer at Workiva, Inc.
					<br />
					<br />
					I have been fascinated with automobiles since childhood, and it has always been my dream to enter this industry one day. I dream of a
					future in which vehicles are 100% safe for us, and
					sustainable for our grandchildren, without compromise on the pursuit of driving. While many may
					dismiss this vision as naive optimism, I would argue that we are
					already witnessing the beginnings of this vision&apos;s manifestation.
					<br />
					<br />
					Automakers are developing autonomous vehicles with more rational
					driving patterns than humans, and as we discover more sustainable
					renewable energy sources, we are already developing vehicles that need
					not rely on the{' '}
					<a
						href='https://rentar.com/efficient-engines-thermodynamics-combustion-efficiency/#:~:text=The%20reasons%20combustion%20engines%20are,(power)%20by%20burning%20fuel.'
						className='underline text-gray-400'
						target='_blank'
						rel='noreferrer'
					>
						rather inefficient internal combustion process.
					</a> {' '}Not to mention, many of these vehicles are way quicker
					and look even cooler than their predecessors!
					<br />
					<br />
					I&apos;m extremely grateful to be alive during this &apos;automotive
					revolution&apos;, so to speak. I&apos;m excited to continue developing
					my technical skills as a software engineer, so that I can one day also
					be a part of the revolution my inner child always dreamed of.
				</p>
			</Box>
		</Box>
	)
}

export default About
