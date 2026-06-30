import bannerBg from "../headers/Banner_recrutamento.png";

export default function LandingHero({ onGoToJobs }) {
  return (
    <section
      className="relative text-white bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bannerBg})`, height: '562px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#001970cc] via-[#00197066] to-transparent pointer-events-none" />

      <div className="relative h-full max-w-7xl mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 sm:px-12 py-10 sm:py-12">
          <p
            className="text-[#DFE2F5] font-semibold text-xs uppercase tracking-widest mb-3"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            Carreiras & Oportunidades
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
          >
            Grupo
            <br />
            Auto Crescente
          </h1>
          <p
            className="text-[#DFE2F5] font-semibold text-xs uppercase tracking-widest mb-3"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            Um Ecossistema de Mobilidade, Energia e Serviços na Madeira
          </p>
          <p
            className="text-gray-200 text-sm leading-relaxed mb-5 max-w-xl"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            O Grupo Auto Crescente é hoje um dos maiores ecossistemas de
            mobilidade da Madeira, reunindo várias empresas que atuam de forma
            complementar nos setores automóvel, energia, seguros e rent‑a‑car.
            Com mais de 25 anos de história e uma equipa de quase 200
            profissionais, crescemos com a região e para a região, oferecendo
            soluções completas que acompanham o cliente em todas as etapas da
            sua jornada.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onGoToJobs}
              className="inline-flex items-center justify-center gap-3 bg-[#F07020] hover:bg-[#D05F10] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Oportunidades
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
