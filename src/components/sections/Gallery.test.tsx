import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/renderWithProviders";

import { Gallery } from "./Gallery";
import { galleryItems } from "../../data/gallery";
import { bg } from "../../i18n/bg";

describe("Gallery section", () => {
  beforeEach(() => {
    renderWithProviders(<Gallery />);
  });

  test("renders the gallery section with correct aria attributes", () => {
    const section = screen.getByRole("region");

    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "gallery");
    expect(section).toHaveAttribute("aria-labelledby", "gallery-title");
  });

  test("renders a semantic level 2 heading", () => {
    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "gallery-title");
  });
  test("provides accessible gallery controls", () => {
    expect(
      screen.getByRole("button", { name: "Предишни кадри" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Следващи кадри" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("figure", {
        name: "Снимки и видеа от тренировките в Euphoria",
      }),
    ).toBeInTheDocument();
  });
  test("shows the next responsive image when requested", () => {
    fireEvent.click(screen.getByRole("button", { name: "Следващи кадри" }));

    const image = screen.getByRole("img", {
      name: "Двойка в EMS костюми позират в студиото",
    });

    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("srcset");
    expect(image).toHaveAttribute("sizes");
    expect(image).toHaveAttribute("loading", "lazy");
    expect(image).toHaveAttribute("decoding", "async");
  });
  test("provides poster images for active gallery videos", () => {
    expect(document.querySelector("video")).toHaveAttribute(
      "poster",
      "/images/gallery/gallery-1-poster.webp",
    );

    const nextButton = screen.getByRole("button", { name: "Следващи кадри" });
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(document.querySelector("video")).toHaveAttribute(
      "poster",
      "/images/gallery/gallery-3-poster.webp",
    );
    expect(document.querySelector("video")).not.toHaveAttribute("autoplay");
    expect(document.querySelector("video")).toHaveAttribute("preload", "none");
    expect(document.querySelector("video")).toHaveAttribute("controls");
  });

  test("filters media, wraps within the selection and resets when changing category", () => {
    fireEvent.click(screen.getByRole("button", { name: "Shape Space" }));
    expect(screen.getByRole("status")).toHaveTextContent("01 / 06");
    expect(
      screen.getByRole("img", {
        name: "Shape Space в студиото — изглед към машината",
      }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Предишни кадри" }));
    expect(screen.getByRole("status")).toHaveTextContent("06 / 06");
    fireEvent.click(screen.getByRole("button", { name: "Следващи кадри" }));
    expect(screen.getByRole("status")).toHaveTextContent("01 / 06");

    fireEvent.click(screen.getByRole("button", { name: "Студиото" }));
    expect(screen.getByRole("status")).toHaveTextContent("01 / 07");
    expect(screen.getByRole("button", { name: "Студиото" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  test("shows training copy separately from accessible image descriptions", () => {
    expect(
      screen.getByText("Контролът е в малките движения."),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "На реформъра работиш с пружинно съпротивление и внимание към изпълнението.",
      ),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Shape Space" }));
    expect(screen.getByText("Нещо ново за твоята рутина.")).toBeInTheDocument();
    expect(
      screen.queryByText("Shape Space в студиото — изглед към машината"),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: "Shape Space в студиото — изглед към машината",
      }),
    ).toBeInTheDocument();
  });

  test.each([
    {
      filter: "Pilates",
      ids: [
        "reformer-video",
        "reformer-duo",
        "reformer-training",
        "reformer-room",
        "reformer-detail",
        "pilates-room",
      ],
    },
    {
      filter: "XBODY",
      ids: [
        "ems-coaches",
        "ems-video",
        "kettlebell",
        "studio-training",
        "ems-corner",
        "ems-equipment",
        "xbody-room",
      ],
    },
    {
      filter: "Shape Space",
      ids: [
        "shape-space",
        "shape-session",
        "shape-interior",
        "shape-in-use",
        "shape-front",
        "studio-training",
      ],
    },
    {
      filter: "Студиото",
      ids: [
        "reformer-room",
        "reformer-detail",
        "ems-corner",
        "ems-equipment",
        "pilates-room",
        "xbody-room",
        "studio-entrance",
      ],
    },
  ])("shows only the reviewed media for $filter", ({ filter, ids }) => {
    fireEvent.click(screen.getByRole("button", { name: filter }));
    for (const item of galleryItems) {
      const thumbnail = screen.queryByRole("button", {
        name: bg.gallery.alts[item.altKey],
      });
      if (ids.includes(item.id)) expect(thumbnail).toBeInTheDocument();
      else expect(thumbnail).not.toBeInTheDocument();
    }
  });

  test("opens the shared clip in both service filters without duplicating it in All", () => {
    for (const filter of ["XBODY", "Shape Space"]) {
      fireEvent.click(screen.getByRole("button", { name: filter }));
      fireEvent.click(
        screen.getByRole("button", { name: bg.gallery.alts.studioTraining }),
      );
      expect(document.querySelector("video source")).toHaveAttribute(
        "src",
        "/images/refresh/studio-training.mp4",
      );
    }
    fireEvent.click(screen.getByRole("button", { name: "Всички" }));
    expect(screen.getByRole("status")).toHaveTextContent("01 / 19");
    for (const item of galleryItems) {
      expect(
        screen.getAllByRole("button", { name: bg.gallery.alts[item.altKey] }),
      ).toHaveLength(1);
    }
  });

  test("matches room thumbnails and full images to their actual service", () => {
    for (const [filter, altKey, source] of [
      ["Pilates", "pilatesRoom", "/images/hero/hero-slide-2-desktop-1280.webp"],
      ["XBODY", "xbodyRoom", "/images/hero/hero-slide-1-desktop-1280.webp"],
    ]) {
      fireEvent.click(screen.getByRole("button", { name: filter }));
      const thumbnail = screen.getByRole("button", {
        name: bg.gallery.alts[altKey],
      });
      expect(thumbnail.querySelector("img")).toHaveAttribute("src", source);
      fireEvent.click(thumbnail);
      expect(
        screen.getByRole("img", { name: bg.gallery.alts[altKey] }),
      ).toHaveAttribute("src", source);
    }
  });
});
