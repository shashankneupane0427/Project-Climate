import React from 'react';
import Footer from '@/components/Footer';
import '../aboutus.css';
import '../global.css';
import Card from '@/components/Card';
import Image from 'next/image';

const Page = () => {
  const data = [
    {
      id: '1',
      name: 'Green Earth Initiative',
      post: 'Environmental Outreach Coordinator',
      description: 'An organization focused on raising awareness about reforestation, sustainable living, and environmental conservation.',
      url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '2',
      name: 'Ocean Guardians',
      post: 'Marine Conservation Specialist',
      description: 'A non-profit organization dedicated to protecting marine life and combating ocean pollution through beach clean-ups and advocacy.',
      url: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '3',
      name: 'Eco Innovators',
      post: 'Renewable Energy Solutions Engineer',
      description: 'A forward-thinking company committed to developing innovative renewable energy solutions and reducing global carbon footprints.',
      url: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '4',
      name: 'EarthWatch',
      post: 'Sustainability Advisor',
      description: 'An environmental consultancy offering services to help businesses transition to sustainable practices and reduce environmental impact.',
      url: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '5',
      name: 'Global Green Movement',
      post: 'Climate Change Advocate',
      description: 'A global organization that campaigns for climate change awareness and advocates for policies to reduce greenhouse gas emissions.',
      url: 'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '6',
      name: 'The Solar Collective',
      post: 'Solar Energy Advocate',
      description: 'A network of renewable energy experts focused on promoting solar power as a leading source of clean energy worldwide.',
      url: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '7',
      name: 'Clean Oceans Project',
      post: 'Environmental Outreach Manager',
      description: 'A grassroots initiative working to clean up the world’s oceans and raise awareness about the dangers of plastic pollution.',
      url: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '8',
      name: 'Forest Guardians',
      post: 'Reforestation Project Leader',
      description: 'A nonprofit organization dedicated to planting trees and restoring forests around the world to combat climate change.',
      url: 'https://images.pexels.com/photos/769746/pexels-photo-769746.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '9',
      name: 'Clean Energy Coalition',
      post: 'Renewable Energy Policy Analyst',
      description: 'A coalition of organizations and experts advocating for the transition to 100% renewable energy and the reduction of fossil fuel dependence.',
      url: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <main>
      <div className='relative xl:h-full xl:w-full h-[500px] w-full overflow-hidden'>
        <img src="/images/Aboutus.jpg" alt="" className='w-full h-full object-cover zoom-effect' />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className='text-white text-[clamp(1rem,4vw,3.5rem)] lg:text-[clamp(0.2rem,5vw,2.5rem)] mb-2'>
            About CCN...
          </span>
          <span className='text-white text-[clamp(2rem,5vw,5rem)] lg:text-[clamp(2.5rem,6vw,6.5rem)] whitespace-nowrap'>
            SAVE NATURE
          </span>
        </div>
      </div>
      <div className="z-0 pb-[40px] pt-[50px] lg:pt-[170px]" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <div className="text-center pt-[50px] font-bold question lg:pt-[10px]">
          <span>WHAT DOES CCN DO?</span>
        </div>
        <div className="text-center py-5">
          At Climate Care Network, we are dedicated to building a sustainable and resilient future for communities worldwide. We focus on empowering individuals, businesses, and organizations to take meaningful action in response to climate change. Through collaborative efforts, we provide education, resources, and innovative solutions aimed at reducing environmental impact, promoting conservation, and advancing climate justice.
        </div>
        <div>
          <h1 className='text-center text-3xl py-5 pb-[100px]'>Our Team</h1>
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

export default Page;
