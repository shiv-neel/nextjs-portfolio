import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { BsSun, BsHouse, BsPerson, BsPuzzle } from 'react-icons/bs'
import { HiOutlineViewList } from 'react-icons/hi'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { FaRegPaperPlane } from 'react-icons/fa'
import { MdOutlineDarkMode } from 'react-icons/md'
import Logo from './Logo'
import { useRouter } from 'next/router'
import Dropdown from './Dropdown'

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const router = useRouter()
	const inactive =
		'transition duration-200 hover:scale-110 hover:text-blue-500 hover:font-bold'
	const active = 'text-blue-500 font-bold'

	const [showDropdown, toggleDropdown] = useState<boolean>(false)
	const [mounted, setMounted] = useState<boolean>(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		mounted && (
			<nav className='w-full'>
				<ul className='mx-10 top-0 flex lg:justify-end sm:justify-center items-center gap-12 pt-10 pb-5'>
					<li className='flex mr-auto'>
						<Logo />
					</li>
					<li className={router.pathname === '/' ? active : inactive}>
						<Link href='/'>
							<a className='flex gap-2 navbar-link'>
								<BsHouse className='text-xl' />
								Home
							</a>
						</Link>
					</li>
					<li className={router.pathname === '/about' ? active : inactive}>
						<Link href='/about'>
							<a className='flex gap-2 navbar-link'>
								<BsPerson className='text-xl' />
								About
							</a>
						</Link>
					</li>
					<li className={router.pathname === '/projects' ? active : inactive}>
						<Link href='/projects'>
							<a className='flex gap-2 navbar-link'>
								<BsPuzzle className='text-xl' />
								Projects
							</a>
						</Link>
					</li>
					<li className={router.pathname === '/contact' ? active : inactive}>
						<Link href='/contact'>
							<a className='flex gap-2 navbar-link'>
								<FaRegPaperPlane className='text-xl' />
								Contact
							</a>
						</Link>
					</li>

					<li
						className='navbar-toggle'
						onClick={() => toggleDropdown((dropdown) => !dropdown)}
					>
						<IconButton
							aria-label='menu dropdown'
							icon={
								<HiOutlineViewList className='text-2xl text-blue-500 cursor-pointer' />
							}
						/>
					</li>

					<li className='shadow-lg shadow-blue-500/40 rounded-lg right-0'>
						<IconButton
							aria-label='dark mode button'
							style={{ fontSize: 20 }}
							onClick={toggleColorMode}
							icon={colorMode === 'dark' ? <MdOutlineDarkMode /> : <BsSun />}
						/>
					</li>
				</ul>
				<Dropdown showDropdown={showDropdown} />
			</nav>
		)
	)
}

export default Navbar
