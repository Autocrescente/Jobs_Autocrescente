import { useState, cloneElement } from 'react'
import { X, Upload } from 'lucide-react'
import { companies } from '../companies'

export default function ApplicationForm({ job, onClose }) {
  const [form, setForm] = useState({
    fullName: '', gender: '', email: '', phone: '', location: '', nationality: '',
    birthDate: '', education: '', educationArea: '', experience: '', languages: '', itSkills: '', recruitmentSource: '', company: '',
  })
  const [cv, setCv] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const [consent, setConsent] = useState(false)

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const experienceMap = {
    'Sem experiencia': 0, '1 - 3 anos': 2, '3 - 5 anos': 4,
    '5 - 10 anos': 7, 'Mais de 10 anos': 11,
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!cv) { setError('Por favor anexa o teu Currículo.'); return }

    setLoading(true)
    setError(null)

    const data = new FormData()
    if (job.id) data.append('vaga', job.id)
    data.append('nomeCandidato', form.fullName)
    data.append('email', form.email)
    data.append('telefone', form.phone)
    if (form.gender)          data.append('genero', form.gender)
    if (form.location)        data.append('localizacao', form.location)
    if (form.nationality)     data.append('nacionalidade', form.nationality)
    if (form.birthDate)       data.append('dataNascimento', form.birthDate)
    if (form.education)       data.append('habilitacoes', form.educationArea ? `${form.education} - ${form.educationArea}` : form.education)
    if (form.experience)      data.append('experiencia', experienceMap[form.experience] ?? 0)
    if (form.languages)       data.append('conhecimentoLinguas', form.languages)
    if (form.itSkills)        data.append('conhecimentoInformatica', form.itSkills)
    const fonte = form.recruitmentSource === 'Outros' ? (form.recruitmentSourceOther || 'Outros') : form.recruitmentSource
    if (fonte) data.append('fonteRecrutamento', fonte)
    if (!job.id && form.company) data.append('empresa', form.company)
    data.append('cv', cv)

    try {
      const res = await fetch('https://app.autocrescente.com/api/rh/candidaturas', {
        method: 'POST',
        body: data,
      })
      if (!res.ok) throw new Error('Erro ao enviar candidatura.')
      setSuccess(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
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

        {success ? (
          <div className="px-5 sm:px-8 py-16 flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A3A8C]">Candidatura enviada!</h3>
            <p className="text-gray-500 text-sm">Obrigado pelo teu interesse. Entraremos em contacto em breve.</p>
            <button onClick={onClose} className="mt-2 bg-[#F07020] hover:bg-[#D05F10] text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Fechar
            </button>
          </div>
        ) : (
        <form onSubmit={handleSubmit} className="px-5 sm:px-8 py-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {!job.id && (
              <Field label="Empresa" required>
                <select value={form.company} onChange={set('company')} required>
                  <option value="">Selecionar</option>
                  <option>Todas as empresas</option>
                  <option>Estágio</option>
                  {companies.map(c => (
                    <option key={c.id}>{c.name}</option>
                  ))}
                </select>
              </Field>
            )}
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
            {form.education && form.education !== 'Ensino Básico' && (
              <Field label="Área de Estudos">
                <input type="text" value={form.educationArea} onChange={set('educationArea')} placeholder="Ex: Engenharia Informática, Gestão..." />
              </Field>
            )}
            <Field label="Fonte de Recrutamento">
              <select value={form.recruitmentSource} onChange={set('recruitmentSource')}>
                <option value="">Selecionar</option>
                <option>Website</option>
                <option>LinkedIn</option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>Outros</option>
              </select>
            </Field>
            {form.recruitmentSource === 'Outros' && (
              <Field label="Qual a fonte?">
                <input
                  type="text"
                  value={form.recruitmentSourceOther ?? ''}
                  onChange={e => setForm(f => ({ ...f, recruitmentSourceOther: e.target.value }))}
                  placeholder="Indica a fonte de recrutamento..."
                />
              </Field>
            )}
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

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={e => setConsent(e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-[#F07020] flex-shrink-0 cursor-pointer"
            />
            <span className="text-sm text-gray-500">
              Confirmo a utilização de dados.... 
            </span>
          </label>

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <div className="pt-2 flex gap-3">
            <button type="submit" disabled={loading || !consent} className="flex-1 bg-[#F07020] hover:bg-[#D05F10] disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg transition-colors">
              {loading ? 'A enviar...' : 'Enviar Candidatura'}
            </button>
            <button type="button" onClick={onClose} className="px-6 border border-gray-300 text-gray-600 hover:border-gray-400 font-medium py-3.5 rounded-lg transition-colors">
              Cancelar
            </button>
          </div>
        </form>
        )}
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
