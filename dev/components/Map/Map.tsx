'use client';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const customMarkerIcon = L.icon({
  iconUrl: '/leaflet/dist/images/marker-icon.png',
  iconRetinaUrl: '/leaflet/dist/images/marker-icon-2x.png',
  shadowUrl: '/leaflet/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

const Map = () => {
  const position: LatLngExpression = [9.94278, 8.89322];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '539px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={customMarkerIcon}>
        <Popup>
          7A, Hara-Hyel House, Dogon Karfe, Jos, Plateau State, Nigeria
        </Popup>
      </Marker>
      <Circle
        center={position}
        pathOptions={{ color: '#50C878', fillColor: '#72FE9F' }}
        radius={200}
      />
    </MapContainer>
  );
};

export default Map;
