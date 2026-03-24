"use client";

import { useState } from "react";
import {
  MessageSquare,
  Search,
  ListOrdered,
  ChevronRight,
  Globe,
  Plug,
  Sparkles,
  Target,
  RefreshCw,
  ScanSearch,
} from "lucide-react";

const models = [
  {
    id: "command",
    name: "Command",
    tagline: "Une famille de modèles génératifs à haute performance",
    description:
      "Des modèles de langage puissants conçus pour les applications professionnelles. Génération de texte, résumé, analyse et bien plus encore, avec un support multilingue natif.",
    icon: MessageSquare,
    color: "from-primary to-primary-light",
    features: [
      {
        icon: Globe,
        label: "Support de 23 langues",
        desc: "Performances optimales dans les principales langues mondiales",
      },
      {
        icon: Plug,
        label: "Intégration transparente",
        desc: "API simple, SDK disponibles en Python, Node.js et Go",
      },
      {
        icon: Sparkles,
        label: "Fine-tuning avancé",
        desc: "Affinez les modèles sur vos données propriétaires",
      },
    ],
  },
  {
    id: "embed",
    name: "Embed",
    tagline: "Représentation sémantique de texte de pointe",
    description:
      "Transformez vos textes en vecteurs sémantiques de haute qualité. Idéal pour la recherche, la classification et la découverte de patterns cachés dans vos données.",
    icon: Search,
    color: "from-accent to-accent-light",
    features: [
      {
        icon: ScanSearch,
        label: "Recherche sémantique",
        desc: "Trouvez des résultats pertinents au-delà des mots-clés",
      },
      {
        icon: Target,
        label: "Conversion vectorielle",
        desc: "Transformez efficacement vos textes en représentations denses",
      },
      {
        icon: Sparkles,
        label: "Patterns cachés",
        desc: "Découvrez des relations non évidentes dans vos données",
      },
    ],
  },
  {
    id: "rerank",
    name: "Rerank",
    tagline: "Affinage intelligent des résultats de recherche",
    description:
      "Améliorez la pertinence de vos résultats de recherche grâce à un modèle de reclassement avancé. Compatible avec tout moteur de recherche existant.",
    icon: ListOrdered,
    color: "from-primary-dark to-primary",
    features: [
      {
        icon: Target,
        label: "Pertinence maximale",
        desc: "Reclassez les résultats par pertinence contextuelle",
      },
      {
        icon: RefreshCw,
        label: "Mise à jour dynamique",
        desc: "Résultats actualisés en temps réel selon le contexte",
      },
      {
        icon: Plug,
        label: "Intégration facile",
        desc: "Compatible avec Elasticsearch, Solr, et tout moteur de recherche",
      },
    ],
  },
];

