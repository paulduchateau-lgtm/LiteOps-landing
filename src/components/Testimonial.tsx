import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-24 bg-surface-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Quote className="w-12 h-12 text-accent/40 mx-auto mb-8" />
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-snug mb-10">
            &laquo;&nbsp;Avec les derniers LLM d&apos;entreprise hautement
            sécurisés de LiteOps, nous avons pu déployer une solution IA
            souveraine qui respecte nos exigences de conformité tout en offrant
            des performances exceptionnelles à nos équipes.&nbsp;&raquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">VM</span>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Vivek Mahajan</div>
              <div className="text-gray-400 text-sm">
                VP Technologies, Fujitsu
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
