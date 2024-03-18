import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CardProduct from "./index";
import { useDispatch } from "react-redux";
import { selectProduct } from "../../redux/productSlice";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("CardProduct component", () => {
  test("renders CardProduct component", () => {
    const mockItem = {
      imageUrl: "example.jpg",
      name: "Product Name",
      description: "Product Description",
      price: 10.99,
    };

    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    render(<CardProduct item={mockItem} />);

    expect(screen.getByTestId("container-card-product")).toBeInTheDocument();
    expect(screen.getByTestId("card-image")).toBeInTheDocument();
    expect(screen.getByTestId("card-title")).toHaveTextContent("Product Name");
    expect(screen.getByTestId("card-description")).toHaveTextContent(
      "Product Description"
    );
    expect(screen.getByTestId("card-price")).toHaveTextContent("$ 10.99");
  });

  test("handles product selection and show modal on button click", () => {
    const mockItem = {
      imageUrl: "example.jpg",
      name: "Product Name",
      description: "Product Description",
      price: 10.99,
    };

    const mockDispatch = jest.fn();
    const mockSetShow = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    render(<CardProduct item={mockItem} setShow={mockSetShow} />);

    fireEvent.click(screen.getByTestId("card-button-pay"));

    expect(mockDispatch).toHaveBeenCalledWith(selectProduct(mockItem));

    expect(mockSetShow).toHaveBeenCalledWith(true);
  });
});
