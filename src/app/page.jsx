import React from 'react';
import Head from 'next/head';
import "./global.css";
import Link from 'next/link';
import Footer from '@/components/Footer';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <Head>
        <title>Climate Care Network</title>
        <link rel="icon" href="/images/Logo.png" />
      </Head>
      <main style={{
        paddingLeft: '10%',
        paddingRight: '10%'
      }} className="z-0 pb-[40px] pt-[50px] lg:pt-[170px]">
        <div className="flex flex-col-reverse lg:flex-row ">
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
            <Image
              src="/images/Logo.png"
              width={507}
              height={360}
              alt="Logo"
              style={{ display: 'block' }}
            />
          </div>
        </div>
        <div className="text-center pt-[50px] font-bold question lg:pt-[125px]">
          <span>WHAT DOES CCN DO?</span>
        </div>
        <div className="text-center py-5">At Climate Care Network, we are dedicated to building a sustainable and resilient future for communities worldwide. We focus on empowering individuals, businesses, and organizations to take meaningful action in response to climate change. Through collaborative efforts, we provide education, resources, and innovative solutions aimed at reducing environmental impact, promoting conservation, and advancing climate justice.</div>
        <div className="flex flex-col lg:flex-row py-[20px] gap-[3px] justify-center">
          <div className="w-full lg:w-1/4 h-auto WhatDOImage">
            <Image src="/Homepage/animal.jpg" alt="" width={507} height={360} className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-1/4 h-auto WhatDOImage">
            <Image src="/Homepage/fair.jpg" alt="" width={507} height={360} className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-1/4 h-auto WhatDOImage">
            <Image src="/Homepage/rally.jpg" alt="" width={507} height={360} className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-1/4 h-auto WhatDOImage">
            <Image src="/Homepage/windmill.jpg" alt="" width={507} height={360} className="w-full h-full object-cover" />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Page;
