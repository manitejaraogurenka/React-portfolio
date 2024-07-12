import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: { lang: "English" },
  reducers: {
    setLang(state, action) {
      state.lang = action.payload;
    },
  },
});

export const languageActions = languageSlice.actions;
export default languageSlice;
