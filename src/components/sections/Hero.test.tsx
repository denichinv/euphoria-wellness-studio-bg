import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/renderWithProviders";

import { Hero } from "./Hero";

describe("Hero section", () => {
  beforeEach(() => {
    renderWithProviders(<Hero />);
  });

  it("renders main heading", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Пилатес реформър\s*& XBody EMS/i,
    );
    expect(
      screen.getByText("Euphoria Wellness Studio · Благоевград"),
    ).toBeInTheDocument();
  });

  it("renders description paragraph", () => {
    expect(
      screen.getByText(/индивидуални тренировки с персонално внимание/i, {
        selector: "p",
      }),
    ).toBeInTheDocument();
  });

  it("renders links with correct hrefs", () => {
    expect(screen.getByRole("link", { name: "Заяви час" })).toHaveAttribute(
      "href",
      "#contact",
    );

    expect(
      screen.getByRole("link", { name: "Разгледай услугите" }),
    ).toHaveAttribute("href", "#services");
  });

  it("provides responsive sources for each hero slide", () => {
    const pictures = document.querySelectorAll("picture");

    expect(pictures).toHaveLength(2);

    pictures.forEach((picture) => {
      const source = picture.querySelector("source");
      const image = picture.querySelector("img");

      expect(source).toHaveAttribute("media", "(min-width: 768px)");
      expect(source).toHaveAttribute("srcset");
      expect(source).toHaveAttribute("sizes", "100vw");
      expect(image).toHaveAttribute("src");
      expect(image).toHaveAttribute("srcset");
      expect(image).toHaveAttribute("sizes", "100vw");
      expect(image).toHaveAttribute("alt", "");
    });
  });
});
