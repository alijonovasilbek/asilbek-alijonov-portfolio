import { useEffect, useRef, useState } from "react";

// Tech icons as SVG paths / emojis
const techStack = [
  // Core languages
  { name: "Python", icon: "🐍", level: 92, category: "Language", color: "from-yellow-400 to-blue-500" },
  { name: "Oracle PL/SQL", icon: "🔶", level: 85, category: "Database", color: "from-orange-400 to-red-500" },
  { name: "JavaScript", icon: "⚡", level: 78, category: "Language", color: "from-yellow-300 to-yellow-500" },
  { name: "TypeScript", icon: "📘", level: 75, category: "Language", color: "from-blue-400 to-blue-600" },

  // Backend frameworks
  { name: "Django", icon: "🌿", level: 90, category: "Backend", color: "from-green-600 to-emerald-500" },
  { name: "FastAPI", icon: "🚀", level: 86, category: "Backend", color: "from-teal-400 to-cyan-500" },
  { name: "REST API", icon: "🔌", level: 88, category: "Backend", color: "from-violet-400 to-purple-600" },
  { name: "WebSocket", icon: "🔄", level: 72, category: "Backend", color: "from-cyan-400 to-blue-500" },

  // Frontend
  { name: "Angular", icon: "🅰️", level: 78, category: "Frontend", color: "from-red-500 to-pink-500" },
  { name: "Tailwind CSS", icon: "🎨", level: 88, category: "Frontend", color: "from-sky-400 to-cyan-400" },
  { name: "HTML / CSS", icon: "🖥️", level: 90, category: "Frontend", color: "from-orange-400 to-orange-500" },

  // Databases
  { name: "PostgreSQL", icon: "🐘", level: 82, category: "Database", color: "from-blue-500 to-indigo-500" },
  { name: "Oracle DB", icon: "🔷", level: 80, category: "Database", color: "from-red-400 to-orange-400" },
  { name: "MySQL", icon: "🐬", level: 75, category: "Database", color: "from-blue-400 to-blue-600" },

  // DevOps & Cloud
  { name: "Docker", icon: "🐳", level: 73, category: "DevOps", color: "from-blue-400 to-sky-500" },
  { name: "AWS", icon: "☁️", level: 60, category: "Cloud", color: "from-orange-400 to-amber-500" },
  { name: "DigitalOcean", icon: "🌊", level: 65, category: "Cloud", color: "from-blue-400 to-blue-600" },
  { name: "Linux", icon: "🐧", level: 78, category: "DevOps", color: "from-yellow-400 to-orange-400" },
  { name: "Git / GitHub", icon: "📦", level: 88, category: "DevOps", color: "from-gray-500 to-gray-700" },

  // Specialties
  { name: "Telegram Bots", icon: "🤖", level: 93, category: "Specialty", color: "from-blue-400 to-cyan-500" },
  { name: "PL/SQL Procedures", icon: "⚙️", level: 83, category: "Database", color: "from-orange-500 to-red-500" },
  { name: "PL/SQL Functions", icon: "🔧", level: 82, category: "Database", color: "from-amber-500 to-orange-500" },
];

const categoryFilters = ["Barchasi", "Language", "Backend", "Frontend", "Database", "DevOps", "Cloud", "Specialty"];

const categoryColors: Record<string, string> = {
  Language: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  Backend: "bg-green-500/10 text-green-500 border-green-500/20",
  Frontend: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  Database: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  DevOps: "bg-gray-500/10 text-gray-400 border-gray-500/20",
  Cloud: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  Specialty: "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

// Animated bar card
const SkillCard = ({
  name, icon, level, category, color, delay
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div
      ref={ref}
      className={`group glass-card p-4 rounded-xl hover:scale-[1.03] transition-all duration-400 glow-hover relative overflow-hidden ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transition: "opacity 0.5s ease, transform 0.5s ease" }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="text-sm font-medium text-foreground">{name}</span>
        </div>
        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${categoryColors[category] || "bg-primary/10 text-primary border-primary/20"}`}>
          {category}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${width}%`,
              background: `linear-gradient(90deg, hsl(var(--glow)), hsl(var(--glow-accent)))`,
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

  // Highlight top skills
  const topSkills = [...techStack].sort((a, b) => b.level - a.level).slice(0, 5);

  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="reveal font-mono text-xs text-primary mb-3 tracking-widest uppercase">Texnik bilimlar</p>
          <h2 className="reveal text-3xl md:text-5xl font-bold mb-4" data-delay="100">
            Ko'nikmalar & <span className="gradient-text">Texnologiyalar</span>
          </h2>
          <p className="reveal text-muted-foreground max-w-lg mx-auto text-sm" data-delay="200">
            Oracle PL/SQL, Python va zamonaviy web texnologiyalari bo'yicha 2+ yillik real tajriba
          </p>
        </div>

        {/* Top 5 highlight */}
        <div className="reveal grid grid-cols-5 gap-3 mb-12" data-delay="100">
          {topSkills.map((s) => (
            <div key={s.name} className="glass-card p-3 rounded-xl text-center group hover:scale-105 transition-all duration-300">
              <span className="text-2xl block mb-1">{s.icon}</span>
              <p className="text-[11px] font-medium text-foreground truncate">{s.name}</p>
              <p className="text-xs font-mono gradient-text font-bold mt-1">{s.level}%</p>
            </div>
          ))}
        </div>

        {/* Filter pills */}
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
            <SkillCard key={skill.name} {...skill} delay={i * 60} />
          ))}
        </div>

        {/* Oracle special callout */}
        <div className="reveal mt-10 glass-card p-6 rounded-2xl border border-orange-500/20 glow-hover" data-delay="200">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🔶</span>
            <div>
              <h3 className="font-bold text-foreground mb-1">Oracle PL/SQL — Maxsus ko'nikma</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Stored Procedures, Functions, Triggers</strong> va murakkab 
                <strong className="text-foreground"> PL/SQL bloklari</strong> yozish. Ma'lumotlar bazasi 
                optimizatsiyasi, <strong className="text-foreground">Cursor</strong>lar va 
                <strong className="text-foreground"> Exception handling</strong> bilan ishlash tajribasi.
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
