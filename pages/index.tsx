import React, { useEffect, useState } from 'react'
import {
	Button,
	Icon,
	Heading,
	useColorMode,
	Box,
	Image,
} from '@chakra-ui/react'
import LandingSVG from '../components/LandingSVG'
import { FaDownload } from 'react-icons/fa'
import Link from 'next/link'
import { BsDot, BsGithub, BsLinkedin, BsSpotify } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

export default function Home() {
	const [timeOfDay, setTimeOfDay] = useState('')
	const hour = new Date().getHours()
	useEffect(() => {
		if (hour < 12) setTimeOfDay('Morning')
		else if (hour >= 12 && hour < 17) setTimeOfDay('Afternoon')
		else setTimeOfDay('Evening')
	}, [hour])

	return (
		<Box className='px-20'>
			<Box className='flex justify-between my-10'>
				<Box className='pt-20 pb-10'>
					<Heading as='h3' size='lg'>
						Good {timeOfDay}, I&apos;m
					</Heading>
					<Heading as='h1' size='2xl' color={'messenger.500'}>
						Shiva Neelakantan.
					</Heading>
				</Box>
				<Image
					src='https://sdk.bitmoji.com/render/panel/20048676-217431683_76-s5-v1.png?transparent=1&palette=1&scale=1'
					w={200}
					className='rounded-full shadow-md'
				/>
			</Box>
			<Box className=''>
				<p className='mt-20 leading-relaxed text-lg'>
					<strong>
						Through actively learning how to appreciate the technology around
						me, I&apos;ve come to better understand the person I want to be.{' '}
					</strong>
					I&apos;m a Full-stack Software Engineer based in Chicagoland, aspiring
					to execute ideas that advance my community and those I love.
				</p>
				<Box className='flex text-4xl space-x-10 mt-16 items-center'>
					<Link href='https://github.com/shiv-neel'>
						<a target={'_blank'}>
							<BsGithub className='hover:scale-110 hover:cursor-pointer duration-100' />
						</a>
					</Link>
					<Link href='https://www.linkedin.com/in/shiva-neelakantan/'>
						<a target={'_blank'}>
							<BsLinkedin className='hover:scale-110 hover:cursor-pointer duration-100 text-blue-600' />
						</a>
					</Link>
					<Link href='mailto:shiv.neel1622@gmail.com'>
						<a target={'_blank'}>
							<SiGmail className='hover:scale-110 hover:cursor-pointer duration-100 text-red-500' />
						</a>
					</Link>
					<Link href='https://open.spotify.com/user/o05eru4383ix2rhufv8kgxsah?si=4891daaad8a54f2c'>
						<a target={'_blank'}>
							<BsSpotify className='hover:scale-110 hover:cursor-pointer duration-100 bg-black rounded-full text-green-500' />
						</a>
					</Link>
				</Box>
				<Box className='flex space-x-10 mt-20'>
					<Link href='/projects' passHref>
						<Button colorScheme={'messenger'} style={{ padding: '25px' }}>
							Learn More
						</Button>
					</Link>
					<Link href='/' passHref>
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
			<Box className='flex justify-center scale-95 mt-48'>
				<LandingSVG />
			</Box>
		</Box>
	)
}
