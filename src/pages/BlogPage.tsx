import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useAnimations";
import FloatingOrbs from "@/components/FloatingOrbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    title: "Django vs FastAPI: Qaysi birini tanlash kerak?",
    excerpt: "Django va FastAPI o'rtasidagi farqlar, afzalliklar va kamchiliklar. Qachon qaysi birini ishlatish to'g'ri?",
    date: "2024-03-15",
    readTime: "5 min",
    tags: ["Django", "FastAPI", "Backend"],
  },
  {
    title: "Docker bilan deployment: Boshlang'ich qo'llanma",
    excerpt: "Docker container yaratish, image build qilish va production serverga deploy qilish haqida batafsil.",
    date: "2024-02-20",
    readTime: "8 min",
    tags: ["Docker", "DevOps", "Linux"],
  },
  {
    title: "PostgreSQL: Performance optimallashtirish",
    excerpt: "Ma'lumotlar bazasi so'rovlarini tezlashtirish, indekslar va query optimization usullari.",
    date: "2024-01-10",
    readTime: "6 min",
    tags: ["PostgreSQL", "Database", "Performance"],
  },
  {
    title: "Telegram Bot yaratish: Python bilan",
    excerpt: "Python va aiogram kutubxonasi yordamida professional Telegram bot yaratish bo'yicha to'liq qo'llanma.",
    date: "2023-12-05",
    readTime: "10 min",
    tags: ["Python", "Telegram", "Bot"],
  },
  {
    title: "REST API dizayn qoidalari",
    excerpt: "Yaxshi REST API yaratish uchun best practice'lar, versioning, pagination va xavfsizlik.",
    date: "2023-11-18",
    readTime: "7 min",
    tags: ["API", "REST", "Backend"],
  },
];

const BlogPage = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground noise">
      <FloatingOrbs />
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="reveal inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Bosh sahifa
          </Link>
          <p className="reveal font-mono text-xs text-primary mb-3 tracking-widest uppercase" data-delay="100">Blog</p>
          <h1 className="reveal text-4xl md:text-6xl font-black mb-4" data-delay="150">
            <span className="gradient-text">Maqolalar</span>
          </h1>
          <p className="reveal text-muted-foreground max-w-xl" data-delay="200">
            Dasturlash, texnologiyalar va tajribalarim haqida yozaman.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="reveal glass-card p-6 md:p-8 rounded-xl group hover:scale-[1.01] transition-all duration-500 glow-hover cursor-pointer"
              data-delay={String(i * 100)}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-primary/8 text-primary/80 border border-primary/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex md:flex-col items-center md:items-end gap-3 text-xs text-muted-foreground font-mono shrink-0">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
