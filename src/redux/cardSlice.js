import { createSlice } from "@reduxjs/toolkit";
import { savedState } from "./constants";

const initialState = savedState
  ? savedState
  : {
      nameCard: "John Smith",
      number: "",
      month: "",
      year: "",
      cvc: "",
      idType: "",
      id: "",
      installments: "",
    };

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    updateCardField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;

      localStorage.setItem("cardState", JSON.stringify(state));
    },
    resetCardState: (state) => {
      localStorage.removeItem("cardState");
      return initialState;
    },
  },
});

export const { updateCardField, resetCardState } = cardSlice.actions;
export default cardSlice.reducer;
