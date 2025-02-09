import React from 'react';
import projectsData from '../projectData/data.json';

const ProjectsPage = ({ params }) => {
  const slug = params.slug; // Retrieve the slug parameter from URL
  const project = projectsData.projects.find(p => p.id === slug); // Find project with matching id

  if (!project) {
    return <p>Project not found.</p>; // Handle case where the project doesn't exist
  }

  return (
    <div className="bg-gray-100 p-8 ">
      <div className="space-y-16 p-6 bg-white rounded-lg shadow-lg">
        
        {/* First Section: Top Image and Section Title */}
        <h1 className="text-4xl pt-8 font-bold text-center mb-8 text-green-600">{project.title}</h1>
        <div className="flex flex-col items-center space-y-6">
          <img
            src={`${project.images[0]}`} // Replace with actual path
            alt={project.title}
            className="rounded-xl"
          />
          <h2 className="text-3xl font-semibold text-gray-700 text-center mt-4">{project.sectionTitle}</h2>
          <p className="text-gray-600 text-center">{project.content}</p>
        </div>

        {/* Second Section: Image on Right with Paragraph */}
        <div className="flex flex-col md:flex-row items-center]">
          <div className="flex-1  p-6">
            <p className="text-gray-600">
              {project.content2}
            </p>
          </div>
          <div className="flex-1 ml-80 p-6">
            <img
              src={`${project.images[1]}`} // Replace with actual path
              alt={project.title}
              className="h-60 w-90 rounded-lg"
            />
          </div>
        </div>

        {/* Third Section: Centered Image with Paragraph */}
        <div className="flex flex-col md:flex-row items-center]">
          
          <div className="flex-1 p-6">
            <img
              src={`${project.images[2]}`} // Replace with actual path
              alt={project.title}
              className="h-60 w-90 rounded-lg"
            />
          </div>
          <div className="flex-1  p-6">
            <p className="text-gray-600">
              {project.content3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
