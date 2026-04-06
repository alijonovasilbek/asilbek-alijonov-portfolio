import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useAnimations";
import FloatingOrbs from "@/components/FloatingOrbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import projectCrm from "@/assets/project-crm.png";
import projectBunyodkor from "@/assets/project-bunyodkor.png";
import projectCleaning from "@/assets/project-cleaning.png";
import projectOlou from "@/assets/project-olou.jpg";
import projectTaxi from "@/assets/project-taxi.jpg";
import projectWebapp from "@/assets/project-webapp.jpg";

const projects = [
  {
    title: "CRM System",
    description: "Mijozlarni boshqarish tizimi — savdo, statistika, loyihalar va hodimlar boshqaruvi.",
    image: projectCrm,
    tech: ["Django", "Angular", "PostgreSQL", "REST API"],
    live: "https://cims.cognilabs.org",
    github: "#",
    category: "Web App",
  },
  {
    title: "Bunyodkor CIMS",
    description: "Kurs boshqaruv tizimi — o'quvchilar, to'lovlar, davomat, hisobotlar va moliya.",
    image: projectBunyodkor,
    tech: ["Django", "FastAPI", "PostgreSQL", "Tailwind"],
    live: "https://bunyodkor.cognilabs.org",
    github: "#",
    category: "Web App",
  },
  {
    title: "Olou.uz",
    description: "E-commerce onlayn do'kon — kiyim-kechak, buyurtma, to'lov va yetkazib berish tizimi.",
    image: projectOlou,
    tech: ["Django", "REST API", "PostgreSQL", "E-commerce"],
    live: "https://olou.uz",
    github: "#",
    category: "E-commerce",
  },
  {
    title: "Taxi Bot",
    description: "Telegram taxi bot — haydovchi va yo'lovchilarni bog'laydigan avtomatlashtirilgan tizim.",
    image: projectTaxi,
    tech: ["Python", "Telegram Bot", "FastAPI", "PostgreSQL"],
    live: "#",
    github: "#",
    category: "Bot",
  },
  {
    title: "Cleaning Service",
    description: "Tozalash xizmati veb-sayti — xizmatlar, narxlar va buyurtma berish formasi.",
    image: projectCleaning,
    tech: ["Django", "Bootstrap", "SQLite"],
    live: "https://vooyobed.com",
    github: "#",
    category: "Website",
  },
  {
    title: "Launch Web Apps",
    description: "Telegram Web App — mini ilovalar platformasi, interaktiv foydalanuvchi tajribasi.",
    image: projectWebapp,
    tech: ["Python", "Telegram Bot API", "FastAPI", "WebSocket"],
    live: "#",
    github: "#",
    category: "Web App",
  },
];

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: -y * 10 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="reveal-scale glass-card overflow-hidden group glow-hover"
      data-delay={String(index * 100)}
    >
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          width={1280}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
        <span className="absolute top-4 left-4 text-[10px] font-mono px-3 py-1 rounded-full glass text-primary uppercase tracking-wider">
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-primary/8 text-primary/80 border border-primary/10">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.live !== "#" && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium gradient-bg text-primary-foreground px-5 py-2.5 rounded-full hover:scale-105 transition-all duration-300">
              <ExternalLink className="w-3.5 h-3.5" /> Ko'rish
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium glass px-5 py-2.5 rounded-full hover:scale-105 transition-all duration-300">
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground noise">
      <FloatingOrbs />
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="reveal inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Bosh sahifa
          </Link>
          <p className="reveal font-mono text-xs text-primary mb-3 tracking-widest uppercase" data-delay="100">Portfolio</p>
          <h1 className="reveal text-4xl md:text-6xl font-black mb-4" data-delay="150">
            <span className="gradient-text">Loyihalarim</span>
          </h1>
          <p className="reveal text-muted-foreground max-w-xl text-sm md:text-base" data-delay="200">
            Men ishtirok etgan va yaratgan loyihalar — CRM tizimlaridan e-commerce platformalarigacha.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
