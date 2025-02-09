import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from './Nav'
import { Button } from './ui/button'
import Mobilenav from './Mobilenav'

const Header = () => {
  return (
    <>
      <Head>
        <title>CCN</title>
      </Head>
      <header className="py-6 px-8 xl border-b-1 shadow-sm border-gray z-20" style={{
        position: 'fixed',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        width: '100%',
      }}>
        <div className="container flex justify-between items-center h-4">
        
          <Link href='/'>
            {/* LOGO */}
            <img className='mb-1' width={60} src="/images/ccn-favicon.png" alt="" />
          </Link>
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contacts">
              <Button>Contact US</Button>
            </Link>
          </div>
          <div className="xl:hidden text-black font-bold" style={{
            fontSize: '30px'
          }}><Mobilenav /></div>
        </div>
      </header>
    </>
  )
}

export default Header
