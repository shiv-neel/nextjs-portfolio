import { Box, IconButton, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BsHouse, BsPerson, BsPuzzle, BsSun } from 'react-icons/bs'
import { CgHome, CgLaptop, CgTrello, CgUser } from 'react-icons/cg'
import { FaRegPaperPlane } from 'react-icons/fa'
import { HiOutlineViewList } from 'react-icons/hi'
import { MdOutlineDarkMode } from 'react-icons/md'
import Logo from './Logo'

interface dropDownProp {
	// specifies types of props
	showDropdown: boolean
}

const Dropdown: React.FC<dropDownProp> = ({ showDropdown }) => {
	const router = useRouter()
	const inactive =
		'transition duration-200 hover:scale-110 hover:text-blue-500 hover:font-bold'
	const active = 'text-blue-500 font-bold'
	const offsets = [34, 102, 170, 238]
	const pathnames = {
		'/': 0,
		'/about': 1,
		'/resume': 2,
		'/projects': 3,
	}

	if (showDropdown)
		return (
			<Box className='menu-dropdown'>
				<ul className='flex flex-col justify-center mx-auto items-center'>
					<motion.div
						animate={{ x: offsets[pathnames[router.pathname]] }}
						className='invisible md:visible'
					>
						<Box
							className='w-12 h-12 p-2 rounded-md cursor-pointer absolute z-1 -bottom-6 shadow-xl'
							bgColor='#000000'
						></Box>
					</motion.div>
					<li className={router.pathname === '/' ? active : inactive}>
						<Link href='/'>
							<a className='flex items-center  gap-2 navbar-link z-500'>
								<CgHome className='text-xl' />
							</a>
						</Link>
					</li>
					<li className={router.pathname === '/about' ? active : inactive}>
						<Link href='/about'>
							<a className='flex items-center  gap-2 navbar-link'>
								<CgUser className='text-xl' />
							</a>
						</Link>
					</li>{' '}
					<li className={router.pathname === '/resume' ? active : inactive}>
						<Link href='/resume'>
							<a className='flex items-center gap-2 navbar-link'>
								<CgLaptop className='text-xl' />
							</a>
						</Link>
					</li>
					<li className={router.pathname === '/projects' ? active : inactive}>
						<Link href='/projects'>
							<a className='flex items-center  gap-2 navbar-link'>
								<CgTrello className='text-xl' />
							</a>
						</Link>
					</li>
				</ul>
			</Box>
		)
	else return <></>
}

export default Dropdown
