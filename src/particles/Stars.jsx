import { useCallback } from "react";
import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";

function Stars() {
  const particlesInit = useCallback(async (engine) => {
    return await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "stars",
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            density: {
              enable: true,
            },
            value: 150,
          },
        },
      }}
    />
  );
}

export default Stars;
