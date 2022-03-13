import { Heading } from '@chakra-ui/react'
import React from 'react'
import ContactSVG from '../components/ContactSVG'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdMarkEmailUnread } from 'react-icons/md'

const Contact = () => {
  return (
		<div className='mx-48'>
			<Heading as='h1' size='xl' className='flex p-20 -mb-5 mx-auto'>
				Let&apos;s Connect
			</Heading>
			<div className='flex columns-2 gap-48'>
				<ContactSVG />
				<div className='flex flex-col text-center px-20'>
					<ul className='flex-col items-center align-center'>
						<li className='hover:text-blue-500 duration-300'>
							<a
								href='http://linkedin.com/in/shiva-neelakantan'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Heading
									as='h3'
									size='lg'
									className='flex items-center gap-4 py-5'
								>
									{' '}
									<FaLinkedin />
									Linkedin
								</Heading>
							</a>
						</li>
						<li className='hover:text-green-500 duration-300'>
							<a
								href='http://github.com/shiv-neel'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Heading
									as='h3'
									size='lg'
									className='flex items-center gap-4 py-5'
								>
									{' '}
									<FaGithub />
									Github
								</Heading>
							</a>
						</li>
						<li className='hover:text-red-500 duration-300'>
							<a href='mailto:shiv.neel1622@gmail.com'>
								<Heading
									as='h3'
									size='lg'
									className='flex items-center gap-4 py-5'
								>
									{' '}
									<MdMarkEmailUnread />
									Email
								</Heading>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Contact