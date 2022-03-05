import { configureStore } from '@reduxjs/toolkit';
import * as appSlice from './appSlice';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export const actions = {
  ...appSlice.actions,
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
