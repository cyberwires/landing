"use client";
import React, { useState } from "react";
import ProjectCard from "../project-card/project-card";
import { projects } from "@/app/utils";
import { ProjectData } from "@/app/types";
import ArrowIcon from "@/app/icons/arrow-icon";

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
    <div>
      <h2 className="text-darkBlue text-center lg:text-left font-bold text-xl lg:text-8xl mb-5 lg:mb-20 animate-slide-up">
        Our Projects
      </h2>

      {/* Mobile Slider */}
      <div className="relative overflow-hidden lg:hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {availableProjects.map((project, index) => (
            <div key={index} className="w-full my-10 flex-shrink-0">
              <ProjectCard data={project} />
            </div>
          ))}
        </div>

        {/* Round Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 scale-x-[-1]"
        >
          <ArrowIcon />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 "
        >
          <ArrowIcon />
        </button>
      </div>

      {/* Desktop Layout (No Slider) */}
      <div className="hidden lg:flex justify-between gap-10">
        {availableProjects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
