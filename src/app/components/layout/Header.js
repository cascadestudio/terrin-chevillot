export default function Header() {
  return (
    <header className="fixed w-full bg-white grid grid-cols-7 px-12 py-7">
      <img src="/logo.svg" alt="Logo" className="h-11" />
      <nav className="col-start-4 col-span-4 grid grid-cols-4 content-center font-black uppercase text-blue leading-10">
        <a href="#" className="self-center">
          Notre vision
        </a>
        <a href="#" className="self-center">
          Savoir-faire
        </a>
        <a href="#" className="self-center">
          Réalisations
        </a>
        <a
          href="#"
          className="place-self-center bg-blue text-white rounded-3xl w-full text-center px-11 py-0.5"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
