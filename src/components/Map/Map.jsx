import React, { useRef, useEffect, useState } from "react";
//import { makeStyles } from "@material-ui/core/styles";
//import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { mapHasRoute, removeRoute, drawRoute } from "./scripts";
var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

/*
const useStyles = makeStyles((theme) => ({
  mapZindex: {
    zIndex: "100",
  },
}));
*/

const Map = () => {
  //const classes = useStyles();
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const { route: coordinates } = useSelector((state) => state.route);

  useEffect(() => {
    if (map === null) {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiYW5kdHV0aW4iLCJhIjoiY2s4dzRlOXNxMDJnaDNscG13YWpwMHNpMiJ9.jcjb43y3S-SsSPURXdYLiA";
      const mapgl = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v10",
        zoom: 11,
        center: [30.30043, 59.919536],
      });

      mapgl.on("load", () => {
        setMap(mapgl);
      });
    } else {
      if (mapHasRoute(map)) {
        removeRoute(map);
      }
      drawRoute(map, coordinates);
    }
  }, [map, coordinates]);

  return <div ref={mapContainer} style={{ height: "100%", flex: 1 }}></div>;
};

export default React.memo(Map);
