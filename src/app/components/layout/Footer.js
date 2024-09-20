import Form from "../form/Form";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-lg font-bold">Nous contacter</h2>
        <Form />
      </div>
    </footer>
  );
}
