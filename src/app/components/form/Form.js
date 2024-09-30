"use client";
import { use, useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({ firstName: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
        setFormData({ firstName: "" });
      } else {
        const errorData = await res.json();
        setError(errorData.error || "Something went wrong");
      }
    } catch (error) {
      setError("An error occurred while sending the email.");
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
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({ firstName: e.target.value })}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className={`w-full p-2 text-white ${
          loading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
        } rounded`}
      >
        {loading ? "Sending..." : "Send Welcome Email"}
      </button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {success && (
        <p className="mt-4 text-green-500">Email sent successfully!</p>
      )}
    </form>
  );
}
