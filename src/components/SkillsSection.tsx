import { useEffect, useRef, useState } from "react";

const skills = [
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Python / Django", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "REST API Design", level: 88 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "Angular", level: 78 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "🛠",
    items: [
      { name: "Docker", level: 70 },
      { name: "Linux", level: 75 },
      { name: "Git / GitHub", level: 88 },
      { name: "Telegram Bots", level: 92 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-foreground/80">{name}</span>
        <span className="text-xs font-mono text-primary">{level}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: "linear-gradient(90deg, hsl(var(--glow)), hsl(var(--glow-accent)))",
          }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal font-mono text-xs text-primary mb-3 tracking-widest uppercase">
            Texnik bilimlar
          </p>
          <h2 className="reveal text-3xl md:text-5xl font-bold" data-delay="100">
            Ko'nikmalar &{" "}
            <span className="gradient-text">Texnologiyalar</span>
          </h2>
          <p className="reveal text-muted-foreground mt-4 max-w-md mx-auto text-sm" data-delay="200">
            2+ yil davomida o'rganib, real loyihalarda qo'llagan texnologiyalar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="reveal glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-500 glow-hover"
              data-delay={String(i * 120)}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-semibold text-foreground">{group.category}</h3>
              </div>
              {group.items.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
