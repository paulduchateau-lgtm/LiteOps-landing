"use client";

const companies = [
  "Oracle",
  "Salesforce",
  "SAP",
  "McKinsey",
  "Accenture",
  "Deloitte",
  "Fujitsu",
  "Hyundai",
  "Deutsche Telekom",
  "Notion",
  "Jasper",
  "LivePerson",
  "Borderless AI",
  "Dentsu",
  "HubSpot",
];

export default function LogoCloud() {
  return (
    <section className="py-16 bg-surface-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400 mb-10 tracking-wide uppercase">
          Adopté par les leaders de l&apos;industrie et les développeurs du monde
          entier
        </p>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-dark to-transparent z-10" />

          <div className="flex logo-scroll">
            {[...companies, ...companies].map((company, i) => (
              <div
                key={`${company}-${i}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="h-10 px-6 flex items-center justify-center rounded-lg bg-white/5 border border-white/5">
                  <span className="text-gray-400 font-medium text-sm whitespace-nowrap">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
