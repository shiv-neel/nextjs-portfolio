import { Button, Heading, useColorMode } from '@chakra-ui/react';
import LandingSVG from '../components/LandingSVG';

export default function Home() {
  return (
    <div className=''>
      <Heading as='h1' size='xl' className='p-20 max-w-1/2'>
        yo
      </Heading>
      <div className='flex flex-row'>
        <p className='flex p-20 w-1/2 justify-center'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          maiores nihil ipsum repudiandae? Nesciunt autem quaerat perferendis
          magnam quas, eum modi sint quae, dolore hic veritatis temporibus est
          dolor rerum.
        </p>
        <div className='flex justify-center'>
          <LandingSVG />
        </div>
      </div>
    </div>
  );
}
