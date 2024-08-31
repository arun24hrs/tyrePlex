import { Button } from '@mui/material'
import React from 'react'

const Services = () => {
  return (
    <div className='w-11/12 m-auto'>
        <h2 className='font-bold text-lg sm:text-xl lg:text-2xl'>Services offered by this dealer</h2>
        <div className='flex gap-6'>
            <div className='flex flex-col gap-3 shadow-lg px-6 py-10'>
                <img src="https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100" alt="service logo" />
                <h2>Wheel Balancing</h2>
                <div className='mt-4'>
                <Button color='error' variant="contained">Book Now</Button></div>
            </div>
            <div className='flex flex-col gap-3 shadow-lg px-6 py-10'>
                <img src="https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100" alt="service logo" />
                <h2>Wheel Alignment</h2>
                <div className='mt-4'>
                <Button color='error' variant="contained">Book Now</Button></div>
            </div>
        </div>
    </div>
  )
}

export default Services