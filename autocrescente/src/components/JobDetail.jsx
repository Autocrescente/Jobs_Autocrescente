import { useState } from 'react'
import { ArrowLeft, MapPin, Briefcase } from 'lucide-react'
import ApplicationForm from './ApplicationForm'

export default function JobDetail({ job, onBack }) {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {showForm && <ApplicationForm job={job} onClose={() => setShowForm(false)} />}

      <div className="relative h-72 sm:h-[520px] overflow-hidden">
        <img src={job.image} alt={job.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="absolute top-6 sm:top-20 inset-x-0 px-6 z-10">
          <div className="max-w-6xl mx-auto">
            <button
              onClick={onBack}
              className="flex items-center gap-3 text-gray-300 hover:text-white text-sm font-medium transition-colors w-fit"
            >
              <span className="w-8 h-8 rounded-full border border-[#F07020] flex items-center justify-center text-[#F07020]">
                <ArrowLeft size={16} />
              </span>
              Voltar à página inicial
            </button>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center px-6">
          <div className="max-w-6xl w-full mx-auto">
            <span className="inline-block bg-[#F07020] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
              {job.area}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5 max-w-2xl">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-lg text-gray-300">
              <span className="flex items-center gap-2">
                <Briefcase size={18} className="text-[#F07020]" />
                {job.company}
              </span>
              <span className="w-px h-5 bg-gray-600 self-center" />
              <span className="flex items-center gap-2">
                <MapPin size={18} className="text-[#F07020]" />
                {job.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-10">
          <Section title="Responsabilidades" items={job.responsibilities} />
          <Section title="Requisitos" items={job.requirements} />
          <Section title="Oferecemos" items={job.benefits} />
        </div>

        <div>
          <div className="bg-[#1A3A8C] rounded-2xl p-8 text-white sticky top-6">
            <h3 className="font-bold text-2xl mb-2">{job.title}</h3>
            <p className="text-gray-300 text-base mb-8">{job.company} · {job.location}</p>
            <button
              onClick={() => setShowForm(true)}
              className="block w-full text-center bg-[#F07020] hover:bg-[#D05F10] text-white font-semibold py-4 text-base rounded-lg transition-colors"
            >
              Candidatar-me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({ title, items }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-[#1A3A8C] mb-5">{title}</h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-600 text-[15px] leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F07020] flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
