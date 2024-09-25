export default function HeroSection() {
  return (
    <section className="bg-white min-h-screen">
      <div className="w-full h-[67px] lg:h-[99px]"></div>
      <div className="container relative mx-auto px-5 lg:px-0 grid grid-cols-7 lg:auto-rows-[150px] xl:auto-rows-[180px] 2xl:auto-rows-[200px] bg-grid-pattern bg-[length:33.3333%_140px] lg:bg-[length:14.2857%_150px] xl:bg-[length:14.2857%_180px] 2xl:bg-[length:14.2857%_200px]">
        <div className="absolute top-0 left-0 w-[1px] h-full bg-white"></div>
        <div className="col-span-6 row-span-3 bg-blue py-36 grid grid-cols-subgrid relative -ml-[calc(50vw-50%)]">
          <h1 className="text-white font-black text-[28px] leading-[34px] lg:text-[63px] lg:leading-[70px] lg:col-span-3 lg:col-start-2">
            Rénover, étendre, sublimer : votre espace notre mission
          </h1>
          <img
            src="/triangle.svg"
            alt="Triangle"
            className="absolute bottom-0 left-0  lg:w-[calc((100vw-1024px)/2+1024px/2.8)] xl:w-[calc((100vw-1280px)/2+1280px/2.8)] 2xl:w-[calc((100vw-1536px)/2+1536px/2.8)]"
          />
          <img
            src="/triangle.svg"
            alt="Triangle"
            className="absolute top-0 right-0 rotate-180 lg:h-[44px] xl:h-[55px] 2xl:h-[65px]"
          />
        </div>
        <div className="col-start-3 col-span-5 row-span-3 relative -mr-[calc(50vw-70%)]">
          <img
            src="/hero-image.jpg"
            alt="Image chantier"
            className="w-full max-h-full object-cover"
          />
          <img
            src="/triangle.svg"
            alt="Triangle"
            className="absolute top-0 right-0 rotate-180 lg:w-[calc((100vw-1024px)/2+1024px/7)] xl:w-[calc((100vw-1280px)/2+1280px/7)] 2xl:w-[calc((100vw-1536px)/2+1536px/7)]"
          />
          <img
            src="/triangle.svg"
            alt="Triangle"
            className="absolute bottom-0 left-0 lg:h-[88px] xl:h-[109px] 2xl:h-[130px]"
          />
        </div>
      </div>
    </section>
  );
}
