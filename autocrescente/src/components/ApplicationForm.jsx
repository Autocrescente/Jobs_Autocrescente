import { useState, cloneElement } from 'react'
import { X, Upload } from 'lucide-react'

export default function ApplicationForm({ job, onClose }) {
  const [form, setForm] = useState({
    fullName: '', gender: '', email: '', phone: '', location: '', nationality: '',
    birthDate: '', education: '', experience: '', languages: '', itSkills: '', recruitmentSource: '',
  })
  const [cv, setCv] = useState(null)

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>

        <div className="bg-[#0B1F6B] rounded-t-2xl px-5 sm:px-8 py-6 flex items-center justify-between">
          <div>
            <p className="text-[#F07020] text-xs font-bold uppercase tracking-widest mb-1">Candidatura</p>
            <h2 className="text-white font-bold text-xl">{job.title}</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-5 sm:px-8 py-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Nome Completo" required>
              <input type="text" value={form.fullName} onChange={set('fullName')} required placeholder="João Silva" />
            </Field>
            <Field label="Género">
              <select value={form.gender} onChange={set('gender')}>
                <option value="">Selecionar</option>
                <option>Masculino</option>
                <option>Feminino</option>
              </select>
            </Field>
            <Field label="Email" required>
              <input type="email" value={form.email} onChange={set('email')} required placeholder="joao@email.com" />
            </Field>
            <Field label="Telefone" required>
              <input type="tel" value={form.phone} onChange={set('phone')} required placeholder="+351 900 000 000" />
            </Field>
            <Field label="Localidade">
              <input type="text" value={form.location} onChange={set('location')} placeholder="Madeira" />
            </Field>
            <Field label="Nacionalidade">
              <input type="text" value={form.nationality} onChange={set('nationality')} placeholder="Portuguesa" />
            </Field>
            <Field label="Data de Nascimento">
              <input type="date" value={form.birthDate} onChange={set('birthDate')} />
            </Field>
            <Field label="Experiência">
              <select value={form.experience} onChange={set('experience')}>
                <option value="">Selecionar</option>
                <option>Sem experiencia</option>
                <option>1 - 3 anos</option>
                <option>3 - 5 anos</option>
                <option>5 - 10 anos</option>
                <option>Mais de 10 anos</option>
              </select>
            </Field>
            <Field label="Habilitações">
              <select value={form.education} onChange={set('education')}>
                <option value="">Selecionar</option>
                <option>Ensino Básico</option>
                <option>Ensino Secundário</option>
                <option>Licenciatura</option>
                <option>Mestrado</option>
                <option>Doutoramento</option>
              </select>
            </Field>
            <Field label="Fonte de Recrutamento">
              <select value={form.recruitmentSource} onChange={set('recruitmentSource')}>
                <option value="">Selecionar</option>
                <option>Website</option>
                <option>LinkedIn</option>
                <option>Redes Sociais</option>
              </select>
            </Field>
          </div>

          <Field label="Línguas">
            <input type="text" value={form.languages} onChange={set('languages')} placeholder="Português, Inglês, Espanhol..." />
          </Field>

          <Field label="Conhecimentos IT">
            <input type="text" value={form.itSkills} onChange={set('itSkills')} placeholder="Excel, SAP, Office 365..." />
          </Field>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Currículo<span className="text-[#F07020] ml-0.5">*</span>
            </label>
            <label className="relative flex items-center gap-3 w-full border-2 border-dashed border-gray-200 hover:border-[#F07020] rounded-lg px-4 py-4 cursor-pointer transition-colors bg-gray-50 group">
              <Upload size={20} className="text-gray-400 group-hover:text-[#F07020] transition-colors flex-shrink-0" />
              <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                {cv ? cv.name : 'Clica para anexar o teu Currículo (PDF)'}
              </span>
              <input type="file" accept=".pdf" className="absolute w-px h-px opacity-0" onChange={e => setCv(e.target.files[0] || null)} />
            </label>
          </div>

          <div className="pt-2 flex gap-3">
            <button type="submit" className="flex-1 bg-[#F07020] hover:bg-[#D05F10] text-white font-semibold py-3.5 rounded-lg transition-colors">
              Enviar Candidatura 
            </button>
            <button type="button" onClick={onClose} className="px-6 border border-gray-300 text-gray-600 hover:border-gray-400 font-medium py-3.5 rounded-lg transition-colors">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function Field({ label, required, children }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
        {label}{required && <span className="text-[#F07020] ml-0.5">*</span>}
      </label>
      {cloneElement(children, {
        className: 'w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F07020]/40 focus:border-[#F07020] transition bg-gray-50',
      })}
    </div>
  )
}
