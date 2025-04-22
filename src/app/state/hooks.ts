import { useDispatch, useSelector, useStore } from "react-redux";
import { AppStore, StoreDispatch, StoreState } from "./store";

export const AppDispatch = useDispatch.withTypes<StoreDispatch>();
export const AppState = useSelector.withTypes<StoreState>();
export const useAppStore = useStore.withTypes<AppStore>();
