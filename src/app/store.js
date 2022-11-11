import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import accountSlice from "../features/account/accountSlice";
import usersSlice from "../features/users/usersSlice";
import categoriesSlice from "../features/products/categoriesSlice";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  products: productsSlice,
  account: accountSlice,
  users: usersSlice,
  categories: categoriesSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
export const persistor = persistStore(store);
