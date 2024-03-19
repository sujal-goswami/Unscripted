import React from 'react'
import logo from '../assets/logo.jpg'

function Logo({width = '50px'}) {
  return (
    <div className='flex rounded-sm'>
      <img src={logo} width={width} alt="logo" className='rounded-full size-9' />
    </div>
  )
}

export default Logo