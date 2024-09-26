export default function AboutSection() {
  return (
    <section className=" bg-white">
      <div className="container mx-auto px-5 lg:px-0 grid grid-cols-7 grid-rows-6 bg-grid-pattern bg-[length:calc((100%_-_40px)/7)_16.6667%] lg:bg-[length:14.2857%_16.6667%] bg-[left_1.25rem_top] lg:bg-left-top">
        <div className="relative col-span-7 lg:col-span-3 row-start-2 row-span-3 lg:-ml-[calc((100vw-1024px)/2)] xl:-ml-[calc((100vw-1280px)/2)] 2xl:-ml-[calc((100vw-1536px)/2)]">
          <img
            src="/about-image.jpg"
            alt="Chantier"
            className="w-full h-full object-cover"
          />
          <img
            src="/triangle.svg"
            alt="Triangle"
            className="absolute top-0 right-0 rotate-180 w-[calc((100vw-40px)/7)] sm:w-auto h-[18px] md:h-[26px] lg:h-[44px] xl:h-[55px] 2xl:h-[65px]"
          />
          <img
            src="/triangle.svg"
            alt="Triangle"
            className="absolute bottom-0 left-0 w-[calc((100vw/7)+15px)] sm:w-[calc((100vw-640px)/2+748px/7)] md:w-[calc((100vw-768px)/2+870px/7)] lg:w-[calc((100vw-1024px)/2+1024px/7)] xl:w-[calc((100vw-1280px)/2+1280px/7)] 2xl:w-[calc((100vw-1536px)/2+1536px/7)]"
          />
        </div>
        <div className="col-span-7 lg:col-span-4 row-span-2 lg:row-start-3 py-4 lg:py-7 lg:px-10 bg-white border-t border-grey">
          <h2 className="text-blue uppercase font-black text-[28px] leading-[34px] lg:text-[48px] lg:leading-[55px] xl:text-[63px] xl:leading-[70px]">
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
