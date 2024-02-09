import AddProductPage from "../AddProductPage";
import { fireEvent, render, screen } from "@testing-library/react";

describe("AddProductPage Test", () => {
  test("Rendering Test", () => {
    render(<AddProductPage />);
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
