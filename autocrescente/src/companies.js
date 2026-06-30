import autocrescenteImg from "./companies/autocrescente.jpg";
import minunesImg from "./companies/minunes.png";
import centroliderImg from "./companies/centrolider.jpg";
import maturifuelImg from "./companies/maturifuel.jpg";
import duartereisImg from "./companies/seguros.jpg";

export const companies = [
  {
    id: "autocrescente",
    name: "Auto Crescente",
    companyKey: "crescente",
    image: autocrescenteImg,
    shortDesc: "Comércio automóvel e serviços pós‑venda.",
    description:
      "A Auto Crescente é a empresa fundadora do Grupo e uma referência no setor automóvel da Madeira. Representa oficialmente as marcas Opel, Peugeot e MG, oferecendo uma gama completa de viaturas novas, usadas e soluções de mobilidade. Com mais de 25 anos de experiência, integra serviços pós‑venda, oficinas certificadas e equipas especializadas que garantem rigor técnico, atendimento próximo e uma experiência de cliente moderna e confiável.",
    urls: [],
  },
  {
    id: "minunes",
    name: "M.I Nunes",
    companyKey: "Nunes",
    image: minunesImg,
    shortDesc: "(Why Not & 7M) – Soluções de aluguer de viaturas.",
    description:
      "A M.I. Nunes é a empresa do Grupo Auto Crescente dedicada ao aluguer de viaturas, operando duas marcas reconhecidas no setor turístico e corporativo da Madeira: Why Not e 7M. Com uma operação sólida e uma frota diversificada, a M.I. Nunes garante soluções de mobilidade flexíveis, práticas e ajustadas às necessidades de cada cliente. Através das marcas Why Not e 7M, a empresa oferece uma experiência de aluguer simples, segura e confortável, reforçando o compromisso do Grupo com qualidade, proximidade e serviço ao cliente.",
    urls: [
      { label: "Why Not Car Rental", href: "https://www.whynotcarrental.com" },
      { label: "7M Rent-a-Car", href: "https://www.7mrentacar.com" },
    ],
  },
  {
    id: "centrolider",
    name: "Centrolider",
    companyKey: "Centrolider",
    image: centroliderImg,
    shortDesc: "Serviços técnicos e manutenção automóvel.",
    description:
      "A Centrolíder é a unidade do Grupo Auto Crescente dedicada à manutenção automóvel e à gestão de frota. Com equipas técnicas qualificadas, assegura intervenções rigorosas e eficientes, garantindo que cada veículo recebe o nível de cuidado exigido pelos nossos clientes. Dispõe de uma frota diversificada, adaptada a diferentes necessidades — negócios, família ou mobilidade diária — e oferece apoio na escolha do veículo e nas informações essenciais para uma utilização segura e confortável. Para além do serviço ao cliente particular, a Centrolíder gere a frota de várias entidades regionais, cumprindo elevados padrões de qualidade, segurança e eficiência.",
    urls: [
      {
        label: "Visitar Website",
        href: "https://centrolider.autocrescente.com/",
      },
    ],
  },
  {
    id: "maturifuel",
    name: "Maturifuel",
    companyKey: "Maturifuel",
    image: maturifuelImg,
    shortDesc:
      "Energia e combustíveis. Serviços de mecânica, lavagens e lubrificações.",
    description:
      "A Maturifuel é a empresa do Grupo dedicada ao abastecimento de combustíveis, operando dois postos localizados na Ribeira Brava e no Porto Moniz. Focada na eficiência, segurança e fiabilidade, assegura um serviço de proximidade que responde às necessidades diárias de mobilidade dos clientes da região. O posto da Ribeira Brava integra ainda uma loja e snack‑bar, lavagem de automóveis e serviço de venda de pneus, oferecendo uma experiência completa e conveniente num único espaço.",
    urls: [
      {
        label: "Visitar Website",
        href: "https://maturifuel.autocrescente.com/",
      },
    ],
  },
  {
    id: "duartereisseguros",
    name: "Duarte Reis Seguros",
    companyKey: "Duarte",
    image: duartereisImg,
    shortDesc: "Mediação de seguros.",
    description:
      "A Duarte Reis Seguros é a empresa do Grupo dedicada à mediação de seguros e serviços de assurfinance, atuando no mercado desde 27 de outubro de 2008. Com uma abordagem centrada na proximidade, transparência e aconselhamento especializado, acompanha clientes particulares e empresariais na proteção automóvel, familiar e profissional. Com experiência consolidada e uma atuação orientada para soluções claras e eficazes, a Duarte Reis Seguros garante acompanhamento contínuo em todas as etapas da contratação, reforçando a confiança e a segurança que caracterizam o Grupo Auto Crescente.",
    urls: [
      {
        label: "Visitar Website",
        href: "https://duartereisseguros.autocrescente.com/",
      },
    ],
  },
];
