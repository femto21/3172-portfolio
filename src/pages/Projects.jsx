import React from "react";
import projectDetails from "../assets/ProjectDetails";
import Project from "../components/Project";

function createProject(project) {
  return (
    <Project
      key={project.id}
      link={project.link}
      name={project.name}
      techStack={project.techStack}
      content={project.content}
    />
  );
}

const Projects = () => {
  return (
    <section id="projectspage" className="mt-8 p-8">
      <div className="text-4xl w-fit m-auto mb-4">
        <div className="">My Projects</div>
      </div>
      <div>{projectDetails.map(createProject)}</div>
    </section>
  );
};

export default Projects;
