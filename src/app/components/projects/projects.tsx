"use client";
import React, { useState } from "react";
import ProjectCard from "../project-card/project-card";
import { projects } from "@/app/utils";
import { ProjectData } from "@/app/types";

const Projects = ({ id }: { id?: Promise<any> | undefined }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === availableProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? availableProjects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="px-4 py-10 lg:px-16 lg:py-20 max-w-2000 mx-auto">
      <h2 className="text-blue text-xl lg:text-8xl mb-8 lg:mb-24">
        Our Projects
      </h2>

      {/* Mobile Slider */}
      <div className="relative w-full overflow-hidden lg:hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {availableProjects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <ProjectCard data={project} />
            </div>
          ))}
        </div>

        {/* Round Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black w-16 h-16 rounded-full shadow-md"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black w-16 h-16 rounded-full shadow-md"
        >
          ▶
        </button>
      </div>

      {/* Desktop Layout (No Slider) */}
      <div className="hidden lg:flex flex-wrap lg:flex-nowrap gap-10">
        {availableProjects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
