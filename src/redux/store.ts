import { Store, configureStore } from "@reduxjs/toolkit";
import * as appSlice from "./appSlice";
import { Context, createWrapper } from "next-redux-wrapper";

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

const makeStore = (context: Context) => store;
export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });
