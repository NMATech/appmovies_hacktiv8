import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/favSlices";

const store = configureStore({
  reducer: { favorite: favoriteReducer },
});

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

export default store;
