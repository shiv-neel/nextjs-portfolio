import { Badge, Box, Heading, Img } from '@chakra-ui/react'
import React from 'react'
import { NotionSVG } from '../images/notion-labs-inc-logo-vector'

const NotionProject = () => {
  return (
    <div className='px-20'>
      <a href='http://github.com' target='_blank' rel='noopener noreferrer'>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' className='hover:shadow-lg duration-150'>
        <Box className='p-6'>
        <Box className='-my-16 pb-6'><NotionSVG /></Box>
          <Box className='flex align-baseline'>
            <Badge borderRadius='full' colorScheme='cyan'>
              Typescript
            </Badge>
            
            <Box className='text-gray-500 font-semibold tracking-wide text-xs px-3 uppercase'>
              Backend
            </Box>
          </Box>
          <Box className='text-2xl py-4 font-bold'
            as='h3'
          >
            Notion Habit Automation
          </Box>
          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veniam, facere natus illum cupiditate pariatur adipisci quae officiis deserunt modi iste optio enim beatae eos ipsum necessitatibus voluptatibus praesentium. Velit?
          </Box>
        </Box>
      </Box>
      </a>
    </div>
  )
}

export default NotionProject
