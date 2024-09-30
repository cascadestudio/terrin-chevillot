import Form from "../form/Form";

export default function Footer() {
  return (
    <footer className="py-8 bg-blue text-white">
      <div className="container mx-auto">
        <div>
          <h2 className="font-black uppercase text-[28px] leading-[34px] lg:text-[48px] lg:leading-[55px] xl:text-[63px] xl:leading-[70px]">
            Nous contacter
          </h2>
          <a href="mailto:terrin.chevillot@gmail.com">
            terrin.chevillot@gmail.com
            <img
              src="/link-icon.svg"
              alt="Mail"
              className="inline-block w-5 h-5 ml-2"
            />
          </a>
          <a href="#">
            06 35 33 35 78
            <img
              src="/link-icon.svg"
              alt="Mail"
              className="inline-block w-5 h-5 ml-2"
            />
          </a>
          <a href="https://www.google.fr/maps/place/99+Chem.+de+la+M%C3%BBre,+13015+Marseille/@43.3647287,5.3698352,863m/data=!3m2!1e3!4b1!4m6!3m5!1s0x12c9ea988606afc1:0xd452049b671da5e!8m2!3d43.3647248!4d5.3724101!16s%2Fg%2F11c17vpymg?entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D">
            99 Chemin de la Mûre 13015 Marseille
            <img
              src="/link-icon.svg"
              alt="Mail"
              className="inline-block w-5 h-5 ml-2"
            />
          </a>
          <a href="https://www.facebook.com/terrin.chevillot">
            Facebook
            <img
              src="/link-icon.svg"
              alt="Mail"
              className="inline-block w-5 h-5 ml-2"
            />
          </a>
        </div>
        <Form />
      </div>
    </footer>
  );
}
