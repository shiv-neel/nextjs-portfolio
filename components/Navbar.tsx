import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { BsSun, BsHouse, BsPerson, BsPuzzle } from 'react-icons/bs'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaRegPaperPlane } from 'react-icons/fa'
import { MdOutlineDarkMode } from 'react-icons/md'
import Logo from './Logo'
import { useRouter } from 'next/router'

const Navbar = () => {
    
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  const inactive = 'transition duration-200 hover:scale-110 hover:text-blue-500 hover:font-bold'
  const active = 'text-blue-500 font-bold'
  return (
      <nav className='flex justify-between pt-16 mx-20 align-middle'>
        <div className='flex'>
            <Link href='/'><Logo /></Link>
            
        </div>
        <ul className='flex items-center align-center gap-16'>
       
            <li className={router.pathname === '/' ? active : inactive}>
                <Link href='/'>
                    <a className='flex gap-2'>
                        <BsHouse style={{fontSize: 20}} className='mt-0.5'/>
                        Home
                    </a>
                </Link>
            </li>
            <li className={router.pathname === '/about' ? active : inactive}>
                <Link href='/about'>
                    <a className='flex gap-2'>
                        <BsPerson style={{fontSize: 20}} className='mt-0.5'/>
                        About
                    </a>
                </Link>
            </li>
            <li className={router.pathname === '/projects' ? active : inactive}>
                <Link href='/projects'>
                    <a className='flex gap-2'>
                        <BsPuzzle style={{fontSize: 20}} className='mt-0.5'/>
                        Projects
                    </a>
                </Link>
            </li>
            <li className={router.pathname === '/contact' ? active : inactive}>
                <Link href='/contact'>
                    <a className='flex gap-2'>
                        <FaRegPaperPlane style={{fontSize: 20}} className='mt-0.5'/>
                        Contact
                    </a>
                </Link>
            </li>
            <li className='shadow-lg shadow-blue-500/40 rounded-lg'>
                  <IconButton aria-label='dark mode button'
                      style={{fontSize: 20}}
                      onClick={toggleColorMode}
                      icon={colorMode==='dark' ? <MdOutlineDarkMode /> : <BsSun />}
                  />
            </li>
            
        </ul>
      </nav>
  )
};

export default Navbar
