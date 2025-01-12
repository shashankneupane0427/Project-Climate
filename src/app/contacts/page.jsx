import React from 'react'
import Footer from '@/components/Footer'
const contacts = () => {
  return (
    <main style={{
      paddingLeft: '10%',
      paddingRight: '10%'

    }} className="z-0 pb-[40px] pt-[100px] lg:pt-[170px] ">
      <div className='flex flex-col lg:flex-row pb-[70px] justify-between'>
        <div className="flex flex-col items-center text-center">
          <img src="/icons/location.png" alt="Location Icon" className="h-[100px] md:h-[150px] lg:h-[200px]" />
          <h1 className="mt-4 text-lg md:text-xl lg:text-2xl">Address</h1> <br />
          <h1>Lorem ipsum dolor sit amet.</h1>
          <h1>Lorem, ipsum dolor.</h1>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="/icons/location.png" alt="Location Icon" className="h-[100px] md:h-[150px] lg:h-[200px]" />
          <h1 className="mt-4 text-lg md:text-xl lg:text-2xl">Phone</h1> <br />
          <h1>Lorem ipsum dolor sit amet.</h1>
          <h1>Lorem, ipsum dolor.</h1>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="/icons/whatsapp.png" alt="Location Icon" className="h-[100px] md:h-[150px] lg:h-[200px]" />
          <h1 className="mt-4 text-lg md:text-xl lg:text-2xl">Message Us</h1> <br />
          <h1>Lorem ipsum dolor sit amet.</h1>
          <h1>Lorem, ipsum dolor.</h1>
        </div>
        
      </div>


      <Footer />
    </main>
  )
}

export default contacts 