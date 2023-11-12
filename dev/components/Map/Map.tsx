'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

const Map = () => {
  const position: LatLngExpression = [9.94278, 8.89322];

  return (
    <MapContainer
      center={position}
      zoom={12}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '539px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          7A, Hara-Hyel House, Dogon Karfe, Jos, Plateau State, Nigeria
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
