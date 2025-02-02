import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS for proper rendering

export default function Map() {
    return (
        <MapContainer
            center={[45.508888, -73.561667]} // Montreal coordinates
            zoom={11}
            style={{ height: '90vh', width: '100%', borderRadius: '8px' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
        </MapContainer>
    );
}

