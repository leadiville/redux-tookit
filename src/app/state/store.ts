import { configureStore } from "@reduxjs/toolkit";
import todoSlice  from "./todo/todoSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      todo: todoSlice,
    },
  });
};

// let's infer the typeof makeStore return objects
export type AppStore = ReturnType<typeof makeStore>;
export type StoreDispatch = AppStore["dispatch"];
export type StoreState = ReturnType<AppStore["getState"]>;
