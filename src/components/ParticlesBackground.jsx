import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const reducedMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Animated network of dots behind the whole site. */
export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);
  const calm = reducedMotion();

  useEffect(() => {
    if (calm) return;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, [calm]);

  const options = useMemo(() => {
    const c1 = "#2f6b4f";
    const c2 = "#a95a33";
    const small = window.innerWidth < 768;
    return {
      fullScreen: { enable: true, zIndex: -1 },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 90, density: { enable: true, width: 1920, height: 1080 } },
        color: { value: [c1, c2] },
        links: { enable: true, color: c1, distance: 150, opacity: 0.16, width: 1 },
        move: { enable: true, speed: 0.55, outModes: { default: "out" } },
        opacity: { value: { min: 0.25, max: 0.5 } },
        size: { value: { min: 1, max: 2.6 } },
      },
      interactivity: {
        detectsOn: "window",
        events: { onHover: { enable: !small, mode: "grab" } },
        modes: { grab: { distance: 170, links: { opacity: 0.45 } } },
      },
    };
  }, []);

  if (calm || !ready) return null;
  return <Particles id="tsparticles" options={options} />;
}
