import ContactUs from "../components/contact-us/contact-us";
import { Container } from "../components/container/container";
import PaddingContainer from "../components/padding-container/padding-container";
import Projects from "../components/projects/projects";

interface CompanyProjectsProps {
  params?: Promise<any>;
}

const CompanyProjects: React.FC<CompanyProjectsProps> = ({ params }) => {
  return (
    <section id="projects" className="bg-white">
      <PaddingContainer>
        <Container>
          <Projects id={params} />
        </Container>
      </PaddingContainer>
    </section>
  );
};

export default CompanyProjects;
