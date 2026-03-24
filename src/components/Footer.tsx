import { MessageCircle } from "lucide-react";

const footerNav = [
  {
    title: "Produits",
    links: [
      "North",
      "Compass",
      "Command",
      "Embed",
      "Rerank",
      "Personnalisation",
      "Tarification",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Technologie",
      "Énergie",
      "Services financiers",
      "Soins de santé",
      "Fabrication",
      "Secteur public",
      "Télécommunications",
      "Déploiement",
      "Model Vault",
    ],
  },
  {
    title: "Ressources",
    links: [
      "Blog",
      "Développeurs",
      "Événements",
      "LLM University",
      "Documentation",
      "Notes de version",
    ],
  },
  {
    title: "Entreprise",
    links: [
      "À propos",
      "Carrières",
      "Recherche",
      "Presse",
      "Partenaires",
      "Sécurité",
      "Centre de confiance",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Nav grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {footerNav.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold text-sm mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg gradient-accent flex items-center justify-center">
              <span className="text-white font-bold text-xs">L</span>
            </div>
            <span className="text-white font-bold text-lg">LiteOps</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Conditions d&apos;utilisation
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contrat SaaS
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Discord"
            >
              <MessageCircle className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="X"
            >
              <svg
                className="w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-gray-500">
            &copy; 2024 LiteOps. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
