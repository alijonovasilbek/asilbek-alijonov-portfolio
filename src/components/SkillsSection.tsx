import { useEffect, useRef, useState } from "react";

// Real tech icons using devicons/simpleicons via CDN img tags
const techStack = [
  { name: "Python",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",         level: 92, category: "Language" },
  { name: "Oracle PL/SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",          level: 85, category: "Database" },
  { name: "JavaScript",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",  level: 78, category: "Language" },
  { name: "TypeScript",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",  level: 75, category: "Language" },
  { name: "Django",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",              level: 90, category: "Backend" },
  { name: "FastAPI",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",         level: 86, category: "Backend" },
  { name: "Angular",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",    level: 78, category: "Frontend" },
  { name: "HTML / CSS",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",            level: 90, category: "Frontend" },
  { name: "Tailwind CSS",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",level: 88, category: "Frontend" },
  { name: "PostgreSQL",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",  level: 82, category: "Database" },
  { name: "MySQL",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",            level: 75, category: "Database" },
  { name: "Docker",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",          level: 73, category: "DevOps" },
  { name: "Linux",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",            level: 78, category: "DevOps" },
  { name: "Git",           logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",                level: 88, category: "DevOps" },
  { name: "AWS",           logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", level: 60, category: "Cloud" },
  { name: "DigitalOcean",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg", level: 65, category: "Cloud" },
  { name: "REST API",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",        level: 88, category: "Backend" },
  { name: "WebSocket",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",          level: 72, category: "Backend" },
  { name: "Telegram Bot",  logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",                  level: 93, category: "Specialty" },
  { name: "PL/SQL Proc.",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",          level: 83, category: "Database" },
  { name: "GitHub",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",          level: 88, category: "DevOps" },
];

const categoryFilters = ["Barchasi", "Language", "Backend", "Frontend", "Database", "DevOps", "Cloud", "Specialty"];

const categoryStyle: Record<string, string> = {
  Language:  "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  Backend:   "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  Frontend:  "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  Database:  "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  DevOps:    "bg-gray-500/10 text-gray-500 dark:text-gray-400 border-gray-500/20",
  Cloud:     "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
  Specialty: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
};

const SkillCard = ({
  name, logo, level, category, delay,
}: typeof techStack[0] & { delay: number }) => {
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => { setWidth(level); setVisible(true); }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div
      ref={ref}
      className="group glass-card p-4 rounded-xl hover:scale-[1.03] transition-all duration-300 glow-hover"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, box-shadow 0.3s ease, scale 0.3s ease`,
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
            <img
              src={logo}
              alt={name}
              className="w-6 h-6 object-contain"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <span className="text-sm font-medium text-foreground">{name}</span>
        </div>
        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${categoryStyle[category] || ""}`}>
          {category}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${width}%`,
              background: "linear-gradient(90deg, hsl(var(--glow)), hsl(var(--glow-accent)))",
              transition: "width 1s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>
        <span className="text-xs font-mono text-primary w-8 text-right">{level}%</span>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("Barchasi");

  const filtered = activeFilter === "Barchasi"
    ? techStack
    : techStack.filter((s) => s.category === activeFilter);

  const topSkills = [...techStack].sort((a, b) => b.level - a.level).slice(0, 5);

  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="reveal font-mono text-xs text-primary mb-3 tracking-widest uppercase">Texnik bilimlar</p>
          <h2 className="reveal text-3xl md:text-5xl font-bold mb-4" data-delay="100">
            Ko'nikmalar & <span className="gradient-text">Texnologiyalar</span>
          </h2>
          <p className="reveal text-muted-foreground max-w-lg mx-auto text-sm" data-delay="200">
            Oracle PL/SQL, Python va zamonaviy web texnologiyalari bo'yicha 2+ yillik real tajriba
          </p>
        </div>

        {/* Top 5 */}
        <div className="reveal grid grid-cols-5 gap-3 mb-12" data-delay="100">
          {topSkills.map((s) => (
            <div key={s.name} className="glass-card p-3 rounded-xl text-center group hover:scale-105 transition-all duration-300 glow-hover">
              <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                <img src={s.logo} alt={s.name} className="w-8 h-8 object-contain" loading="lazy" />
              </div>
              <p className="text-[11px] font-medium text-foreground truncate">{s.name}</p>
              <p className="text-xs font-mono gradient-text font-bold mt-0.5">{s.level}%</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="reveal flex flex-wrap gap-2 mb-8" data-delay="150">
          {categoryFilters.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[11px] font-mono px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                activeFilter === cat
                  ? "gradient-bg text-primary-foreground scale-105"
                  : "glass text-muted-foreground hover:text-foreground hover:scale-105"
              }`}
            >
              {cat}
              <span className="ml-1 opacity-50">
                ({cat === "Barchasi" ? techStack.length : techStack.filter(s => s.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} {...skill} delay={i * 50} />
          ))}
        </div>

        {/* Oracle callout */}
        <div className="reveal mt-10 p-6 rounded-2xl border border-orange-500/20 glow-hover relative overflow-hidden" data-delay="200"
          style={{ background: "hsl(var(--glass-bg))", backdropFilter: "blur(16px)" }}>
          <div className="flex items-start gap-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
              alt="Oracle"
              className="w-10 h-10 object-contain flex-shrink-0 mt-1"
            />
            <div>
              <h3 className="font-bold text-foreground mb-1">Oracle PL/SQL — Maxsus ko'nikma</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Stored Procedures, Functions, Triggers</strong> va murakkab{" "}
                <strong className="text-foreground">PL/SQL bloklari</strong> yozish. Ma'lumotlar bazasi
                optimizatsiyasi, <strong className="text-foreground">Cursors</strong> va{" "}
                <strong className="text-foreground">Exception handling</strong> bilan ishlash tajribasi.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Stored Procedures", "Functions", "Triggers", "Cursors", "Packages", "Exception Handling"].map(t => (
                  <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-orange-500/8 text-orange-400 border border-orange-500/20">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
