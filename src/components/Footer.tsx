import { Github, Linkedin, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col items-center md:items-start gap-1">
        <span className="text-lg font-bold"><span className="gradient-text">A</span>.</span>
        <p className="text-xs text-muted-foreground">© 2024 Asilbek Alijonov</p>
      </div>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">Bosh sahifa</Link>
        <Link to="/projects" className="hover:text-foreground transition-colors">Loyihalar</Link>
        <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
        <Link to="/contact" className="hover:text-foreground transition-colors">Aloqa</Link>
      </div>
      <div className="flex items-center gap-3">
        {[
          { icon: <Send className="w-4 h-4" />, href: "https://t.me/alijonovasilbek" },
          { icon: <Github className="w-4 h-4" />, href: "https://github.com/alijonovasilbek" },
          { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/in/alijonovasilbek" },
        ].map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
            className="p-2.5 rounded-full glass hover:scale-110 hover:text-primary transition-all duration-300">
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
