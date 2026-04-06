import { ArrowLeft, Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useAnimations";
import FloatingOrbs from "@/components/FloatingOrbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const experiences = [
  {
    role: "Web Developer",
    period: "2024-07 — Hozir",
    duration: "10+ oy",
    location: "Toshkent, O'zbekiston",
    desc: "Django Backend va FastAPI bo'yicha professional rivojlanish. CRM, LMS, botlar va turli xil veb-tizimlar yaratish. Server deployment va tizim arxitekturasi bilan ishlash.",
    tags: ["Django", "FastAPI", "PostgreSQL", "Docker", "Linux"],
    type: "Full-time",
  },
  {
    role: "Oracle & Angular Developer",
    period: "2024-04 — 2024-07",
    duration: "3 oy",
    location: "Toshkent, O'zbekiston",
    desc: "Angular yordamida responsiv va interaktiv interfeyslar yaratish. Oracle PL/SQL bilan ma'lumotlar bazasi operatsiyalarini optimallash va murakkab so'rovlar yozish.",
    tags: ["Angular", "Oracle", "PL/SQL", "TypeScript"],
    type: "Internship",
  },
];

const education = [
  {
    school: "Milliy Universitet",
    degree: "Kibersecurity va dasturiy ta'minot muhandisligi",
    period: "2022-09 — 2026-06",
    desc: "IT sohasida nazariy va amaliy bilimlar. Algoritm, ma'lumotlar bazasi, tarmoq xavfsizligi.",
    icon: "🎓",
  },
  {
    school: "Najot Ta'lim",
    degree: "Python Django Web Development",
    period: "2022-11 — 2025-11",
    desc: "Professional Django dasturlash kursi. Real loyihalar, amaliy mashg'ulotlar va mentorlik.",
    icon: "💡",
  },
];

const timelineColors = [
  "from-blue-500 to-violet-500",
  "from-violet-500 to-pink-500",
];

const ExperiencePage = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground noise">
      <FloatingOrbs />
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="reveal inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Bosh sahifa
          </Link>
          <p className="reveal font-mono text-xs text-primary mb-3 tracking-widest uppercase" data-delay="100">Karyera</p>
          <h1 className="reveal text-4xl md:text-6xl font-black mb-4" data-delay="150">
            Tajriba va <span className="gradient-text">ta'lim</span>
          </h1>
          <p className="reveal text-muted-foreground max-w-lg text-sm md:text-base" data-delay="200">
            2022-yildan buyon dasturlash sohasida izchil rivojlanib kelmoqdaman.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-2xl font-bold mb-12 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10"><Briefcase className="w-5 h-5 text-primary" /></div>
            Ish tajribasi
          </h2>
          <div className="relative space-y-6">
            <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-accent/20 to-transparent" />
            {experiences.map((exp, i) => (
              <div key={i} className="reveal relative pl-14" data-delay={String(i * 150)}>
                <div className={`absolute left-0 top-3 w-10 h-10 rounded-full bg-gradient-to-br ${timelineColors[i]} flex items-center justify-center shadow-lg`}>
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <div className="glass-card p-6 rounded-2xl glow-hover hover:scale-[1.01] transition-all duration-500 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">{exp.role}</h3>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{exp.type}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {exp.period}</span>
                        <span className="text-primary/50">·</span>
                        <span>{exp.duration}</span>
                        <span className="text-primary/50">·</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-primary/8 text-primary/80 border border-primary/10">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-2xl font-bold mb-12 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10"><GraduationCap className="w-5 h-5 text-primary" /></div>
            Ta'lim
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <div key={i} className="reveal glass-card p-7 rounded-2xl glow-hover hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden" data-delay={String(i * 150)}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                <div className="relative">
                  <span className="text-3xl mb-4 block">{edu.icon}</span>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300">{edu.school}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{edu.desc}</p>
                  <span className="text-xs font-mono text-primary">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExperiencePage;
