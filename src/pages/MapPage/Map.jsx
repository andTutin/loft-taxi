import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5kdHV0aW4iLCJhIjoiY2s4dzRlOXNxMDJnaDNscG13YWpwMHNpMiJ9.jcjb43y3S-SsSPURXdYLiA";

const useStyles = makeStyles((theme) => ({
  mapZindex: {
    zIndex: "100",
  },
}));

const Map = () => {
  const classes = useStyles();
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
  }, []);

  return (
    <Grid item xs container direction="column" className={classes.mapZindex}>
      <Grid component="div" item xs ref={mapContainer}></Grid>
    </Grid>
  );
};

export default React.memo(Map);
