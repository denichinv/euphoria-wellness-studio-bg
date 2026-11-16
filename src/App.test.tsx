import { fireEvent, screen, waitFor, within } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App";
import { renderWithProviders } from "./test/renderWithProviders";

describe("Service enquiry journey", () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.unstubAllGlobals());

  test("keeps an explicit service choice across languages, submits it and clears it after success", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);
    renderWithProviders(<App />);

    expect(screen.getByRole("combobox")).toHaveValue("");
    const shape = within(document.getElementById("shape-space")!);
    fireEvent.click(shape.getByRole("link", { name: "Искам да опитам" }));
    expect(screen.getByRole("combobox")).toHaveValue("shape");

    fireEvent.click(screen.getByRole("button", { name: "EN" }));
    expect(screen.getByRole("combobox")).toHaveValue("shape");
    expect(screen.getByRole("option", { name: "Shape Space" })).toHaveProperty(
      "selected",
      true,
    );
    fireEvent.change(screen.getByRole("textbox", { name: "Full Name" }), {
      target: { value: "Studio visitor" },
    });
    fireEvent.change(screen.getByRole("textbox", { name: "Email Address" }), {
      target: { value: "visitor@example.com" },
    });
    fireEvent.submit(document.querySelector("form")!);

    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: "Send another request" }),
      ).toBeInTheDocument(),
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const body = new URLSearchParams(fetchMock.mock.calls[0][1].body);
    expect(body.get("service")).toBe("shape");
    expect(body.get("form-name")).toBe("contact");

    fireEvent.click(
      screen.getByRole("button", { name: "Send another request" }),
    );
    expect(screen.getByRole("combobox")).toHaveValue("");
  });
});
