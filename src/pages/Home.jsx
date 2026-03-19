import { Link } from "react-router";
import { RiArrowRightLine, RiDownloadLine, RiGithubLine, RiLinkedinLine, RiTwitterXLine, RiStarFill, RiDoubleQuotesL } from "react-icons/ri";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const featured = projects.filter((p) => p.featured).slice(0, 2);

const reviews = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "Nexlify",
    avatar: "SC",
    rating: 5,
    text: "Nafis completely transformed our product's frontend. The code is clean, well-architected, and the performance improvements were immediately measurable. Our Lighthouse score went from 62 to 97. Genuinely one of the best engineers I've worked with.",
  },
  {
    name: "James Okafor",
    role: "Founder",
    company: "LaunchPad",
    avatar: "JO",
    rating: 5,
    text: "Incredible attention to detail. Nafis built our entire MVP in six weeks — on time and under budget. He proactively flagged design inconsistencies and suggested UX improvements we hadn't even considered. Will definitely be working together again.",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager",
    company: "Acme Corp",
    avatar: "PS",
    rating: 5,
    text: "We brought Nafis in to rescue a stalled project. He jumped in, quickly understood the codebase, and delivered a full refactor without disrupting the existing team. His communication and problem-solving skills are as strong as his technical ability.",
  },
  {
    name: "Tom Eriksen",
    role: "Engineering Lead",
    company: "Orbit Systems",
    avatar: "TE",
    rating: 5,
    text: "Nafis has an exceptional eye for accessibility and performance. He introduced component patterns that our whole team now follows as standards. Working with him raised the bar for everyone on the team.",
  },
  {
    name: "Amara Diallo",
    role: "Design Lead",
    company: "PixelCraft",
    avatar: "AD",
    rating: 5,
    text: "As a designer, I've worked with many developers who struggle to translate Figma into pixel-perfect UI. Nafis nailed every detail — animations, spacing, responsiveness — exactly as intended. A true designer-developer collaborator.",
  },
  {
    name: "Lucas Ferreira",
    role: "Senior Engineer",
    company: "DataFlow",
    avatar: "LF",
    rating: 5,
    text: "Nafis's open-source contributions to our project were outstanding. Thoughtful PRs, great documentation, and he always took time to explain his reasoning. The kind of collaborator every open-source project needs.",
  },
];

const avatarColors = [
  { bg: "bg-blue-100 dark:bg-blue-900/40", text: "text-blue-600 dark:text-blue-400" },
  { bg: "bg-emerald-100 dark:bg-emerald-900/40", text: "text-emerald-600 dark:text-emerald-400" },
  { bg: "bg-violet-100 dark:bg-violet-900/40", text: "text-violet-600 dark:text-violet-400" },
  { bg: "bg-orange-100 dark:bg-orange-900/40", text: "text-orange-600 dark:text-orange-400" },
  { bg: "bg-rose-100 dark:bg-rose-900/40", text: "text-rose-600 dark:text-rose-400" },
  { bg: "bg-cyan-100 dark:bg-cyan-900/40", text: "text-cyan-600 dark:text-cyan-400" },
];

