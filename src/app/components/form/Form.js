"use client";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          username: "",
          email: "",
          phone: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        const errorData = await res.json();
        setError(errorData.error || "Something went wrong");
      }
    } catch (error) {
      setError("Un erreur s'est produite lors de l'envoi du message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 lg:mt-0 col-span-7 lg:col-start-5 lg:col-span-3"
    >
      <input
        type="text"
        name="username"
        placeholder="Nom"
        value={formData.username}
        onChange={handleChange}
        className="w-full p-2 mb-4 border-b border-white bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Adresse e-mail"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mb-4 border-b border-white bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Numéro de téléphone (optionnel)"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 mb-4 border-b border-white bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
      />
      <select
        name="projectType"
        value={formData.projectType}
        onChange={handleChange}
        className="w-full p-2 mb-4 border-b border-white bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
        required
      >
        <option value="" disabled>
          Sélectionnez le type de projet
        </option>
        <option value="construction">Construction</option>
        <option value="renovation">Rénovation</option>
        <option value="other">Autre</option>
      </select>
      <select
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        className={`w-full p-2 mb-4 border-b border-white bg-transparent text-white focus:outline-none`}
        required
      >
        <option value="" disabled>
          Sélectionnez une fourchette de budget
        </option>
        <option value="low">Moins de 10 000 €</option>
        <option value="medium">10 000 € - 50 000 €</option>
        <option value="high">Plus de 50 000 €</option>
      </select>
      <textarea
        name="message"
        placeholder="Dites-nous en plus"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 mb-4 border-b border-white bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className={`p-2 text-blue uppercase font-black rounded-[30px] w-full lg:w-1/3 ${
          loading ? "bg-gray-400" : "bg-white"
        }`}
      >
        {loading ? "En cours d'envoi..." : "Envoyer"}
      </button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {success && (
        <p className="mt-4 text-green-500">Votre message a bien été envoyé !</p>
      )}
    </form>
  );
}
