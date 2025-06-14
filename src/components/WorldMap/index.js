import React from 'react';
import styled from 'styled-components';
import DottedMap from 'dotted-map';

const MapContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DOT_COLOR = '#C0C0C0';
const RED = '#E53935';

// Use a high height for more dots, and a very small dot size
const map = new DottedMap({
  height: 120, // Increase for more dots
  grid: 'vertical',
  dotSize: 0.08, // Very small dots
});

// Add red dot for Telangana, India
map.addPin({
  lat: 18.1124,
  lng: 79.0193,
  svgOptions: {
    color: RED,
    radius: 0.32, // 4x the regular dot size
  },
});

// Add red dot for Melbourne, Australia
map.addPin({
  lat: -37.8136,
  lng: 144.9631,
  svgOptions: {
    color: RED,
    radius: 0.32, // 4x the regular dot size
  },
});

const svgString = map.getSVG({
  radius: 0.08,
  color: DOT_COLOR,
  shape: 'circle',
  background: 'transparent',
});

const WorldMap = () => (
  <MapContainer>
    <div
      style={{ width: '100%', height: 'auto' }}
      dangerouslySetInnerHTML={{ __html: svgString }}
      aria-label="Dotted World Map"
    />
  </MapContainer>
);

export default WorldMap; 