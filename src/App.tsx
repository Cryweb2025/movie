import MovieCreation from "./Movies/MovieCreation";
import Movies from "./Movies/Movies";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">
          🎬 Movies Library
        </h1>
        <MovieCreation />
        <Movies />
      </div>
    </div>
  );
}