export default function Home() {
  return (
    <main id="main-content" className="pt-16">
      {/* ── Hero ── */}
      <section
        className="min-h-[92vh] flex items-center bg-[#F8FAFC] dark:bg-[#0F172A] px-4 sm:px-6 lg:px-8"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-6xl mx-auto w-full py-20">
          <div className="max-w-3xl animate-[fadeSlideUp_0.6s_ease_both]">
            <p className="text-[#3B82F6] dark:text-[#60A5FA] text-sm font-semibold tracking-widest uppercase mb-4">
              Available for hire
            </p>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E293B] dark:text-[#F1F5F9] leading-tight mb-6"
            >
              Hi, I'm{" "}
              <span className="text-[#3B82F6] dark:text-[#60A5FA]">Nafis Sazzad Niloy</span>
              <br />
              Frontend Developer
            </h1>
            <p className="text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-10 max-w-2xl">
              I build fast, accessible, and beautifully crafted web experiences. Specialising in
              React, JavaScript, and modern frontend architecture — turning complex problems into
              elegant, user-centred solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2"
              >
                View Projects
                <RiArrowRightLine aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-[#1E293B] border border-[#1E293B]/15 dark:border-[#F1F5F9]/15 text-[#1E293B] dark:text-[#F1F5F9] font-semibold text-sm hover:bg-[#1E293B]/5 dark:hover:bg-[#F1F5F9]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2"
              >
                Get in Touch
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#3B82F6]/30 dark:border-[#60A5FA]/30 text-[#3B82F6] dark:text-[#60A5FA] font-semibold text-sm hover:bg-[#3B82F6]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2"
                aria-label="Download resume PDF"
              >
                <RiDownloadLine aria-hidden="true" />
                Resume
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[#64748B] dark:text-[#94A3B8] text-sm">Find me on</span>
              {[
                { href: "https://github.com/nafis-niloy", Icon: RiGithubLine, label: "GitHub" },
                { href: "https://linkedin.com/in/nafis-niloy", Icon: RiLinkedinLine, label: "LinkedIn" },
                { href: "https://twitter.com", Icon: RiTwitterXLine, label: "Twitter / X" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-[#64748B] dark:text-[#94A3B8] hover:text-[#3B82F6] dark:hover:text-[#60A5FA] hover:bg-[#3B82F6]/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
                >
                  <Icon className="text-xl" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section
        className="bg-[#F8FAFC] dark:bg-[#0F172A] px-4 sm:px-6 lg:px-8 py-20 border-t border-[#1E293B]/10 dark:border-[#F1F5F9]/10"
        aria-labelledby="featured-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#3B82F6] dark:text-[#60A5FA] text-sm font-semibold tracking-widest uppercase mb-2">
                Selected Work
              </p>
              <h2
                id="featured-heading"
                className="text-3xl font-bold text-[#1E293B] dark:text-[#F1F5F9]"
              >
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-[#3B82F6] dark:text-[#60A5FA] font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded"
            >
              See all <RiArrowRightLine aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-[#3B82F6] dark:text-[#60A5FA] font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded"
            >
              See all projects <RiArrowRightLine aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section
        className="bg-[#F8FAFC] dark:bg-[#0F172A] px-4 sm:px-6 lg:px-8 py-20 border-t border-[#1E293B]/10 dark:border-[#F1F5F9]/10"
        aria-labelledby="stats-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2 id="stats-heading" className="sr-only">Career highlights</h2>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "5+", label: "Years of experience" },
              { value: "30+", label: "Projects delivered" },
              { value: "12+", label: "Happy clients" },
              { value: "100%", label: "Open-source friendly" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-white dark:bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B]/10 dark:border-[#F1F5F9]/10 text-center"
              >
                <dt className="text-[#64748B] dark:text-[#94A3B8] text-sm mb-2">{label}</dt>
                <dd className="text-3xl font-bold text-[#3B82F6] dark:text-[#60A5FA]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section
        className="bg-[#F8FAFC] dark:bg-[#0F172A] px-4 sm:px-6 lg:px-8 py-20 border-t border-[#1E293B]/10 dark:border-[#F1F5F9]/10"
        aria-labelledby="reviews-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#3B82F6] dark:text-[#60A5FA] text-sm font-semibold tracking-widest uppercase mb-3">
              Testimonials
            </p>
            <h2
              id="reviews-heading"
              className="text-3xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-4"
            >
              What people are saying
            </h2>
            <p className="text-[#64748B] dark:text-[#94A3B8] max-w-xl mx-auto">
              Kind words from clients, collaborators, and teammates I've had the privilege of
              working with.
            </p>
          </div>

          <div
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
            role="list"
            aria-label="Client reviews"
          >
            {reviews.map((review, i) => {
              const color = avatarColors[i % avatarColors.length];
              return (
                <article
                  key={review.name}
                  role="listitem"
                  className="break-inside-avoid bg-white dark:bg-[#1E293B] rounded-2xl p-6 border border-[#1E293B]/10 dark:border-[#F1F5F9]/10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
                  aria-label={`Review by ${review.name}`}
                >
                  <RiDoubleQuotesL
                    className="text-3xl text-[#3B82F6]/20 dark:text-[#60A5FA]/20 shrink-0"
                    aria-hidden="true"
                  />

                  <p className="text-[#64748B] dark:text-[#94A3B8] text-sm leading-relaxed flex-1">
                    "{review.text}"
                  </p>

                  <div>
                    <div className="flex gap-0.5 mb-3" aria-label={`${review.rating} out of 5 stars`}>
                      {Array.from({ length: review.rating }).map((_, s) => (
                        <RiStarFill
                          key={s}
                          className="text-amber-400 text-sm"
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${color.bg} ${color.text}`}
                        aria-hidden="true"
                      >
                        {review.avatar}
                      </div>
                      <div>
                        <p className="text-[#1E293B] dark:text-[#F1F5F9] font-semibold text-sm leading-tight">
                          {review.name}
                        </p>
                        <p className="text-[#64748B] dark:text-[#94A3B8] text-xs">
                          {review.role} · {review.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
