import React from 'react'
import '../global.css'
import Footer from '@/components/Footer'
import Link from 'next/link'

const Getinvolved = () => {
  return (
    <main className='w-full'>
      <div className='relative xl:h-full xl:w-full h-[500px] w-full overflow-hidden'>
        <img src="/images/Aboutus.jpg" alt="" className='w-full h-full object-cover zoom-effect' />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <span className='text-white text-[clamp(1rem,4vw,3.5rem)] lg:text-[clamp(0.2rem,5vw,2.5rem)] mb-2'>
            Join Us
          </span>
          <span className='text-white text-[clamp(2rem,5vw,5rem)] lg:text-[clamp(2.5rem,6vw,6.5rem)] whitespace-nowrap'>
            For Making difference
          </span>
        </div>
      </div>
      <div className="text-center pt-[50px] question lg:pt-[125px]">
        <span>Join Us for Making a Difference!</span>
      </div>
      <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <div>
          <h1 className='text-gray-800 py-8'>
            At Climate Care Network, we believe that positive change begins with each of us. Whether you're an individual looking to make a personal impact or a business seeking to contribute to a more sustainable future, there are countless ways to get involved and be part of the solution.
          </h1>
          <h1 className='text-gray-800 py-8'>
            <span className="font-bold">Donate</span> <br />
            Your financial support helps fund critical projects focused on climate action, environmental protection, and sustainability. Every contribution, big or small, makes a difference and brings us one step closer to a greener, healthier future.
          </h1>
        </div>
        <div className="text-center lg:text-left mt-4">
          <Link href="/contacts"><button className="LearnMore my-10 text-center">Contact Us Now!!</button></Link>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default Getinvolved
