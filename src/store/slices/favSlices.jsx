import { createSlice } from "@reduxjs/toolkit";

const favoriteDatas = createSlice({
  name: "favorite",
  initialState: JSON.parse(localStorage.getItem("favorite")) || [],
  reducers: {
    addFavorites: (state, action) => {
      const exist = state.find((data) => data.imdbID === action.payload.imdbID);

      if (exist) {
        console.log(`${action.payload.Title} sudah ada di list favorite anda`);
      } else {
        state.push(action.payload);
        localStorage.setItem("favorite", JSON.stringify(state));
      }
    },
    deleteFavorite: (state, action) => {
      const newData = state.filter((data) => data.imdbID !== action.payload);
      state.push(...newData);
      console.log(newData);

      localStorage.setItem("favorite", JSON.stringify(newData));
    },
  },
});

export const { addFavorites, deleteFavorite } = favoriteDatas.actions;
export default favoriteDatas.reducer;
