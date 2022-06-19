import { createAsyncThunk } from "@reduxjs/toolkit";
import { Fruits, Maybe, graphqlApi } from 'graphql-api';

export const getAllFruits = createAsyncThunk<
  Maybe<Array<Maybe<Fruits>>> | undefined,
  undefined,
  {
    rejectValue: any;
  }
>('fruitList/getAllFruits', async (_, { rejectWithValue }) => {
  try {
    const response = await graphqlApi.GetAllFruits();
    return response.fruits;
  } catch (error) {
    return rejectWithValue(error);
  }
});
