import Form from "../form/Form";

export default function Footer() {
  return (
    <footer id="contact" className="relative py-8 bg-blue text-white">
      <img
        src="/triangle.svg"
        alt="Triangle"
        className="absolute top-[-1px] left-0 scale-y-[-1] w-[calc((100vw/7)+15px)] sm:w-[calc((100vw-640px)/2+748px/7)] md:w-[calc((100vw-768px)/2+870px/7)] lg:w-[calc((100vw-1024px)/2+1024px/7)] xl:w-[calc((100vw-1280px)/2+1280px/7)] 2xl:w-[calc((100vw-1536px)/2+1536px/7)]"
      />
      <div className="container mx-auto px-5 lg:px-0 grid grid-cols-7">
        <div className="col-span-7 lg:col-start-2 lg:col-span-2 flex flex-col gap-5 lg:gap-11">
          <h2 className="font-black uppercase text-[28px] leading-[34px] lg:text-[48px] lg:leading-[55px] xl:text-[63px] xl:leading-[70px]">
            Nous contacter
          </h2>
          <a href="mailto:terrin.chevillot@gmail.com">
            terrin.chevillot@gmail.com
            <img
              src="/link-icon.svg"
              alt="Mail"
              className="inline-block w-3 h-3 lg:w-4 lg:h-4 ml-3 lg:ml-5 mb-1"
            />
          </a>
          <a href="tel:06 35 33 35 78">
            06 35 33 35 78
            <img
              src="/link-icon.svg"
              alt="Mail"
              className="inline-block w-3 h-3 lg:w-4 lg:h-4 ml-3 lg:ml-5 mb-1"
            />
          </a>
          <a href="https://www.google.fr/maps/place/99+Chem.+de+la+M%C3%BBre,+13015+Marseille/@43.3647287,5.3698352,863m/data=!3m2!1e3!4b1!4m6!3m5!1s0x12c9ea988606afc1:0xd452049b671da5e!8m2!3d43.3647248!4d5.3724101!16s%2Fg%2F11c17vpymg?entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D">
            99 Chemin de la Mûre <br /> 13015 Marseille
            <img
              src="/link-icon.svg"
              alt="Mail"
              className="inline-block w-3 h-3 lg:w-4 lg:h-4 ml-3 lg:ml-5 mb-1"
            />
          </a>
          <a href="https://www.facebook.com/terrin.chevillot">
            Facebook
            <img
              src="/link-icon.svg"
              alt="Mail"
              className="inline-block w-3 h-3 lg:w-4 lg:h-4 ml-3 lg:ml-5 mb-1"
            />
          </a>
        </div>
        <Form />
        <div className="col-span-7 lg:col-start-2 grid grid-cols-subgrid gap-y-3 items-end font-normal text-[11px] lg:text-[13px] mt-20 lg:mt-32">
          <img
            src="/logo-blanc.svg"
            alt="Logo"
            className="h-[22px] col-span-4 lg:col-span-1"
          />
          <p className="col-start-1 col-span-3 row-start-2 self-start whitespace-nowrap lg:self-end lg:col-start-2 lg:row-start-1 lg:col-span-1">
            © TC Bâtiment 2024
          </p>
          <a
            className="col-start-5 hover:underline col-span-3 row-start-1 justify-self-end lg:col-start-3 lg:justify-self-start lg:col-span-1"
            href="#"
          >
            Mentions légales
          </a>
          <p className="col-span-4 justify-self-end whitespace-nowrap lg:col-span-2 lg:col-start-6">
            Site réalisé par le{" "}
            <a href="https://www.cascadestudio.fr" className="hover:underline">
              Studio Cascade
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
