import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import type { MovieCredentials } from "../types/MovieCredentials";

const initialForm: MovieCredentials = {
  title: "",
  genre: "",
  country: "",
  releaseDate: "",
  posterUrl: "",
  description: "",
};

export default function MovieCreation() {
  const dispatch = useDispatch<AppDispatch>();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.title) {
      setError("Titel is required.");
      return;
    }

    if (!form.genre) {
      setError("Gerne is required.");
      return;
    }

    if (!form.country) {
      setError("Country is required.");
      return;
    }

    if (!form.releaseDate) {
      setError("Release date is required.");
      return;
    }

    if (!form.posterUrl) {
      setError("Poster URL is required.");
      return;
    }

    if (!form.description || form.description.trim().length < 50) {
      setError("Description must be at least 50 characters.");
      return;
    }

    dispatch({ type: "movies/add", payload: form });

    setForm(initialForm);
    setError("");
  }

  return (
    <div className="mb-8 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Movie</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="genre"
          type="text"
          placeholder="Genre"
          value={form.genre}
          onChange={handleChange}
          className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="country"
          type="text"
          placeholder="Country"
          value={form.country}
          onChange={handleChange}
          className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="releaseDate"
          type="date"
          value={form.releaseDate}
          onChange={handleChange}
          className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="posterUrl"
          type="text"
          placeholder="Poster URL"
          value={form.posterUrl ?? ""}
          onChange={handleChange}
          className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, description: e.target.value }))
          }
          className="border rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Create
        </button>
      </form>
    </div>
  );
}
