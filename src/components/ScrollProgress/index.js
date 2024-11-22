import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useSpring } from 'framer-motion';
const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(to right, #854CE6, #4a00e0);
  transform-origin: 0%;
  z-index: 1000;
`;
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return <ProgressBar style={{ scaleX }} />;
};
export default ScrollProgress; 