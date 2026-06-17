import { useState } from 'react'
import ApplicationForm from './ApplicationForm'

const spontaneousJob = { title: 'Candidatura Espontânea' }

export default function Hero() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="bg-[#001970] text-white">
      {showForm && <ApplicationForm job={spontaneousJob} onClose={() => setShowForm(false)} />}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 min-h-[480px]">

        <div className="flex flex-col justify-center px-6 sm:px-12 py-16 sm:py-20">
          <p className="text-[#DFE2F5] font-semibold text-sm uppercase tracking-widest mb-5">
            Recrutamento & Seleção
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Faz parte da<br />nossa equipa
          </h1>
          <p className="text-gray-300 text-base leading-relaxed mb-10 max-w-md">
            A Autocrescente procura atrair e manter os melhores talentos. No contexto de
            internacionalização, as oportunidades surgem em diferentes zonas geográficas.
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

        <div className="hidden md:flex items-center justify-end pr-8 py-8">
          <img
            src="logo-branco.png"
            alt="Autocrescente"
            className="w-1/2 object-contain"
          />
        </div>

      </div>
    </section>
  )
}
