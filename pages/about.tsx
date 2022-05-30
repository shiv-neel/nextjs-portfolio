import { Box, Divider, Heading, Image } from '@chakra-ui/react'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
	FaChalkboard,
	FaGraduationCap,
	FaReact,
	FaUniversity,
} from 'react-icons/fa'
const About = () => {
	return (
		<Box className='mt-28 justify-center'>
			<Heading as='h1' size='xl' className='flex mx-auto mb-12'>
				About Me
			</Heading>
			<Box className='mx-20'>
				<Box>
					<Image
						src='/DSC_0603.JPG'
						alt='chicago pic'
						className='hover:scale-105 duration-200 shadow-md rounded-md mx-auto my-10'
						w={400}
					/>
				</Box>
				<div className='flex px-10 w-full flex-col text-lg items-center'>
					<p className='leading-relaxed'>
						Hey there! I&apos;m Shiva Neelakantan, an aspiring software engineer
						from the Chicago suburbs. I love designing solutions to streamline
						the increasingly complex parts of our lives. As a developer, my
						interests are fullstack web development, machine learning, and UI/UX
						design. <br />
						<br />
						When I&apos;m not working on personal projects or learning new
						frameworks, I enjoy reading books on economics and productivity,
						playing analytical games like{' '}
						<Link href='https://www.chess.com/member/sh_vn' passHref>
							<a className='underline' target={'_blank'}>
								chess
							</a>
						</Link>{' '}
						and sudoku, or practicing{' '}
						<Link
							href='https://open.spotify.com/playlist/3ZqyDTuYrxKAiMvhipEs2T?si=59e153b36e08498a'
							passHref
						>
							<a className='underline' target='_blank'>
								my favorite hip-hop or R&amp;B tracks
							</a>
						</Link>{' '}
						on the piano.
						<br />
						<br />
						<br />
					</p>
					<br />
				</div>
			</Box>
			<Divider className='my-5' />
			<ul>
				<Heading as='h3' size='lg' className='py-5 flex justify-center'>
					Education
				</Heading>
				<li className='flex items-center gap-2 text-lg py-1 my-1 justify-center'>
					<FaUniversity className='text-2xl' /> Iowa State University
				</li>
				<li className='flex items-center gap-2 text-lg py-1 my-1 justify-center'>
					<FaChalkboard className='text-2xl' /> Computer Science &amp; Data
					Science
				</li>
				<li className='flex items-center gap-2 text-lg py-1 my-1 justify-center'>
					<FaGraduationCap className='text-2xl' /> December 2023
				</li>
			</ul>
			<Divider className='my-5' />
		</Box>
	)
}

export default About
