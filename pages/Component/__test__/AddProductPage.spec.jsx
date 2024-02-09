import AddProductPage from "../AddProductPage";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

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
describe("Select Type Options Test", () => {
  test("Select Type in the document or not Test", () => {
    render(<AddProductPage />);
    const button1 = screen.getByText("Add Product");
    fireEvent.click(button1);
    expect(screen.getByLabelText("Select Type :")).toBeInTheDocument();
  });
  test("Select Type has options or not Test", () => {
    render(<AddProductPage />);
    const button1 = screen.getByText("Add Product");
    fireEvent.click(button1);
    const selecttype = screen.getByLabelText("Select Type :");
    fireEvent.mouseDown(selecttype);
    const options = screen.getAllByRole("option");
    const itemsopt = ["", "Android", "iOS", "Laptop", "Others"];
    for (let i = 0, j = 0; i < options.length; i++, j++) {
      expect(options[i]).toHaveTextContent(itemsopt[j]);
    }
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
describe("Reset Button functionality", () => {
  test("after click add then click all the fields are empty Test", () => {
    render(<AddProductPage />);
    const button1 = screen.getByText("Add Product");
    fireEvent.click(button1);

    const productInput = screen.getByLabelText("Product Name :");
    const selectTypeInput = screen.getByLabelText("Select Type :");
    const brandInput = screen.getByLabelText("Brand");
    const priceInput = screen.getByLabelText("Price");
    const descriptionInput = screen.getByLabelText("Description");
    fireEvent.change(productInput, { target: { value: "Test Product" } });
    fireEvent.change(selectTypeInput, { target: { value: "Android" } });
    fireEvent.change(brandInput, { target: { value: "Test Brand" } });
    fireEvent.change(priceInput, { target: { value: "200" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Test Description" },
    });
    const button2 = screen.getByText("Reset");
    fireEvent.click(button2);

    expect(productInput.value).toBe("");
    expect(selectTypeInput.value).toBe("");
    expect(brandInput.value).toBe("");
    // expect(priceInput.value).toBe("0");
    expect(descriptionInput.value).toBe("");
  });
});
