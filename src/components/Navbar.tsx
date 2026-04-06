import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "@/hooks/useAnimations";

const links = [
  { label: "Bosh sahifa", path: "/" },
  { label: "Loyihalar", path: "/projects" },
  { label: "Tajriba", path: "/experience" },
  { label: "Blog", path: "/blog" },
  { label: "Aloqa", path: "/contact" },
];

const Navbar = () => {
  const { isDark, toggle } = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "glass py-3" : "py-6"}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          <span className="gradient-text">A</span><span className="text-foreground">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                location.pathname === l.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="ml-2 p-2.5 rounded-full glass hover:scale-110 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggle} className="p-2.5 rounded-full glass" aria-label="Toggle theme">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2.5" aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass mx-4 mt-3 rounded-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-300">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                location.pathname === l.path ? "bg-primary/10 text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
