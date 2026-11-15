import { act, cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { ViewportVideo } from "./ViewportVideo";

let intersectionCallback!: IntersectionObserverCallback;
let pageVisibility: "visible" | "hidden" = "visible";
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

function notifyIntersection(video: HTMLVideoElement, ratio: number) {
  act(() => {
    intersectionCallback(
      [
        {
          isIntersecting: ratio > 0,
          intersectionRatio: ratio,
          target: video,
          boundingClientRect: video.getBoundingClientRect(),
          intersectionRect: video.getBoundingClientRect(),
          rootBounds: null,
          time: 0,
        },
      ],
      {} as IntersectionObserver,
    );
  });
}

describe("ViewportVideo", () => {
  beforeEach(() => {
    observe.mockClear();
    disconnect.mockClear();
    pageVisibility = "visible";
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
    vi.spyOn(document, "visibilityState", "get").mockImplementation(
      () => pageVisibility,
    );
    vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  test("plays once sufficiently visible and pauses offscreen and on unmount", () => {
    const { container, unmount } = render(
      <ViewportVideo
        src="/video.mp4"
        poster="/poster.webp"
        label="Studio training"
      />,
    );
    const video = container.querySelector("video")!;
    expect(observe).toHaveBeenCalledWith(video);

    notifyIntersection(video, 0.1);
    expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled();
    notifyIntersection(video, 0.5);
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledOnce();
    notifyIntersection(video, 0);
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(2);
    unmount();
    expect(disconnect).toHaveBeenCalledOnce();
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(3);
  });

  test("uses muted inline playback with accessible controls and deferred loading", () => {
    const { container } = render(
      <ViewportVideo
        src="/video.mp4"
        poster="/poster.webp"
        label="Studio training"
      />,
    );
    const video = container.querySelector("video")!;
    expect(video).toHaveAttribute("poster", "/poster.webp");
    expect(video).toHaveAttribute("preload", "none");
    expect(video).toHaveAttribute("loop");
    expect(video).toHaveAttribute("playsinline");
    expect(video.muted).toBe(true);
    expect(video).toHaveAttribute("controls");
    expect(video).toHaveAccessibleName("Studio training");
    expect(video).not.toHaveAttribute("aria-hidden", "true");
    // Playback is requested by the visibility observer, never offscreen by HTML autoplay.
    expect(video).not.toHaveAttribute("autoplay");
    expect(container.querySelector("source")).toHaveAttribute(
      "src",
      "/video.mp4",
    );
  });

  test("keeps playback manual when reduced motion is preferred", () => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockReturnValue({
        matches: true,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }),
    );
    const { container } = render(
      <ViewportVideo src="/video.mp4" label="Studio training" />,
    );
    expect(observe).not.toHaveBeenCalled();
    expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled();
    expect(container.querySelector("video")).toHaveAttribute("controls");
  });

  test("pauses in a hidden tab and resumes only if still in view", () => {
    const { container } = render(
      <ViewportVideo src="/video.mp4" label="Studio training" />,
    );
    const video = container.querySelector("video")!;
    notifyIntersection(video, 1);
    pageVisibility = "hidden";
    act(() => document.dispatchEvent(new Event("visibilitychange")));
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledOnce();

    pageVisibility = "visible";
    act(() => document.dispatchEvent(new Event("visibilitychange")));
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(2);

    notifyIntersection(video, 0);
    pageVisibility = "hidden";
    act(() => document.dispatchEvent(new Event("visibilitychange")));
    pageVisibility = "visible";
    act(() => document.dispatchEvent(new Event("visibilitychange")));
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(2);
  });

  test("stops the previous source and observes the replacement video", () => {
    const { container, rerender } = render(
      <ViewportVideo src="/first.mp4" label="First session" />,
    );
    const first = container.querySelector("video")!;
    notifyIntersection(first, 1);
    rerender(<ViewportVideo src="/second.mp4" label="Second session" />);
    const second = container.querySelector("video")!;
    expect(second).not.toBe(first);
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledOnce();
    expect(vi.mocked(HTMLMediaElement.prototype.pause).mock.contexts[0]).toBe(
      first,
    );
    expect(observe).toHaveBeenLastCalledWith(second);
    expect(second.querySelector("source")).toHaveAttribute(
      "src",
      "/second.mp4",
    );
  });

  test("retains manual controls if the browser rejects automatic playback", async () => {
    vi.mocked(HTMLMediaElement.prototype.play).mockRejectedValueOnce(
      new Error("Autoplay blocked"),
    );
    const { container } = render(
      <ViewportVideo src="/video.mp4" label="Studio training" />,
    );
    notifyIntersection(container.querySelector("video")!, 1);
    await act(async () => {
      await Promise.resolve();
    });
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledOnce();
    expect(container.querySelector("video")).toHaveAttribute("controls");
  });
});
