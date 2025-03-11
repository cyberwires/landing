"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "../project-card/project-card";
import { projects } from "@/app/utils";
import { ProjectData } from "@/app/types";
import ArrowIcon from "@/app/icons/arrow-icon";

const Projects = ({ id }: { id?: Promise<any> | undefined }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Filter available projects
  const availableProjects = projects.reduce<ProjectData[]>((acc, val) => {
    const hasProject = val.link.includes(id || ("" as any));
    if (!id || !hasProject) acc.push(val);
    return acc;
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild
        ? (sliderRef.current.firstChild as HTMLElement).clientWidth + 20 // Adjust for gap
        : 200; // Default width in case no items
      sliderRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  // Scroll right (next)
  const scrollRight = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild
        ? (sliderRef.current.firstChild as HTMLElement).clientWidth + 20
        : 200;
      sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section>
      <h2 className="text-darkBlue text-center font-bold text-xl lg:text-8xl mb-5 lg:mb-20 animate-slide-up">
        Our Projects
      </h2>

      {/* Scrollable Slider */}
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex gap-10 overflow-hidden whitespace-nowrap scroll-smooth px-5"
        >
          {availableProjects.map((project, index) => (
            <div key={index} className="my-10 inline-block min-w-[320px] min-[500px]:min-w-[400px]">
              <ProjectCard data={project} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 scale-x-[-1]"
        >
          <ArrowIcon />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          <ArrowIcon />
        </button>
      </div>
    </section>
  );
};

export default Projects;
