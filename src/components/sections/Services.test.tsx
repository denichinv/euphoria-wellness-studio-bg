import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("../../data/services", () => ({
  services: [
    { id: "s1", title: "Service A", description: "", image: "", features: [] },
    { id: "s2", title: "Service B", description: "", image: "", features: [] },
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
    render(<Services />);
  });

  it("renders the section heading (h2)", () => {
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders a card for each service item", () => {
    const cards = screen.getAllByTestId("service-card");
    expect(cards).toHaveLength(2);
  });
});
