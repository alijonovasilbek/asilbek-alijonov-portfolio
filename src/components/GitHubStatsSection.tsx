import { useCountUp } from "@/hooks/useCountUp";
import { Github, GitFork, Star, GitCommit, BookOpen } from "lucide-react";

const stats = [
  { label: "GitHub Repos", value: 24, icon: BookOpen, suffix: "+" },
  { label: "Commits (2024)", value: 380, icon: GitCommit, suffix: "+" },
  { label: "Stars earned", value: 47, icon: Star, suffix: "" },
  { label: "Forks", value: 12, icon: GitFork, suffix: "" },
];

const StatCard = ({
  label,
  value,
  suffix,
  icon: Icon,
  delay,
}: {
  label: string;
  value: number;
  suffix: string;
  icon: React.ElementType;
  delay: number;
}) => {
  const { count, ref } = useCountUp(value, 1800);

  return (
    <div
      ref={ref}
      className="reveal glass-card p-6 rounded-2xl text-center group hover:scale-[1.04] transition-all duration-500 glow-hover"
      data-delay={String(delay)}
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-xl bg-primary/8 group-hover:bg-primary/15 transition-colors duration-300">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      <p className="text-3xl font-black gradient-text mb-1">
        {count}
        {suffix}
      </p>
      <p className="text-xs text-muted-foreground font-mono">{label}</p>
    </div>
  );
};

const GitHubStatsSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <p className="reveal font-mono text-xs text-primary mb-3 tracking-widest uppercase">
              Open Source
            </p>
            <h2 className="reveal text-3xl md:text-5xl font-bold" data-delay="100">
              GitHub{" "}
              <span className="gradient-text">faoliyati</span>
            </h2>
          </div>
          <a
            href="https://github.com/alijonovasilbek"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all duration-300 font-medium"
            data-delay="200"
          >
            <Github className="w-4 h-4" />
            Profilni ko'rish
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 100} />
          ))}
        </div>

        {/* GitHub contribution graph image */}
        <div className="reveal glass-card p-6 rounded-2xl overflow-hidden" data-delay="300">
          <p className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest">
            Contribution graph
          </p>
          <img
            src="https://ghchart.rshah.org/4169e1/alijonovasilbek"
            alt="GitHub contribution chart"
            className="w-full rounded-lg opacity-80"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubStatsSection;
