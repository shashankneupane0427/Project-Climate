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
          <span className='text-white  text-[clamp(1rem,4vw,3.5rem)] lg:text-[clamp(0.2rem,5vw,2.5rem)] mb-2'>
            Join Us
          </span>
          <span className='text-white  text-[clamp(2rem,5vw,5rem)] lg:text-[clamp(2.5rem,6vw,6.5rem)] whitespace-nowrap'>
            For Making difference
          </span>
        </div>


      </div>
      <div className="text-center pt-[50px]   question lg:pt-[125px]"  >
        <span>Join Us for Making a Difference!</span>
      </div>
      <div style={{
        paddingLeft: '10%',
        paddingRight: '10%'

      }} >
        <div>
          <h1 className='text-gray-800 py-8'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, eum, libero deserunt quaerat doloribus mollitia magni sint ullam totam id dicta natus assumenda repudiandae tempora beatae doloremque voluptatem odio! Ratione veritatis quisquam ab, consectetur nihil commodi inventore quae voluptatum quas Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nobis qui, nisi ratione quos eos vel modi possimus incidunt aliquid saepe error quidem eius at cumque! Nesciunt ab tenetur quasi quaerat soluta? Eveniet autem, facere mollitia, sit nihil ipsam recusandae minus totam magnam minima delectus commodi, consequuntur accusamus iusto magni.
          </h1>
        </div>
        <div className="text-center lg:text-left mt-4">
          <Link href="/contacts"  ><button className="  LearnMore my-10 text-center " >Contact Us Now!!</button></Link>
        </div>




        <Footer />
      </div>

    </main>
  )
}

export default Getinvolved