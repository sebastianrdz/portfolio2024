import ProjectCard from "@/components/project-card";
import { projectsData } from "@/lib/data";

export default function PortfolioPage() {
  const { data } = projectsData;
  return (
    <section id="experience" className="container mx-auto mt-32 my-8">
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
        {data.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
