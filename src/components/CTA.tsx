"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 bg-surface" id="demo">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-5">
          Prêt à mettre l&apos;IA{" "}
          <span className="text-primary">au travail</span>&nbsp;?
        </h2>
        <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
          Rejoignez les centaines d&apos;entreprises qui transforment leurs
          opérations avec LiteOps. Demandez une démo personnalisée ou commencez
          gratuitement.
        </p>

        {/* Email form */}
        <div className="max-w-md mx-auto mb-6">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email-professionnel.com"
              className="flex-1 px-5 py-3.5 rounded-full border border-border bg-white text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
            <button className="group flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full font-semibold hover:bg-primary-dark transition-colors whitespace-nowrap">
              Démo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
        <p className="text-xs text-text-secondary max-w-sm mx-auto">
          En soumettant ce formulaire, vous acceptez de recevoir des
          communications de LiteOps. Consultez notre{" "}
          <a href="#" className="underline hover:text-primary">
            politique de confidentialité
          </a>{" "}
          pour plus de détails. Désinscription possible à tout moment.
        </p>
      </div>
    </section>
  );
}
