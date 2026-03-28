"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

type AgentSlug = "pilot" | "sailor" | "matchmaker" | "custom";

type Operator = {
  id: string;
  code: string;
  name: string;
  category: string;
  role: string;
  description: string;
  inputs: string[];
  outputs: string[];
  usedIn: AgentSlug[];
};

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const AGENTS: Record<AgentSlug, { label: string; href: string }> = {
  pilot: { label: "Pilot", href: "/agents/pilot" },
  sailor: { label: "Sailor", href: "/agents/sailor" },
  matchmaker: { label: "Matchmaker", href: "/agents/matchmaker" },
  custom: { label: "Custom", href: "/custom" },
};

const OPERATORS: Operator[] = [
  {
    id: "OP-001",
    code: "DATA_LAYER",
    name: "Data Layer",
    category: "Source",
    role: "Connecteur et normalisateur de sources de données",
    description:
      "Connecte et normalise des sources hétérogènes — bases de données relationnelles, APIs REST/GraphQL, fichiers CSV ou JSON — en un flux uniforme consommable par les agents aval.",
    inputs: ["Bases de données (SQL, NoSQL)", "APIs REST / GraphQL", "Fichiers CSV, JSON, XML"],
    outputs: ["Données normalisées", "Schéma unifié", "Flux structuré"],
    usedIn: ["pilot", "sailor"],
  },
  {
    id: "OP-002",
    code: "LLM",
    name: "LLM",
    category: "Inférence",
    role: "Modèles de langage, locaux ou cloud souverain",
    description:
      "Orchestration de modèles de langage : mini-modèles locaux (Mistral 3B, Qwen 3.5) pour la souveraineté maximale, ou cloud souverain Scaleway pour la puissance à la demande. Zéro donnée hors du périmètre.",
    inputs: ["Texte libre", "Contexte structuré", "Instructions système"],
    outputs: ["Génération de texte", "Analyse sémantique", "Classification"],
    usedIn: ["pilot", "sailor"],
  },
  {
    id: "OP-003",
    code: "RAG",
    name: "RAG",
    category: "Retrieval",
    role: "Retrieval-Augmented Generation sur corpus documentaires",
    description:
      "Recherche sémantique vectorielle dans des corpus documentaires internes. Combine la précision de la recherche avec la fluidité de la génération — les réponses sont toujours sourcées et vérifiables.",
    inputs: ["Question en langage naturel", "Corpus documentaire", "Index vectoriel"],
    outputs: ["Réponse sourcée", "Passages pertinents", "Score de confiance"],
    usedIn: ["sailor"],
  },
  {
    id: "OP-004",
    code: "OCR",
    name: "OCR",
    category: "Extraction",
    role: "Reconnaissance optique de caractères haute fidélité",
    description:
      "Extraction de texte depuis images, scans et PDF — y compris documents dégradés ou manuscrits. Produit un texte structuré avec coordonnées spatiales, prêt pour les opérateurs aval.",
    inputs: ["Images (PNG, JPG, TIFF)", "Scans de documents", "PDF non natifs"],
    outputs: ["Texte structuré", "Coordonnées spatiales", "Blocs sémantiques"],
    usedIn: ["sailor", "custom"],
  },
  {
    id: "OP-005",
    code: "DOC_UNDERSTANDING",
    name: "Doc Understanding",
    category: "Compréhension",
    role: "Compréhension structurée de documents complexes",
    description:
      "Analyse et structure des documents complexes à mise en page non linéaire : contrats, rapports financiers, formulaires administratifs. Extrait entités, tableaux et relations implicites.",
    inputs: ["Documents complexes (contrats, rapports)", "Formulaires structurés", "Données mixtes texte/tableaux"],
    outputs: ["Données structurées", "Entités nommées", "Tableaux extraits"],
    usedIn: ["sailor", "custom"],
  },
  {
    id: "OP-006",
    code: "TEXT_TO_SQL",
    name: "Text to SQL",
    category: "Requêtage",
    role: "Traduction de questions en langage naturel vers SQL",
    description:
      "Transforme une question métier exprimée en français en requête SQL valide, exécutée immédiatement sur le schéma cible. Inclut validation syntaxique et retour des résultats interprété.",
    inputs: ["Question en langage naturel", "Schéma de base de données", "Exemples de requêtes"],
    outputs: ["Requête SQL générée", "Résultats exécutés", "Explication de la requête"],
    usedIn: ["pilot"],
  },
  {
    id: "OP-007",
    code: "GRAPH_GENERATOR",
    name: "Graph Generator",
    category: "Visualisation",
    role: "Génération de visualisations et rapports visuels",
    description:
      "Produit des graphiques, tableaux de bord et rapports visuels à partir de données brutes ou de résultats d'analyse. Supporte barres, courbes, camemberts, heatmaps et cartes.",
    inputs: ["Données tabulaires", "Résultats d'analyse", "Contexte métier"],
    outputs: ["Graphiques SVG / PNG", "Rapports visuels", "Tableaux de bord interactifs"],
    usedIn: ["pilot"],
  },
  {
    id: "OP-008",
    code: "EMBEDDING",
    name: "Embedding",
    category: "Vectorisation",
    role: "Vectorisation sémantique multilingue des données et requêtes",
    description:
      "Transforme des textes, documents et ressources en vecteurs denses dans un espace sémantique partagé. Embeddings multilingues (FR/EN) de 1536 dimensions. Utilisé pour la recherche sémantique, le matching et le RAG.",
    inputs: ["Textes, documents, descriptions", "Questions en langage naturel", "Métadonnées structurées"],
    outputs: ["Vecteurs denses (1536 dims)", "Matrice de similarité", "Index vectoriel persistant"],
    usedIn: ["sailor", "matchmaker"],
  },
  {
    id: "OP-009",
    code: "CHUNKER",
    name: "Chunker",
    category: "Préparation",
    role: "Découpage sémantique de documents pour indexation optimale",
    description:
      "Découpe les documents en segments cohérents selon la sémantique du texte — sections, paragraphes, unités de sens. Évite les coupures arbitraires qui dégradent la qualité du retrieval.",
    inputs: ["Documents textuels bruts", "Texte normalisé", "Paramètres de fenêtre"],
    outputs: ["Chunks sémantiques", "Métadonnées de positionnement", "Chevauchements calibrés"],
    usedIn: ["sailor"],
  },
  {
    id: "OP-010",
    code: "RERANKER",
    name: "Reranker",
    category: "Retrieval",
    role: "Réordonnancement des résultats par pertinence contextuelle profonde",
    description:
      "Affine le classement des passages récupérés par un modèle de retrieval initial. Utilise un cross-encoder pour évaluer la pertinence entre la question et chaque passage — bien plus précis qu'un score de similarité vectorielle.",
    inputs: ["Candidats top-k récupérés", "Question originale", "Contexte de conversation"],
    outputs: ["Candidats réordonnés", "Scores de pertinence affinés", "Top-n final pour génération"],
    usedIn: ["sailor", "matchmaker"],
  },
  {
    id: "OP-011",
    code: "VECTOR_STORE",
    name: "Vector Store",
    category: "Stockage",
    role: "Base de données vectorielle persistante et requêtable",
    description:
      "Stocke et indexe les embeddings pour une recherche en temps réel. Supporte la mise à jour incrémentale, le filtrage par metadata, et les requêtes hybrides denses + sparse. Scalable sans ré-indexation complète.",
    inputs: ["Vecteurs produits par Embedding", "Métadonnées associées", "Identifiants documents"],
    outputs: ["Index vectoriel persistant", "Résultats de recherche top-k", "Filtres par metadata"],
    usedIn: ["sailor", "matchmaker"],
  },
  {
    id: "OP-012",
    code: "MATCH_ENGINE",
    name: "Match Engine",
    category: "Matching",
    role: "Moteur de correspondance multi-critères entre demandes et ressources",
    description:
      "Calcule la correspondance entre une demande structurée et un catalogue de ressources vectorisées. Gère les combinaisons complémentaires, filtre par contraintes (budget, disponibilité, localisation), et retourne les meilleures combinaisons candidates avec scores détaillés.",
    inputs: ["Critères structurés (must-have / nice-to-have)", "Catalogue vectorisé", "Contraintes (budget, délai, localisation)"],
    outputs: ["Top ressources candidates", "Combinaisons optimales", "Scores par critère"],
    usedIn: ["matchmaker"],
  },
  {
    id: "OP-013",
    code: "CONV_AGENT",
    name: "Conv Agent",
    category: "Conversation",
    role: "Agent conversationnel de raffinement itératif",
    description:
      "Boucle de dialogue permettant à l'utilisateur de préciser ses critères, commenter les propositions et affiner la sélection. Met à jour dynamiquement le classement selon les retours utilisateur en langage naturel.",
    inputs: ["Résultats classés", "Retour utilisateur (texte libre)", "Historique de conversation"],
    outputs: ["Proposition affinée", "Classement mis à jour", "Rapport de sélection final"],
    usedIn: ["matchmaker"],
  },
  {
    id: "OP-014",
    code: "SCORER",
    name: "Scorer",
    category: "Évaluation",
    role: "Scoring pondéré multi-dimensions et génération de radar chart",
    description:
      "Quantifie les raisons des choix de matching. Génère un score global (0-100) et des scores par dimension (compétences, disponibilité, budget, références, localisation). Produit un diagramme radar visuel pour chaque candidat, permettant une explication transparente.",
    inputs: ["Ressources candidates avec scores bruts", "Pondération des critères", "Dimensions de scoring configurées"],
    outputs: ["Score pondéré 0-100 par ressource", "Diagramme radar par dimension", "Classement final expliqué"],
    usedIn: ["matchmaker"],
  },
];

