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
    const resetall = screen.getByText("Reset All");
    const submit = screen.getByText("Submit");
    expect(resetall).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });
  it("AddProduct Button clicked pops reset, addmoreproduct and delete button Test", () => {
    render(<AddProductPage />);
    const button = screen.getByText("Add Product");
    fireEvent.click(button);
    const reset = screen.getByText("Reset");
    const deletebtn = screen.getByText("Delete");
    const moreprd = screen.getByText("Add more Product");
    expect(reset).toBeInTheDocument();
    expect(moreprd).toBeInTheDocument();
    expect(deletebtn).toBeInTheDocument();
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
  test("Input Fields Test", () => {
    render(<AddProductPage />);
    const button = screen.getByText("Add Product");
    fireEvent.click(button);
    const textboxes = screen.getAllByRole("textbox");
    for (let i = 0; i < textboxes.length; i++) {
      expect(textboxes[i]).toBeInTheDocument();
    }
  });
  test("specifying inputfield has attribute id or not", () => {
    render(<AddProductPage />);
    const button = screen.getByText("Add Product");
    fireEvent.click(button);
    const textboxes = screen.getAllByRole("textbox");
    for (let i = 0; i < textboxes.length; i++) {
      expect(textboxes[i]).toHaveAttribute("id");
    }
  });
  test("TextInputs are Enabled or not", () => {
    render(<AddProductPage />);
    const button = screen.getByText("Add Product");
    fireEvent.click(button);
    const textboxes = screen.getAllByRole("textbox");
    for (let i = 0; i < textboxes.length; i++) {
      expect(textboxes[i]).toBeEnabled();
    }
  });
  test("Before clicking the  addproduct button there is no inputfields Test", () => {
    render(<AddProductPage />);
    expect(screen.queryByLabelText("Product Name :")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Select Type :")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Brand")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Price")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Description")).not.toBeInTheDocument();
  });
});

describe("Submit Button functionality", () => {
  test("every field filled with some value", () => {
    render(<AddProductPage />);
    const button1 = screen.getByText("Add Product");
    fireEvent.click(button1);
    const button2 = screen.getByText("Submit");
    fireEvent.click(button2);
    expect(screen.getByTestId("product_err")).toBeInTheDocument();
    expect(screen.getByTestId("Type_err")).toBeInTheDocument();
    expect(screen.getByTestId("Brand_err")).toBeInTheDocument();
    expect(screen.getByTestId("Price_err")).toBeInTheDocument();
    expect(screen.getByTestId("Desc_err")).toBeInTheDocument();
  });
});
describe("Delete Button functionality", () => {
  test("after click add then click delete no element should be present Test", () => {
    render(<AddProductPage />);
    const button1 = screen.getByText("Add Product");
    fireEvent.click(button1);
    const button2 = screen.getByText("Delete");
    fireEvent.click(button2);
    expect(screen.queryByLabelText("Product Name :")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Select Type :")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Brand")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Price")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Description")).not.toBeInTheDocument();
  });
});
