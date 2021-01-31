import React from "react";
import Header from "../components/Header";
import Map from "../components/Map";

const MapPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Header />
      <Map />
    </div>
  );
};

export default MapPage;
