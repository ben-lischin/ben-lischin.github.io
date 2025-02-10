import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import type { ISourceOptions, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import particleConfig from "./particleConfig";

interface ParticlesBackgroundProps {
  id?: string;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ id }) => {
  const [, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => (particleConfig),
    []
  );

  return <Particles id={id} options={options} />;
};

export default ParticlesBackground;
