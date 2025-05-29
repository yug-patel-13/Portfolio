import React from 'react';
import "./Project.css";

const projects = [
  {
    image:"port.webp",
    title: "my portfolio",
    link1:"",
    description: "you already my portfolo & you are see my portfolio right now..",
    link: "https://github.com/"
  },
  {
    image:"netflix.png",
    title: "netflix clone",
    link1:"kaleidoscopic-chimera-d0c71f.netlify.app",
    description: "This is my second project netflix clone.not mor functionality in this project",
    link: "https://github.com/"
  },

  {
    image:"food.jpg",
    title: "ART selling website",
    link1:"https://artwebbyyug.netlify.app/",
    description: "full stack project for my art selling",
    link: "https://github.com/",
     full:"full stack project"
  },
  {
    image:"farmer.jpg",
    title: "crop selling ang buying website",
    link1:"https://farm-app-kappa.vercel.app/",
    description: "college projecte",
    link: "https://github.com/",
    full:"full stack project"
    
  }
];

const Projects = () => {
  return (
    <div id='Projects' className='projects-container'>
    
      <div className='projects-list' id='projects'>
        {projects.map((project, index) => (
          <div key={index} className='project-card' title='click image to see front-end'>
            <a href={project.link1}><img src={project.image} alt="my" id='port1' title='click here ' /></a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target='_blank' rel='noopener noreferrer'><h1 title='click to see github'><i class="fa-brands fa-github" style={{color:"black"}} ></i></h1></a>
            <h1 style={{color:"black"}}>{project.full}</h1>
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default Projects;
