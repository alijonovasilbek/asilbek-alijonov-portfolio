import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Send, Github } from "lucide-react";

const CTASection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particles
    const particles: {
      x: number; y: number; vx: number; vy: number;
      r: number; alpha: number; color: string;
    }[] = [];

    const colors = ["#4169e1", "#6366f1", "#8b5cf6", "#06b6d4"];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="reveal-scale max-w-4xl mx-auto relative">
        {/* Canvas background */}
        <div className="relative glass-card rounded-3xl overflow-hidden">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.6 }}
          />

          {/* Top gradient line */}
          <div className="absolute top-0 left-0 w-full h-px gradient-bg" />
          <div className="absolute bottom-0 left-0 w-full h-px gradient-bg opacity-30" />

          {/* Glow orbs */}
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 p-10 md:p-16 text-center">
            {/* Status */}
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-mono text-muted-foreground mb-8 border border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Yangi loyihalarga tayyor
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
              Loyiha <span className="gradient-text">g'oyangiz</span> bormi?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
              Keling, birga ajoyib narsa yaratamiz. Django, FastAPI yoki fullstack yechim kerakmi — 
              men bilan bog'laning.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 gradient-bg text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300 glow"
              >
                Bog'lanish
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://t.me/alijonovasilbek"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass px-8 py-3.5 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300 glow-hover"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-12 pt-8 border-t border-border grid grid-cols-3 gap-4">
              {[
                { num: "2+", label: "Yil tajriba" },
                { num: "6+", label: "Loyiha" },
                { num: "100%", label: "Sifat" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl md:text-3xl font-black gradient-text">{s.num}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
