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
    <section className="pt-150 bg-light-grey text-black">
      <h2 className="text-5xl lg:text-8xl capitalize text-center mb-12">
        {name}
      </h2>

      <div
        className="flex justify-center relative mb-8 mx-auto w-200 h-200"
        style={{ height: name === "OJT-Logbook" ? "6rem" : "20rem" }}
      >
        <Image src={logo} alt="logo" fill priority />
      </div>

      <p className="text-mm lg:text-4xl font-medium text-center mx-20 my-10">
        {description}
      </p>

      <div className="flex justify-center gap-5 mb-10">
        <h3 className="text-base lg:text-4xl">Tech Stack:</h3>
        <ul className="flex gap-3">
          {stack.map((item, index) => (
            <li
              className="text-mm lg:text-base border-2 rounded-xl px-4 text-center bg-white"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <CompanyProjects params={projectId as any} />
    </section>
  );
};

export default Project;
