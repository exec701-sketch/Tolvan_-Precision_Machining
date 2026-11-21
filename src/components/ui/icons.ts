import {
  Aperture,
  Bolt,
  Cog,
  Cpu,
  Crosshair,
  Cylinder,
  Factory,
  HeartPulse,
  Layers,
  Microscope,
  Plane,
  Rotate3d,
  Satellite,
  Zap,
  type LucideIcon,
} from "lucide-react";

/** Maps content-level icon keys to icon components so content files stay free of JSX. */
export const capabilityIcons: Record<string, LucideIcon> = {
  axis: Rotate3d,
  lathe: Cylinder,
  millturn: Cog,
  edm: Zap,
  micro: Microscope,
  additive: Layers,
};

export const industryIcons: Record<string, LucideIcon> = {
  aerospace: Plane,
  defense: Crosshair,
  medical: HeartPulse,
  space: Satellite,
  energy: Bolt,
  semiconductor: Cpu,
  optics: Aperture,
  automation: Factory,
};
