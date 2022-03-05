import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type AppState = {
  currentTheme: Theme;
};

export type Theme = 'light-mode' | 'dark-mode';

const currentTheme = localStorage.getItem('currentTheme') ?? 'light-mode';

const initialState: AppState = {
  currentTheme: currentTheme as Theme,
};

export const slice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setCurrentTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;
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
