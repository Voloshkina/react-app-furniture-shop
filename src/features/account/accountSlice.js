import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    value: {
      name: "",
      email: "",
      password: "",
      basket: [],
      status: false,
    },
  },
  reducers: {
    logout: (state) => {
      state.value = {
        name: "",
        email: "",
        basket: [],
        status: false,
      };
    },
    addToBasket: (state, action) => {
      state.value.basket = [...state.value.basket, action.payload];
    },
    removeFromBasket: (state, action) => {
      state.value.basket = state.value.basket.filter(
        (el) => el !== action.payload
      );
    },

    login: (state, action) => {
      state.value = {
        name: action.payload.name,
        email: action.payload.email,
        basket: action.payload.basket,
        status: true,
      };
    },
  },
});
export const { login, logout, addToBasket, removeFromBasket } =
  accountSlice.actions;

export default accountSlice.reducer;
