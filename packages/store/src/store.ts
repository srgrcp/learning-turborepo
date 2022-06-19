import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import fruitListReducer from "./fruit/fruit-list/slice";

export const store = configureStore({ reducer: {
  // Slices here!!!
  fruitList: fruitListReducer,
} });

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
