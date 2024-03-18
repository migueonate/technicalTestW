import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: "",
  price: 0,
  description: "",
  imageUrl: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      return action.payload;
    },
    resetProductState: () => {
      return initialState;
    },
  },
});

export const { selectProduct, resetProductState } = productSlice.actions;
export default productSlice.reducer;
