import { act, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { ViewportVideo } from "./ViewportVideo";

let intersectionCallback!: IntersectionObserverCallback;

const observe = vi.fn();
const disconnect = vi.fn();

class MockIntersectionObserver {
  root = null;
  rootMargin = "0px";
  thresholds = [0.2];

  constructor(callback: IntersectionObserverCallback) {
    intersectionCallback = callback;
  }

  observe = observe;
  disconnect = disconnect;
  unobserve = vi.fn();
  takeRecords = () => [];
}

describe("ViewportVideo", () => {
  beforeEach(() => {
    observe.mockClear();
    disconnect.mockClear();

    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
    vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  test("plays while visible and pauses while hidden", () => {
    const { container, unmount } = render(
      <ViewportVideo src="/video.mp4" poster="/poster.webp" />,
    );

    const video = container.querySelector("video")!;

    expect(observe).toHaveBeenCalledWith(video);

    act(() => {
      intersectionCallback(
        [
          {
            isIntersecting: true,
            target: video,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledOnce();

    act(() => {
      intersectionCallback(
        [
          {
            isIntersecting: false,
            target: video,
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledOnce();

    unmount();

    expect(disconnect).toHaveBeenCalledOnce();
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(2);
  });

  test("uses deferred-loading video attributes", () => {
    const { container, unmount } = render(
      <ViewportVideo src="/video.mp4" poster="/poster.webp" />,
    );

    const video = container.querySelector("video");
    const source = container.querySelector("source");

    expect(video).toHaveAttribute("poster", "/poster.webp");
    expect(video).toHaveAttribute("preload", "none");
    expect(video).toHaveAttribute("loop");
    expect(video).not.toHaveAttribute("autoplay");
    expect(source).toHaveAttribute("src", "/video.mp4");
    expect(source).toHaveAttribute("type", "video/mp4");

    unmount();
  });
  test("does not play video when reduced motion is preferred", () => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockReturnValue({
        matches: true,
        media: "(prefers-reduced-motion: reduce)",
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }),
    );

    render(<ViewportVideo src="/video.mp4" poster="/poster.webp" />);

    expect(observe).not.toHaveBeenCalled();
    expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled();
  });
});
