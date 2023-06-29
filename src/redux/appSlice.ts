import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type AppState = {
  currentTheme: Theme;
  apiVersion: ApiVersion;
};

export type Theme = "light-mode" | "dark-mode";
export type ApiVersion = "1.0.0" | "2.0.0";

const currentTheme = "light-mode";

const initialState: AppState = {
  currentTheme: currentTheme as Theme,
  apiVersion: "2.0.0",
};

export const slice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setCurrentTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;
    },
    setApiVersion: (state, action: PayloadAction<ApiVersion>) => {
      state.apiVersion = action.payload;
    },
  },
});

export type ReducerActions = typeof slice.actions;
export type ReducerState = ReturnType<typeof slice.reducer>;

export const actions = {
  ...slice.actions,
};

export const getState = (state: RootState): ReducerState => state.app;
export const reducer = slice.reducer;
