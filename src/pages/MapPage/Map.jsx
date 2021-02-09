import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5kdHV0aW4iLCJhIjoiY2s4dzRlOXNxMDJnaDNscG13YWpwMHNpMiJ9.jcjb43y3S-SsSPURXdYLiA";

const useStyles = makeStyles((theme) => ({
  mapZindex: {
    zIndex: "100",
  },
}));

const drawRoute = (map, coordinates) => {
  if (coordinates.length) {
    map.flyTo({
      center: coordinates[0],
    });

    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates,
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#ffc617",
        "line-width": 3,
      },
    });
  }
};

const Map = () => {
  const classes = useStyles();
  let mapContainer = useRef(null);
  const { coords } = useSelector((state) => state);

  useEffect(() => {
    const mapgl = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      zoom: 11,
      center: [30.30043, 59.919536],
    });

    mapgl.once("data", () => {
      drawRoute(mapgl, coords);
    });

    return () => {
      mapgl.remove();
    };
  }, [coords]);

  return (
    <Grid item xs container direction="column" className={classes.mapZindex}>
      <Grid component="div" item xs ref={mapContainer}>
        {console.log("map render")}
      </Grid>
    </Grid>
  );
};

export default React.memo(Map);
