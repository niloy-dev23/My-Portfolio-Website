import { useEffect, useRef, useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiFigma,
  SiJest,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "React",        Icon: SiReact,              color: "#61DAFB", bg: "rgba(97,218,251,0.12)"   },
  { name: "TypeScript",   Icon: SiTypescript,         color: "#3178C6", bg: "rgba(49,120,198,0.12)"   },
  { name: "Next.js",      Icon: SiNextdotjs,          color: "#AAAAAA", bg: "rgba(150,150,150,0.12)"  },
  { name: "Node.js",      Icon: SiNodedotjs,          color: "#339933", bg: "rgba(51,153,51,0.12)"    },
  { name: "PostgreSQL",   Icon: SiPostgresql,         color: "#4169E1", bg: "rgba(65,105,225,0.12)"   },
  { name: "Tailwind CSS", Icon: SiTailwindcss,        color: "#06B6D4", bg: "rgba(6,182,212,0.12)"    },
  { name: "GraphQL",      Icon: SiGraphql,            color: "#E10098", bg: "rgba(225,0,152,0.12)"    },
  { name: "Docker",       Icon: SiDocker,             color: "#2496ED", bg: "rgba(36,150,237,0.12)"   },
  { name: "Kubernetes",   Icon: SiKubernetes,         color: "#326CE5", bg: "rgba(50,108,229,0.12)"   },
  { name: "Figma",        Icon: SiFigma,              color: "#F24E1E", bg: "rgba(242,78,30,0.12)"    },
  { name: "Jest / Vitest",Icon: SiJest,               color: "#C21325", bg: "rgba(194,19,37,0.12)"    },
  { name: "Git & CI/CD",  Icon: SiGit,                color: "#F05032", bg: "rgba(240,80,50,0.12)"    },
];

const timeline = [
  {
    year: "Present",
    role: "Higher Secondary Certificate (HSC) — Science",
    org: "Notre Dame College, Dhaka",
    desc: "Currently studying in the Science department, building a strong foundation in mathematics and the natural sciences alongside self-taught software development.",
    type: "education",
  },
  {
    year: "2025",
    role: "Frontend Development Course",
    org: "Creative IT Institute",
    desc: "Completed a comprehensive Frontend Development programme covering HTML, CSS, JavaScript, React, and modern web development workflows.",
    type: "work",
  },
  {
    year: "2025",
    role: "Secondary School Certificate (SSC) — Science",
    org: "Rajuk Uttara Model College",
    desc: "Completed SSC in the Science group with a focus on physics, chemistry, and mathematics.",
    type: "education",
  },
];

function SkillCard({ skill, index, visible }) {
  const { name, Icon, color, bg } = skill;
  const delay = visible ? `${index * 55}ms` : "0ms";

  return (
    <div
      role="listitem"
      aria-label={name}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.92)",
        transition: `opacity 0.45s ease ${delay}, transform 0.45s ease ${delay}, box-shadow 0.3s ease`,
      }}
      className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#1E293B]/10 dark:border-[#F1F5F9]/10 shadow-sm cursor-default hover:shadow-md"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ background: bg }}
        aria-hidden="true"
      >
        <Icon style={{ color }} className="text-2xl" />
      </div>

      <span className="text-xs font-semibold text-[#1E293B] dark:text-[#F1F5F9] text-center leading-tight">
        {name}
      </span>

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `0 0 0 1.5px ${color}55` }}
        aria-hidden="true"
      />
    </div>
  );
}

export default function About() {
  const skillsRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main id="main-content" className="pt-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-14">
          <p className="text-[#3B82F6] dark:text-[#60A5FA] text-sm font-semibold tracking-widest uppercase mb-3">
            About Me
          </p>
          <h1 className="text-4xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-4">
            The person behind the code
          </h1>
          <p className="text-[#64748B] dark:text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            I'm a passionate frontend developer based in Dhaka with a love for building
            user-centric web applications. I enjoy the intersection of great design and
            clean, performant engineering.
          </p>
        </div>

        <section aria-labelledby="bio-heading" className="mb-16">
          <h2
            id="bio-heading"
            className="text-2xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-5"
          >
            Bio
          </h2>
          <div className="max-w-2xl space-y-4 text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
            <p>
              I fell in love with web development after customising my first website and
              seeing it come to life in the browser. Since then, I've never stopped building.
              I believe the web should be fast, accessible, and delightful for everyone —
              regardless of device or connection speed.
            </p>
            <p>
              I completed my Frontend Development training at Creative IT Institute where I
              honed my skills in React, JavaScript, and modern UI workflows. I'm now actively
              building real-world projects to grow my portfolio.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to
              the developer community, or working on personal projects that solve real problems.
            </p>
          </div>
        </section>

        <section aria-labelledby="skills-heading" className="mb-20" ref={skillsRef}>
          <div className="mb-8">
            <p className="text-[#3B82F6] dark:text-[#60A5FA] text-sm font-semibold tracking-widest uppercase mb-2">
              Toolbox
            </p>
            <h2
              id="skills-heading"
              className="text-2xl font-bold text-[#1E293B] dark:text-[#F1F5F9]"
            >
              Skills & Technologies
            </h2>
          </div>

          <div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
            role="list"
            aria-label="Technical skills"
          >
            {skills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={i}
                visible={skillsVisible}
              />
            ))}
          </div>
        </section>

        <section aria-labelledby="timeline-heading">
          <div className="mb-10">
            <p className="text-[#3B82F6] dark:text-[#60A5FA] text-sm font-semibold tracking-widest uppercase mb-2">
              Journey
            </p>
            <h2
              id="timeline-heading"
              className="text-2xl font-bold text-[#1E293B] dark:text-[#F1F5F9]"
            >
              Experience & Education
            </h2>
          </div>

          <ol className="relative" aria-label="Career and education timeline">
            <div
              className="absolute left-3 top-0 bottom-0 w-px bg-[#1E293B]/15 dark:bg-[#F1F5F9]/15"
              aria-hidden="true"
            />

            {timeline.map((item, i) => (
              <li key={i} className="relative pl-12 pb-10 last:pb-0">
                <div
                  className={`absolute left-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    item.type === "work"
                      ? "bg-[#3B82F6] dark:bg-[#60A5FA] border-[#3B82F6] dark:border-[#60A5FA]"
                      : "bg-white dark:bg-[#1E293B] border-[#3B82F6] dark:border-[#60A5FA]"
                  }`}
                  aria-hidden="true"
                >
                  {item.type === "work" && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>

                <div className="bg-white dark:bg-[#1E293B] rounded-2xl p-5 border border-[#1E293B]/10 dark:border-[#F1F5F9]/10 shadow-sm">
                  <time className="text-xs font-semibold text-[#3B82F6] dark:text-[#60A5FA] tracking-wide uppercase">
                    {item.year}
                  </time>
                  <h3 className="text-[#1E293B] dark:text-[#F1F5F9] font-semibold text-lg mt-1">
                    {item.role}
                  </h3>
                  <p className="text-[#64748B] dark:text-[#94A3B8] text-sm font-medium mb-2">
                    {item.org}
                  </p>
                  <p className="text-[#64748B] dark:text-[#94A3B8] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
