import React from "react";
import ProjectCard from "../project-card/project-card";
import { projects } from "@/app/utils";
import { ProjectData } from "@/app/types";

const Projects = ({ id }: { id?: Promise<any> | undefined }) => {
  const availableProjects = projects.reduce<ProjectData[]>((acc, val) => {
    const hasProject = val.link.includes(id || ("" as any));

    if (!id) {
      acc.push(val);
    }

    if (!hasProject) {
      acc.push(val);
    }

    return acc;
  }, []);

  return (
    <div className="bg-light-grey px-16 py-20">
      <h2 className="text-green text-xl md:text-8xl mb-8 md:mb-24">
        Our Projects
      </h2>
      <div className="flex flex-wrap md:flex-nowrap gap-10">
        {availableProjects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
