import ContactUs from "../components/contact-us/contact-us";
import Projects from "../components/projects/projects";

interface CompanyProjectsProps {
  params?: Promise<any>;
}

const CompanyProjects: React.FC<CompanyProjectsProps> = ({ params }) => {
  return (
    <section className="pt-100" id="projects">
      <Projects id={params} />

      <ContactUs />
    </section>
  );
};

export default CompanyProjects;
