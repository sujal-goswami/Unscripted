import React from 'react'
import logo from '../assets/logo.png'

function Logo({width = '100px'}) {
  return (
    <div className='flex'>
      <img src={logo} width={width} className='rounded-full' alt="Logo" />
    </div>
  )
}

export default Logo