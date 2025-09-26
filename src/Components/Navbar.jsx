import React from 'react'
import {NavItems, logo} from '../constants'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 py-4 px-16 bg-white z-50">
    <div className="flex justify-between">
      <div className="">
        <img src={logo} alt="Logo" className="h-8 rounded-md" />
      </div>

      <div className="flex items-center justify-center gap-4 font-semibold">
        {NavItems.map((items) => (
          <h2 key={items.label} className='cursor-pointer hover:text-purple-600 text-xl duration-200'>
            {items.label} 
          </h2>
        ))}
      </div>
    </div>
  </nav>
  )
}

export default Navbar