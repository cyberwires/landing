import Projects from "../components/projects/projects";

interface CompanyProjectsProps {
  params?: Promise<any>;
}

const CompanyProjects: React.FC<CompanyProjectsProps> = ({ params }) => {
  return (
    <section className="pt-100" id="projects">
      <Projects id={params} />
    </section>
  );
};

export default CompanyProjects;
