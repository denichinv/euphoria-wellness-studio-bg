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
  test("synchronizes the document language", () => {
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
  });
});
