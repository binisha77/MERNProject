import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { AppDispactch, RootState  } from "./store";








 export const useAppDispatch   =  useDispatch.withTypes<AppDispactch>();

 export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector