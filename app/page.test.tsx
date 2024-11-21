import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

describe("Page", () => {
  test("renders the page", () => {
    render(<Page />);
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
  });
});
