import type { MovieCredentials } from "./MovieCredentials";

export type Action =
  | {
      type: "movies/add";
      payload: MovieCredentials;
    }
  | {
      type: "movies/delete";
      payload: string;
    }
  | {
      type: "movies/editTitle";
      payload: { id: string; newTitle: string };
    };
