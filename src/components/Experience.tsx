import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Developer",
    company: "Cognilabs",
    period: "2024-07-24 — Hozir",
    description:
      "Django Backend va Fast API bo'yicha rivojlanishga e'tibor qaratdim. Turli xil saytlar, botlar, CRM, LMS tizimlarini yaratdik. Bundan tashqari, tizim arxitekturasi va server deployment testing bo'yicha zarur bilimlarni ham oldim.",
  },
  {
    role: "Oracle and Angular Developer (Intern)",
    company: "Cognilabs",
    period: "2024-04 — 2024-07",
    description:
      "Angular yordamida responsiv va foydalanuvchilarga qulay interfeyslar yaratdim. Oracle PL/SQL bilan ma'lumotlar bazasi operatsiyalarini optimallashtirishda qatnashdim.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div data-animate>
          <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Tajriba</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            <span className="gradient-text">Ish tajribam</span>
          </h2>
        </div>

        <div className="relative" data-animate>
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px gradient-bg opacity-30" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-16 md:pl-20">
                <div className="absolute left-3 md:left-5 top-1 w-7 h-7 rounded-full gradient-bg flex items-center justify-center shadow-lg">
                  <Briefcase className="w-3.5 h-3.5 text-primary-foreground" />
                </div>

                <div className="glass-card p-6 hover:scale-[1.01] transition-all duration-300 glow-border-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg">{exp.role}</h3>
                      <p className="text-primary font-medium text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
