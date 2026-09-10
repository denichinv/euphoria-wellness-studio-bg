import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/renderWithProviders";
import { About } from "./About";

describe("About", () => {
  beforeEach(() => {
    renderWithProviders(<About />);
  });

  test("should have semantic header (h2) ", () => {
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Спокойна среда. Персонален подход.",
      }),
    ).toBeInTheDocument();
  });

  test("renders the section with correct aria-labelledby", () => {
    const section = screen.getByRole("region");
    expect(section).toHaveAttribute("aria-labelledby", "about-title");
    expect(section).toHaveAttribute("id", "about");
  });

  test("describes the studio image and location", () => {
    expect(
      screen.getByRole("img", {
        name: "Входът на Euphoria Wellness Studio в Благоевград",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/ул\. „Илинден“ № 3 · Благоевград/i),
    ).toBeInTheDocument();
  });
});
