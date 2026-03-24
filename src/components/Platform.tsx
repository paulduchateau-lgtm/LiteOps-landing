import { ArrowRight, BarChart3, Bot, Workflow } from "lucide-react";

export default function Platform() {
  return (
    <section className="py-24 bg-surface" id="platform">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              Plateforme North
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
              La plateforme IA clé en main qui facilite votre{" "}
              <span className="text-primary">flux de travail</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              North est votre interface unifiée pour créer, déployer et gérer des
              agents IA en entreprise. De la prévision des tendances à
              l&apos;automatisation des processus, North transforme vos données
              en actions.
            </p>

            <div className="space-y-5 mb-10">
              {[
                {
                  icon: Bot,
                  title: "Agents IA autonomes",
                  desc: "Créez des agents spécialisés qui comprennent votre contexte métier",
                },
                {
                  icon: Workflow,
                  title: "Workflows automatisés",
                  desc: "Orchestrez des processus complexes avec des pipelines IA intelligents",
                },
                {
                  icon: BarChart3,
                  title: "Analyse prédictive",
                  desc: "Anticipez les tendances grâce à des modèles entraînés sur vos données",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">
                      {item.title}
                    </h4>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Découvrir North
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Screenshot mock */}
          <div className="relative">
            <div className="bg-surface-dark rounded-2xl border border-border shadow-2xl overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-gray-500">
                    North — Agent de prévision des tendances
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Chat */}
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div className="bg-white/5 rounded-xl rounded-tl-sm px-4 py-3 max-w-sm">
                      <p className="text-sm text-gray-300">
                        J&apos;ai analysé les données de vente du T4. Voici les
                        tendances identifiées pour le prochain trimestre.
                      </p>
                    </div>
                  </div>

                  {/* Chart mock */}
                  <div className="ml-10 bg-white/5 rounded-xl p-4">
                    <div className="flex items-end gap-2 h-32">
                      {[40, 55, 45, 65, 50, 72, 60, 78, 68, 85, 75, 92].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent/80 transition-all"
                            style={{ height: `${h}%` }}
                          />
                        )
                      )}
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-[10px] text-gray-500">Jan</span>
                      <span className="text-[10px] text-gray-500">Juin</span>
                      <span className="text-[10px] text-gray-500">Déc</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div className="bg-white/5 rounded-xl rounded-tl-sm px-4 py-3 max-w-sm">
                      <p className="text-sm text-gray-300">
                        Croissance prévue de{" "}
                        <span className="text-accent font-semibold">+23%</span>{" "}
                        sur le segment B2B. Je recommande d&apos;augmenter le
                        budget marketing de 15%.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3 border border-white/5">
                  <input
                    type="text"
                    placeholder="Poser une question à l'agent..."
                    className="flex-1 bg-transparent text-sm text-gray-300 placeholder:text-gray-600 outline-none"
                    disabled
                  />
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-3 border border-border">
              <div className="text-xs text-text-secondary">Précision</div>
              <div className="text-lg font-bold text-primary">97.2%</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 border border-border">
              <div className="text-xs text-text-secondary">Temps de réponse</div>
              <div className="text-lg font-bold text-primary">&lt;200ms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
