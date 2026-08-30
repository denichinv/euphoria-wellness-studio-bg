import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../test/renderWithProviders";

import { vi } from "vitest";
import { Contact } from "./Contact";

describe("Contact", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test("renders form by default", () => {
    renderWithProviders(<Contact />);

    expect(document.querySelector("form")).toBeTruthy();
    expect(document.querySelector('button[type="submit"]')).toBeTruthy();
    expect(document.querySelector('button[type="button"]')).toBeNull();
  });

  test("shows success state after filling required fields and submitting", async () => {
    vi.stubGlobal("fetch", () => Promise.resolve({ ok: true }));

    renderWithProviders(<Contact />);

    fireEvent.change(document.querySelector("#name")!, {
      target: { value: "Vilizar D" },
    });

    fireEvent.change(document.querySelector("#email")!, {
      target: { value: "vd@example.com" },
    });

    fireEvent.submit(document.querySelector("form")!);

    await waitFor(() => {
      expect(document.querySelector("form")).toBeNull();
    });
    expect(screen.getByRole("status")).toBeInTheDocument();

    expect(document.querySelector('button[type="button"]')).toBeTruthy();
  });

  test("keeps the form visible when submission fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));

    renderWithProviders(<Contact />);

    fireEvent.change(document.querySelector("#name")!, {
      target: { value: "Vilizar D" },
    });

    fireEvent.change(document.querySelector("#email")!, {
      target: { value: "vd@example.com" },
    });

    fireEvent.submit(document.querySelector("form")!);

    await waitFor(() => {
      expect(document.querySelector('[role="alert"]')).toBeTruthy();
    });
    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent(
        "Съобщението не беше изпратено",
      );
    });

    expect(document.querySelector("form")).toBeTruthy();
    expect(document.querySelector("#name")).toHaveValue("Vilizar D");
    expect(document.querySelector("#email")).toHaveValue("vd@example.com");
  });

  test("disables the submit button while submitting", () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => new Promise<{ ok: boolean }>(() => {})),
    );

    renderWithProviders(<Contact />);

    fireEvent.change(
      screen.getByRole("textbox", { name: /^име и фамилия$/i }),
      {
        target: { value: "Vilizar D" },
      },
    );

    fireEvent.change(screen.getByRole("textbox", { name: /^имейл адрес$/i }), {
      target: { value: "vd@example.com" },
    });

    fireEvent.submit(document.querySelector("form")!);

    const submitButton = screen.getByRole("button", {
      name: "Изпращане...",
    });

    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveAttribute("aria-busy", "true");
  });
  test("shows an error and preserves values after a network failure", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("Network unavailable")),
    );

    renderWithProviders(<Contact />);

    const nameInput = screen.getByRole("textbox", {
      name: /^име и фамилия$/i,
    });

    const emailInput = screen.getByRole("textbox", {
      name: /^имейл адрес$/i,
    });

    fireEvent.change(nameInput, {
      target: { value: "Vilizar D" },
    });

    fireEvent.change(emailInput, {
      target: { value: "vd@example.com" },
    });

    fireEvent.submit(document.querySelector("form")!);

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Съобщението не беше изпратено",
    );

    expect(nameInput).toHaveValue("Vilizar D");
    expect(emailInput).toHaveValue("vd@example.com");
  });
  test("submits URL-encoded form data", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue({ ok: true } as Response);

    vi.stubGlobal("fetch", fetchMock);

    renderWithProviders(<Contact />);

    fireEvent.change(
      screen.getByRole("textbox", {
        name: /^име и фамилия$/i,
      }),
      {
        target: { value: "Vilizar D" },
      },
    );

    fireEvent.change(
      screen.getByRole("textbox", {
        name: /^имейл адрес$/i,
      }),
      {
        target: { value: "vd@example.com" },
      },
    );

    fireEvent.change(
      screen.getByRole("textbox", {
        name: /^телефонен номер$/i,
      }),
      {
        target: { value: "+359 888 123 456" },
      },
    );

    fireEvent.submit(document.querySelector("form")!);

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    const [url, options] = fetchMock.mock.calls[0];

    expect(url).toBe("/");
    expect(options?.method).toBe("POST");

    expect(options?.headers).toEqual({
      "Content-Type": "application/x-www-form-urlencoded",
    });

    const body = new URLSearchParams(String(options?.body));

    expect(body.get("form-name")).toBe("contact");
    expect(body.get("name")).toBe("Vilizar D");
    expect(body.get("email")).toBe("vd@example.com");
    expect(body.get("phone")).toBe("+359 888 123 456");
    expect(body.get("service")).toBe("pilates");
  });
});
