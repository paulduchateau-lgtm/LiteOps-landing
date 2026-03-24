import {
  Building2,
  Landmark,
  Zap,
  Monitor,
  Heart,
  Factory,
  Radio,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Services financiers",
    desc: "Détection de fraude, analyse de risques et conformité automatisée",
  },
  {
    icon: Landmark,
    name: "Secteur public",
    desc: "Modernisation des services publics et traitement intelligent des documents",
  },
  {
    icon: Zap,
    name: "Énergie",
    desc: "Optimisation de la production et maintenance prédictive des infrastructures",
  },
  {
    icon: Monitor,
    name: "Technologie",
    desc: "Accélération du développement et automatisation du support client",
  },
  {
    icon: Heart,
    name: "Soins de santé",
    desc: "Aide au diagnostic, analyse de dossiers médicaux et recherche clinique",
  },
  {
    icon: Factory,
    name: "Fabrication",
    desc: "Contrôle qualité intelligent et optimisation de la chaîne logistique",
  },
  {
    icon: Radio,
    name: "Télécommunications",
    desc: "Gestion réseau prédictive et expérience client personnalisée",
  },
];

export default function Industries() {
  return (
    <section className="py-24 bg-surface-muted" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
            Solutions sectorielles
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-5">
            L&apos;IA adaptée à votre secteur
          </h2>
          <p className="text-text-secondary text-lg">
            Des solutions pré-configurées pour les défis spécifiques de chaque
            industrie, déployables en quelques semaines.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {industries.map((industry) => (
            <a
              key={industry.name}
              href="#"
              className="group bg-white rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                {industry.name}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {industry.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
