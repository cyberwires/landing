import { ProjectData } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  data: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <div className="bg-white cursor-pointer max-w-xl max-h-500 rounded-lg transition-transform duration-200 hover:scale-105 hover:bg-black hover:text-white">
      {/* Image Container */}
      <div className="relative w-full h-360 mb-7">
        {/* Tech Tags */}
        <div className="flex justify-end gap-5 relative z-10 p-5">
          {data.stack.map((item, index) => (
            <span
              key={index}
              className="bg-white text-black px-2 py-1 rounded-lg text-mm"
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
          className="rounded-lg z-0"
        />
      </div>

      {/* Text and Button */}
      <div className="px-10 pb-10">
        <p className="text-mm md:text-lg mb-8">{data.description}</p>

        <Link
          href={data.link}
          className="border-2 border-current p-5 rounded-lg text-mm hover:bg-white hover:text-black transition-colors"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
