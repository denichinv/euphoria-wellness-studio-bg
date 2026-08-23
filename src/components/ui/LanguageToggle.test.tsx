import { fireEvent, render, screen } from "@testing-library/react";
import { LanguageProvider } from "../../context/LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

describe("LanguageToggle", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("marks Bulgarian as selected initially", () => {
    render(
      <LanguageProvider>
        <LanguageToggle />
      </LanguageProvider>,
    );

    expect(screen.getByRole("button", { name: "BG" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    expect(screen.getByRole("button", { name: "EN" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  test("switches the selected language", () => {
    render(
      <LanguageProvider>
        <LanguageToggle />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "EN" }));

    expect(screen.getByRole("button", { name: "EN" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    expect(document.documentElement).toHaveAttribute("lang", "en");
  });
});
