import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <main
      id="main-content"
      className="pt-16 min-h-screen flex items-center justify-center bg-[#F8FAFC] dark:bg-[#0F172A]"
    >
      <div className="text-center px-4">
        <p className="text-7xl font-black text-[#3B82F6] dark:text-[#60A5FA] mb-4">404</p>
        <h1 className="text-2xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-2">
          Page not found
        </h1>
        <p className="text-[#64748B] dark:text-[#94A3B8] mb-6">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3B82F6] text-white font-semibold text-sm hover:bg-[#2563EB] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}

function Layout() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#3B82F6] focus:text-white focus:rounded-lg focus:font-medium"
      >
        Skip to main content
      </a>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/projects", element: <Projects /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    basename: base,
    future: { v7_relativeSplatPath: true },
  }
);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </ThemeProvider>
  );
}

export default App;
