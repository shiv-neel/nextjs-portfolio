import React, { useEffect, useState } from 'react'
import { Button, Icon, Heading, useColorMode } from '@chakra-ui/react'
import LandingSVG from '../components/LandingSVG'
import { FaDownload } from 'react-icons/fa'
import Link from 'next/link'

export default function Home() {

  const [timeOfDay, setTimeOfDay] = useState('')
  const hour = new Date().getHours()
  useEffect(() => {
    if (hour < 12) setTimeOfDay('Morning')
    else if (hour >= 12 && hour < 17) setTimeOfDay('Afternoon')
    else setTimeOfDay('Evening')
  }, [])

  return (
		<div className='mx-48'>
			<div className='px-20 pt-20 pb-10'>
				<Heading as='h3' size='lg' className='max-w-1/2'>
					Good {timeOfDay}, I'm
				</Heading>
				<Heading as='h1' size='xl' className='max-w-1/2'>
					Shiva Neelakantan.
				</Heading>
			</div>
			<div className='flex flex-row px-20'>
				<div>
					<p className='flex pt-5 pb-20 leading-relaxed text-xl'>
						I'm a Fullstack Software Engineer based in Chicagoland. Through
						actively learning how to appreciate the technology around me, I've
						come to better understand myself.{' '}
					</p>
					<div className='flex space-x-10'>
						<Link href='/projects'>
							<Button colorScheme={'blue'} style={{ padding: '25px' }}>
								See my Work
							</Button>
						</Link>
						<Button
							leftIcon={<FaDownload />}
							variant='outline'
							style={{ padding: '25px' }}
						>
							{' '}
							Download Resume
						</Button>
					</div>
				</div>
				<div className='flex w-1/2 items-center ml-40 justify-start'>
					<LandingSVG />
				</div>
			</div>
		</div>
	)
}
