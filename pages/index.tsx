import React, { useEffect, useState } from 'react'
import {
	Button,
	Heading,
	Box,
} from '@chakra-ui/react'
import { FaDownload } from 'react-icons/fa'
import Link from 'next/link'
import { BsDot, BsGithub, BsLinkedin, BsSpotify } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import RoadTripSVG from '../components/RoadTripSVG'

export default function Home() {
	const [timeOfDay, setTimeOfDay] = useState('')
	const hour = new Date().getHours()
	useEffect(() => {
		if (hour < 12) setTimeOfDay('Morning')
		else if (hour >= 12 && hour < 17) setTimeOfDay('Afternoon')
		else setTimeOfDay('Evening')
	}, [hour])

	return (
		<Box className='px-20 mx-auto'>
			<Box className='flex justify-between my-10'>
				<Box className='pt-20 pb-10'>
					<Heading as='h3' size='lg'>
						Good {timeOfDay}, I&apos;m
					</Heading>
					<Heading as='h1' size='2xl' color={'messenger.500'}>
						Shiva Neelakantan.
					</Heading>
				</Box>
				<RoadTripSVG />
			</Box>
			<Box className=''>
				<p className='mt-20 leading-relaxed text-lg'>
					<strong>
						Through actively learning how to appreciate the technology around
						me, I&apos;ve come to better understand myself.{' '}
					</strong>
					I&apos;m a Full-stack Software Engineer based in Chicagoland, aspiring
					to execute ideas that advance my community and those I love.
				</p>

				<Box className=''>
					<Box className='flex text-4xl space-x-10 mt-16 items-center'>
						<Link href='https://github.com/shiv-neel'>
							<BsGithub className='hover:scale-110 hover:cursor-pointer duration-100 text-green-500' />
						</Link>
						<Link href='https://www.linkedin.com/in/shiva-neelakantan/'>
							<BsLinkedin className='hover:scale-110 hover:cursor-pointer duration-100 text-blue-600' />
						</Link>
						<Link href='mailto:shiv.neel1622@gmail.com'>
							<SiGmail className='hover:scale-110 hover:cursor-pointer duration-100 text-red-500' />
						</Link>
					</Box>
				</Box>
				<Box className='flex space-x-10 mt-20'>
					<Link href='/projects' passHref>
						<Button colorScheme={'messenger'} style={{ padding: '25px' }}>
							Learn More
						</Button>
					</Link>
					<Link
						href='https://docs.google.com/document/d/1xPuskriTfGFY_mPQrF3gYMGnmM1nGCeSxP9TD1RFCvc/edit?usp=sharing'
						passHref
					>
						<a target='_blank'>
							<Button
								leftIcon={<FaDownload />}
								variant='outline'
								style={{ padding: '25px' }}
								colorScheme={'messenger'}
							>
								Download Resume
							</Button>
						</a>
					</Link>
				</Box>
			</Box>
		</Box>
	)
}
