import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/renderWithProviders";

import { vi } from "vitest";

vi.mock("../../data/services", () => ({
  services: [
    {
      id: "pilates",
      image: "/pilates.webp",
    },
    {
      id: "xbody",
      image: "/xbody.webp",
    },
  ],
}));

vi.mock("../ui/ServiceCard", () => ({
  ServiceCard: ({ title }: { title: string }) => (
    <div data-testid="service-card">{title}</div>
  ),
}));

import { Services } from "./Services";

describe("Services", () => {
  beforeEach(() => {
    renderWithProviders(<Services />);
  });

  it("renders the section heading (h2)", () => {
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders a card for each service item", () => {
    const cards = screen.getAllByTestId("service-card");
    expect(cards).toHaveLength(2);
  });
});
