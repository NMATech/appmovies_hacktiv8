import { createSlice } from "@reduxjs/toolkit";

const favoriteDatas = createSlice({
  name: "favorite",
  initialState: localStorage.getItem("favorite") || [],
  reducers: {
    addFavorites: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("favorite", JSON.stringify(state));
    },
  },
});

export const { addFavorites } = favoriteDatas.actions;
export default favoriteDatas.reducer;
