import { companies } from '../companies'

export default function CompanyGrid({ onSelectCompany }) {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B1F6B] mb-2 text-center">As nossas empresas</h2>
        <p className="text-gray-500 text-center mb-12">
          Conheça as empresas que fazem parte do Grupo Auto Crescente
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              onClick={() => onSelectCompany(company)}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0B1F6B] mb-2">{company.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{company.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
