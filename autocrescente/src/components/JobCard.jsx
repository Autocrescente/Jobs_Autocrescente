import { MapPin, Briefcase, ArrowRight } from 'lucide-react'

export default function JobCard({ job, onClick }) {
  return (
    <article
      onClick={onClick}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group sm:h-72 cursor-pointer"
    >

      {/* Image */}
      <div className="h-40 sm:h-auto sm:w-64 flex-shrink-0 overflow-hidden relative bg-gray-100 flex items-center justify-center">
        {job.image ? (
          <img
            src={job.image}
            alt={job.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M21 3.75H3A.75.75 0 002.25 4.5v15a.75.75 0 00.75.75h18a.75.75 0 00.75-.75v-15A.75.75 0 0021 3.75z" />
          </svg>
        )}
        <div className="hidden sm:block absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-white" />
      </div>

      {/* Content */}
      <div className="flex-1 px-5 sm:px-8 py-5 sm:py-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold bg-orange-50 text-[#F07020] border border-orange-100 px-3 py-1 rounded-full">
              {job.area}
            </span>
            <span className="text-xs font-medium bg-blue-50 text-[#1A3A8C] border border-blue-100 px-3 py-1 rounded-full flex items-center gap-1">
              <MapPin size={11} />
              {job.location}
            </span>
          </div>

          <h3 className="font-bold text-[#1A3A8C] text-xl mb-2 group-hover:text-[#F07020] transition-colors">
            {job.title}
          </h3>

          <div className="flex items-center gap-1 text-sm text-gray-400 mb-3">
            <Briefcase size={13} />
            <span>{job.company}</span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
            {job.description}
          </p>
        </div>
      </div>

      {/* Arrow */}
      <div className="hidden sm:flex items-center pr-8">
        <div className="w-10 h-10 rounded-full border-2 border-gray-200 group-hover:border-[#1A3A8C] group-hover:bg-[#1A3A8C] flex items-center justify-center transition-all duration-300">
          <ArrowRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
        </div>
      </div>
    </article>
  )
}
