export default function HeroSection() {
  return (
    <section className="bg-white min-h-screen h-fit">
      <div className="w-full h-[67px] lg:h-[99px]"></div>
      <div className="container relative mx-auto px-5 lg:px-0 grid grid-cols-3 lg:grid-cols-7 lg:auto-rows-[150px] xl:auto-rows-[180px] 2xl:auto-rows-[200px] bg-grid-pattern bg-[length:33.3333%_140px] lg:bg-[length:14.2857%_150px] xl:bg-[length:14.2857%_180px] 2xl:bg-[length:14.2857%_200px]">
        <div className="absolute top-0 left-0 w-[1px] h-full bg-white"></div>
        <div className="col-span-6 row-span-3 bg-blue py-36 grid grid-cols-subgrid relative">
          <h1 className="text-white font-black text-[28px] leading-[34px] lg:text-[63px] lg:leading-[70px] lg:col-span-3 lg:col-start-2">
            Rénover, étendre, sublimer : votre espace notre mission
          </h1>
          <img
            src="/triangle.svg"
            alt="Triangle"
            className="absolute bottom-0 left-0 lg:h-[88px] xl:h-[109px] 2xl:h-[130px]"
          />
          <img
            src="/triangle.svg"
            alt="Triangle"
            className="absolute top-0 right-0 rotate-180 lg:h-[44px] xl:h-[55px] 2xl:h-[65px]"
          />
        </div>
        <div className="col-start-3 col-span-5 relative">
          <img src="/hero-image.jpg" alt="Image chantier" />
          <img
            src="/triangle.svg"
            alt="Triangle"
            className="absolute top-0 right-0 rotate-180 lg:h-[44px] xl:h-[55px] 2xl:h-[65px]"
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
