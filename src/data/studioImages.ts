// Verified against the photographs: the legacy desktop numbering is the reverse
// of the mobile numbering. Use these named sources instead of inferring a service
// from a numbered filename or mixing a different photo into its thumbnail.
export const studioImages = {
  pilates: {
    src: "/images/hero/hero-slide-2-desktop-1280.webp",
    srcSet:
      "/images/hero/hero-slide-2-desktop-1280.webp 1280w, /images/hero/hero-slide-2-desktop-1920.webp 1920w",
  },
  xbody: {
    src: "/images/hero/hero-slide-1-desktop-1280.webp",
    srcSet:
      "/images/hero/hero-slide-1-desktop-1280.webp 1280w, /images/hero/hero-slide-1-desktop-1920.webp 1920w",
  },
} as const;
