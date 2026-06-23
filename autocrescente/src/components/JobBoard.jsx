import { useState, useEffect } from 'react'
import JobCard from './JobCard'

function mapJob(apiJob) {
  return {
    id: apiJob._id,
    title: apiJob.titulo,
    company: apiJob.empresa,
    area: apiJob.industria,
    location: apiJob.localizacao,
    image: apiJob.imagem?.nome ? `https://app.autocrescente.com/api/rh/vagas/${apiJob._id}/imagem` : null,
    posted: apiJob.createdAt,
    description: apiJob.descricao,
    corpo: apiJob.corpo,
  }
}

export default function JobBoard({ onSelectJob }) {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://app.autocrescente.com/api/rh/vagas?estado=ativa')
      .then(res => {
        if (!res.ok) throw new Error('Erro ao carregar vagas')
        return res.json()
      })
      .then(data => setJobs(data.map(mapJob)))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="vagas" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-[#1A3A8C] mb-2">Bolsa de emprego</h2>
          {!loading && !error && (
            <p className="text-gray-500">{jobs.length} vagas disponíveis</p>
          )}
        </div>

        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-[#1A3A8C] border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <p className="text-center text-gray-400 py-20">{error}</p>
        )}

        {!loading && !error && (
          <div className="flex flex-col gap-4">
            {jobs.map((job, i) => (
              <JobCard key={job.id} job={job} onClick={() => onSelectJob(job)} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}