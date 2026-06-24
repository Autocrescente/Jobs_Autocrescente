import { useState } from "react";
import ApplicationForm from "./ApplicationForm";
import bannerBg from "../headers/Banner_recrutamento.png";

const spontaneousJob = { title: "Candidatura Espontânea" };

export default function Hero() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section
      className="relative text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      {showForm && (
        <ApplicationForm
          job={spontaneousJob}
          onClose={() => setShowForm(false)}
        />
      )}

      {/* gradient fade: dark on the left, transparent on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001970cc] via-[#00197066] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 min-h-[480px]">
        <div className="flex flex-col justify-center px-6 sm:px-12 py-16 sm:py-20">
          <p
            className="text-[#DFE2F5] font-semibold text-sm uppercase tracking-widest mb-5"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            Recrutamento & Seleção
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
          >
            Faz parte da
            <br />
            nossa equipa
          </h1>
          <p
            className="text-gray-200 text-base leading-relaxed mb-10 max-w-md"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            A Autocrescente procura atrair e manter os melhores talentos. No
            contexto de internacionalização, as oportunidades surgem em
            diferentes zonas geográficas.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center justify-center gap-3 bg-[#F07020] hover:bg-[#D05F10] text-white font-semibold px-7 py-4 rounded-lg transition-colors"
            >
              Candidatura Espontânea
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
