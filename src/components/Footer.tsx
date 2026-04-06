import { Github, Linkedin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2024 <span className="gradient-text font-semibold">Asilbek Alijonov</span>. Barcha huquqlar himoyalangan.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: <Send className="w-4 h-4" />, href: "https://t.me/alijonovasilbek" },
            { icon: <Github className="w-4 h-4" />, href: "https://github.com/alijonovasilbek" },
            { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/in/alijonovasilbek" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:scale-110 hover:text-primary transition-all duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
