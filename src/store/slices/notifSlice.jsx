import { createSlice } from "@reduxjs/toolkit";

const notifSlice = createSlice({
  name: "notif",
  initialState: false,
  reducers: {
    showNotif: (state) => true,
    hideNotif: (state) => false,
  },
});

export const { showNotif, hideNotif } = notifSlice.actions;
export default notifSlice.reducer;
