import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link'; // or 'react-router-dom'

const projectsData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of Project Oaksdnfiashdfoi asoidfj oiasjdfoij asdfo jasdfopoajsd ofpj apdsfpjaspdf poasjdfpo jasdfpajsdpfoopadsjf poajsdne.',
    image: '/projects/projects.jpg', // Replace with actual image paths
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: '/projects/projects.jpg',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    image: '/projects/projects.jpg',
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magni illo id, a mollitia officia quidem voluptate! Numquam consequatur, expedita eaque asperiores eum quidem ad, distinctio illo rerum perferendis voluptate!
        </p>

        <div className="space-y-20">
          {projectsData.map((project, index) => (
            <Link href={`/projects/${project.id}`} key={project.id} className="block hover:shadow-lg transition-shadow duration-300 mb-4">
              <div
                className={`flex flex-col ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-8 bg-white rounded-lg overflow-hidden`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full lg:w-1/2 h-64 object-cover mb-8"
                />
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