import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="haut" className="bg-white">
      <div className="w-full h-[67px] lg:h-[99px]"></div>
      <div className="container relative mx-auto px-5 lg:px-0 grid grid-cols-7 grid-rows-6 lg:bg-grid-pattern bg-[length:calc((100%_-_40px)/7)_16.6667%] lg:bg-[length:14.2857%_16.6667%] bg-[left_1.25rem_top] lg:bg-left-top max-h-screen lg:max-h-[800px] xl:max-h-[900px] 2xl:max-h-[1000px]">
        <div className="absolute top-0 left-0 w-[1px] h-full bg-white"></div>
        <div className="col-span-6 row-span-3 bg-blue py-24 lg:py-28 grid grid-cols-subgrid relative -ml-5 pl-5 sm:-ml-[calc(50vw-50%)] sm:pl-[calc(50vw-50%)]">
          <h1
            className="text-white font-black text-[28px] leading-[34px] col-span-5
         lg:text-[48px] lg:leading-[55px] xl:text-[63px] xl:leading-[70px]
         2xl:text-[70px] 2xl:leading-[75px] lg:col-span-4 lg:col-start-2 self-center"
          >
            Rénover, étendre, sublimer : votre espace notre mission
          </h1>
          <img
            src="/triangle.svg"
            alt="Triangle"
            className="absolute bottom-[-1px] left-0 w-[calc((((100vw-40px)/7)*2)+20px)] sm:w-[calc((100vw-640px)/2+660px/2.8)] md:w-[calc((100vw-768px)/2+778px/2.8)] lg:w-[calc((100vw-1024px)/2+1024px/2.8)] xl:w-[calc((100vw-1280px)/2+1280px/2.8)] 2xl:w-[calc((100vw-1536px)/2+1536px/2.8)]"
          />
          <img
            src="/triangle.svg"
            alt="Triangle"
            className="absolute top-0 right-[-1px] rotate-180 h-[18px] md:h-[26px] lg:h-[44px] xl:h-[55px] 2xl:h-[65px]"
          />
        </div>
        <div className="col-start-3 col-span-5 row-span-3 relative -mr-[calc(50vw-70%)]">
          <Image
            src="/hero-image.jpg"
            alt="Image chantier"
            width={1920}
            height={1080}
            priority={true}
            quality={100}
            className="w-full h-full max-h-full object-cover"
          />
          <img
            src="/triangle.svg"
            alt="Triangle"
            className="absolute top-[-1px] right-0 rotate-180 w-[calc((100vw/7)+15px)] sm:w-[calc((100vw-640px)/2+748px/7)] md:w-[calc((100vw-768px)/2+870px/7)] lg:w-[calc((100vw-1024px)/2+1024px/7)] xl:w-[calc((100vw-1280px)/2+1280px/7)] 2xl:w-[calc((100vw-1536px)/2+1536px/7)]"
          />
          <img
            src="/triangle.svg"
            alt="Triangle"
            className="absolute bottom-[-1px] left-[-1px] h-[18px] md:h-[26px] lg:h-[44px] xl:h-[55px] 2xl:h-[65px]"
          />
        </div>
      </div>
    </section>
  );
}
