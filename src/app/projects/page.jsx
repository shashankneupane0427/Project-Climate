import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const projectsData = [
  {
    id: 1,
    title: 'Reforestation for the Future',
    description: 'This project aims to combat deforestation by partnering with local communities and governments to restore lost forests and promote sustainable land-use practices.',
    image: '/projects/projectone.jpeg',
  },
  {
    id: 2,
    title: 'Clean Oceans Initiative',
    description: "Aiming to reduce plastic waste in the world's oceans, this project focuses on large-scale cleanup efforts, awareness campaigns, and policy advocacy. It includes beach cleanups, the development of new recycling technologies.",
    image: '/projects/projecttwo.jpeg',
  },
  {
    id: 3,
    title: 'Solar Power for All',
    description: 'This project aims to bring solar energy solutions to underserved communities, providing affordable, sustainable power to regions with limited access to electricity.',
    image: '/projects/projectthree.jpg',
  },
];

const Page = () => {
  return (
    <main
      style={{
        paddingLeft: '10%',
        paddingRight: '10%',
      }}
      className="z-0 pb-[40px] pt-[50px] lg:pt-[170px]"
    >
      <div>
        <h1 className="text-5xl font-bold py-[20px] text-center text-gray-800">PROJECTS</h1>
        <p className="block text-center mb-12 text-gray-600 text-lg">
          Our projects are designed to address some of the most urgent environmental challenges of our time, from combating climate change to restoring ecosystems and advancing clean energy solutions. Each project we undertake is driven by a shared vision of sustainability, equity, and resilience.
        </p>

        <div className="space-y-20">
          {projectsData.map((project, index) => (
            <Link href={`/projects/${project.id}`} key={project.id} className="block shadow-lg hover:shadow-lg transition-shadow duration-300 mb-4">
              <div
                className={`flex flex-col ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-8 bg-white rounded-lg overflow-hidden`}
              >
                <div className="w-full lg:w-1/2 h-64 relative mb-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="lg:w-1/2 p-8">
                  <h2 className="text-3xl font-semibold mb-4 text-gray-800">{project.title}</h2>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Page;
