import { useState } from "react";
import { ArrowLeft, Send, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useAnimations";
import { useToast } from "@/hooks/use-toast";
import FloatingOrbs from "@/components/FloatingOrbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  useScrollReveal();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Xabar yuborildi! ✨", description: "Tez orada javob beraman." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground noise">
      <FloatingOrbs />
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="reveal inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Bosh sahifa
          </Link>
          <p className="reveal font-mono text-xs text-primary mb-3 tracking-widest uppercase" data-delay="100">Aloqa</p>
          <h1 className="reveal text-4xl md:text-6xl font-black mb-4" data-delay="150">
            <span className="gradient-text">Bog'lanish</span>
          </h1>
          <p className="reveal text-muted-foreground max-w-xl" data-delay="200">
            Loyiha g'oyangiz bormi? Hamkorlik qilmoqchimisiz? Men bilan bog'laning!
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="space-y-5">
            {[
              { icon: <Phone className="w-5 h-5" />, label: "Telefon", value: "+998 99 922-02-04", href: "tel:+998999220204" },
              { icon: <Mail className="w-5 h-5" />, label: "Email", value: "alijonovasilbek058@gmail.com", href: "mailto:alijonovasilbek058@gmail.com" },
              { icon: <MapPin className="w-5 h-5" />, label: "Manzil", value: "Toshkent, O'zbekiston", href: "#" },
            ].map((item, i) => (
              <a key={item.label} href={item.href}
                className="reveal glass-card p-5 flex items-center gap-4 rounded-xl hover:scale-[1.02] transition-all duration-500 glow-hover"
                data-delay={String(i * 100)}>
                <div className="p-3 rounded-xl gradient-bg text-primary-foreground shrink-0">{item.icon}</div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">{item.label}</p>
                  <p className="font-medium text-sm">{item.value}</p>
                </div>
              </a>
            ))}

            <a href="https://t.me/alijonovasilbek" target="_blank" rel="noopener noreferrer"
              className="reveal flex items-center justify-center gap-2 w-full gradient-bg text-primary-foreground py-4 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300 glow"
              data-delay="300">
              <Send className="w-4 h-4" /> Telegram orqali yozish
            </a>
          </div>

          <form onSubmit={handleSubmit} className="reveal glass-card p-8 rounded-xl space-y-5" data-delay="200">
            <div>
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2 block">Ismingiz</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2 block">Email</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2 block">Xabar</label>
              <textarea rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none" />
            </div>
            <button type="submit"
              className="w-full gradient-bg text-primary-foreground py-3.5 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300 glow">
              Yuborish
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
