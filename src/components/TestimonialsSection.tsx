import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jasur Toshmatov",
    role: "Senior Developer, Cognilabs",
    avatar: "JT",
    text: "Asilbek juda tez o'rganadi va mustaqil ishlash qobiliyati ajoyib. Django va FastAPI bilan murakkab API larni to'g'ri arxitektura bilan yozadi.",
    color: "from-blue-500/20 to-violet-500/20",
  },
  {
    name: "Sherzod Alimov",
    role: "Project Manager",
    avatar: "SA",
    text: "Loyihalarimizda katta rol o'ynadi. Har doim o'z vaqtida topshiradi, kodni toza va qo'llab-quvvatlanadigan yozadi. Tavsiya qilaman!",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    name: "Nodira Yusupova",
    role: "UI/UX Designer",
    avatar: "NY",
    text: "Frontend tomondan ham yaxshi bilimi bor. Dizayn bilan ishlashda muammosiz, Tailwind CSS va Angular bilan go'zal interfeyslar yaratadi.",
    color: "from-rose-500/20 to-pink-500/20",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal font-mono text-xs text-primary mb-3 tracking-widest uppercase">
            Fikrlar
          </p>
          <h2 className="reveal text-3xl md:text-5xl font-bold" data-delay="100">
            Hamkasblar <span className="gradient-text">fikri</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal glass-card p-6 rounded-2xl group hover:scale-[1.02] transition-all duration-500 glow-hover relative overflow-hidden"
              data-delay={String(i * 120)}
            >
              {/* gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`}
              />

              <div className="relative">
                <Quote className="w-6 h-6 text-primary/30 mb-4" />

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
