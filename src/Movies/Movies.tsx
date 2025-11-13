import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import DeleteIcon from "@mui/icons-material/Delete";
import MovieEdit from "./MovieEdit";

export default function Movies() {
  const movies = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch<AppDispatch>();

  function handleDelete(id: string) {
    dispatch({ type: "movies/delete", payload: id });
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Movies List</h2>

      {movies.length === 0 && (
        <p className="text-gray-500">No movies added yet.</p>
      )}

      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-white shadow-md rounded-xl p-4 flex gap-4 border border-gray-200"
        >
          {movie.posterUrl && (
            <div className="w-28 h-40 shrink-0 overflow-hidden rounded-lg border border-gray-200">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex-1 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg">{movie.title}</span>
                <MovieEdit id={movie.id} currentTitle={movie.title} />
              </div>

              <div className="text-gray-600 text-sm mt-2 space-y-1">
                <p>Genre: {movie.genre}</p>
                <p>Country: {movie.country}</p>
                <p>Release: {movie.releaseDate}</p>
              </div>
              <p className="mt-2 text-gray-700 text-sm">Description:</p>
              <p className="mt-2 text-gray-700 text-sm">{movie.description}</p>
              <button
                className="mt-10 px-6 py-2 border border-blue-600 text-blue-600 rounded-lg 
             hover:bg-blue-600 hover:text-white transition font-semibold cursor-pointer"
                onClick={() => alert(`${movie.title} coming soon!`)}
              >
                Watch Movie
              </button>
            </div>
            <button
              onClick={() => handleDelete(movie.id)}
              className="text-red-600 hover:text-red-800 cursor-pointer"
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
