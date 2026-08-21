import type { ReactElement } from "react";
import { render } from "@testing-library/react";
import { LanguageProvider } from "../context/LanguageProvider";

export function renderWithProviders(component: ReactElement) {
  return render(<LanguageProvider>{component}</LanguageProvider>);
}
