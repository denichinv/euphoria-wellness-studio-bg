import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/renderWithProviders";

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
  test("provides accessible gallery controls", () => {
    expect(
      screen.getByRole("button", { name: "Предишни кадри" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Следващи кадри" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("figure", {
        name: "Снимки и видеа от тренировките в Euphoria",
      }),
    ).toBeInTheDocument();
  });
  test("shows the next responsive image when requested", () => {
    fireEvent.click(screen.getByRole("button", { name: "Следващи кадри" }));

    const image = screen.getByRole("img", {
      name: "Двойка в EMS костюми позират в студиото",
    });

    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("srcset");
    expect(image).toHaveAttribute("sizes");
    expect(image).toHaveAttribute("loading", "lazy");
    expect(image).toHaveAttribute("decoding", "async");
  });
  test("provides poster images for active gallery videos", () => {
    expect(document.querySelector("video")).toHaveAttribute(
      "poster",
      "/images/gallery/gallery-1-poster.webp",
    );

    const nextButton = screen.getByRole("button", { name: "Следващи кадри" });
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(document.querySelector("video")).toHaveAttribute(
      "poster",
      "/images/gallery/gallery-3-poster.webp",
    );
    expect(document.querySelector("video")).not.toHaveAttribute("autoplay");
    expect(document.querySelector("video")).toHaveAttribute("preload", "none");
  });
});
