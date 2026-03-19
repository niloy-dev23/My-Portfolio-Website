import eCommerce from '../assets/e-commerce.png'
import todoList from '../assets/todo-list.png'
import uiPort from '../assets/ui-portfolio.png'
import canvix from '../assets/canvix-website.png'
import furniture from '../assets/furniture.png'
import sign from '../assets/sign-up.png'

export const projects = [
  {
    id: "1",
    title: "E-Commerce Website",
    description: "A fully responsive and modern e-commerce web application designed to deliver a smooth and engaging shopping experience.",
    longDescription: "The platform features a clean UI, intuitive navigation, and optimized performance for both desktop and mobile users. Key functionalities include product browsing, dynamic filtering, cart management, and a seamless checkout flow.",
    image: `${eCommerce}`,
    tags: ["React", "Frontend", "Tailwind CSS"],
    techStack: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    liveUrl: "https://e-commerce-website-rght.vercel.app/",
    repoUrl: "https://github.com/niloy-dev23/E-Commerce-Website",
    featured: true,
  },
  {
    id: "2",
    title: "Sign Up Page",
    description: "A modern and intuitive sign-up interface built to ensure a seamless user registration process.",
    longDescription: "It features real-time form validation, helpful error messages, and a clean layout to guide users effortlessly. The page is fully responsive and optimized for accessibility, enhancing user experience on both mobile and desktop devices.",
    image: `${sign}`,
    tags: ["Frontend", "API", "React"],
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://sign-up-page-gamma-one.vercel.app/",
    repoUrl: "https://github.com/niloy-dev23/Sign-Up-Page",
    featured: false,
  },
  {
    id: "3",
    title: "Todo-List",
    description: "A responsive and interactive task management application designed to improve productivity and organization.",
    longDescription: "Users can create, edit, and delete tasks, with real-time updates and a smooth user experience. The project focuses on clean UI design, efficient state management, and performance optimization.",
    image: `${todoList}`,
    tags: ["JavaScript", "Frontend"],
    techStack: ["CSS", "JavaScript", "HTML"],
    liveUrl: "https://todo-list-theta-seven-70.vercel.app/",
    repoUrl: "https://github.com/niloy-dev23/Todo-List",
    featured: false,
  },
  {
    id: "4",
    title: "Canvix Company Landing Page",
    description: "A fully responsive and visually appealing landing page built to showcase a company’s identity and services effectively.",
    longDescription: "It features structured sections such as hero, services, about, and contact, with smooth navigation and optimized performance. The design focuses on user engagement, clarity, and conversion.",
    image: `${canvix}`,
    tags: ["HTML", "CSS", "Frontend"],
    techStack: ["HTML", "CSS"],
    liveUrl: "https://canvix-website-landing-page.vercel.app/",
    repoUrl: "https://github.com/niloy-dev23/Canvix-Website-Landing-Page",
    featured: false,
  },
  {
    id: "5",
    title: "Furniture Company Landing Page",
    description: "A fully responsive and visually appealing landing page built to showcase a company’s identity and services effectively.",
    longDescription: "It features structured sections such as hero, services, about, and contact, with smooth navigation and optimized performance. The design focuses on user engagement, clarity, and conversion.",
    image: `${furniture}`,
    tags: ["HTML", "CSS", "Frontend"],
    techStack: ["HTML", "CSS"],
    liveUrl: "https://furniture-landing-page-bay.vercel.app/",
    repoUrl: "https://github.com/niloy-dev23/Furniture-Landing-Page",
    featured: false,
  },
  {
    id: "6",
    title: "UI Designer Portfolio",
    description: "A responsive and aesthetically refined portfolio website built to showcase UI design projects and creative skills.",
    longDescription: "It emphasizes clean layouts, consistent design systems, and intuitive navigation, providing a smooth and engaging user experience across all devices.",
    image: `${uiPort}`,
    tags: ["React", "Frontend", "Tailwind CSS"],
    techStack: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    liveUrl: "https://final-project-of-cit-byniloy.vercel.app/",
    repoUrl: "https://github.com/niloy-dev23/Final-Project",
    featured: true,
  },
];

export const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];
