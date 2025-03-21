import { ProjectData } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  data: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <div className="bg-white text-darkBlue lg:mx-0 max-w-[310px] min-[500px]:max-w-[400px] min-h-[450px]
    shadow-[0px_0.0625em_0.0625em_rgba(0,0,0,0.25),_0px_0.125em_0.5em_rgba(0,0,0,0.25),_0px_0px_0px_1px_rgba(255,255,255,0.1)_inset]
    rounded-lg transition-transform duration-200 p-5 mx-auto">
      {/* Image Container */}
      <div className="relative w-full mb-7">
        {/* Tech Tags */}
        <div className="flex justify-end gap-5 relative z-10">
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

          className="rounded-lg z-0 object-contain h-[250px]"
        />
      </div>

      {/* Text and Button */}
      <div>
        <div className="font-bold text-blue text-lg">{data.name}</div>
        <p className="text-base mb-8 line-clamp-2 overflow-hidden">
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
