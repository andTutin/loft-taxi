const layers = ["route", "start", "finish"];
const sources = ["route", "start", "finish"];

export const clearMap = (map) => {
  layers.forEach((layer) => map.removeLayer(layer));
  sources.forEach((source) => map.removeSource(source));
};

export const isMapClear = (map, source) => {
  return map.getSource(source) ? true : false;
};

export const drawRoute = (map, coordinates) => {
  if (coordinates.length) {
    const startDot = coordinates[0];
    const finishDot = coordinates[coordinates.length - 1];

    map.flyTo({
      center: coordinates[0],
      zoom: 15,
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
        "line-width": 4,
      },
    });
    map.addSource("start", {
      type: "geojson",
      data: {
        type: "Point",
        coordinates: startDot,
      },
    });
    map.addSource("finish", {
      type: "geojson",
      data: {
        type: "Point",
        coordinates: finishDot,
      },
    });
    map.addLayer({
      id: "start",
      source: "start",
      type: "circle",
      paint: {
        "circle-radius": 12,
        "circle-color": "#ffc617",
      },
    });
    map.addLayer({
      id: "finish",
      source: "finish",
      type: "circle",
      paint: {
        "circle-radius": 15,
        "circle-color": "green",
      },
    });
  } else {
    map.flyTo({
      center: map.getCenter(),
      zoom: 11,
    });
  }
};
