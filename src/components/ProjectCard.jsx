import { RiExternalLinkLine, RiGithubLine } from "react-icons/ri";

const placeholderColors = {
  "1": "from-blue-500 to-indigo-600",
  "2": "from-sky-400 to-cyan-600",
  "3": "from-violet-500 to-purple-700",
  "4": "from-emerald-500 to-teal-600",
  "5": "from-orange-400 to-amber-600",
  "6": "from-rose-500 to-pink-600",
};

export default function ProjectCard({ project }) {
  const gradient = placeholderColors[project.id] ?? "from-[#3B82F6] to-indigo-600";
  console.log(project.image)
  return (
    <article
      className="group bg-white dark:bg-[#1E293B] rounded-2xl overflow-hidden border border-[#1E293B]/10 dark:border-[#F1F5F9]/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col"
      aria-label={`Project: ${project.title}`}
    >
      <div
        className={`h-44 flex items-center justify-center`}
        role="img"
        aria-label={`${project.title} project preview`}
      >
        <img src={project.image} className="w-full h-full" />
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="text-[#1E293B] dark:text-[#F1F5F9] font-semibold text-lg leading-tight">
          {project.title}
        </h3>

        <p className="text-[#64748B] dark:text-[#94A3B8] text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#3B82F6]/10 text-[#3B82F6] dark:bg-[#60A5FA]/10 dark:text-[#60A5FA]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto pt-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] dark:bg-[#60A5FA] dark:hover:bg-[#3B82F6] text-white dark:text-[#0F172A] text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2"
          >
            <RiExternalLinkLine className="text-base shrink-0" aria-hidden="true" />
            Live Demo
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#1E293B] hover:bg-[#0F172A] dark:bg-[#F1F5F9] dark:hover:bg-white text-white dark:text-[#0F172A] text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E293B] focus-visible:ring-offset-2"
          >
            <RiGithubLine className="text-base shrink-0" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
