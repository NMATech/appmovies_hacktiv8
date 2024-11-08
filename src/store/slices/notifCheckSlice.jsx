import { createSlice } from "@reduxjs/toolkit";

const notifCheckSlice = createSlice({
  name: "notifCheck",
  initialState: null,
  reducers: {
    notifAdd: (state) => "add",
    notifDelete: (state) => "delete",
  },
});

export const { notifAdd, notifDelete } = notifCheckSlice.actions;
export default notifCheckSlice.reducer;
