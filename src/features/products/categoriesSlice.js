import { createSlice } from "@reduxjs/toolkit";
import db from "../../db";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    value: db.categories,
  },
  reducers: {},
});

export default categoriesSlice.reducer;
