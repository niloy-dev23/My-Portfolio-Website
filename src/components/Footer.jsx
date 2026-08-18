import { Link } from "react-router";
import { RiGithubLine, RiInstagramLine, RiFacebookFill } from "react-icons/ri";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/niloy-dev23",
    icon: RiGithubLine,
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/methane.py/",
    icon: RiInstagramLine,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/nilufa.sazzad.9",
    icon: RiFacebookFill,
    label: "Facebook",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8FAFC] dark:bg-[#0F172A] border-t border-[#1E293B]/10 dark:border-[#F1F5F9]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="w-full flex justify-between py-5 flex-wrap">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-4">
              About Me
            </h3>
            <p className="text-[#64748B] dark:text-[#94A3B8] text-sm leading-relaxed w-60">
              Full-stack developer passionate about creating beautiful and functional web experiences. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-50">
            <h3 className="text-lg font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[#64748B] dark:text-[#94A3B8] text-sm hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded px-2 py-1 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-4">
              Connect
            </h3>
            <div className="flex gap-5">
              {socialLinks.map(({ href, icon: Icon, label }) => (
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

        {/* Divider */}
        <div className="h-px bg-[#1E293B]/10 dark:bg-[#F1F5F9]/10 mb-6" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#64748B] dark:text-[#94A3B8] text-sm">
            &copy; {currentYear} Nafis Sazzad Niloy. All rights reserved.
          </p>
          <p className="text-[#64748B] dark:text-[#94A3B8] text-sm">
            Designed & built by React JS and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
