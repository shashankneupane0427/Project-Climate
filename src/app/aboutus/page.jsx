import React from 'react';
import Footer from '@/components/Footer';
import '../aboutus.css';
import '../global.css'
import Card from '@/components/Card';

const page = () => {
  const data = [
    { id:'1',
      name: 'Green Earth Initiative',
      post: 'Environmental Outreach',
      description: 'An organization focused on raising awareness about reforestation and sustainable living.',
      url: '../images/grasslad.jpg'
    },
    {
      id:'2',
      name: 'Ocean Guardians',
      post: 'Marine Conservation',
      description: 'A group dedicated to protecting marine life and combating ocean pollution through clean-up drives.',
      url: '../images/Aboutus.jpg'
    },
    {
      id:'3',
      name: 'Eco Innovators',
      post: 'Renewable Energy Advocates',
      description: 'A startup developing innovative solutions for clean energy and reducing carbon footprints globally.',
      url: '../images/Logo.png'
    },
    {
      id:'4',
      name:'ram',
      post:'helo',
      description:'tati',
      url: '../images/Logo.png'
    },
    {
      id:'5',
      name:'ram',
      post:'helo',
      description:'tati',
      url: '../images/Logo.png'
    },
    {
      id:'6',
      name:'ram',
      post:'helo',
      description:'tati',
      url: '../images/Logo.png'
    },
    {
      id:'7',
      name:'ram',
      post:'helo',
      description:'tati',
      url: '../images/Logo.png'
    }
  ];
  
  return (
    <main>
      <div className='relative xl:h-full xl:w-full h-[500px] w-full overflow-hidden'>
        <img src="/images/Aboutus.jpg" alt="" className='w-full h-full object-cover zoom-effect' />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className='text-white  text-[clamp(1rem,4vw,3.5rem)] lg:text-[clamp(0.2rem,5vw,2.5rem)] mb-2'>
            About CCN...
          </span>
          <span className='text-white  text-[clamp(2rem,5vw,5rem)] lg:text-[clamp(2.5rem,6vw,6.5rem)] whitespace-nowrap'>
            SAVE NATURE
          </span>
        </div>
      </div>
      <div className="z-0 pb-[40px] pt-[50px] lg:pt-[170px]" style={
        {
          paddingLeft: '10%',
          paddingRight: '10%'
        }
      }>
        <div className="text-center pt-[50px]  font-bold question lg:pt-[10px]"   >
          <span>WHAT DOES CCN DO?</span>
        </div>
        <div className="text-center py-5 " >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis natus doloribus, voluptate, blanditiis consectetur libero officiis sapiente amet recusandae commodi rerum vel! Nostrum quas ex praesentium beatae doloremque aut aspernatur fugiat? Dolores ducimus, odit voluptate mollitia cumque aspernatur? Error in nisi iure assumenda sit atque ipsam a beatae, sequi expedita.</div>

        <div>
            <h1 className='text-center text-3xl py-5 pb-[100px]' >Our Team</h1>
        </div>
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-2 justify-items-center'>
          {data.map(({ id, name, post, description, url }) => (
            <div key={id} className='h-full w-full flex justify-center pb-[50px]'>
              
              <Card name={name} post={post} description={description} url={url} />
            </div>
          ))}
        </div>



        <Footer />
      </div>

    </main>
  );
}

export default page;
