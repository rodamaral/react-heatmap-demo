import 'leaflet/dist/leaflet.css'
import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import HeatmapLayer from 'react-leaflet-heatmap-layer'
import './Map.styles'

const position = { lat: 51.505, lng: -0.09 }

const MapWrapper = ({ data }: { data: any }) => (
    <Map style={{ width: '100%', height: '100%' }} center={position} zoom={13}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
            <Popup>
                A pretty CSS3 popup.
                <br />
                Easily customizable.
            </Popup>
        </Marker>

        <HeatmapLayer
            fitBoundsOnLoad
            fitBoundsOnUpdate // TODO
            points={data}
            longitudeExtractor={(m: any) => m.longitude}
            latitudeExtractor={(m: any) => m.latitude}
            intensityExtractor={(m: any) => m.quantity}
        />
    </Map>
)

export default MapWrapper
