import CreateIdeaIcon from "@/app/icons/create-idea-icon";
import { Container } from "../container/container";
import PaddingContainer from "../padding-container/padding-container";
import PaletteIcon from "@/app/icons/palette-icon";
import ProgrammingIcon from "@/app/icons/programming-icon";
import TestingIcon from "@/app/icons/testing-icon";
import LaunchIcon from "@/app/icons/launch-icon";
import SupportIcon from "@/app/icons/support-icon";

export const workStages = [
  {
    id: 1,
    name: "Discovery & Planning",
    icon: CreateIdeaIcon,
    description: "We start by analyzing your business needs, target audience, and project goals. This phase helps us create a solid roadmap for development.",
  },
  {
    id: 2,
    name: "UI/UX Design",
    icon: PaletteIcon,
    description: "Our design team crafts intuitive and visually stunning interfaces that ensure a seamless user experience while aligning with your brand identity.",
  },
  {
    id: 3,
    name: "Development",
    icon: ProgrammingIcon,
    description: "We bring designs to life with clean, scalable, and high-performance code, using the latest web technologies and best development practices.",
  },
  {
    id: 4,
    name: "Testing & Quality Assurance",
    icon: TestingIcon,
    description: "Every feature undergoes rigorous testing to ensure functionality, security, and responsiveness across all devices and browsers.",
  },
  {
    id: 5,
    name: "Deployment",
    icon: LaunchIcon,
    description: "Once everything is polished and approved, we launch your website, making it accessible to your users with smooth deployment processes.",
  },
  {
    id: 6,
    name: "Maintenance & Optimization",
    icon: SupportIcon,
    description: "Our work doesn’t stop at launch! We provide continuous support, updates, and optimizations to ensure your website remains fast, secure, and up-to-date.",
  }
]

export default function WorkingProcess() {
  return (
    <section className="bg-darkBlue text-white" id="working-process">
      <PaddingContainer>
        <Container>
          <h2 className="text-4xl lg:text-8xl animate-slide-in-right text-center pb-20">
            Working Process
          </h2>

          <ul className="text-base grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 justify-between animate-slide-up">
            {workStages.map(({ name, description, icon: Icon,  id }) => (
              <li key={id} className="relative flex flex-col gap-5 lg:gap-10">
                <Icon />
                <div className="font-bold text-blue text-lg lg:text-5xl">{name}</div>
                <div className="">{description}</div>
                <div className="absolute right-0 -top-6 text-9xl  text-slate-500 opacity-50">0{id}</div>
              </li>
            ))}
          </ul>
        </Container>
      </PaddingContainer>
    </section>
  );
}
