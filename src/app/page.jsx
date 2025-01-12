
import React from 'react';
import "./global.css";
import Link from 'next/link';
import Footer from '@/components/Footer';

const Page = () => {
  return (
      <main style={{
        paddingLeft: '10%',
        paddingRight: '10%'

      }} className="z-0 pb-[40px] pt-[50px] lg:pt-[170px]">
      <div className="flex flex-col-reverse lg:flex-row gap-4">
        {/* Text Container */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span className="Hollow">C</span>
          <span className="Hollow">A</span>
          <span className="Hollow">R</span>
          <span className="Hollow">I</span>
          <span className="Hollow">N</span>
          <span className="Hollow">G</span><br />
          <span className="Hollow" style={{
            WebkitTextStroke: '2px black',
            color: 'transparent',
          }}>
            CLIMATE
          </span><br />
          <span className="smallHollow">Curing PLANET</span>
        </div>


        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          <img
            src="/images/Logo.png"
            className="py-10 w-full  h-auto mx-auto lg:mx-0  lg:py-0"
            alt="Logo"
            style={{ display: 'block' }}
          />
        </div>
      </div>
      <div className="text-center lg:text-left w-full lg:w-2/4 text-xl py-5" >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aspernatur soluta sit debitis, minima ex, at quos velit, commodi ratione molestiae in deserunt quis aliquid maxime est architecto. Voluptatibus, ipsam!
      </div>
      <div className="text-center lg:text-left mt-4">
        <Link href="/aboutus"  ><button className="  LearnMore mt-10 text-center " >Learn More</button></Link>
      </div>
      <div className="text-center pt-[50px]  font-bold question lg:pt-[125px]"  >
        <span>WHAT DOES CCN DO?</span>
      </div>
      <div className="text-center py-5 " >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis natus doloribus, voluptate, blanditiis consectetur libero officiis sapiente amet recusandae commodi rerum vel! Nostrum quas ex praesentium beatae doloremque aut aspernatur fugiat? Dolores ducimus, odit voluptate mollitia cumque aspernatur? Error in nisi iure assumenda sit atque ipsam a beatae, sequi expedita.</div>
      <div className="flex flex-col lg:flex-row py-[20px] gap-[3px] justify-center ">
        <div className="flex flex-col lg:flex-row py-[20px] gap-[3px]">
          <div className="w-full lg:w-1/4 h-auto WhatDOImage">
            <img src="/Homepage/animal.jpg " alt="" className="w-full h-full object-cover " />
          </div>
          <div className="w-full lg:w-1/4 h-auto WhatDOImage">
            <img src="/Homepage/fair.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-1/4 h-auto WhatDOImage">
            <img src="/Homepage/rally.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-1/4 h-auto WhatDOImage">
            <img src="/Homepage/windmill.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
        <Footer/>
    </main>
    
  );
}

export default Page;
