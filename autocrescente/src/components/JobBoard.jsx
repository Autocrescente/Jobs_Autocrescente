import JobCard from './JobCard'
import { jobs } from '../data/jobs'

export default function JobBoard({ onSelectJob }) {
  return (
    <section id="vagas" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-[#1A3A8C] mb-2">Bolsa de emprego</h2>
          <p className="text-gray-500">{jobs.length} vagas disponíveis</p>
        </div>
        <div className="flex flex-col gap-4">
          {jobs.map(job => (
            <JobCard key={job.id} job={job} onClick={() => onSelectJob(job)} />
          ))}
        </div>
      </div>
    </section>
  )
}
