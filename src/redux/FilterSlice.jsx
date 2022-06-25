import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: "",
  },
  reducers: {
    contactsFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { contactsFilter } = filterSlice.actions;
export default filterSlice.reducer;
