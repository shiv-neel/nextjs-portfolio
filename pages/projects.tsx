import { Heading } from '@chakra-ui/react'
import React from 'react'
import NotionProject from '../components/NotionProject'

const Projects = () => {
  return (
      <div className='mx-48'>
        <Heading as='h1' size='xl' className='flex justify-start p-20'>Personal Projects</Heading>
        <div className='flex justify-start'><NotionProject /></div>
      </div>
  )
}

export default Projects
