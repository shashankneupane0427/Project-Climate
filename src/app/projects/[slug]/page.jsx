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
      <h1 className="text-4xl font-bold text-center mb-8 text-green-600">{project.title}</h1>
      <div className="space-y-16 p-6 bg-white rounded-lg shadow-lg">
        
        {/* First Section: Top Image and Section Title */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src={`path_to_images/${project.images[0]}`} // Replace with actual path
            alt={project.title}
            className="h-60 w-full md:w-3/4 object-cover rounded-lg"
          />
          <h2 className="text-3xl font-semibold text-gray-700 text-center mt-4">{project.sectionTitle}</h2>
          <p className="text-gray-600 text-center">{project.content}</p>
        </div>

        {/* Second Section: Image on Right with Paragraph */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6">
          <div className="flex-1">
            <p className="text-gray-600">
              {project.content}
            </p>
          </div>
          <div className="flex-1">
            <img
              src={`path_to_images/${project.images[1]}`} // Replace with actual path
              alt={project.title}
              className="h-60 w-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Third Section: Centered Image with Paragraph */}
        <div className="flex flex-col items-center space-y-6">
          <p className="text-gray-600 text-center">
            {project.content}
          </p>
          <img
            src={`path_to_images/${project.images[2]}`} // Replace with actual path
            alt={project.title}
            className="h-60 w-full md:w-1/2 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
