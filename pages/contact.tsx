import { Heading } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col'>
      <Heading as='h1' size='xl' className='flex justify-center p-20 mx-auto text-center'>
        Let's Connect
      </Heading>
      <div className='flex'>
        <ul className=''>
          <li>
            LinkedIn
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
