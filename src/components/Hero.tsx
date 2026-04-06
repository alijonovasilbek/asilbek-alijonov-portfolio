import { Github, Linkedin, Send, ArrowDown } from "lucide-react";
import { useTypingEffect } from "@/hooks/useAnimations";

const Hero = () => {
  const typedText = useTypingEffect(
    ["Backend Developer", "Fullstack Engineer", "Django Expert", "Problem Solver"],
    70,
    2000
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[80px] animate-float" />
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="animate-fade-in-scale">
          <p className="font-mono text-sm text-primary mb-4 tracking-widest uppercase">
            {"< Hello World />"}
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight">
            <span className="gradient-text">Asilbek</span>{" "}
            <span className="text-foreground">Alijonov</span>
          </h1>

          <div className="h-8 md:h-10 mb-6">
            <p className="text-lg md:text-2xl text-muted-foreground font-light">
              Software Engineer •{" "}
              <span className="text-primary font-medium">{typedText}</span>
              <span className="animate-pulse text-primary">|</span>
            </p>
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
            Toshkentdan dasturchi. Django, FastAPI va fullstack texnologiyalari bo'yicha tajribaga ega.
            Zamonaviy, sifatli va tezkor web-ilovalar yaratish mening asosiy maqsadim.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="gradient-bg text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300 glow-border shadow-lg"
            >
              Loyihalarni ko'rish
            </a>
            <a
              href="#contact"
              className="glass-card px-8 py-3.5 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300 glow-border-hover"
            >
              Bog'lanish
            </a>
          </div>

          <div className="flex items-center justify-center gap-5">
            {[
              { icon: <Send className="w-5 h-5" />, href: "https://t.me/alijonovasilbek", label: "Telegram" },
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/alijonovasilbek", label: "GitHub" },
              { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/alijonovasilbek", label: "LinkedIn" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:scale-110 hover:text-primary transition-all duration-300"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
