import AddProductPage from "../AddProductPage";
import { render, screen } from "@testing-library/react";

describe("AddProductPage Test", () => {
  test("Rendering Test", () => {
    render(<AddProductPage />);
  });
});
