import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export default function Map() {
  const position = [48.78143, 9.16845];

  return (
    <MapContainer
      center={[40.8054, -74.0241]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/lanasdev/ckva0vonqb1zl14s7xmdeq3dj.html?title=view&access_token=${process.env.MAPBOX_API_key}&zoomwheel=true&fresh=true#1/25.6/12.8`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      <Marker position={position} draggable={true} animate={true}>
        <Popup>Hey ! I live here</Popup>
      </Marker>
    </MapContainer>
  );
}
