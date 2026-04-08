import { useState, useRef } from "react";
import { ExternalLink, Github, ArrowLeft, ArrowRight } from "lucide-react";
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

const categories = ["Barchasi", "Web App", "E-commerce", "Bot", "Website"];

const projects = [
  {
    title: "CRM System",
    description: "Mijozlarni boshqarish tizimi — savdo funnel, statistika dashboard, loyihalar va hodimlarni boshqarish.",
    image: projectCrm,
    tech: ["Django", "Angular", "PostgreSQL", "REST API"],
    live: "https://cims.cognilabs.org",
    github: "#",
    category: "Web App",
    featured: true,
    color: "from-blue-500/20 to-violet-500/20",
    num: "01",
  },
  {
    title: "Bunyodkor CIMS",
    description: "Kurs boshqaruv tizimi — o'quvchilar, to'lovlar, davomat, hisobotlar va moliyaviy tahlil.",
    image: projectBunyodkor,
    tech: ["Django", "FastAPI", "PostgreSQL", "Tailwind"],
    live: "https://bunyodkor.cognilabs.org",
    github: "#",
    category: "Web App",
    featured: true,
    color: "from-violet-500/20 to-pink-500/20",
    num: "02",
  },
  {
    title: "Olou.uz",
    description: "E-commerce onlayn do'kon — kiyim-kechak, buyurtma, to'lov va yetkazib berish tizimi.",
    image: projectOlou,
    tech: ["Django", "REST API", "PostgreSQL", "E-commerce"],
    live: "https://olou.uz",
    github: "#",
    category: "E-commerce",
    featured: false,
    color: "from-emerald-500/20 to-teal-500/20",
    num: "03",
  },
  {
    title: "Taxi Bot",
    description: "Telegram taxi bot — haydovchi va yo'lovchilarni bog'laydigan avtomatlashtirilgan real-time tizim.",
    image: projectTaxi,
    tech: ["Python", "Telegram Bot", "FastAPI", "PostgreSQL"],
    live: "#",
    github: "#",
    category: "Bot",
    featured: false,
    color: "from-amber-500/20 to-orange-500/20",
    num: "04",
  },
  {
    title: "VooyObed",
    description: "Onlayn ovqat yetkazib berish platformasi — restoranlar, menyu, buyurtma va yetkazib berish tizimi.",
    image: projectCleaning,
    tech: ["Django", "Bootstrap", "SQLite"],
    live: "https://vooyobed.com",
    github: "#",
    category: "Website",
    featured: false,
    color: "from-rose-500/20 to-red-500/20",
    num: "05",
  },
  {
    title: "Telegram Web App",
    description: "Telegram Mini App — interaktiv foydalanuvchi interfeysi, WebSocket real-time aloqa.",
    image: projectWebapp,
    tech: ["Python", "Telegram Bot API", "FastAPI", "WebSocket"],
    live: "#",
    github: "#",
    category: "Bot",
    featured: false,
    color: "from-sky-500/20 to-blue-500/20",
    num: "06",
  },
];

// Featured large card
const FeaturedCard = ({ project }: { project: typeof projects[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 8, y: -y * 8 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
      style={{
        transform: `perspective(1200px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: "transform 0.2s ease-out",
      }}
      className="reveal-scale group relative glass-card overflow-hidden rounded-3xl glow-hover"
      data-delay="0"
    >
      <div className="grid md:grid-cols-2 min-h-[380px]">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 md:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:hidden" />
          <span className="absolute top-5 left-5 text-[10px] font-mono px-3 py-1.5 rounded-full glass text-primary uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className={`p-8 flex flex-col justify-between relative bg-gradient-to-br ${project.color} transition-all duration-500`}>
          <div>
            <span className="font-mono text-5xl font-black text-foreground/5 absolute top-4 right-6 select-none">
              {project.num}
            </span>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-primary/8 text-primary/80 border border-primary/10">
                  {t}
                </span>
              ))}
            </div>
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
    </div>
  );
};

// Regular card
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
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
      className="reveal-scale glass-card overflow-hidden group glow-hover rounded-2xl relative"
      data-delay={String(index * 80)}
    >
      {/* Number */}
      <span className="absolute top-4 right-4 font-mono text-4xl font-black text-foreground/5 select-none z-10">
        {project.num}
      </span>

      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        decoding="async"
        style={{ imageRendering: "auto" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
        <span className="absolute top-4 left-4 text-[10px] font-mono px-3 py-1 rounded-full glass text-primary uppercase tracking-wider">
          {project.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-primary/8 text-primary/80 border border-primary/10">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {project.live !== "#" && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium gradient-bg text-primary-foreground px-4 py-2 rounded-full hover:scale-105 transition-all duration-300">
              <ExternalLink className="w-3 h-3" /> Ko'rish
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium glass px-4 py-2 rounded-full hover:scale-105 transition-all duration-300">
            <Github className="w-3 h-3" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("Barchasi");

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const filtered =
    activeFilter === "Barchasi"
      ? rest
      : rest.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground noise">
      <FloatingOrbs />
      <Navbar />

      {/* Header */}
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
            Real mijozlar uchun yaratilgan loyihalar — CRM tizimlaridan Telegram botlargacha.
          </p>
        </div>
      </section>

      {/* Featured projects */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <p className="reveal font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
            ✦ Asosiy loyihalar
          </p>
          {featured.map((p) => (
            <FeaturedCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Filter pills */}
          <div className="reveal flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-mono px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === cat
                    ? "gradient-bg text-primary-foreground scale-105"
                    : "glass text-muted-foreground hover:text-foreground hover:scale-105"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
