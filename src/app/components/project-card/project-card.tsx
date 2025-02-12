import { ProjectData } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  data: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <div className="bg-white text-darkBlue cursor-pointer mx-auto lg:mx-0 w-[300px] sm:w-[330px] xl:w-[360px] max-h-[500px]
    shadow-[0px_0.0625em_0.0625em_rgba(0,0,0,0.25),_0px_0.125em_0.5em_rgba(0,0,0,0.25),_0px_0px_0px_1px_rgba(255,255,255,0.1)_inset]
    rounded-lg transition-transform duration-200 hover:scale-105 p-5">
      {/* Image Container */}
      <div className="relative w-full h-200 mb-7">
        {/* Tech Tags */}
        <div className="flex justify-end gap-5 relative z-10 p-5">
          {data.stack.map((item, index) => (
            <span
              key={index}
              className="bg-white text-darkBlue px-2 py-1 rounded-lg text-mm shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),_0px_2px_6px_2px_rgba(60,64,67,0.15)]"
            >
              {item}
            </span>
          ))}
        </div>
        {/* Image */}
        <Image
          src={data.background}
          alt="logo"
          fill
          priority
          className="rounded-lg z-0 object-cover"
        />
      </div>

      {/* Text and Button */}
      <div className="h-[12rem]">
        <p className="text-base mb-11 line-clamp-2">
          {data.description}
        </p>

        <Link
          href={data.link}
          className="border-2 border-blue py-4 px-7 rounded-lg font-bold text-mm text-blue hover:bg-blue hover:text-white transition-colors"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
