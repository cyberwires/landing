"use client";
import { ProjectData } from "@/app/types";
import { projects } from "@/app/utils";
import ProjectCard from "../project-card/project-card";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const Projects = ({ id }: { id?: Promise<any> | undefined }) => {
  // Filter available projects
  const availableProjects = projects.reduce<ProjectData[]>((acc, val) => {
    const hasProject = val.link.includes(id || ("" as any));
    if (!id || !hasProject) acc.push(val);
    return acc;
  }, []);

  return (
    <section>
      <h2 className="text-darkBlue text-center font-bold text-xl lg:text-8xl mb-5 lg:mb-20 animate-slide-up">
        Our Projects
      </h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{ padding: "20px 0" }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {availableProjects.map((project, index) => (
          <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}><ProjectCard data={project} /></SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
