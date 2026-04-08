import { Github, Linkedin, Send, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTypingEffect, useScrollReveal, useMouseParallax } from "@/hooks/useAnimations";
import FloatingOrbs from "@/components/FloatingOrbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/SkillsSection";
import GitHubStatsSection from "@/components/GitHubStatsSection";
import AchievementsSection from "@/components/AchievementsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

import projectCrm from "@/assets/project-crm.png";
import projectOlou from "@/assets/project-olou.jpg";
import projectTaxi from "@/assets/project-taxi.jpg";

const featuredProjects = [
  { title: "CRM System", image: projectCrm, tags: ["Django", "Angular", "PostgreSQL"] },
  { title: "Olou.uz", image: projectOlou, tags: ["E-commerce", "Django", "REST API"] },
  { title: "Taxi Bot", image: projectTaxi, tags: ["Telegram Bot", "Python", "FastAPI"] },
];

const techStack = [
  "Python", "Django", "FastAPI", "JavaScript", "Angular", "PostgreSQL",
  "Docker", "REST API", "Tailwind CSS", "Linux", "Git", "Telegram Bots",
];

const Index = () => {
  useScrollReveal();
  const mouse = useMouseParallax();
  const typedText = useTypingEffect(
    ["Backend Developer", "Fullstack Engineer", "Django Expert", "API Architect"],
    65,
    2500
  );

  return (
    <div className="min-h-screen bg-background text-foreground noise">
      <FloatingOrbs />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="reveal" data-delay="0">
            <div className="inline-flex items-center gap-2 glass-card px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 text-[10px] sm:text-xs font-mono text-muted-foreground whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Hozir ishlashga tayyor
            </div>
          </div>

          <h1 className="reveal text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-6" data-delay="100">
            <span className="text-foreground">Asilbek</span>
            <br />
            <span className="gradient-text">Alijonov</span>
          </h1>

          <div className="reveal h-8 mb-8" data-delay="200">
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              {typedText}<span className="cursor-blink text-primary font-light">|</span>
            </p>
          </div>

          <p className="reveal text-muted-foreground max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed" data-delay="300">
            Zamonaviy web-ilovalar yaratuvchi dasturchi. Django, FastAPI va fullstack 
            texnologiyalari bo'yicha 2+ yillik tajriba.
          </p>

          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-14" data-delay="400">
            <Link
              to="/projects"
              className="group gradient-bg text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300 glow flex items-center gap-2"
            >
              Loyihalarni ko'rish
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="glass-card px-8 py-3.5 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300 glow-hover"
            >
              Bog'lanish
            </Link>
          </div>

          <div className="reveal flex items-center justify-center gap-4" data-delay="500">
            {[
              { icon: <Send className="w-5 h-5" />, href: "https://t.me/alijonovasilbek" },
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/alijonovasilbek" },
              { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/alijonovasilbek" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:scale-110 hover:text-primary transition-all duration-300">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section className="py-16 overflow-hidden border-y border-border">
        <div className="flex whitespace-nowrap">
          <div className="marquee flex items-center gap-8">
            {[...techStack, ...techStack].map((t, i) => (
              <span key={i} className="text-sm font-mono text-muted-foreground/50 uppercase tracking-widest flex items-center gap-8">
                {t} <span className="text-primary/30">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT BRIEF */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="reveal font-mono text-xs text-primary mb-3 tracking-widest uppercase">Men haqimda</p>
            <h2 className="reveal text-3xl md:text-5xl font-bold leading-tight mb-6" data-delay="100">
              Kod yozish — <br/><span className="gradient-text">mening san'atim</span>
            </h2>
            <p className="reveal text-muted-foreground leading-relaxed mb-6" data-delay="200">
              2022-yildan beri dasturlash bilan shug'ullanaman. Najot Ta'lim va Milliy Universitetda 
              bilim olib, hozir Cognilabs kompaniyasida web developer sifatida ishlayapman. 
              Django, FastAPI, Angular va boshqa texnologiyalar bilan murakkab tizimlar yarataman.
            </p>
            <div className="reveal grid grid-cols-3 gap-4" data-delay="300">
              {[
                { num: "2+", label: "Yil tajriba" },
                { num: "6+", label: "Loyihalar" },
                { num: "5+", label: "Texnologiyalar" },
              ].map((s) => (
                <div key={s.label} className="text-center glass-card p-4 rounded-xl">
                  <p className="text-2xl font-black gradient-text">{s.num}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right grid grid-cols-2 gap-3" data-delay="200">
            {[
              { title: "Backend", items: ["Django", "FastAPI", "REST API"] },
              { title: "Frontend", items: ["Angular", "Tailwind", "Bootstrap"] },
              { title: "Database", items: ["PostgreSQL", "MySQL", "Oracle"] },
              { title: "DevOps", items: ["Docker", "Linux", "Git"] },
            ].map((cat) => (
              <div key={cat.title} className="glass-card p-5 rounded-xl hover:scale-[1.03] transition-all duration-500 glow-hover">
                <p className="text-xs font-mono text-primary uppercase tracking-wider mb-3">{cat.title}</p>
                {cat.items.map((item) => (
                  <p key={item} className="text-sm text-muted-foreground py-0.5">{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="reveal font-mono text-xs text-primary mb-3 tracking-widest uppercase">Portfolio</p>
              <h2 className="reveal text-3xl md:text-5xl font-bold" data-delay="100">
                <span className="gradient-text">Tanlangan loyihalar</span>
              </h2>
            </div>
            <Link to="/projects" className="reveal hidden md:flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all duration-300 font-medium" data-delay="200">
              Barchasi <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((p, i) => (
              <Link
                to="/projects"
                key={p.title}
                className="reveal-scale group glass-card overflow-hidden hover:scale-[1.02] transition-all duration-500 glow-hover"
                data-delay={String(i * 150)}
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-primary/8 text-primary/80 border border-primary/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link to="/projects" className="reveal md:hidden flex items-center justify-center gap-2 mt-8 text-sm text-primary font-medium">
            Barcha loyihalar <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SKILLS */}
      <SkillsSection />

      {/* GITHUB STATS */}
      <GitHubStatsSection />

      {/* ACHIEVEMENTS */}
      <AchievementsSection />

      {/* TESTIMONIALS */}
      <TestimonialsSection />
      {/* CTA */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
