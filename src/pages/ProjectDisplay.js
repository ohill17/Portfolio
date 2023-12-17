import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const githubLink = `https://github.com/${project.github}`;

  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <GitHubIcon style={{ cursor: "pointer" }} />
      </a>
    </div>
  );
}

export default ProjectDisplay;
