import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import { Button } from './ui/button'
import Mobilenav from './Mobilenav'

const Header = () => {
  return (
    <header className="py-8 xl:py-12  border-b-2 border-gray z-20  " style={{
      position:'fixed',
      backgroundColor:'#FFFFFF',
      display:'flex',
      width:'100%',
    }} >
      <div className="container flex justify-between items-center h-4  " >
        <Link href='/ ' >
          {/* LOGO */}
          <span className="text-2xl text-green-800 hidden lg:block xl:block" >Climate Care Network</span>
          <span className="text-2xl text-green-800 block lg:hidden xl:hidden " >CCN</span>
          

        </Link>
        
        <div className="hidden xl:flex items-center gap-8  ">
          <Nav />
          <Link href="/contacts">
            <Button>Contact US</Button>
          </Link>
        </div>
        <div className="xl:hidden text-black font-bold " style={{
          fontSize:'30px'
        }} > <Mobilenav/></div>
      </div>

    </header>
  )
}

export default Header