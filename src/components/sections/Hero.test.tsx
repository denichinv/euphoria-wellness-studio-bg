import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/renderWithProviders";

import { Hero } from "./Hero";

describe("Hero section", () => {
  beforeEach(() => {
    renderWithProviders(<Hero />);
  });

  it("renders main heading", () => {
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders description paragraph", () => {
    expect(
      screen.getByText(/pilates reformer/i, { selector: "p" }),
    ).toBeInTheDocument();
  });

  it("renders links with correct hrefs", () => {
    expect(screen.getByRole("link", { name: "Запази час" })).toHaveAttribute(
      "href",
      "#contact",
    );

    expect(screen.getByRole("link", { name: "Виж услугите" })).toHaveAttribute(
      "href",
      "#services",
    );
  });
});
