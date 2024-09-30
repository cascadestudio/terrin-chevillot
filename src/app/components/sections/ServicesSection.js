"use client";
import { useState } from "react";

export default function ServicesSection() {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  const services = [
    {
      title: "Construction\net Rénovation",
      content:
        "La mise en œuvre de votre chantier est assurée par une équipe d’experts réactifs et professionnels. Que ce soit pour des extensions, des rénovations ou une construction neuve nous utilisons les meilleurs matériaux et allions techniques traditionnelles et innovantes pour une réalisation parfaite.\nNous bâtissons durablement et éthiquement, dans les règles de l’artdepuis plus de 20 ans.",
    },
    {
      title: "Typologie",
      content:
        "Vous souhaitiez rafraîchir votre maison, donner un coup de neuf à votre commerce ou redonner vie à un espace public, nous sommes là pour vous accompagner.\nGrâce à notre vaste expérience avec les architectes et les bureaux d’études, nous suivons les plans à la lettre. Notre équipe hautement qualifier est là pour vous écouter et vous conseiller à chaque étape.",
    },
    {
      title: "Coordination",
      content:
        "Notre équipe assure une coordination fluide entre les différents corps de métier. La coordination est cruciale pour le bon dérou- lement d’un chantier, et grâce à notre expérience, nous nous adaptons parfaitement, même aux délais les plus ambitieux.",
    },
    {
      title: "Particulier",
      content:
        "Entreprise de construction et rénovation de confiance, nous transformons vos idées en espaces de vie spectaculaires. Spécialistes des projets sur mesure, nous innovons pour créer des intérieurs qui vous ressemblent. Faites de votre maison un lieu unique avec nos services de construction et de rénovation sur mesure.",
    },
    {
      title: "Professionnels",
      content:
        "Partenaire de confiance pour vos projets de construction et de rénovation commerciale, nous livrons des espaces professionnels exceptionnels. Conception et réalisation personnalisées pour des bureaux et commerces à l'image de votre entreprise. Augmentez la valeur de votre entreprise avec nos services de construction et rénovation adaptés aux professionnels.",
    },
  ];
  return (
    <section className="relative bg-blue text-white pb-32 lg:pb-60">
      <div className="container mx-auto px-5 lg:px-0 pt-10 lg:pt-[75px] grid grid-cols-7">
        <h2 className="lg:col-start-2 col-span-3 mb-8 lg:mb-16  font-black uppercase text-[28px] leading-[34px] lg:text-[48px] lg:leading-[55px] xl:text-[63px] xl:leading-[70px]">
          Savoir-faire
        </h2>
        {services.map((service, index) => (
          <div
            key={index}
            className={`lg:col-start-2 col-span-7 lg:col-span-6 grid grid-cols-subgrid py-5 border-t border-white ${
              index === services.length - 1 ? "border-b border-white" : ""
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="self-start font-black text-center text-[28px] leading-[34px] lg:text-[48px] lg:leading-[55px]"
            >
              {openAccordionIndex === index ? "-" : "+"}
            </button>
            <h2 className="col-span-6 lg:col-span-2 whitespace-pre-line font-black text-[22px] leading-[30px] lg:text-[33px] lg:leading-[45px]">
              {service.title}
            </h2>
            <div
              className={`col-start-2 col-span-6 lg:col-start-4 lg:col-span-3 whitespace-pre-line text-[16px] leading-[22px] lg:text-[22px] lg:leading-[34px] font-bold overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                openAccordionIndex === index ? "max-h-[550px]" : "max-h-0"
              }`}
            >
              <p>{service.content}</p>
            </div>
          </div>
        ))}
        <img
          src="/blue-triangle.svg"
          alt="Triangle"
          className="absolute top-0 right-0 transform -translate-y-full w-[calc((100vw/7)+15px)] sm:w-[calc((100vw-640px)/2+748px/7)] md:w-[calc((100vw-768px)/2+870px/7)] lg:w-[calc((100vw-1024px)/2+1024px/7)] xl:w-[calc((100vw-1280px)/2+1280px/7)] 2xl:w-[calc((100vw-1536px)/2+1536px/7)]"
        />
        <img
          src="/triangle.svg"
          alt="Triangle"
          className="absolute bottom-0 left-0 w-[calc((100vw/7)+15px)] sm:w-[calc((100vw-640px)/2+748px/7)] md:w-[calc((100vw-768px)/2+870px/7)] lg:w-[calc((100vw-1024px)/2+1024px/7)] xl:w-[calc((100vw-1280px)/2+1280px/7)] 2xl:w-[calc((100vw-1536px)/2+1536px/7)]"
        />
      </div>
    </section>
  );
}
