import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/favSlices";
import notifReducer from "./slices/notifSlice";
import notifCheckSlice from "./slices/notifCheckSlice";

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    notif: notifReducer,
    notifCheck: notifCheckSlice,
  },
});

// Nonaktifkan code dibawah ini untuk melihat subscribe
// store.subscribe(() => {
//   console.log("STORE CHANGE : ", store.getState());
// });

export default store;
