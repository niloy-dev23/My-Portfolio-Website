import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main id="main-content" className="pt-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <p className="text-[#3B82F6] dark:text-[#60A5FA] text-sm font-semibold tracking-widest uppercase mb-3">
            My Work
          </p>
          <h1 className="text-4xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-4">
            Projects
          </h1>
          <p className="text-[#64748B] dark:text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            A selection of personal projects, client work, and open-source contributions. Each one
            taught me something new.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Projects"
        >
          {projects.map((project) => (
            <div key={project.id} role="listitem">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
