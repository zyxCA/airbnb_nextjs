'use client'
import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
      <div className='fixed w-full bg-slate-400 z-10 shadow-sm'>
          <div className='py-4 border-b-[4px] border-lime-500'>
              <Container>
                  <div className='flex flex-row items-center justify-between gap-3 md:gap-0'><Logo />
                      <Search />
                      <UserMenu/>
                  </div>
              </Container>
          </div>
    </div>
  )
}

export default Navbar