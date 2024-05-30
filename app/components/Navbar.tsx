
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='mainBg h-[60px] flex px-1 lg:px-4 items-center justify-between'>
      
      {/* logo */}
      <div className='uppercase cursor-pointer text-sm lg:text-lg'>

      <span className='text-black
      bg-white
      pl-2
      rounded-l-xl
      hover:bg-black
      hover:text-white
      '>Iram</span>

      <span className='
      text-white
      bg-black
      pr-2
      rounded-r-xl
      hover:bg-white
      hover:text-black
      '
      >codder</span>

      </div>

      {/* Menu Buttons */}

      <div className='flex gap-1 lg:gap-4 text-sm lg:text-xl'>

      <Link className='
      bg-yellow-300
      p-1 rounded
      text-white
      hover:bg-pink-600
      ' href={'/'}>Home</Link>

      <Link className='
      bg-yellow-300
      p-1 rounded
      text-white
      hover:bg-yellow-300'
      href={'/'}>About</Link>

      <Link className='
      bg-byellow-300
      p-1 rounded
      text-white
      hover:bg-yellow-300'
      href={'/todo'}>Todo</Link>

      </div>

      {/* login button */}
      <div className='flex gap-1 lg:gap-4 lg:text-xl text-sm'>

      <button className='
      bg-orange-300
      p-1 rounded
      text-white
      hover:bg-orange-300
      '>Sign In</button>

      <button className='
      bg-orange-300
      p-1 rounded
      text-white
      hover:bg-orange-300
      '>Sign Up</button>

      </div>

    </div>
  )
}

export default Navbar