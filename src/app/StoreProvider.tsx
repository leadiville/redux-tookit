"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "./state/store";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>(null);
  if(!storeRef.current) {
    storeRef.current =  makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};
