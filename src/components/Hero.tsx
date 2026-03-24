import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-light/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">
              Nouveau : Découvrez North, notre plateforme IA de nouvelle génération
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up animate-delay-100">
            Votre prochaine réussite{" "}
            <span className="gradient-text">majeure</span>, propulsée par
            l&apos;IA
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animate-delay-200">
            Combinez la puissance de l&apos;IA avec des solutions concrètes pour
            votre entreprise. Sécurisé, flexible et conçu pour les exigences du
            monde professionnel.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="#demo"
              className="group flex items-center gap-2 bg-white text-surface-dark px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-100 transition-all hover:shadow-lg hover:shadow-white/10"
            >
              Demander une démo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#products"
              className="group flex items-center gap-2 text-white px-8 py-4 rounded-full font-medium text-base border border-white/20 hover:bg-white/5 transition-all"
            >
              <Play className="w-4 h-4" />
              Explorer nos produits
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">
                500+
              </div>
              <div className="text-sm text-gray-400 mt-1">
                Entreprises clientes
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">
                23
              </div>
              <div className="text-sm text-gray-400 mt-1">
                Langues supportées
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white">
                99.9%
              </div>
              <div className="text-sm text-gray-400 mt-1">
                Disponibilité SLA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
