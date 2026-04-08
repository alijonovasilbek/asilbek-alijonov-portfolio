import { useState, useRef } from "react";
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
import projectBonAppetit from "@/assets/project-bonappetit.png";

const categories = ["Barchasi", "Web App", "E-commerce", "Bot", "Website"];

const projects = [
  {
    title: "CRM System",
    description: "Mijozlarni boshqarish tizimi — savdo funnel, statistika dashboard, loyihalar va hodimlarni boshqarish. Katta korporativ tizim.",
    image: projectCrm,
    tech: ["Django", "Angular", "PostgreSQL", "REST API"],
    live: "https://cims.cognilabs.org",
    github: "#",
    category: "Web App",
    featured: true,
    color: "from-blue-500/10 to-violet-500/10",
    num: "01",
  },
  {
    title: "Bunyodkor CIMS",
    description: "Kurs boshqaruv tizimi — o'quvchilar, to'lovlar, davomat, hisobotlar va moliyaviy tahlil. 1000+ foydalanuvchi.",
    image: projectBunyodkor,
    tech: ["Django", "FastAPI", "PostgreSQL", "Tailwind"],
    live: "https://bunyodkor.cognilabs.org",
    github: "#",
    category: "Web App",
    featured: true,
    color: "from-violet-500/10 to-pink-500/10",
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
    color: "from-emerald-500/10 to-teal-500/10",
    num: "03",
  },
  {
    title: "Bon Appétit",
    description: "Telegram Web App orqali onlayn ovqat buyurtma — menyu, savatcha, buyurtmalar va real-time yetkazib berish.",
    image: projectBonAppetit,
    tech: ["Python", "Telegram Bot API", "FastAPI", "WebSocket"],
    live: "https://t.me/Onlineovqatzakazbot",
    github: "#",
    category: "Bot",
    featured: false,
    color: "from-green-500/10 to-emerald-500/10",
    num: "04",
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
    color: "from-amber-500/10 to-orange-500/10",
    num: "05",
  },
  {
    title: "VooyObed",
    description: "Onlayn ovqat yetkazib berish platformasi — restoranlar, menyu, buyurtma va yetkazib berish tizimi.",
    image: projectCleaning,
    tech: ["Django", "Bootstrap", "PostgreSQL", "REST API"],
    live: "https://vooyobed.com",
    github: "#",
    category: "Website",
    featured: false,
    color: "from-rose-500/10 to-red-500/10",
    num: "06",
  },
  {
    title: "LMS Platform",
    description: "Online ta'lim platformasi — kurslar, video darslar, testlar, sertifikatlar va progress tracking.",
    image: projectWebapp,
    tech: ["Django", "Angular", "PostgreSQL", "WebSocket"],
    live: "#",
    github: "https://github.com/alijonovasilbek",
    category: "Web App",
    featured: false,
    color: "from-sky-500/10 to-blue-500/10",
    num: "07",
  },
];

// Featured large card - NO overlay on image
const FeaturedCard = ({ project }: { project: typeof projects[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 6, y: -y * 6 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1200px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: "transform 0.2s ease-out",
      }}
      className="reveal-scale group relative overflow-hidden rounded-3xl border border-border shadow-sm"
      data-delay="0"
    >
      <div className="grid md:grid-cols-2">
        {/* Image - NO blurry overlay */}
        <div className="relative overflow-hidden" style={{ minHeight: 280 }}>
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
            loading="lazy"
            decoding="async"
          />
          {/* Only a tiny bottom fade to blend into content on mobile */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card/40 to-transparent md:hidden" />
          <span className="absolute top-4 left-4 text-[10px] font-mono px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm text-primary border border-border uppercase tracking-wider z-10">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div
          className={`p-7 md:p-8 flex flex-col justify-between bg-gradient-to-br ${project.color}`}
          style={{ background: `hsl(var(--card))` }}
        >
          <div>
            <span className="font-mono text-6xl font-black text-foreground/5 absolute top-4 right-6 select-none pointer-events-none">
              {project.num}
            </span>
            <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-primary/8 text-primary/80 border border-primary/10">{t}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            {project.live !== "#" && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium gradient-bg text-primary-foreground px-5 py-2.5 rounded-full hover:scale-105 transition-all duration-300">
                <ExternalLink className="w-3.5 h-3.5" /> Ko'rish
              </a>
            )}
            {project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium border border-border px-5 py-2.5 rounded-full hover:scale-105 transition-all duration-300 hover:bg-secondary">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Small card - NO dark overlay on image
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

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
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
        background: "hsl(var(--card))",
      }}
      className="reveal-scale overflow-hidden group border border-border rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all duration-300"
      data-delay={String(index * 80)}
    >
      {/* Image - clean, no dark overlay */}
      <div className="relative overflow-hidden" style={{ height: 200 }}>
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-primary border border-border uppercase tracking-wider">
          {project.category}
        </span>
        <span className="absolute top-3 right-3 font-mono text-2xl font-black text-foreground/10 select-none">
          {project.num}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/8 text-primary/80 border border-primary/10">{t}</span>
          ))}
        </div>
        <div className="flex gap-2">
          {project.live !== "#" && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium gradient-bg text-primary-foreground px-4 py-2 rounded-full hover:scale-105 transition-all duration-300">
              <ExternalLink className="w-3 h-3" /> Ko'rish
            </a>
          )}
          {project.github !== "#" && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium border border-border px-4 py-2 rounded-full hover:bg-secondary transition-all duration-300">
              <Github className="w-3 h-3" /> GitHub
            </a>
          )}
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
  const filtered = activeFilter === "Barchasi" ? rest : rest.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground noise">
      <FloatingOrbs />
      <Navbar />

      <section className="pt-28 md:pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="reveal inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Bosh sahifa
          </Link>
          <p className="reveal font-mono text-xs text-primary mb-3 tracking-widest uppercase" data-delay="100">Portfolio</p>
          <h1 className="reveal text-4xl md:text-6xl font-black mb-4" data-delay="150">
            <span className="gradient-text">Loyihalarim</span>
          </h1>
          <p className="reveal text-muted-foreground max-w-xl text-sm md:text-base" data-delay="200">
            Real mijozlar uchun yaratilgan {projects.length} ta loyiha — CRM tizimlaridan Telegram botlargacha.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-12 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <p className="reveal font-mono text-xs text-muted-foreground uppercase tracking-widest">✦ Asosiy loyihalar</p>
          {featured.map((p) => <FeaturedCard key={p.title} project={p} />)}
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveFilter(cat)}
                className={`text-xs font-mono px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === cat
                    ? "gradient-bg text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}>
                {cat}
                <span className="ml-1 opacity-60">
                  ({cat === "Barchasi" ? rest.length : rest.filter(p => p.category === cat).length})
                </span>
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
