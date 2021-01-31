import React, { useRef, useEffect } from "react";
var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5kdHV0aW4iLCJhIjoiY2s4dzRlOXNxMDJnaDNscG13YWpwMHNpMiJ9.jcjb43y3S-SsSPURXdYLiA";

const Map = () => {
  let mapContainer = useRef(null);

  useEffect(() => {
    const node = mapContainer.current;

    if (node) {
      new mapboxgl.Map({
        container: node,
        style: "mapbox://styles/mapbox/light-v10",
        zoom: 11,
        center: [30.30043, 59.919536],
      });
    }
  });

  return (
    <div className="map-wrapper" style={{ flex: "1" }}>
      <div className="map" ref={mapContainer} style={{ height: "100%" }}></div>
    </div>
  );
};

export default Map;
