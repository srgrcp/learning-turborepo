import { createSlice } from "@reduxjs/toolkit";
import { Fruits, Maybe } from "graphql-api";
import { getAllFruits } from "./thunk/get-all-fruits";

export interface FruitListState {
  fruits?: Maybe<Array<Maybe<Fruits>>>
  loading: boolean
  error?: any
}

const initialState: FruitListState = {
  loading: false
};

const FruitListSlice = createSlice({
  name: 'fruitList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllFruits.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllFruits.fulfilled, (state, action) => {
      state.loading = false;
      state.fruits = action.payload;
      state.error = undefined;
    });
    builder.addCase(getAllFruits.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  }
});

export default FruitListSlice.reducer;
