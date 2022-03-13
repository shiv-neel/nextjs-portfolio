import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { BsHouse, BsPerson, BsPuzzle } from 'react-icons/bs'
import { FaRegPaperPlane } from 'react-icons/fa'

interface dropDownProp {
	// specifies types of props
	showDropdown: boolean
}

const Dropdown: React.FC<dropDownProp> = ({ showDropdown }) => {
	const router = useRouter()
	const inactive =
		'transition duration-200 hover:scale-110 hover:text-blue-500 hover:font-bold'
	const active = 'text-blue-500 font-bold'

	if (showDropdown)
		return (
			<Box className='menu-dropdown'>
				<ul className='flex flex-col justify-center mx-auto items-center'>
					<li className={router.pathname === '/' ? active : inactive}>
						<Link href='/'>
							<a className='flex w-full gap-2 py-5'>
								<BsHouse className='text-xl' />
								Home
							</a>
						</Link>
					</li>
					<li className={router.pathname === '/about' ? active : inactive}>
						<Link href='/about'>
							<a className='flex gap-2 py-5'>
								<BsPerson className='text-xl' />
								About
							</a>
						</Link>
					</li>
					<li className={router.pathname === '/projects' ? active : inactive}>
						<Link href='/projects'>
							<a className='flex gap-2 py-5'>
								<BsPuzzle className='text-xl' />
								Projects
							</a>
						</Link>
					</li>
					<li className={router.pathname === '/contact' ? active : inactive}>
						<Link href='/contact'>
							<a className='flex gap-2 py-5'>
								<FaRegPaperPlane className='text-xl' />
								Contact
							</a>
						</Link>
					</li>
				</ul>
			</Box>
		)
	else return <></>
}

export default Dropdown
