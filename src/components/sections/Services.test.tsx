import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/renderWithProviders";
import { Services } from "./Services";

describe("Services", () => {
  beforeEach(() => renderWithProviders(<Services />));

  it("renders the section heading (h2)", () => {
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Избери как да тренираш.",
      }),
    ).toBeInTheDocument();
  });

  it("presents all three services with enquiry links", () => {
    expect(
      screen.getByRole("heading", { level: 3, name: "Pilates Reformer" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "XBODY EMS" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /Shape Space/ }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: "Искам да опитам" }),
    ).toHaveLength(3);
  });

  it("connects the section to its heading", () => {
    expect(screen.getByRole("region")).toHaveAttribute("id", "services");
    expect(screen.getByRole("region")).toHaveAttribute(
      "aria-labelledby",
      "services-title",
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveAttribute(
      "id",
      "services-title",
    );
  });
});
