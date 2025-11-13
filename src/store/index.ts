import { createStore, combineReducers } from "redux";
import { moviesReducer } from "../Movies/moviesReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
