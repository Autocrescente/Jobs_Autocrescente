import bannerBg from "../headers/Banner_recrutamento.png";

export default function LandingHero({ onGoToJobs }) {
  return (
    <section
      className="relative text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#001970cc] via-[#00197066] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 min-h-[480px]">
        <div className="flex flex-col justify-center px-6 sm:px-12 py-16 sm:py-20">
          <p
            className="text-[#DFE2F5] font-semibold text-sm uppercase tracking-widest mb-5"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            Carreiras & Oportunidades
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
          >
            Grupo
            <br />
            Auto Crescente
          </h1>
          <p
            className="text-gray-200 text-base leading-relaxed mb-10 max-w-md"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            Somos um grupo empresarial com raízes na Madeira, comprometido com o
            crescimento das pessoas e das nossas empresas. Junte-se a nós e faça
            parte de uma equipa apaixonada pela excelência, inovação e qualidade
            de serviço.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onGoToJobs}
              className="inline-flex items-center justify-center gap-3 bg-[#F07020] hover:bg-[#D05F10] text-white font-semibold px-7 py-4 rounded-lg transition-colors"
            >
              Oportunidades
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
