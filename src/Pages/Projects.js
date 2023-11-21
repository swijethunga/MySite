/*import React, { useState } from 'react';
import ProjectCard from '../Components/ProjectCard';
import ProjectDetailsCard from '../Components/ProjectDetailsCard';


const Projects = () => {

    const [showDetails, setShowDetails] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
  
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            imageSrc: '../Images/images.jpeg',
            details: 'This is the details of Project 1.',
            githubLink: 'https://github.com/your-username/project1',
          },
          {
            id: 2,
            title: 'Project 2',
            imageSrc: '../Images/images.jpeg',
            details: 'This is the details of Project 2.',
            githubLink: 'https://github.com/your-username/project2',
          },
    ];
  
    const handleAboutClick = (project) => {
      setSelectedProject(project);
      setShowDetails(true);
    };
  
    const handleOpenClick = (project) => {
      window.location.href = project.githubLink; // Redirect to GitHub
    };
  
    const handleCloseClick = () => {
      setShowDetails(false);
      setSelectedProject(null);
    };
  
    return (
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            imageSrc={project.imageSrc}
            title={project.title}
            onAboutClick={() => handleAboutClick(project)}
            onOpenClick={() => handleOpenClick(project)}
          />
        ))}
        {showDetails && selectedProject && (
          <ProjectDetailsCard
            details={selectedProject.details}
            onCloseClick={handleCloseClick}
          />
        )}
      </div>
    );
}
export default Projects;*/










