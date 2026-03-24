import { ArrowRight, BookOpen, Code2, Terminal, Blocks } from "lucide-react";

const resources = [
  {
    icon: Terminal,
    title: "API Reference",
    desc: "Documentation complète de l'API REST avec exemples interactifs",
    link: "Explorer l'API",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    desc: "Guides de démarrage rapide, tutoriels et bonnes pratiques",
    link: "Lire la doc",
  },
  {
    icon: Code2,
    title: "Playground",
    desc: "Testez nos modèles directement dans votre navigateur",
    link: "Essayer maintenant",
  },
  {
    icon: Blocks,
    title: "SDK & Bibliothèques",
    desc: "Intégrations disponibles en Python, Node.js, Go et Java",
    link: "Voir les SDK",
  },
];

export default function Developers() {
  return (
    <section className="py-24 bg-surface" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
            Développeurs
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-5">
            Ressources pour les développeurs
          </h2>
          <p className="text-text-secondary text-lg">
            Tout ce dont vous avez besoin pour intégrer l&apos;IA LiteOps dans
            vos applications, en quelques lignes de code.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res) => (
            <a
              key={res.title}
              href="#"
              className="group bg-white rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <res.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                {res.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {res.desc}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                {res.link}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