// ─────────────────────────────────────────────
// SVG Diagram — Teenage Engineering block style
// ─────────────────────────────────────────────

function OperatorDiagram({ operator, isSelected = false }: { operator: Operator; isSelected?: boolean }) {
  const inputCount = Math.min(operator.inputs.length, 3);
  const outputCount = Math.min(operator.outputs.length, 3);
  const diagramHeight = Math.max(inputCount, outputCount) * 32 + 48;

  // vertical positions for input/output pins
  const pinPositions = (count: number, totalH: number) => {
    const spacing = totalH / (count + 1);
    return Array.from({ length: count }, (_, i) => spacing * (i + 1));
  };

  const inputYs = pinPositions(inputCount, diagramHeight);
  const outputYs = pinPositions(outputCount, diagramHeight);

  const blockAccentStroke = isSelected
    ? "var(--color-signal-green)"
    : "var(--color-chrome-dark)";

  return (
    <svg
      viewBox={`0 0 320 ${diagramHeight + 24}`}
      width="100%"
      height={diagramHeight + 24}
      aria-label={`Diagramme de l'opérateur ${operator.name}`}
      className="overflow-visible"
    >
      {/* Input arrows */}
      {inputYs.map((y, i) => (
        <g key={`in-${i}`}>
          <line
            x1={8}
            y1={y + 12}
            x2={88}
            y2={y + 12}
            stroke="var(--color-chrome-dark)"
            strokeWidth="1"
          />
          <polygon
            points={`84,${y + 8} 92,${y + 12} 84,${y + 16}`}
            fill="var(--color-chrome-dark)"
          />
          <text
            x={4}
            y={y + 8}
            fontSize="7"
            fill="var(--color-steel)"
            fontFamily="var(--font-mono)"
            textAnchor="start"
          >
            IN {i + 1}
          </text>
        </g>
      ))}

      {/* Central block */}
      <rect
        x={92}
        y={8}
        width={136}
        height={diagramHeight}
        fill="var(--color-warm-paper)"
        stroke={blockAccentStroke}
        strokeWidth="1"
      />

      {/* Block label */}
      <text
        x={160}
        y={diagramHeight / 2 + 12}
        fontSize="9"
        fill="var(--color-chrome-dark)"
        fontFamily="var(--font-mono)"
        fontWeight="500"
        textAnchor="middle"
        letterSpacing="0.08em"
      >
        {operator.code}
      </text>
      <text
        x={160}
        y={diagramHeight / 2 - 4}
        fontSize="7"
        fill="var(--color-steel)"
        fontFamily="var(--font-mono)"
        textAnchor="middle"
        letterSpacing="0.05em"
      >
        {operator.id}
      </text>

      {/* Corner ticks — TE style */}
      {[
        [93, 9],
        [226, 9],
        [93, diagramHeight + 6],
        [226, diagramHeight + 6],
      ].map(([cx, cy], i) => (
        <rect key={i} x={cx} y={cy} width={3} height={3} fill="var(--color-chrome)" />
      ))}

      {/* Output arrows */}
      {outputYs.map((y, i) => (
        <g key={`out-${i}`}>
          <line
            x1={228}
            y1={y + 12}
            x2={308}
            y2={y + 12}
            stroke="var(--color-chrome-dark)"
            strokeWidth="1"
          />
          <polygon
            points={`304,${y + 8} 312,${y + 12} 304,${y + 16}`}
            fill="var(--color-chrome-dark)"
          />
          <text
            x={316}
            y={y + 8}
            fontSize="7"
            fill="var(--color-steel)"
            fontFamily="var(--font-mono)"
            textAnchor="end"
          >
            OUT {i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ─────────────────────────────────────────────
// Sidebar item
// ─────────────────────────────────────────────

function SidebarItem({
  operator,
  isSelected,
  onClick,
}: {
  operator: Operator;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      className={[
        "w-full text-left px-4 py-4 border-b border-rule/70 transition-all duration-150 group",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-green",
        isSelected
          ? "bg-system-green text-architect-paper"
          : "bg-transparent text-ink hover:bg-fog",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className={[
            "font-mono text-[11px] tracking-widest",
            isSelected ? "text-signal-green" : "text-chrome-dark",
          ].join(" ")}
        >
          {operator.id}
        </span>
        <span
          className={[
            "text-[11px] font-mono tracking-wider uppercase px-1.5 py-0.5 border",
            isSelected
              ? "border-signal-green/40 text-signal-green"
              : "border-rule text-chrome-dark",
          ].join(" ")}
        >
          {operator.category}
        </span>
      </div>
      <div
        className={[
          "mt-0.5 text-sm font-medium leading-snug",
          isSelected ? "text-architect-paper" : "text-ink",
        ].join(" ")}
      >
        {operator.name}
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────
// Detail panel
// ─────────────────────────────────────────────

function DetailPanel({ operator }: { operator: Operator }) {
  return (
    <motion.div
      key={operator.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      {/* Panel header */}
      <div className="px-8 lg:px-10 pt-8 lg:pt-10 pb-6 border-b border-chrome-light">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-steel tracking-widest">
              {operator.id}
            </span>
            <h2 className="mt-1 text-2xl font-semibold text-ink tracking-tight">
              {operator.name}
            </h2>
            <p className="mt-1 text-sm text-sage font-mono">{operator.role}</p>
          </div>
          <span className="shrink-0 font-mono text-[11px] tracking-widest uppercase border border-chrome text-steel px-2 py-1 mt-1">
            {operator.category}
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink/70 max-w-prose">
          {operator.description}
        </p>
      </div>

      {/* I/O grid */}
      <div className="px-8 lg:px-10 py-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-b border-chrome-light">
        {/* Inputs */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="block w-3 h-px bg-chrome-light" />
            <span className="font-mono text-[11px] tracking-widest text-steel uppercase">
              Inputs
            </span>
          </div>
          <ul className="space-y-2">
            {operator.inputs.map((input, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 block w-1.5 h-1.5 shrink-0 border border-chrome" />
                <span className="text-sm text-ink">{input}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outputs */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="block w-3 h-px bg-chrome-light" />
            <span className="font-mono text-[11px] tracking-widest text-steel uppercase">
              Outputs
            </span>
          </div>
          <ul className="space-y-2">
            {operator.outputs.map((output, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 block w-1.5 h-1.5 shrink-0 bg-chrome/40 border border-chrome" />
                <span className="text-sm text-ink">{output}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Used in */}
      <div className="px-8 lg:px-10 py-6 border-b border-chrome-light">
        <div className="flex items-center gap-2 mb-3">
          <span className="block w-3 h-px bg-chrome-light" />
          <span className="font-mono text-[11px] tracking-widest text-steel uppercase">
            Utilisé dans
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {operator.usedIn.map((slug) => {
            const agent = AGENTS[slug];
            return (
              <Link
                key={slug}
                href={agent.href}
                className={[
                  "font-mono text-xs tracking-wider px-3 py-1.5",
                  "border border-chrome text-steel",
                  "transition-all duration-150",
                  "hover:border-chrome-dark hover:text-ink",
                  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-green",
                ].join(" ")}
              >
                {agent.label} →
              </Link>
            );
          })}
        </div>
      </div>

      {/* SVG diagram */}
      <div className="px-8 lg:px-10 py-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="block w-3 h-px bg-chrome-light" />
          <span className="font-mono text-[11px] tracking-widest text-steel uppercase">
            Schéma fonctionnel
          </span>
        </div>
        <div className="border border-chrome-light bg-fog/50 p-4 blueprint-grid">
          <OperatorDiagram operator={operator} />
        </div>
        <p className="mt-2 font-mono text-[11px] text-chrome tracking-wider">
          // flux de données — représentation schématique
        </p>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Mobile operator selector (horizontal scroll)
// ─────────────────────────────────────────────

function MobileSelector({
  operators,
  selectedId,
  onSelect,
}: {
  operators: Operator[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div
      className="flex gap-3 overflow-x-auto py-2 px-4 md:hidden scrollbar-hide"
      role="tablist"
      aria-label="Sélecteur d'opérateurs"
      style={{ scrollbarWidth: "none" }}
    >
      {operators.map((op) => {
        const isSelected = op.id === selectedId;
        return (
          <button
            key={op.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelect(op.id)}
            className={[
              "shrink-0 font-mono text-[11px] tracking-widest uppercase",
              "px-4 py-2 border transition-all duration-150 whitespace-nowrap",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-green",
              isSelected
                ? "bg-system-green text-signal-green border-system-green"
                : "bg-transparent text-steel border-chrome hover:border-chrome-dark hover:text-ink",
            ].join(" ")}
          >
            {op.id}
          </button>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function OperateursPage() {
  const [selectedId, setSelectedId] = useState<string>(OPERATORS[0].id);

  const selectedOperator = OPERATORS.find((op) => op.id === selectedId) ?? OPERATORS[0];

  return (
    <div className="min-h-screen bg-architect-paper pt-16">
      {/* Blueprint grid background */}
      <div className="fixed inset-0 pt-16 blueprint-grid pointer-events-none" aria-hidden="true" />

      {/* Page wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20">
        {/* ── Header ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pt-28 lg:pt-32 pb-12 border-b border-rule"
        >
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-2 mb-6 font-mono text-[11px] tracking-widest text-sage uppercase"
          >
            <Link
              href="/"
              className="hover:text-ink transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-green"
            >
              Accueil
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink">Opérateurs</span>
          </nav>

          {/* Title block */}
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-[11px] tracking-widest text-steel">
                  REF-SYS/OPS
                </span>
                <span className="block w-8 h-px bg-rule" />
                <span className="font-mono text-[11px] tracking-widest text-chrome">
                  v1.0
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
                Les Opérateurs
              </h1>
              <p className="mt-2 text-sm text-sage font-mono tracking-wide">
                Composants fondamentaux — les briques de base de nos systèmes intelligents
              </p>
            </div>
            {/* Count badge */}
            <div className="hidden sm:flex flex-col items-end shrink-0">
              <span className="font-mono text-4xl font-light text-chrome-dark leading-none">
                {String(OPERATORS.length).padStart(2, "0")}
              </span>
              <span className="font-mono text-[11px] tracking-widest text-chrome uppercase mt-1">
                opérateurs
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Mobile selector ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="py-4"
        >
          <MobileSelector
            operators={OPERATORS}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </motion.div>

        {/* ── Two-column layout ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-8 lg:gap-12 border border-rule mb-16"
          style={{ minHeight: "600px" }}
        >
          {/* ── Sidebar ─────────────────────────── */}
          <aside
            className="hidden md:flex flex-col w-60 lg:w-72 shrink-0 border-r border-rule bg-warm-paper/60"
            aria-label="Liste des opérateurs"
          >
            {/* Sidebar header */}
            <div className="px-4 py-3 border-b border-rule bg-warm-paper">
              <span className="font-mono text-[11px] tracking-widest text-chrome uppercase">
                Index — {OPERATORS.length} composants
              </span>
            </div>

            {/* Operator list */}
            <nav className="flex-1 overflow-y-auto" aria-label="Navigation des opérateurs">
              {OPERATORS.map((op) => (
                <SidebarItem
                  key={op.id}
                  operator={op}
                  isSelected={op.id === selectedId}
                  onClick={() => setSelectedId(op.id)}
                />
              ))}
            </nav>

            {/* Sidebar footer */}
            <div className="px-4 py-3 border-t border-rule">
              <p className="font-mono text-[11px] tracking-wider text-chrome leading-relaxed">
                // Chaque opérateur est atomique.
                <br />
                // Combinaison par les agents.
              </p>
            </div>
          </aside>

          {/* ── Detail panel ─────────────────────── */}
          <div className="flex-1 overflow-y-auto bg-architect-paper">
            <AnimatePresence mode="wait">
              <DetailPanel key={selectedId} operator={selectedOperator} />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
