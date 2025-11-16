import React from "react";
import ProjectTech from "./ProjectTech";

function createTech(tech) {
  return <ProjectTech key={tech.id} tech={tech.name} />;
}

function Project(props) {
  return (
    <div className="projects">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-square-github fa-xl"></i>
      </a>
      <p className="project-title">{props.name}</p>
      <div className="project-tech-stack">
        {props.techStack.map(createTech)}
      </div>
      <p className="project-content">{props.content}</p>
    </div>
  );
}

export default Project;
