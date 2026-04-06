import { ArrowLeft, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useAnimations";
import FloatingOrbs from "@/components/FloatingOrbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const experiences = [
  {
    role: "Web Developer",
    company: "Cognilabs",
    period: "2024-07 — Hozir",
    desc: "Django Backend va Fast API bo'yicha rivojlanish. CRM, LMS, botlar va turli xil veb-tizimlar yaratish. Server deployment va tizim arxitekturasi.",
    tags: ["Django", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    role: "Oracle & Angular Developer (Intern)",
    company: "Cognilabs",
    period: "2024-04 — 2024-07",
    desc: "Angular yordamida responsiv interfeyslar. Oracle PL/SQL bilan ma'lumotlar bazasi operatsiyalarini optimallash.",
    tags: ["Angular", "Oracle", "PL/SQL"],
  },
];

const education = [
  {
    school: "Milliy Universitet",
    degree: "Kibersecurity va dasturiy ta'minot muhandisligi",
    period: "2022-09 — 2026-06",
  },
  {
    school: "Najot Ta'lim",
    degree: "Python Django web development",
    period: "2022-11 — 2025-11",
  },
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
            <span className="gradient-text">Tajriba va ta'lim</span>
          </h1>
        </div>
      </section>

      {/* Experience */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-2xl font-bold mb-10 flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-primary" /> Ish tajribasi
          </h2>

          <div className="relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px gradient-bg opacity-20" />
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <div key={i} className="reveal relative pl-14" data-delay={String(i * 150)}>
                  <div className="absolute left-2 top-2 w-9 h-9 rounded-full gradient-bg flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="glass-card p-6 rounded-xl glow-hover hover:scale-[1.01] transition-all duration-500">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg">{exp.role}</h3>
                        <p className="text-primary text-sm font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground mt-1 sm:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.desc}</p>
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
        </div>
      </section>

      {/* Education */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-2xl font-bold mb-10 flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-primary" /> Ta'lim
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <div key={i} className="reveal glass-card p-6 rounded-xl glow-hover hover:scale-[1.02] transition-all duration-500" data-delay={String(i * 150)}>
                <h3 className="font-bold text-lg mb-1">{edu.school}</h3>
                <p className="text-sm text-muted-foreground mb-2">{edu.degree}</p>
                <span className="text-xs font-mono text-primary">{edu.period}</span>
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
