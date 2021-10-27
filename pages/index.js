import React from "react";
import dynamic from "next/dynamic";
import Header from "../components/header";

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../components/map"), {
    ssr: false
  });

  return (
    <main>
      <Header></Header>
      <div id="map">
        <MapWithNoSSR />
      </div>
    </main>
  );
}
