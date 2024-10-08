import { Box, Button, Divider, Heading, useColorMode } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { CgFileDocument } from 'react-icons/cg'
import { FaDownload } from 'react-icons/fa'
import ExperienceCard from '../components/ExperienceCard'
import { EXPERIENCE_DATA } from '../data/experience_data'

const Experience: NextPage = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<Box className='md:mt-28 mt-14 px-20 justify-center mx-auto max-w-5xl'>
			<Head>
				<title>Resume</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Heading
				as='h1'
				size='xl'
				className='flex mx-auto mb-6 items-center gap-3'
			>
				<CgFileDocument />
				Resume
			</Heading>
			<Box>
				<Box>

					<Box className='mt-10'>
						<p className='text-3xl mt-10 font-bold'>Education</p>
						<Divider className='my-5' />
						<Box className='my-7'>
							<Box className='flex items-center gap-10 w-full'>
								<p className='text-2xl font-semibold mb-2'>
									Georgia Institute of Technology
								</p>
							</Box>

							<p className='text-lg font-semibold mb-1'>
								M.S. Computer Science
							</p>
							<p className='mb-2 flex justify-between'>
								{/* <p className='text-gray-400'>Aug 2019 - Dec 2023</p> */}
								<p className='text-gray-400'>Atlanta, GA</p>
							</p>
							<p className='leading-relaxed'>
								{' '}
								<li>
									<strong>GPA:</strong> 4.00/4.00
								</li>
								<li>
									<strong>Specialization:</strong> Machine Learning
								</li>
							</p>
						</Box>
						<Box>
							<Box className='flex items-center gap-10 w-full'>
								<p className='text-2xl font-semibold mb-2'>
									Iowa State University
								</p>
							</Box>

							<p className='text-lg font-semibold mb-1'>
								B.S. Computer Science
							</p>
							<p className='mb-2 flex justify-between'>
								{/* <p className='text-gray-400'>Aug 2019 - Dec 2023</p> */}
								<p className='text-gray-400'>Ames, IA</p>
							</p>
							<p className='leading-relaxed'>
								{' '}
								<li>
									<strong>GPA:</strong> 3.72/4.00
								</li>
								<li>
									<strong>Minors:</strong> Data Science
								</li>
								<li>
									<strong>Certifications:</strong> AWS Certified Cloud
									Practitioner (WIP)
								</li>
								<li>
									<strong>Honors:</strong> Summa Cum Laude, Dean&apos;s List
								</li>
							</p>
						</Box>
					</Box>
					<Box>
						<p className='text-3xl mt-10 font-bold'>Experience</p>
						<Divider className='my-5' />
						<Box>
							{EXPERIENCE_DATA.map((xp, index) => (
								<ExperienceCard key={index} {...xp} />
							))}
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Experience
