import { fireEvent, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../test/renderWithProviders";

import { vi } from "vitest";
import { Contact } from "./Contact";

describe("Contact", () => {
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

    expect(document.querySelector("form")).toBeTruthy();
    expect(document.querySelector("#name")).toHaveValue("Vilizar D");
    expect(document.querySelector("#email")).toHaveValue("vd@example.com");
  });
  afterEach(() => {
    vi.unstubAllGlobals();
  });
});
