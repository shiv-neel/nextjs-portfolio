import { Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FaReact } from 'react-icons/fa'
import {
	SiBootstrap,
	SiChakraui,
	SiExpress,
	SiFirebase,
	SiGraphql,
	SiJavascript,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiRedis,
	SiRedux,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si'

const Techstack = () => {
	return (
		<div className='flex flex-col justify-center'>
			<ul className='mb-5'>
				<Heading
					as='h3'
					size='lg'
					className='pb-5 flex justify-center duration-100'
				>
					My Tech Stack
				</Heading>
				<Heading
					as='h4'
					size='md'
					className='py-5 flex justify-center duration-100'
				>
					Frontend
				</Heading>
				<ul className='flex justify-center gap-16'>
					<Link href='https://www.javascript.com/' passHref>
						<a target='_blank'>
							<SiJavascript className='text-yellow-300 text-6xl bg-black hover:scale-125 duration-100' />
						</a>
					</Link>
					<Link href='https://www.typescriptlang.org/' passHref>
						<a target='_blank'>
							<SiTypescript className='text-blue-600 text-6xl hover:scale-125 duration-100' />
						</a>
					</Link>
					<Link href='https://www.reactjs.org/' passHref>
						<a target='_blank'>
							<FaReact className='text-sky-500 text-6xl hover:scale-125 duration-100' />
						</a>
					</Link>
					<Link href='https://nextjs.org/' passHref>
						<a target='_blank'>
							<SiNextdotjs className='text-6xl hover:scale-125 duration-100' />
						</a>
					</Link>
					<Link href='https://redux.js.org/' passHref>
						<a target='_blank'>
							<SiRedux className='text-purple-500 text-6xl hover:scale-125 duration-100' />
						</a>
					</Link>
				</ul>
			</ul>
			<Heading
				as='h4'
				size='md'
				className='py-5 flex justify-center duration-100'
			>
				Backend
			</Heading>
			<ul className='flex justify-center gap-16'>
				<Link href='https://nodejs.org/en/' passHref>
					<a target='_blank'>
						<SiNodedotjs className='text-green-500 text-6xl hover:scale-125 duration-100' />
					</a>
				</Link>
				<Link href='https://expressjs.com/'>
					<a target='_blank'>
						<SiExpress className='text-6xl hover:scale-125 duration-100' />
					</a>
				</Link>
				<Link href='https://www.graphql.com/'>
					<a target='_blank'>
						<SiGraphql className='text-purple-600 text-6xl hover:scale-125 duration-100' />
					</a>
				</Link>
				<Link href='https://redis.io/'>
					<a target='_blank'>
						<SiRedis className='text-red-500 text-6xl hover:scale-125 duration-100' />
					</a>
				</Link>
				<Link href='https://www.postgresql.org/'>
					<a target='_blank'>
						<SiPostgresql className='text-blue-500 text-6xl hover:scale-125 duration-100 ' />
					</a>
				</Link>
				<Link href='https://firebase.google.com/'>
					<a target='_blank'>
						<SiFirebase className='text-orange-400 text-6xl hover:scale-125 duration-100 ' />
					</a>
				</Link>
			</ul>
		</div>
	)
}

export default Techstack
