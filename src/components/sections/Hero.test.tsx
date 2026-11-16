import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/renderWithProviders";
import { Hero } from "./Hero";

describe("Hero section", () => {
  beforeEach(() => localStorage.clear());

  it("renders the main heading and location", () => {
    renderWithProviders(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Промяната\s*започва с теб\./i,
    );
    expect(
      screen.getByText("Euphoria Wellness Studio · Благоевград"),
    ).toBeInTheDocument();
  });

  it("introduces all three services", () => {
    renderWithProviders(<Hero />);
    expect(
      screen.getByText(
        /Pilates Reformer, XBODY EMS и Shape Space в Благоевград/i,
        { selector: "p" },
      ),
    ).toBeInTheDocument();
  });

  it("links to the enquiry form and services", () => {
    renderWithProviders(<Hero />);
    expect(screen.getByRole("link", { name: "Заяви час" })).toHaveAttribute(
      "href",
      "#contact",
    );
    expect(
      screen.getByRole("link", { name: "Разгледай услугите" }),
    ).toHaveAttribute("href", "#services");
  });

  it("provides responsive sources for the studio photo", () => {
    renderWithProviders(<Hero />);
    const pictures = document.querySelectorAll("picture");
    expect(pictures).toHaveLength(1);
    pictures.forEach((picture) => {
      expect(picture.querySelector("source")).toHaveAttribute("srcset");
      expect(picture.querySelector("img")).toHaveAttribute("srcset");
      expect(picture.querySelector("img")).toHaveAttribute("sizes");
    });
    expect(
      screen.getByRole("img", {
        name: "Pilates Reformer оборудване в залата с огледала",
      }),
    ).toBeInTheDocument();
  });

  it("shows only the selected static Pilates studio photo", () => {
    renderWithProviders(<Hero />);
    expect(screen.getAllByRole("img")).toHaveLength(1);
    const image = screen.getByRole("img", {
      name: "Pilates Reformer оборудване в залата с огледала",
    });
    expect(image).toHaveAttribute(
      "src",
      "/images/refresh/reformer-room-1280.webp",
    );
    expect(image).toHaveAttribute("width", "1280");
    expect(image).toHaveAttribute("height", "1707");
    expect(
      screen.queryByRole("img", {
        name: "Залата за XBODY EMS с оборудване и тренировъчни костюми",
      }),
    ).not.toBeInTheDocument();
  });
});
