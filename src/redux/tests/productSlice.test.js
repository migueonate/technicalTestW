import { selectProduct, resetProductState } from "../productSlice";
import productReducer from "../productSlice";

describe("productSlice", () => {
  const initialState = {
    id: null,
    name: "",
    price: 0,
    description: "",
    imageUrl: "",
  };

  it("should return the initial state", () => {
    expect(productReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle selectProduct action", () => {
    const selectedProduct = {
      id: "1",
      name: "Example Product",
      price: 10,
      description: "Example Description",
      imageUrl: "example.jpg",
    };
    expect(
      productReducer(initialState, selectProduct(selectedProduct))
    ).toEqual(selectedProduct);
  });

  it("should handle resetProductState action", () => {
    const modifiedState = {
      id: "1",
      name: "Example Product",
      price: 10,
      description: "Example Description",
      imageUrl: "example.jpg",
    };
    expect(productReducer(modifiedState, resetProductState())).toEqual(
      initialState
    );
  });
});
