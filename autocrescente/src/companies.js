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
    shortDesc:
      "Referência no setor automóvel da Madeira com 25 anos de experiência.",
    description:
      "A Auto Crescente é uma referência no setor automóvel da Madeira, com 25 anos de experiência dedicados ao comércio de veículos novos e usados, serviços de oficina multimarca e soluções completas de mobilidade. Representamos oficialmente as marcas Peugeot, Opel e MG, reforçando o nosso compromisso com inovação, qualidade e confiança.",
    urls: [],
  },
  {
    id: "minunes",
    name: "M.I Nunes",
    companyKey: "Nunes",
    image: minunesImg,
    shortDesc:
      "Mais de quarenta anos de experiência em soluções de mobilidade flexível.",
    description:
      "A M.I.Nunes, Unip., Lda. conta com mais de quarenta anos de experiência no mercado, e, que representa a Why Not Car Rental e 7M Rent-a-Car – soluções de mobilidade flexível para residentes e visitantes.",
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
    shortDesc:
      "Frota de automóveis adaptados às necessidades do seu negócio ou família.",
    description:
      "Centrolider possui uma frota de automóveis que vai ao encontro das suas necessidades.\nTemos uma variedade de veículos, adaptados aos seus negócios ou família.\nSempre acreditamos na sua exigência pessoal ao nível da condução.\nFaça a escolha do veículo, obtenha as informações necessárias.",
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
      "Serviços de mecânica, pneus, lavagens automóvel e loja de conveniência.",
    description:
      "A Maturifuel dispõe de vários serviços de mecânica, desde montagem, calibragem e alinhamento de pneu, verificação de luzes, lavagens de automóveis (interior, exterior, estofos, estrada e motor) e lubrificações.\n\nA Repsol da Ribeira Brava oferece um serviço de snack bar, desde cafés, sumos e sandes. Dispomos de uma loja de conveniência, na qual vendemos, desde águas, vinhos, sumos, batatas-fritas e doçaria.",
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
    shortDesc:
      "Empresa na área seguradora e Assurfinance, presente no mercado desde 2008.",
    description:
      "Somos uma Empresa com Actividade na Área Seguradora e também Assurfinance.\nEstamos presentes no mercado desde 27 de Outubro de 2008.",
    urls: [
      {
        label: "Visitar Website",
        href: "https://duartereisseguros.autocrescente.com/",
      },
    ],
  },
];
