import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/renderWithProviders";
import { About } from "./About";

describe("About", () => {
  beforeEach(() => {
    renderWithProviders(<About />);
  });

  test("should have semantic header (h2) ", () => {
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  test("renders the section with correct aria-labelledby", () => {
    const section = screen.getByRole("region");
    expect(section).toHaveAttribute("aria-labelledby", "about-title");
    expect(section).toHaveAttribute("id", "about");
  });
});
