import React from 'react'
import logo from '../assets/logo.png'

function Logo({width = '50px', height = '50px'}) {
  return (
    <div className='flex'>
      <img src={logo} width={width} height={height} className='rounded-full' alt="Logo" />
    </div>
  )
}

export default Logo