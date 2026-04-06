import { useState, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import projectCrm from "@/assets/project-crm.png";
import projectCleaning from "@/assets/project-cleaning.png";
import projectBunyodkor from "@/assets/project-bunyodkor.png";

const projects = [
  {
    title: "CRM System",
    description: "Mijozlarni boshqarish tizimi. Savdo ma'lumotlari, statistika va hisobotlar bilan ishlaydi.",
    image: projectCrm,
    tech: ["Django", "PostgreSQL", "REST API", "Angular"],
    live: "https://cims.cognilabs.org",
    github: "#",
  },
  {
    title: "Bunyodkor CIMS",
    description: "Kurs boshqaruv tizimi. O'quvchilar, to'lovlar, davomat va hisobotlar bilan to'liq boshqaruv.",
    image: projectBunyodkor,
    tech: ["Django", "FastAPI", "PostgreSQL", "Tailwind"],
    live: "https://bunyodkor.cognilabs.org",
    github: "#",
  },
  {
    title: "Cleaning Service",
    description: "Tozalash xizmati veb-sayti. Xizmatlar haqida ma'lumot va aloqa formasi.",
    image: projectCleaning,
    tech: ["Django", "Bootstrap", "SQLite"],
    live: "https://vooyobed.com",
    github: "#",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02,1.02,1.02)`);
  };

  const handleMouseLeave = () => setTransform("");

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transform || undefined, transition: "transform 0.2s ease-out" }}
      className="glass-card overflow-hidden group glow-border-hover"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium gradient-bg text-primary-foreground px-5 py-2 rounded-full hover:scale-105 transition-transform duration-300"
          >
            <ExternalLink className="w-4 h-4" /> Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium glass px-5 py-2 rounded-full hover:scale-105 transition-transform duration-300"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div data-animate>
          <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            <span className="gradient-text">Loyihalar</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-animate>
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
