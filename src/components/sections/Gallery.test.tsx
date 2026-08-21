import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/renderWithPorviders";

import { Gallery } from "./Gallery";

describe("Gallery section", () => {
  beforeEach(() => {
    renderWithProviders(<Gallery />);
  });

  test("renders the gallery section with correct aria attributes", () => {
    const section = screen.getByRole("region");

    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "gallery");
    expect(section).toHaveAttribute("aria-labelledby", "gallery-title");
  });

  test("renders a semantic level 2 heading", () => {
    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "gallery-title");
  });
  test("renders at least one gallery item", () => {
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBeGreaterThan(0);
  });
});
