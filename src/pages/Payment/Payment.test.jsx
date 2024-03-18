import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Payment from "./index";
import { useDispatch, useSelector } from "react-redux";
import { updateCardField } from "../../redux/cardSlice";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../../redux/cardSlice", () => ({
  updateCardField: jest.fn(),
}));

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Payment component", () => {
  beforeEach(() => {
    useDispatch.mockClear();
    useSelector.mockClear();
    updateCardField.mockClear();
  });

  test("renders Payment component", () => {
    const formState = {
      nameCard: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
      idType: "",
      id: "",
      installments: "",
    };

    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue(formState);

    render(<Payment />);

    expect(screen.getByTestId("container-form")).toBeInTheDocument();
  });

  test("handles form submission correctly when buttons are not disabled", () => {
    const mockShow = jest.fn();
    const mockDispatch = jest.fn();
    const formState = {
      nameCard: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
      idType: "",
      id: "",
      installments: "",
    };

    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockReturnValue(formState);

    render(<Payment setShow={mockShow} />);
    fireEvent.click(screen.getByTestId("submit-button"));

    expect(mockShow).toHaveBeenCalled();
  });

  test("handles form submission correctly when buttons are disabled", () => {
    const mockNavigate = jest.fn();
    const mockShow = jest.fn();
    const mockDispatch = jest.fn();
    const formState = {
      nameCard: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
      idType: "",
      id: "",
      installments: "",
    };

    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockReturnValue(formState);

    render(<Payment setShow={mockShow} disableButtons />);

    fireEvent.click(screen.getByTestId("submit-button"));

    expect(mockShow).toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
