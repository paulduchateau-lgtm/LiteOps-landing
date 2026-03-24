"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Produits",
    children: [
      { label: "North", desc: "Plateforme IA clé en main" },
      { label: "Compass", desc: "Navigation intelligente des données" },
      { label: "Command", desc: "Modèles génératifs haute performance" },
      { label: "Embed", desc: "Représentation sémantique de texte" },
      { label: "Rerank", desc: "Affinage des résultats de recherche" },
    ],
  },
  {
    label: "Solutions",
    children: [
      { label: "Services financiers", desc: "" },
      { label: "Secteur public", desc: "" },
      { label: "Énergie", desc: "" },
      { label: "Technologie", desc: "" },
      { label: "Soins de santé", desc: "" },
      { label: "Fabrication", desc: "" },
    ],
  },
  { label: "Recherche", children: [] },
  {
    label: "Ressources",
    children: [
      { label: "Blog", desc: "" },
      { label: "Documentation", desc: "" },
      { label: "LLM University", desc: "" },
      { label: "Événements", desc: "" },
    ],
  },
  { label: "Entreprise", children: [] },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              LiteOps
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  {item.label}
                  {item.children.length > 0 && (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </button>
                {activeDropdown === item.label &&
                  item.children.length > 0 && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-surface-dark border border-white/10 rounded-xl shadow-2xl p-2 backdrop-blur-xl">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href="#"
                          className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                        >
                          <div className="text-sm font-medium text-white">
                            {child.label}
                          </div>
                          {child.desc && (
                            <div className="text-xs text-gray-400 mt-0.5">
                              {child.desc}
                            </div>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-white transition-colors px-4 py-2"
            >
              Se connecter
            </a>
            <a
              href="#demo"
              className="text-sm font-medium bg-white text-surface-dark px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              Demander une démo
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface-dark border-t border-white/10 px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="block text-gray-300 hover:text-white text-base py-2"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <a href="#" className="block text-gray-300 hover:text-white py-2">
              Se connecter
            </a>
            <a
              href="#demo"
              className="block text-center bg-white text-surface-dark px-5 py-3 rounded-full font-medium"
            >
              Demander une démo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
