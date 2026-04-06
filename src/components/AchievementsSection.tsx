import { Trophy, Zap, Users, Code2, BookCheck, Rocket } from "lucide-react";

const achievements = [
  {
    icon: Rocket,
    title: "Cognilabs",
    desc: "Web Developer sifatida professional kompaniyada ishlamoqda",
    year: "2024 — hozir",
    color: "text-blue-400",
    bg: "bg-blue-500/8",
  },
  {
    icon: BookCheck,
    title: "Najot Ta'lim",
    desc: "Django Backend yo'nalishini muvaffaqiyatli tugatdi",
    year: "2023",
    color: "text-emerald-400",
    bg: "bg-emerald-500/8",
  },
  {
    icon: Code2,
    title: "6+ Loyiha",
    desc: "CRM tizimi, E-commerce platformasi, Telegram bot va boshqalar",
    year: "2022 — hozir",
    color: "text-violet-400",
    bg: "bg-violet-500/8",
  },
  {
    icon: Zap,
    title: "Fullstack ko'nikma",
    desc: "Django + Angular stack bilan end-to-end ilovalar yaratish",
    year: "2023",
    color: "text-amber-400",
    bg: "bg-amber-500/8",
  },
  {
    icon: Users,
    title: "Milliy Universitet",
    desc: "Axborot texnologiyalari fakultetida tahsil olmoqda",
    year: "2022 — hozir",
    color: "text-rose-400",
    bg: "bg-rose-500/8",
  },
  {
    icon: Trophy,
    title: "Open Source",
    desc: "GitHub da 24+ ochiq loyiha, 47+ yulduz to'plagan",
    year: "2022 — hozir",
    color: "text-orange-400",
    bg: "bg-orange-500/8",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal font-mono text-xs text-primary mb-3 tracking-widest uppercase">
            Yutuqlar
          </p>
          <h2 className="reveal text-3xl md:text-5xl font-bold" data-delay="100">
            Mening <span className="gradient-text">yo'lim</span>
          </h2>
          <p
            className="reveal text-muted-foreground mt-4 max-w-md mx-auto text-sm"
            data-delay="200"
          >
            Ta'lim, tajriba va professional o'sish yo'lidagi muhim bosqichlar
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="reveal glass-card p-6 rounded-2xl group hover:scale-[1.03] transition-all duration-500 glow-hover relative overflow-hidden"
                data-delay={String(i * 80)}
              >
                {/* subtle top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, hsl(var(--glow) / 0.5), transparent)",
                  }}
                />

                <div className={`inline-flex p-3 rounded-xl ${a.bg} mb-4`}>
                  <Icon className={`w-5 h-5 ${a.color}`} />
                </div>

                <p className="text-xs font-mono text-muted-foreground mb-2">{a.year}</p>
                <h3 className="font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
