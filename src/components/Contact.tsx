import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Xabar yuborildi!", description: "Tez orada javob beraman." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div data-animate>
          <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Aloqa</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            <span className="gradient-text">Bog'lanish</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8" data-animate>
          <div className="space-y-6">
            {[
              { icon: <Phone className="w-5 h-5" />, label: "Telefon", value: "+998 99 922-02-04" },
              { icon: <Mail className="w-5 h-5" />, label: "Email", value: "alijonovasilbek058@gmail.com" },
              { icon: <MapPin className="w-5 h-5" />, label: "Manzil", value: "Toshkent, O'zbekiston" },
            ].map((item) => (
              <div key={item.label} className="glass-card p-5 flex items-center gap-4 hover:scale-[1.02] transition-all duration-300 glow-border-hover">
                <div className="p-3 rounded-xl gradient-bg text-primary-foreground">{item.icon}</div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase">{item.label}</p>
                  <p className="font-medium text-sm">{item.value}</p>
                </div>
              </div>
            ))}

            <a
              href="https://t.me/alijonovasilbek"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full gradient-bg text-primary-foreground py-3.5 rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300 glow-border"
            >
              <Send className="w-4 h-4" /> Telegram orqali yozish
            </a>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
            <input
              type="text"
              placeholder="Ismingiz"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <input
              type="email"
              placeholder="Email manzilingiz"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <textarea
              placeholder="Xabaringiz..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full gradient-bg text-primary-foreground py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300"
            >
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