export default function Models() {
  const [active, setActive] = useState("command");
  const current = models.find((m) => m.id === active)!;

  return (
    <section className="py-24 bg-surface-dark" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm tracking-wide uppercase mb-3">
            Nos modèles
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Des modèles conçus pour{" "}
            <span className="gradient-text">chaque besoin</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Trois familles de modèles complémentaires pour couvrir l&apos;ensemble
            de vos cas d&apos;usage en IA.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => setActive(model.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                active === model.id
                  ? "bg-white text-surface-dark shadow-lg"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              <model.icon className="w-4 h-4" />
              {model.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Info */}
          <div>
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${current.color} text-white text-xs font-medium mb-4`}
            >
              <current.icon className="w-3.5 h-3.5" />
              {current.name}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {current.tagline}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              {current.description}
            </p>

            <div className="space-y-4">
              {current.features.map((feat) => (
                <div
                  key={feat.label}
                  className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <feat.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {feat.label}
                    </h4>
                    <p className="text-sm text-gray-400">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="group inline-flex items-center gap-2 mt-8 text-accent font-semibold hover:gap-3 transition-all"
            >
              Voir la documentation
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right - Code example */}
          <div className="bg-[#0d1117] rounded-2xl border border-white/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-xs text-gray-500 ml-2">example.py</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <div>
                <span className="text-purple-400">import</span>{" "}
                <span className="text-blue-300">liteops</span>
              </div>
              <br />
              <div>
                <span className="text-gray-500"># Initialiser le client</span>
              </div>
              <div>
                <span className="text-blue-300">client</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-blue-300">liteops</span>
                <span className="text-white">.</span>
                <span className="text-yellow-300">Client</span>
                <span className="text-white">(</span>
                <span className="text-orange-300">api_key</span>
                <span className="text-white">=</span>
                <span className="text-green-400">
                  &quot;votre-clé-api&quot;
                </span>
                <span className="text-white">)</span>
              </div>
              <br />
              {active === "command" && (
                <>
                  <div>
                    <span className="text-gray-500">
                      # Générer une réponse
                    </span>
                  </div>
                  <div>
                    <span className="text-blue-300">response</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-blue-300">client</span>
                    <span className="text-white">.</span>
                    <span className="text-yellow-300">generate</span>
                    <span className="text-white">(</span>
                  </div>
                  <div>
                    <span className="text-white">{"    "}</span>
                    <span className="text-orange-300">model</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">
                      &quot;command-r-plus&quot;
                    </span>
                    <span className="text-white">,</span>
                  </div>
                  <div>
                    <span className="text-white">{"    "}</span>
                    <span className="text-orange-300">prompt</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">
                      &quot;Résumez ce rapport financier...&quot;
                    </span>
                    <span className="text-white">,</span>
                  </div>
                  <div>
                    <span className="text-white">{"    "}</span>
                    <span className="text-orange-300">temperature</span>
                    <span className="text-white">=</span>
                    <span className="text-purple-300">0.3</span>
                  </div>
                  <div>
                    <span className="text-white">)</span>
                  </div>
                </>
              )}
              {active === "embed" && (
                <>
                  <div>
                    <span className="text-gray-500">
                      # Générer des embeddings
                    </span>
                  </div>
                  <div>
                    <span className="text-blue-300">embeddings</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-blue-300">client</span>
                    <span className="text-white">.</span>
                    <span className="text-yellow-300">embed</span>
                    <span className="text-white">(</span>
                  </div>
                  <div>
                    <span className="text-white">{"    "}</span>
                    <span className="text-orange-300">model</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">
                      &quot;embed-v3&quot;
                    </span>
                    <span className="text-white">,</span>
                  </div>
                  <div>
                    <span className="text-white">{"    "}</span>
                    <span className="text-orange-300">texts</span>
                    <span className="text-white">=</span>
                    <span className="text-white">[</span>
                    <span className="text-green-400">
                      &quot;Votre texte ici&quot;
                    </span>
                    <span className="text-white">],</span>
                  </div>
                  <div>
                    <span className="text-white">{"    "}</span>
                    <span className="text-orange-300">input_type</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">
                      &quot;search_document&quot;
                    </span>
                  </div>
                  <div>
                    <span className="text-white">)</span>
                  </div>
                </>
              )}
              {active === "rerank" && (
                <>
                  <div>
                    <span className="text-gray-500">
                      # Reclasser des résultats
                    </span>
                  </div>
                  <div>
                    <span className="text-blue-300">results</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-blue-300">client</span>
                    <span className="text-white">.</span>
                    <span className="text-yellow-300">rerank</span>
                    <span className="text-white">(</span>
                  </div>
                  <div>
                    <span className="text-white">{"    "}</span>
                    <span className="text-orange-300">model</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">
                      &quot;rerank-v3&quot;
                    </span>
                    <span className="text-white">,</span>
                  </div>
                  <div>
                    <span className="text-white">{"    "}</span>
                    <span className="text-orange-300">query</span>
                    <span className="text-white">=</span>
                    <span className="text-green-400">
                      &quot;Votre requête de recherche&quot;
                    </span>
                    <span className="text-white">,</span>
                  </div>
                  <div>
                    <span className="text-white">{"    "}</span>
                    <span className="text-orange-300">documents</span>
                    <span className="text-white">=</span>
                    <span className="text-blue-300">search_results</span>
                  </div>
                  <div>
                    <span className="text-white">)</span>
                  </div>
                </>
              )}
              <br />
              <div>
                <span className="text-purple-400">print</span>
                <span className="text-white">(</span>
                <span className="text-blue-300">
                  {active === "command"
                    ? "response"
                    : active === "embed"
                    ? "embeddings"
                    : "results"}
                </span>
                <span className="text-white">)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
