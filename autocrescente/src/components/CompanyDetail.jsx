import { useState, useEffect } from 'react'
import { MapPin, Briefcase } from 'lucide-react'

function mapJob(apiJob) {
  return {
    id: apiJob._id,
    title: apiJob.titulo,
    company: apiJob.empresa,
    area: apiJob.industria,
    location: apiJob.localizacao,
    description: apiJob.descricao,
    corpo: apiJob.corpo,
    posted: apiJob.createdAt,
    image: apiJob.imagem?.nome
      ? `https://app.autocrescente.com/api/rh/vagas/${apiJob._id}/imagem`
      : null,
  }
}

export default function CompanyDetail({ company, onBack, onSelectJob }) {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://app.autocrescente.com/api/rh/vagas?estado=ativa')
      .then(res => res.ok ? res.json() : [])
      .then(data => {
        const key = company.companyKey.toLowerCase()
        const filtered = data
          .map(mapJob)
          .filter(j => j.company?.toLowerCase().includes(key))
        setJobs(filtered)
      })
      .catch(() => setJobs([]))
      .finally(() => setLoading(false))
  }, [company.companyKey])

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header image */}
      <div
        className="relative h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${company.image})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-end px-6 sm:px-12 pb-8 max-w-7xl mx-auto">
          <div>
            <button
              onClick={onBack}
              className="text-white/70 hover:text-white text-sm mb-4 flex items-center gap-1 transition-colors"
            >
              ← Voltar
            </button>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">{company.name}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-12">
        {/* Description */}
        <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
          {company.description}
        </p>

        {/* External links */}
        {company.urls?.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-8">
            {company.urls.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F07020] hover:bg-[#D05F10] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                {label} →
              </a>
            ))}
          </div>
        )}

        {/* Job vacancies */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-[#0B1F6B] mb-6">Vagas disponíveis</h2>

          {loading && (
            <div className="flex justify-center py-10">
              <div className="w-7 h-7 border-4 border-[#1A3A8C] border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!loading && jobs.length === 0 && (
            <p className="text-gray-400 text-sm py-6">
              Não existem vagas abertas nesta empresa de momento.
            </p>
          )}

          {!loading && jobs.length > 0 && (
            <div className="flex flex-col gap-3">
              {jobs.map(job => (
                <button
                  key={job.id}
                  onClick={() => onSelectJob(job)}
                  className="text-left border border-gray-200 rounded-xl px-5 py-4 hover:border-[#F07020] hover:shadow-md transition-all group"
                >
                  <p className="font-semibold text-[#0B1F6B] group-hover:text-[#F07020] transition-colors">
                    {job.title}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-1.5 text-sm text-gray-500">
                    {job.area && (
                      <span className="flex items-center gap-1">
                        <Briefcase size={13} /> {job.area}
                      </span>
                    )}
                    {job.location && (
                      <span className="flex items-center gap-1">
                        <MapPin size={13} /> {job.location}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
