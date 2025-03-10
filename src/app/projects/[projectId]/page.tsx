import { Container } from "@/app/components/container/container";
import PaddingContainer from "@/app/components/padding-container/padding-container";
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
  description: [],
  stack: [],
  link: "",
  logo: "",
  background: ""
};

const Project = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;

  const project = projects.find((item) => item.link.includes(projectId));

  const { name, description, logo, stack, background } = project ?? defaultProject;

  return (
    <section className="bg-darkBlue text-white">
      <PaddingContainer>
        <Container>
          <div className="flex flex-col items-center xl:items-stretch justify-between xl:flex-row gap-10">
            <div className="flex flex-col justify-between gap-10 relative">
              <div>
                <h2 className="text-5xl lg:text-8xl capitalize text-center mb-12 animate-slide-up">
                  {name}
                </h2>

                <div
                  className={`flex justify-center relative mb-8 mx-auto animate-slide-up ${name === "OJT-Logbook" && "bg-white p-4 w-200 rounded-lg"
                    }`}
                >
                  <Image
                    src={logo}
                    alt="logo"
                    className={`w-200 ${name === "OJT-Logbook" ? "h-[6rem]" : "h-[20rem] "
                      }`}
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col gap-10 max-w-[800px]">
                {description.map((para, index) => (
                  <p
                    key={index}
                    className="text-base/10 text-center lg:text-left text-slate-100 animate-slide-in-right"
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div className="flex items-end justify-center lg:justify-start gap-5 mb-10 animate-slide-in-right ">
                <h3 className="text-base text-slate-500 lg:text-4xl">
                  Tech Stack:
                </h3>
                <ul className="flex gap-3">
                  {stack.map((item, index) => (
                    <li
                      className="text-mm text-gray-700 lg:text-base flex items-center justify-center border-2 rounded-xl px-4 py-2 text-center h-10 bg-white"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <Image
                src={background}
                alt="Project"
                priority
                className="h-full w-full object-contain animate-slide-up max-w-[800px]"
              />
            </div>
          </div>
        </Container>
      </PaddingContainer>

      <CompanyProjects params={projectId as any} />
    </section>
  );
};

export default Project;
