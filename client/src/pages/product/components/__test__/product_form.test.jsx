import { render, screen } from "@testing-library/react";
import ProductForm from "../product_form";

describe("ProductForm create product", () => {
  it("render empty product name field", () => {
    render(<ProductForm submitHandler={() => null} />);
    const nameElement = screen.getByLabelText("Product name");
    expect(nameElement.value).toBe("");
  });
  it("render disabled submit button", () => {
    render(<ProductForm submitHandler={() => null} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveAttribute("disabled");
  });
});

describe("ProductForm edit product", () => {
  it("render populated product name field", () => {
    const productName = "Arctic Chill Winter Coat";
    const testProduct = {
      id: 5,
      name: productName,
      type: "outerwear",
      sizes: ["M", "L", "XL"],
      features: ["Insulated for warmth", "Removable hood", "Multiple pockets"],
      brand: "ExtremeGear",
      materials: "Graphene",
    };
    render(<ProductForm product={testProduct} submitHandler={() => null} />);
    const nameElement = screen.getByLabelText("Product name");
    expect(nameElement).toHaveValue(productName);
  });
});
