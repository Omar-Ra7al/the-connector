import { Globe } from "@/components/magicui/globe";
import { COBEOptions } from "cobe";
export function GlobeSection() {
  const GLOBE_CONFIG: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => {},
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.5,
    baseColor: [0.886, 0.902, 0.906], // primary
    markerColor: [0.173, 0.259, 0.341], // secondary
    glowColor: [0.886, 0.902, 0.906], // primary

    markers: [
      { location: [24.4539, 54.3773], size: 0.07 }, // UAE - Abu Dhabi
      { location: [24.7136, 46.6753], size: 0.07 }, // KSA - Riyadh
      { location: [26.0667, 50.5577], size: 0.05 }, // BHR - Manama
      { location: [30.0444, 31.2357], size: 0.07 }, // EGY - Cairo
    ],
  };

  return (
    <div className="relative flex items-center justify-center w-[300px] min-h-[160px] max-h-[300px] xl:w-[400px] xl:h-[400px]">
      <Globe className="absolute top-0" config={GLOBE_CONFIG} />
    </div>
  );
}
