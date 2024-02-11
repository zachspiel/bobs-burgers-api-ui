import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppState = {
  currentTheme: Theme;
};

export type Theme = "light-mode" | "dark-mode";

const currentTheme = "light-mode";

const initialState: AppState = {
  currentTheme: currentTheme as Theme,
};

export const slice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setCurrentTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const actions = {
  ...slice.actions,
};

export const reducer = slice.reducer;
