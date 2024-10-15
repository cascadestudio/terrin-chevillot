import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="vision" className=" bg-white">
      <div className="container mx-auto px-5 lg:px-0 pt-8 lg:pt-0 grid grid-cols-7 grid-rows-6 lg:grid-rows-5 lg:bg-grid-pattern lg:bg-[length:14.2857%_20%] lg:bg-left-top">
        <div className="relative col-span-7 lg:col-span-3 lg:row-start-2 row-span-3 lg:-ml-[calc((100vw-1024px)/2)] xl:-ml-[calc((100vw-1280px)/2)] 2xl:-ml-[calc((100vw-1536px)/2)]">
          <Image
            src="/about-image-2.jpg"
            alt="Chantier"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <img
            src="/triangle.svg"
            alt="Triangle"
            className="absolute top-[-1px] right-[-1px] rotate-180 h-[18px] md:h-[26px] lg:h-[44px] xl:h-[55px] 2xl:h-[65px]"
          />
          <img
            src="/triangle.svg"
            alt="Triangle"
            className="absolute bottom-[-1px] left-[-1px] w-[calc((100vw/7)+15px)] sm:w-[calc((100vw-640px)/2+748px/7)] md:w-[calc((100vw-768px)/2+870px/7)] lg:w-[calc((100vw-1024px)/2+1024px/7)] xl:w-[calc((100vw-1280px)/2+1280px/7)] 2xl:w-[calc((100vw-1536px)/2+1536px/7)]"
          />
        </div>
        <div className="col-span-7 lg:col-span-4 row-span-2 row-start-1 lg:row-start-3 py-4 lg:py-7 lg:px-10 bg-white lg:border-t lg:border-grey">
          <h2 className="text-blue uppercase font-black text-[28px] leading-[34px] mt-7 lg:mt-0 lg:text-[48px] lg:leading-[55px] xl:text-[63px] xl:leading-[70px]">
            Notre vision
          </h2>
          <p className="mt-4 text-blue text-[16px] lg:text-[22px] font-bold">
            Forts de plus de 20 ans d’expérience en construction et en
            rénovation, nous orchestrons notre savoir-faire méticuleux et une
            coordination fluide.
            <br />
            Nous vous accompagnons à chaque étape, respectant le projet
            architectural et les délais.
          </p>
        </div>
      </div>
    </section>
  );
}
