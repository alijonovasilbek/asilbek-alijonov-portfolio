const skillCategories = [
  {
    title: "Tillar",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "C#", level: 60 },
      { name: "HTML/CSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Django", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "Django REST", level: 88 },
      { name: "Flask", level: 65 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Angular", level: 70 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "RxJS", level: 60 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "Oracle", level: 65 },
      { name: "SQL Lite", level: 70 },
    ],
  },
  {
    title: "Asboblar",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Linux", level: 80 },
      { name: "Git", level: 85 },
      { name: "Telegram Bot", level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div data-animate>
          <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Ko'nikmalar</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            <span className="gradient-text">Texnologiyalar</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate>
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="glass-card p-6 hover:scale-[1.02] transition-all duration-300 glow-border-hover group"
            >
              <h3 className="font-bold text-lg mb-5 gradient-text">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full gradient-bg transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
