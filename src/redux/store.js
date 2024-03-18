import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";
import productReducer from "./productSlice";
import { savedState } from "./constants";

const store = configureStore({
  reducer: {
    card: cardReducer,
    product: productReducer,
  },
  preloadedState: {
    card: savedState ? savedState : undefined,
  },
});

export default store;
