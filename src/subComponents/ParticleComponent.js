import React from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
import * as PropTypes from "prop-types";

//particle config files
import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";
import { loadFull } from "tsparticles";

const Box = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
`;

const ParticleComponent = ({ theme }) => {
  const ParticlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <Box>
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        params={theme === "light" ? configLight : configDark}
        init={ParticlesInit}
      />
    </Box>
  );
};

ParticleComponent.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default ParticleComponent;
