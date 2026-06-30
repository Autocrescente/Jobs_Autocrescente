const values = [
  "Rigor e confiança",
  "Proximidade e respeito",
  "Inovação e melhoria contínua",
  "Responsabilidade e ética",
];

export default function MissionSection() {
  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#F07020] mb-3">
            A nossa missão
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Criar soluções integradas de mobilidade, energia e serviços que
            simplifiquem a vida dos nossos clientes, através de equipas
            qualificadas, processos eficientes e uma cultura de proximidade.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#F07020] mb-3">
            A nossa visão
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Ser o grupo de referência na Madeira, reconhecido pela capacidade de
            integrar diferentes áreas de negócio num serviço coerente, moderno e
            orientado para o futuro.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#F07020] mb-3">
            Os nossos valores
          </p>
          <ul className="space-y-2">
            {values.map((v) => (
              <li
                key={v}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F07020] flex-shrink-0" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
