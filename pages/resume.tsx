import { Box, Button, Divider, Heading } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { CgLaptop } from 'react-icons/cg'
import { FaDownload } from 'react-icons/fa'
import ExperienceCard from '../components/ExperienceCard'
import { experienceData } from '../experience_data'

const Experience: NextPage = () => {
	return (
		<Box className='mt-28 px-20 justify-center mx-auto'>
			<Head>
				<title>Resume</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Heading
				as='h1'
				size='xl'
				className='flex mx-auto mb-6 items-center gap-3'
			>
				<CgLaptop />
				Resume
			</Heading>
			<Box>
				<Link href='https://www.overleaf.com/read/vzgkkknbkhqg'>
					<Button
						className='flex gap-7 items-center w-60 h-20'
						colorScheme='whiteAlpha'
					>
						<FaDownload className='bg-transparent text-white' />
						<p className='text-white bg-transparent'>Download PDF</p>
					</Button>
				</Link>
				<Box>
					<Box className='mt-10'>
						<p className='text-3xl mt-10 font-bold'>Education</p>
						<Divider className='my-5' />
						<Box>
							<Box className='flex items-center gap-10 w-full'>
								<p className='text-2xl font-semibold mb-5'>
									Iowa State University
								</p>
							</Box>

							<p className='text-lg font-semibold mb-2'>
								Bachelor of Science in Computer Science
							</p>
							<p className='mb-2 flex justify-between'>
								<p className='text-gray-400'>Aug 2019 - Dec 2023</p>
								<p className='text-gray-400'>Ames, IA</p>
							</p>
							<p className='text-sm leading-relaxed text-gray-300'>
								<>
									{' '}
									<li>
										<strong>GPA:</strong> 3.72/4.00
									</li>
									<li>
										<strong>Minors:</strong> Data Science
									</li>
									<li>
										<strong>Certifications:</strong> AWS Certified Cloud
										Practitioner
									</li>
									<li>
										<strong>Honors:</strong> Summa Cum Laude, Dean&apos;s List
									</li>
								</>
							</p>
						</Box>
					</Box>
					<Box>
						<p className='text-3xl mt-10 font-bold'>Experience</p>
						<Divider className='my-5' />
						<Box>
							{experienceData.map((xp, index) => (
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
