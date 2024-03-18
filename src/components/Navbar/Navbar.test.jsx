import React from "react";
import { render, screen } from "@testing-library/react";
import NavbarHome from "./index";
import { BrowserRouter as Router } from "react-router-dom";

describe("NavbarHome component", () => {
  test("renders NavbarHome component with correct elements", () => {
    render(
      <Router>
        <NavbarHome />
      </Router>
    );

    // Verifica que el componente se renderice correctamente
    expect(screen.getByTestId("container-navbar")).toBeInTheDocument();
    expect(screen.getByTestId("title")).toHaveTextContent("Store");
    expect(screen.getByTestId("tab-product")).toHaveTextContent("Products");
    expect(
      screen.getByTestId("tab-product").querySelector("a")
    ).toHaveAttribute("href", "/");
  });
});
