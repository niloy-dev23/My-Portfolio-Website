import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { RiMoonLine, RiSunLine, RiMenuLine, RiCloseLine, RiCodeSSlashLine } from "react-icons/ri";
import { useTheme } from "../context/ThemeContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#F8FAFC]/90 dark:bg-[#0F172A]/90 border-b border-[#1E293B]/10 dark:border-[#F1F5F9]/10 backdrop-blur-md"
      role="banner"
    >
      {/* Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#60A5FA] transition-[width] duration-100 ease-linear"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          className="flex items-center gap-2 text-[#1E293B] dark:text-[#F1F5F9] font-bold text-lg tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded"
          aria-label="Home — Nafis Sazzad Niloy"
        >
          <RiCodeSSlashLine className="text-[#3B82F6] dark:text-[#60A5FA] text-2xl" aria-hidden="true" />
          <span>Nafis Sazzad Niloy</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] ${
                  isActive
                    ? "text-[#3B82F6] dark:text-[#60A5FA] bg-[#3B82F6]/10"
                    : "text-[#64748B] dark:text-[#94A3B8] hover:text-[#1E293B] dark:hover:text-[#F1F5F9] hover:bg-[#1E293B]/5 dark:hover:bg-[#F1F5F9]/5"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="ml-2 p-2 rounded-lg text-[#64748B] dark:text-[#94A3B8] hover:text-[#1E293B] dark:hover:text-[#F1F5F9] hover:bg-[#1E293B]/5 dark:hover:bg-[#F1F5F9]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          >
            {theme === "light" ? (
              <RiMoonLine className="text-xl" aria-hidden="true" />
            ) : (
              <RiSunLine className="text-xl" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="p-2 rounded-lg text-[#64748B] dark:text-[#94A3B8] hover:bg-[#1E293B]/5 dark:hover:bg-[#F1F5F9]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          >
            {theme === "light" ? (
              <RiMoonLine className="text-xl" aria-hidden="true" />
            ) : (
              <RiSunLine className="text-xl" aria-hidden="true" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 rounded-lg text-[#64748B] dark:text-[#94A3B8] hover:bg-[#1E293B]/5 dark:hover:bg-[#F1F5F9]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          >
            {menuOpen ? (
              <RiCloseLine className="text-xl" aria-hidden="true" />
            ) : (
              <RiMenuLine className="text-xl" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#F8FAFC] dark:bg-[#0F172A] border-t border-[#1E293B]/10 dark:border-[#F1F5F9]/10 px-4 pb-4"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-sm font-medium mt-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] ${
                  isActive
                    ? "text-[#3B82F6] dark:text-[#60A5FA] bg-[#3B82F6]/10"
                    : "text-[#64748B] dark:text-[#94A3B8] hover:text-[#1E293B] dark:hover:text-[#F1F5F9] hover:bg-[#1E293B]/5 dark:hover:bg-[#F1F5F9]/5"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
