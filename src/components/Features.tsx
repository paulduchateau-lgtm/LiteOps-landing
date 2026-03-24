import { Shield, Server, Sliders } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Sécurité",
    subtitle: "Protection multicouche",
    description:
      "Sécurité de niveau entreprise avec chiffrement de bout en bout, conformité SOC 2 Type II, RGPD et certifications ISO 27001. Vos données restent les vôtres.",
    highlights: [
      "Chiffrement AES-256",
      "Conformité RGPD",
      "SOC 2 Type II",
      "Audit continu",
    ],
  },
  {
    icon: Server,
    title: "Déploiement",
    subtitle: "Flexible et souverain",
    description:
      "Déployez dans votre VPC, sur site ou via notre Model Vault managé. Gardez le contrôle total sur votre infrastructure IA tout en bénéficiant de mises à jour continues.",
    highlights: [
      "Cloud privé (VPC)",
      "Déploiement sur site",
      "Model Vault managé",
      "Multi-cloud",
    ],
  },
  {
    icon: Sliders,
    title: "Personnalisation",
    subtitle: "Adapté à vos besoins",
    description:
      "Affinez les modèles sur vos données propriétaires pour obtenir des résultats sur mesure. Créez des agents IA spécialisés qui comprennent votre domaine d'activité.",
    highlights: [
      "Fine-tuning avancé",
      "RAG intégré",
      "Agents spécialisés",
      "Données propriétaires",
    ],
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-surface-dark" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
            Pourquoi LiteOps
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Sûr. Flexible.{" "}
            <span className="gradient-text">Conçu pour les entreprises.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Une plateforme IA qui répond aux exigences les plus strictes en
            matière de sécurité, de déploiement et de personnalisation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-accent font-medium mb-4">
                {feature.subtitle}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {feature.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/5"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
