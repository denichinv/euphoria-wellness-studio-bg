import { fireEvent, render, screen } from "@testing-library/react";
import { LanguageProvider } from "./LanguageProvider";
import { useLanguage } from "../hooks/useLanguage";

function LanguageControls() {
  const { language, setLanguage } = useLanguage();

  return (
    <>
      <span>{language}</span>

      <button type="button" onClick={() => setLanguage("en")}>
        Select English
      </button>
    </>
  );
}

describe("LanguageProvider", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.lang = "bg";
  });

  test("synchronizes and saves the selected language", () => {
    render(
      <LanguageProvider>
        <LanguageControls />
      </LanguageProvider>,
    );

    expect(document.documentElement).toHaveAttribute("lang", "bg");

    fireEvent.click(
      screen.getByRole("button", {
        name: "Select English",
      }),
    );

    expect(document.documentElement).toHaveAttribute("lang", "en");
    expect(localStorage.getItem("language")).toBe("en");
  });

  test("restores the saved language", () => {
    localStorage.setItem("language", "en");

    render(
      <LanguageProvider>
        <LanguageControls />
      </LanguageProvider>,
    );

    expect(screen.getByText("en")).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute("lang", "en");
  });

  test("falls back to Bulgarian for an invalid stored language", () => {
    localStorage.setItem("language", "invalid");

    render(
      <LanguageProvider>
        <LanguageControls />
      </LanguageProvider>,
    );

    expect(screen.getByText("bg")).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute("lang", "bg");
  });
});
