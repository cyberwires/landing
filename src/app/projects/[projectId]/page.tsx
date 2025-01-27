import { projects } from "@/app/utils";
import Image from "next/image";
import CompanyProjects from "../page";

// Define the possible project IDs
export const generateStaticParams = async () => {
  // Replace with your actual data source
  const projectIds = ["academy", "ojt-logbook", "join-the-trades"];

  return projectIds.map((id) => ({
    projectId: id,
  }));
};

const defaultProject = {
  name: "",
  description: "",
  stack: [],
  link: "",
  logo: "",
};

const Project = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;

  const project = projects.find((item) => item.link.includes(projectId));

  const { name, description, logo, stack } = project ?? defaultProject;

  return (
    <section className="pt-150 bg-light-grey">
      <h2 className="text-5xl md:text-8xl capitalize text-center mb-12">
        {name}
      </h2>

      <div className="flex justify-center relative mb-8 mx-auto w-full max-h-md min-h-100 max-w-md md:w-300 md:h-full">
        <Image src={logo} alt="logo" fill priority />
      </div>

      <p className="text-mm md:text-4xl text-center">{description}</p>

      <h3 className="text-4xl md:text-4xl">Tech Stack:</h3>
      <ul>
        {stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <CompanyProjects params={projectId as any} />
    </section>
  );
};

export default Project;
