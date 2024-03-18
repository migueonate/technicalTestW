import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Summary from "./index";
import { resetCardState } from "../../redux/cardSlice";
import { resetProductState } from "../../redux/productSlice";
import { fireEvent, render } from "@testing-library/react";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Summary component", () => {
  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  test("renders correctly with product data", () => {
    useSelector.mockReturnValue({
      id: 1,
      name: "Test Product",
      price: 10,
      description: "Test Description",
    });

    const { getByText, getByTestId } = render(<Summary />);

    expect(getByTestId("container-summary")).toBeInTheDocument();
    expect(getByText("Summary")).toBeInTheDocument();
    expect(getByText("Name: Test Product")).toBeInTheDocument();
    expect(getByText("Price: 10")).toBeInTheDocument();
    expect(getByText("Description: Test Description")).toBeInTheDocument();
  });

  test("triggers handleConfirm function when Confirm button is clicked", () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    useSelector.mockReturnValue({
      id: 1,
      name: "Test Product",
      price: 10,
      description: "Test Description",
    });

    const { getByTestId } = render(<Summary />);
    fireEvent.click(getByTestId("button-confirm"));
    expect(dispatchMock).toHaveBeenCalledWith(resetCardState());
    expect(dispatchMock).toHaveBeenCalledWith(resetProductState());
  });
});
