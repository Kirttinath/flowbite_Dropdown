import AddProductPage from "../AddProductPage";
import { fireEvent, render, screen } from "@testing-library/react";

describe("AddProductPage Test", () => {
  test("Rendering Test", () => {
    render(<AddProductPage />);
  });
  test("Buttons In The Page", () => {
    render(<AddProductPage />);
    const buttons = screen.getAllByRole("button");
    for (let i = 0; i < buttons.length; i++) {
      expect(buttons[i]).toBeInTheDocument();
    }
  });
  test("Specify the Buttons In the page", () => {
    render(<AddProductPage />);
    const reset = screen.getByText("Reset All");
    const submit = screen.getByText("Submit");
    expect(reset).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });
  test("Addproduct Button Click", () => {
    render(<AddProductPage />);
    const button = screen.getByText("Add Product");
    fireEvent.click(button);
    expect(screen.getByLabelText("Product Name :")).toBeInTheDocument();
    expect(screen.getByLabelText("Select Type :")).toBeInTheDocument();
    expect(screen.getByLabelText("Brand")).toBeInTheDocument();
    expect(screen.getByLabelText("Price")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
  });
});
