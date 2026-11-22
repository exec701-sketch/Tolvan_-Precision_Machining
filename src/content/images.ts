/**
 * Photo slots. Drop a file at public/<src> and it appears on the site at the next build;
 * until then the slot renders nothing (no placeholder boxes).
 * Use real photos of parts and the shop: 3:2 landscape, at least 1800 px wide, JPG or WebP.
 */

export type PhotoKey = "parts" | "machine" | "inspection" | "floor";

export const photos: Record<PhotoKey, { src: string; alt: string; width: number; height: number }> = {
  parts: {
    src: "/images/parts-closeup.jpg",
    alt: "Machined aluminum housing and titanium fitting on a granite surface plate",
    width: 1800,
    height: 1200,
  },
  machine: {
    src: "/images/five-axis-machine.jpg",
    alt: "Inside a 5-axis machining center cutting an aluminum part",
    width: 1800,
    height: 1200,
  },
  inspection: {
    src: "/images/cmm-inspection.jpg",
    alt: "Coordinate measuring machine probing a machined part in the inspection lab",
    width: 1800,
    height: 1200,
  },
  floor: {
    src: "/images/shop-floor.jpg",
    alt: "Rows of CNC machining centers on the Tolvane shop floor",
    width: 1800,
    height: 1200,
  },
};
