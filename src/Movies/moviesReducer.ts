import { uid } from "uid";
import type { Movie } from "../types/Movie";
import type { Action } from "../types/Action";

export type MoviesState = Movie[];

const initialState: MoviesState = [
  {
    id: uid(),
    title: "Inception",
    genre: "Sci-Fi",
    country: "USA",
    releaseDate: "16-07-2010",
    posterUrl: "https://filmforum.de/fileadmin/filmforum/import/_processed_/5/e/csm_fw44big_06_9af1503598.jpg",
    description:
      "A skilled thief joins a mission to implant an idea into a target’s subconscious using dream-sharing technology.",
  },
];

export function moviesReducer(
  state: MoviesState = initialState,
  action: Action
): MoviesState {
  switch (action.type) {
    case "movies/add": {
      const newMovie: Movie = {
        id: uid(),
        ...action.payload,
      };
      return [...state, newMovie];
    }

    case "movies/delete": {
      return state.filter((movie) => movie.id !== action.payload);
    }

    case "movies/editTitle": {
      const { id, newTitle } = action.payload;
      return state.map((movie) =>
        movie.id === id ? { ...movie, title: newTitle } : movie
      );
    }

    default:
      return state;
  }
}
