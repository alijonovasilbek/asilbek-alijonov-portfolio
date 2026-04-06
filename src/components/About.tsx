const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div data-animate>
          <p className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">Men haqimda</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">Kim man?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8" data-animate>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              2022-yilda O'zbekiston Milliy universitetida dasturlashni o'rganishni boshladim.
              Bir yil davomida algoritmlar va ma'lumotlar tuzilmalari bo'yicha bilim oldim va C# tilida
              dastlabki kodlarimni yozishni boshladim.
            </p>
            <p>
              Najot Ta'lim o'quv markazida Python Django kursini 2023-yilga qadar tugatdim.
              Keyin Docker, to'lov tizimlari, FastAPI va WebSockets texnologiyalarini o'rgandim.
            </p>
            <p>
              Uch oydan so'ng Cognilabs kompaniyasida stajirovkaga kirdim va hozirda shu kompaniyada
              ishlayapman. Soft skilllarimni yaxshilayapman va kompaniyada ko'plab yangi bilimlar olayapman.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: "Joylashuv", value: "Toshkent, O'zbekiston" },
              { label: "Tajriba", value: "2+ yil dasturlash" },
              { label: "Kompaniya", value: "Cognilabs" },
              { label: "Lavozim", value: "Web Developer" },
              { label: "Ta'lim", value: "Milliy Universitet" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card p-4 hover:scale-[1.02] transition-all duration-300 glow-border-hover"
              >
                <p className="text-xs text-primary font-mono uppercase tracking-wider mb-1">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
