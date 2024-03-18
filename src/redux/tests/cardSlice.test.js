import { updateCardField, resetCardState } from "../cardSlice";
import cardReducer from "../cardSlice";
import "jest-localstorage-mock";

describe("cardSlice", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should return the initial state", () => {
    expect(cardReducer(undefined, {})).toEqual({
      nameCard: "John Smith",
      number: "",
      month: "",
      year: "",
      cvc: "",
      idType: "",
      id: "",
      installments: "",
    });
  });

  it("should handle updateCardField action", () => {
    const field = "number";
    const value = "5555 4444 3333 1111";

    const action = updateCardField({ field, value });
    const newState = cardReducer(undefined, action);

    expect(newState[field]).toEqual(value);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cardState",
      JSON.stringify(newState)
    );
  });

  it("should handle resetCardState action", () => {
    localStorage.setItem(
      "cardState",
      JSON.stringify({
        nameCard: "Test Name",
        number: "Test Number",
        month: "Test Month",
        year: "Test Year",
        cvc: "Test CVC",
        idType: "Test ID Type",
        id: "Test ID",
        installments: "Test Installments",
      })
    );

    const action = resetCardState();
    const newState = cardReducer(undefined, action);

    expect(newState).toEqual({
      nameCard: "John Smith",
      number: "",
      month: "",
      year: "",
      cvc: "",
      idType: "",
      id: "",
      installments: "",
    });

    expect(localStorage.removeItem).toHaveBeenCalledWith("cardState");
  });
});
